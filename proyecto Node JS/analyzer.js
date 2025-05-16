const antlr4 = require('antlr4');
const fs = require('fs');
const vueloLexer = require('./generated/vueloLexer').vueloLexer;
const vueloParser = require('./generated/vueloParser').vueloParser;

// Clase personalizada para manejar errores léxicos/sintácticos
class ErrorListener extends antlr4.error.ErrorListener {
    syntaxError(recognizer, offendingSymbol, line, column, msg, e) {
        console.error(`ERROR (Línea ${line}, Columna ${column}): ${msg}`);
        process.exit(1); // Termina el proceso en caso de error
    }
}

// Función principal
function analyze(input) {
    const chars = new antlr4.InputStream(input);
    const lexer = new vueloLexer(chars);

    // Reportar tokens reconocidos
    const tokens = new antlr4.CommonTokenStream(lexer);
    tokens.fill();
    console.log("=== TOKENS RECONOCIDOS ===");
    for (const token of tokens.tokens) {
        if (token.type !== -1) { // Ignora el token EOF
            console.log(`Token: ${token.text} (Tipo: ${token.type}, Línea: ${token.line}, Columna: ${token.column})`);
        }
    }

    // Configurar el Parser con manejo de errores
    const parser = new vueloParser(tokens);
    parser.removeErrorListeners(); // Elimina listeners por defecto
    parser.addErrorListener(new ErrorListener()); // Añade nuestro listener personalizado

    // Parsear la entrada (regla inicial: 'prog')
    const tree = parser.prog();
    console.log("\n=== ÁRBOL SINTÁCTICO ===");
    console.log(tree.toStringTree(parser.ruleNames));

    return tree;
}

// Leer el archivo de entrada
const input = fs.readFileSync('input.txt', 'utf-8');
analyze(input);