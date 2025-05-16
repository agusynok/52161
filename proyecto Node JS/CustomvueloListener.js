export class CustomvueloListener {
    enterEveryRule(ctx) {
        console.log("Entrando a regla:", ctx.constructor.name);
    }
}
