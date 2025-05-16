// Generated from c:/Users/agusyn.ok/Desktop/SSL/proyecto Node JS/proyecto Node JS/vuelo.g4 by ANTLR 4.13.2
// jshint ignore: start
import antlr4 from 'antlr4';


const serializedATN = [4,0,11,76,6,-1,2,0,7,0,2,1,7,1,2,2,7,2,2,3,7,3,2,
4,7,4,2,5,7,5,2,6,7,6,2,7,7,7,2,8,7,8,2,9,7,9,2,10,7,10,1,0,1,0,1,1,1,1,
1,2,1,2,1,2,1,2,1,2,1,2,1,3,1,3,1,4,1,4,1,4,1,4,1,5,1,5,1,5,1,5,1,5,1,5,
1,5,1,5,1,6,1,6,1,6,1,6,1,6,1,6,1,6,1,6,1,7,1,7,1,7,1,7,1,7,1,7,1,7,1,7,
1,7,1,7,1,8,1,8,1,9,1,9,1,10,4,10,71,8,10,11,10,12,10,72,1,10,1,10,0,0,11,
1,1,3,2,5,3,7,4,9,5,11,6,13,7,15,8,17,9,19,10,21,11,1,0,3,1,0,48,57,1,0,
65,90,3,0,9,10,13,13,32,32,76,0,1,1,0,0,0,0,3,1,0,0,0,0,5,1,0,0,0,0,7,1,
0,0,0,0,9,1,0,0,0,0,11,1,0,0,0,0,13,1,0,0,0,0,15,1,0,0,0,0,17,1,0,0,0,0,
19,1,0,0,0,0,21,1,0,0,0,1,23,1,0,0,0,3,25,1,0,0,0,5,27,1,0,0,0,7,33,1,0,
0,0,9,35,1,0,0,0,11,39,1,0,0,0,13,47,1,0,0,0,15,55,1,0,0,0,17,65,1,0,0,0,
19,67,1,0,0,0,21,70,1,0,0,0,23,24,5,45,0,0,24,2,1,0,0,0,25,26,5,44,0,0,26,
4,1,0,0,0,27,28,5,71,0,0,28,29,5,97,0,0,29,30,5,116,0,0,30,31,5,101,0,0,
31,32,5,58,0,0,32,6,1,0,0,0,33,34,5,58,0,0,34,8,1,0,0,0,35,36,5,78,0,0,36,
37,5,79,0,0,37,38,5,87,0,0,38,10,1,0,0,0,39,40,5,79,0,0,40,41,5,78,0,0,41,
42,5,95,0,0,42,43,5,84,0,0,43,44,5,73,0,0,44,45,5,77,0,0,45,46,5,69,0,0,
46,12,1,0,0,0,47,48,5,68,0,0,48,49,5,69,0,0,49,50,5,76,0,0,50,51,5,65,0,
0,51,52,5,89,0,0,52,53,5,69,0,0,53,54,5,68,0,0,54,14,1,0,0,0,55,56,5,67,
0,0,56,57,5,65,0,0,57,58,5,78,0,0,58,59,5,67,0,0,59,60,5,69,0,0,60,61,5,
76,0,0,61,62,5,76,0,0,62,63,5,69,0,0,63,64,5,68,0,0,64,16,1,0,0,0,65,66,
7,0,0,0,66,18,1,0,0,0,67,68,7,1,0,0,68,20,1,0,0,0,69,71,7,2,0,0,70,69,1,
0,0,0,71,72,1,0,0,0,72,70,1,0,0,0,72,73,1,0,0,0,73,74,1,0,0,0,74,75,6,10,
0,0,75,22,1,0,0,0,2,0,72,1,6,0,0];


const atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

const decisionsToDFA = atn.decisionToState.map( (ds, index) => new antlr4.dfa.DFA(ds, index) );

export default class vueloLexer extends antlr4.Lexer {

    static grammarFileName = "vuelo.g4";
    static channelNames = [ "DEFAULT_TOKEN_CHANNEL", "HIDDEN" ];
	static modeNames = [ "DEFAULT_MODE" ];
	static literalNames = [ null, "'-'", "','", "'Gate:'", "':'", "'NOW'", 
                         "'ON_TIME'", "'DELAYED'", "'CANCELLED'" ];
	static symbolicNames = [ null, null, null, null, null, null, null, null, 
                          null, "DIGITO", "LETRA", "WS" ];
	static ruleNames = [ "T__0", "T__1", "T__2", "T__3", "T__4", "T__5", "T__6", 
                      "T__7", "DIGITO", "LETRA", "WS" ];

    constructor(input) {
        super(input)
        this._interp = new antlr4.atn.LexerATNSimulator(this, atn, decisionsToDFA, new antlr4.atn.PredictionContextCache());
    }
}

vueloLexer.EOF = antlr4.Token.EOF;
vueloLexer.T__0 = 1;
vueloLexer.T__1 = 2;
vueloLexer.T__2 = 3;
vueloLexer.T__3 = 4;
vueloLexer.T__4 = 5;
vueloLexer.T__5 = 6;
vueloLexer.T__6 = 7;
vueloLexer.T__7 = 8;
vueloLexer.DIGITO = 9;
vueloLexer.LETRA = 10;
vueloLexer.WS = 11;



