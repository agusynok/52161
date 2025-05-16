import vueloVisitor from "./generated/vueloVisitor.js";

export default class CustomvueloVisitor extends vueloVisitor {
  visitProg(ctx) {
    // Solo tomamos el primer vuelo (stat)
    return this.visit(ctx.stat(0));
  }

  visitStat(ctx) {
    return this.visit(ctx.vuelo());
  }

  visitVuelo(ctx) {
    return {
      code: ctx.codigo_vuelo().getText(),
      from: ctx.aeropuerto_salida().getText(),
      to: ctx.aeropuerto_llegada().getText(),
      time: ctx.hora().getText(),
      status: ctx.estado() ? ctx.estado().getText() : "UNSPECIFIED",
      gate: ctx.puerta() ? ctx.puerta().getText() : "UNSPECIFIED",
    };
  }
}

