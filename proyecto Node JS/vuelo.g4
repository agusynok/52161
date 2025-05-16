grammar vuelo;

prog: stat+;

stat: vuelo ;

vuelo: codigo_vuelo aeropuerto_salida '-' aeropuerto_llegada hora (',' estado)? (',' 'Gate:' puerta)? ;

codigo_vuelo: LETRA LETRA DIGITO DIGITO DIGITO ;

aeropuerto_salida: aeropuerto ;
aeropuerto_llegada: aeropuerto ;

aeropuerto: LETRA LETRA LETRA ;

hora: DIGITO DIGITO ':' DIGITO DIGITO | 'NOW' ;

estado: 'ON_TIME' | 'DELAYED' | 'CANCELLED' ;

puerta: LETRA DIGITO+ ;

// TOKENS
DIGITO: [0-9] ;
LETRA: [A-Z] ;
WS: [ \t\r\n]+ -> skip ;
