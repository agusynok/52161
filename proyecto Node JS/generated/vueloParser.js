// Generated from c:/Users/agusyn.ok/Desktop/SSL/proyecto Node JS/proyecto Node JS/vuelo.g4 by ANTLR 4.13.2
// jshint ignore: start
import antlr4 from 'antlr4';
import vueloListener from './vueloListener.js';
import vueloVisitor from './vueloVisitor.js';

const serializedATN = [4,1,11,72,2,0,7,0,2,1,7,1,2,2,7,2,2,3,7,3,2,4,7,4,
2,5,7,5,2,6,7,6,2,7,7,7,2,8,7,8,2,9,7,9,1,0,4,0,22,8,0,11,0,12,0,23,1,1,
1,1,1,2,1,2,1,2,1,2,1,2,1,2,1,2,3,2,35,8,2,1,2,1,2,1,2,3,2,40,8,2,1,3,1,
3,1,3,1,3,1,3,1,3,1,4,1,4,1,5,1,5,1,6,1,6,1,6,1,6,1,7,1,7,1,7,1,7,1,7,1,
7,3,7,62,8,7,1,8,1,8,1,9,1,9,4,9,68,8,9,11,9,12,9,69,1,9,0,0,10,0,2,4,6,
8,10,12,14,16,18,0,1,1,0,6,8,66,0,21,1,0,0,0,2,25,1,0,0,0,4,27,1,0,0,0,6,
41,1,0,0,0,8,47,1,0,0,0,10,49,1,0,0,0,12,51,1,0,0,0,14,61,1,0,0,0,16,63,
1,0,0,0,18,65,1,0,0,0,20,22,3,2,1,0,21,20,1,0,0,0,22,23,1,0,0,0,23,21,1,
0,0,0,23,24,1,0,0,0,24,1,1,0,0,0,25,26,3,4,2,0,26,3,1,0,0,0,27,28,3,6,3,
0,28,29,3,8,4,0,29,30,5,1,0,0,30,31,3,10,5,0,31,34,3,14,7,0,32,33,5,2,0,
0,33,35,3,16,8,0,34,32,1,0,0,0,34,35,1,0,0,0,35,39,1,0,0,0,36,37,5,2,0,0,
37,38,5,3,0,0,38,40,3,18,9,0,39,36,1,0,0,0,39,40,1,0,0,0,40,5,1,0,0,0,41,
42,5,10,0,0,42,43,5,10,0,0,43,44,5,9,0,0,44,45,5,9,0,0,45,46,5,9,0,0,46,
7,1,0,0,0,47,48,3,12,6,0,48,9,1,0,0,0,49,50,3,12,6,0,50,11,1,0,0,0,51,52,
5,10,0,0,52,53,5,10,0,0,53,54,5,10,0,0,54,13,1,0,0,0,55,56,5,9,0,0,56,57,
5,9,0,0,57,58,5,4,0,0,58,59,5,9,0,0,59,62,5,9,0,0,60,62,5,5,0,0,61,55,1,
0,0,0,61,60,1,0,0,0,62,15,1,0,0,0,63,64,7,0,0,0,64,17,1,0,0,0,65,67,5,10,
0,0,66,68,5,9,0,0,67,66,1,0,0,0,68,69,1,0,0,0,69,67,1,0,0,0,69,70,1,0,0,
0,70,19,1,0,0,0,5,23,34,39,61,69];


const atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

const decisionsToDFA = atn.decisionToState.map( (ds, index) => new antlr4.dfa.DFA(ds, index) );

const sharedContextCache = new antlr4.atn.PredictionContextCache();

export default class vueloParser extends antlr4.Parser {

    static grammarFileName = "vuelo.g4";
    static literalNames = [ null, "'-'", "','", "'Gate:'", "':'", "'NOW'", 
                            "'ON_TIME'", "'DELAYED'", "'CANCELLED'" ];
    static symbolicNames = [ null, null, null, null, null, null, null, null, 
                             null, "DIGITO", "LETRA", "WS" ];
    static ruleNames = [ "prog", "stat", "vuelo", "codigo_vuelo", "aeropuerto_salida", 
                         "aeropuerto_llegada", "aeropuerto", "hora", "estado", 
                         "puerta" ];

    constructor(input) {
        super(input);
        this._interp = new antlr4.atn.ParserATNSimulator(this, atn, decisionsToDFA, sharedContextCache);
        this.ruleNames = vueloParser.ruleNames;
        this.literalNames = vueloParser.literalNames;
        this.symbolicNames = vueloParser.symbolicNames;
    }



	prog() {
	    let localctx = new ProgContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 0, vueloParser.RULE_prog);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 21; 
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        do {
	            this.state = 20;
	            this.stat();
	            this.state = 23; 
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        } while(_la===10);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	stat() {
	    let localctx = new StatContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 2, vueloParser.RULE_stat);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 25;
	        this.vuelo();
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	vuelo() {
	    let localctx = new VueloContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 4, vueloParser.RULE_vuelo);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 27;
	        this.codigo_vuelo();
	        this.state = 28;
	        this.aeropuerto_salida();
	        this.state = 29;
	        this.match(vueloParser.T__0);
	        this.state = 30;
	        this.aeropuerto_llegada();
	        this.state = 31;
	        this.hora();
	        this.state = 34;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,1,this._ctx);
	        if(la_===1) {
	            this.state = 32;
	            this.match(vueloParser.T__1);
	            this.state = 33;
	            this.estado();

	        }
	        this.state = 39;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===2) {
	            this.state = 36;
	            this.match(vueloParser.T__1);
	            this.state = 37;
	            this.match(vueloParser.T__2);
	            this.state = 38;
	            this.puerta();
	        }

	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	codigo_vuelo() {
	    let localctx = new Codigo_vueloContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 6, vueloParser.RULE_codigo_vuelo);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 41;
	        this.match(vueloParser.LETRA);
	        this.state = 42;
	        this.match(vueloParser.LETRA);
	        this.state = 43;
	        this.match(vueloParser.DIGITO);
	        this.state = 44;
	        this.match(vueloParser.DIGITO);
	        this.state = 45;
	        this.match(vueloParser.DIGITO);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	aeropuerto_salida() {
	    let localctx = new Aeropuerto_salidaContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 8, vueloParser.RULE_aeropuerto_salida);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 47;
	        this.aeropuerto();
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	aeropuerto_llegada() {
	    let localctx = new Aeropuerto_llegadaContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 10, vueloParser.RULE_aeropuerto_llegada);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 49;
	        this.aeropuerto();
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	aeropuerto() {
	    let localctx = new AeropuertoContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 12, vueloParser.RULE_aeropuerto);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 51;
	        this.match(vueloParser.LETRA);
	        this.state = 52;
	        this.match(vueloParser.LETRA);
	        this.state = 53;
	        this.match(vueloParser.LETRA);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	hora() {
	    let localctx = new HoraContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 14, vueloParser.RULE_hora);
	    try {
	        this.state = 61;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 9:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 55;
	            this.match(vueloParser.DIGITO);
	            this.state = 56;
	            this.match(vueloParser.DIGITO);
	            this.state = 57;
	            this.match(vueloParser.T__3);
	            this.state = 58;
	            this.match(vueloParser.DIGITO);
	            this.state = 59;
	            this.match(vueloParser.DIGITO);
	            break;
	        case 5:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 60;
	            this.match(vueloParser.T__4);
	            break;
	        default:
	            throw new antlr4.error.NoViableAltException(this);
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	estado() {
	    let localctx = new EstadoContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 16, vueloParser.RULE_estado);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 63;
	        _la = this._input.LA(1);
	        if(!((((_la) & ~0x1f) === 0 && ((1 << _la) & 448) !== 0))) {
	        this._errHandler.recoverInline(this);
	        }
	        else {
	        	this._errHandler.reportMatch(this);
	            this.consume();
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	puerta() {
	    let localctx = new PuertaContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 18, vueloParser.RULE_puerta);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 65;
	        this.match(vueloParser.LETRA);
	        this.state = 67; 
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        do {
	            this.state = 66;
	            this.match(vueloParser.DIGITO);
	            this.state = 69; 
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        } while(_la===9);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}


}

vueloParser.EOF = antlr4.Token.EOF;
vueloParser.T__0 = 1;
vueloParser.T__1 = 2;
vueloParser.T__2 = 3;
vueloParser.T__3 = 4;
vueloParser.T__4 = 5;
vueloParser.T__5 = 6;
vueloParser.T__6 = 7;
vueloParser.T__7 = 8;
vueloParser.DIGITO = 9;
vueloParser.LETRA = 10;
vueloParser.WS = 11;

vueloParser.RULE_prog = 0;
vueloParser.RULE_stat = 1;
vueloParser.RULE_vuelo = 2;
vueloParser.RULE_codigo_vuelo = 3;
vueloParser.RULE_aeropuerto_salida = 4;
vueloParser.RULE_aeropuerto_llegada = 5;
vueloParser.RULE_aeropuerto = 6;
vueloParser.RULE_hora = 7;
vueloParser.RULE_estado = 8;
vueloParser.RULE_puerta = 9;

class ProgContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = vueloParser.RULE_prog;
    }

	stat = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(StatContext);
	    } else {
	        return this.getTypedRuleContext(StatContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof vueloListener ) {
	        listener.enterProg(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof vueloListener ) {
	        listener.exitProg(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof vueloVisitor ) {
	        return visitor.visitProg(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class StatContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = vueloParser.RULE_stat;
    }

	vuelo() {
	    return this.getTypedRuleContext(VueloContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof vueloListener ) {
	        listener.enterStat(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof vueloListener ) {
	        listener.exitStat(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof vueloVisitor ) {
	        return visitor.visitStat(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class VueloContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = vueloParser.RULE_vuelo;
    }

	codigo_vuelo() {
	    return this.getTypedRuleContext(Codigo_vueloContext,0);
	};

	aeropuerto_salida() {
	    return this.getTypedRuleContext(Aeropuerto_salidaContext,0);
	};

	aeropuerto_llegada() {
	    return this.getTypedRuleContext(Aeropuerto_llegadaContext,0);
	};

	hora() {
	    return this.getTypedRuleContext(HoraContext,0);
	};

	estado() {
	    return this.getTypedRuleContext(EstadoContext,0);
	};

	puerta() {
	    return this.getTypedRuleContext(PuertaContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof vueloListener ) {
	        listener.enterVuelo(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof vueloListener ) {
	        listener.exitVuelo(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof vueloVisitor ) {
	        return visitor.visitVuelo(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class Codigo_vueloContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = vueloParser.RULE_codigo_vuelo;
    }

	LETRA = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(vueloParser.LETRA);
	    } else {
	        return this.getToken(vueloParser.LETRA, i);
	    }
	};


	DIGITO = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(vueloParser.DIGITO);
	    } else {
	        return this.getToken(vueloParser.DIGITO, i);
	    }
	};


	enterRule(listener) {
	    if(listener instanceof vueloListener ) {
	        listener.enterCodigo_vuelo(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof vueloListener ) {
	        listener.exitCodigo_vuelo(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof vueloVisitor ) {
	        return visitor.visitCodigo_vuelo(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class Aeropuerto_salidaContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = vueloParser.RULE_aeropuerto_salida;
    }

	aeropuerto() {
	    return this.getTypedRuleContext(AeropuertoContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof vueloListener ) {
	        listener.enterAeropuerto_salida(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof vueloListener ) {
	        listener.exitAeropuerto_salida(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof vueloVisitor ) {
	        return visitor.visitAeropuerto_salida(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class Aeropuerto_llegadaContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = vueloParser.RULE_aeropuerto_llegada;
    }

	aeropuerto() {
	    return this.getTypedRuleContext(AeropuertoContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof vueloListener ) {
	        listener.enterAeropuerto_llegada(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof vueloListener ) {
	        listener.exitAeropuerto_llegada(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof vueloVisitor ) {
	        return visitor.visitAeropuerto_llegada(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class AeropuertoContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = vueloParser.RULE_aeropuerto;
    }

	LETRA = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(vueloParser.LETRA);
	    } else {
	        return this.getToken(vueloParser.LETRA, i);
	    }
	};


	enterRule(listener) {
	    if(listener instanceof vueloListener ) {
	        listener.enterAeropuerto(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof vueloListener ) {
	        listener.exitAeropuerto(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof vueloVisitor ) {
	        return visitor.visitAeropuerto(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class HoraContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = vueloParser.RULE_hora;
    }

	DIGITO = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(vueloParser.DIGITO);
	    } else {
	        return this.getToken(vueloParser.DIGITO, i);
	    }
	};


	enterRule(listener) {
	    if(listener instanceof vueloListener ) {
	        listener.enterHora(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof vueloListener ) {
	        listener.exitHora(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof vueloVisitor ) {
	        return visitor.visitHora(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class EstadoContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = vueloParser.RULE_estado;
    }


	enterRule(listener) {
	    if(listener instanceof vueloListener ) {
	        listener.enterEstado(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof vueloListener ) {
	        listener.exitEstado(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof vueloVisitor ) {
	        return visitor.visitEstado(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class PuertaContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = vueloParser.RULE_puerta;
    }

	LETRA() {
	    return this.getToken(vueloParser.LETRA, 0);
	};

	DIGITO = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(vueloParser.DIGITO);
	    } else {
	        return this.getToken(vueloParser.DIGITO, i);
	    }
	};


	enterRule(listener) {
	    if(listener instanceof vueloListener ) {
	        listener.enterPuerta(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof vueloListener ) {
	        listener.exitPuerta(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof vueloVisitor ) {
	        return visitor.visitPuerta(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}




vueloParser.ProgContext = ProgContext; 
vueloParser.StatContext = StatContext; 
vueloParser.VueloContext = VueloContext; 
vueloParser.Codigo_vueloContext = Codigo_vueloContext; 
vueloParser.Aeropuerto_salidaContext = Aeropuerto_salidaContext; 
vueloParser.Aeropuerto_llegadaContext = Aeropuerto_llegadaContext; 
vueloParser.AeropuertoContext = AeropuertoContext; 
vueloParser.HoraContext = HoraContext; 
vueloParser.EstadoContext = EstadoContext; 
vueloParser.PuertaContext = PuertaContext; 
