import vueloLexer from "./generated/vueloLexer.js";
import vueloParser from "./generated/vueloParser.js";
import CustomvueloVisitor from "./CustomvueloVisitor.js"; // Importamos el Visitor
import antlr4, { CharStreams, CommonTokenStream } from "antlr4";
import readline from 'readline';
import fs from 'fs';

async function main() {
    let input;

    try {
        input = fs.readFileSync('input.txt', 'utf8');
    } catch (err) {
        input = await leerCadena();
        console.log(input);
    }

    const inputStream = CharStreams.fromString(input);
    const lexer = new vueloLexer(inputStream);

    // Recolector de errores léxicos
    const lexingErrors = [];
    lexer.removeErrorListeners();
    lexer.addErrorListener({
        syntaxError(recognizer, offendingSymbol, line, column, msg) {
            lexingErrors.push({ line, column, msg });
        }
    });

    const tokenStream = new CommonTokenStream(lexer);
    tokenStream.fill();

    // Si hay errores léxicos, mostrarlos y salir
    if (lexingErrors.length > 0) {
        console.error("❌ Errores léxicos encontrados:\n");
        lexingErrors.forEach(err => {
            console.error(`→ Línea ${err.line}, Columna ${err.column}: ${err.msg}`);
        });
        guardarErroresEnArchivo(lexingErrors, 'léxicos');
        return;
    }

    // Mostrar tabla de símbolos si no hubo errores léxicos
    console.log("\n✅ Tabla de símbolos :");
    console.table(
        tokenStream.tokens
            .filter(token => token.type !== -1)
            .map(token => ({
                Tipo: vueloLexer.symbolicNames[token.type],
                Texto: token.text,
                Línea: token.line,
                Columna: token.column
            }))
    );

    const parser = new vueloParser(tokenStream);

    // Recolector de errores sintácticos
    const parsingErrors = [];
    parser.removeErrorListeners();
    parser.addErrorListener({
        syntaxError(recognizer, offendingSymbol, line, column, msg) {
            parsingErrors.push({ line, column, msg });
        }
    });

    const tree = parser.prog();

    if (parsingErrors.length > 0) {
        console.error("\n❌ Errores sintácticos encontrados:\n");
        parsingErrors.forEach(err => {
            console.error(`→ Línea ${err.line}, Columna ${err.column}: ${err.msg}`);
        });
        guardarErroresEnArchivo(parsingErrors, 'sintácticos');
        return;
    }

    console.log("\n✅ Entrada válida.");
    const cadena_tree = tree.toStringTree(parser.ruleNames);
    console.log(`🌳 Árbol de derivación:\n${cadena_tree}`);

    // Guardar árbol de derivación en archivo
    fs.writeFileSync('tree.txt', cadena_tree);
    console.log("\n💾 Árbol de derivación guardado en 'tree.txt'");

    // ========== USO DEL VISITOR ==========
    const visitor = new CustomvueloVisitor();
    const vueloData = visitor.visit(tree);

    // Mostrar traducción a JavaScript
    console.log("\n🛫 Traducción a JavaScript:");
    console.log("const flight = {");
    console.log(`  code: "${vueloData.code}",`);
    console.log(`  from: "${vueloData.from}",`);
    console.log(`  to: "${vueloData.to}",`);
    console.log(`  time: "${vueloData.time}",`);
    console.log(`  status: "${vueloData.status}",`);
    console.log(`  gate: "${vueloData.gate}",`);
    console.log("};");

    // Guardar el objeto en un archivo JSON
    fs.writeFileSync('flight_data.json', JSON.stringify(vueloData, null, 2));
    console.log("\n💾 Datos del vuelo guardados en 'flight_data.json'");
}

// Leer desde consola si no hay archivo input.txt
function leerCadena() {
    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    });

    return new Promise(resolve => {
        rl.question("Ingrese una cadena: ", (answer) => {
            rl.close();
            resolve(answer);
        });
    });
}

// Guardar errores en archivo de log
function guardarErroresEnArchivo(errores, tipo) {
    const contenido = errores.map(err =>
        `→ Línea ${err.line}, Columna ${err.column}: ${err.msg}`
    ).join('\n');

    fs.writeFileSync('errores.log', `Errores ${tipo}:\n\n${contenido}`);
    console.log(`\n📄 Los errores ${tipo} también se guardaron en 'errores.log'`);
}

// Ejecuta la función principal
main();

