const express = require( 'express' );
const cors = require( 'cors' );
const { connDB } = require('./DataBase/dataBaseConnection');
require( 'dotenv' ).config()

//////<<<<<------------------------------------------------``

const app = express();

app.use( express.json() );

app.use( cors() );

connDB();

///////////////////////////// LISTEN ///////////////////////////////

let PORT;

!process.env.PORT ? PORT = 4030 : PORT = process.env.PORT;


app.listen( PORT, () => 
{ console.log( `Servidor corriendo ${ PORT }` ) } );

/////////////////////////////////////////////////////////////////////


//------------------------------|| Rutas ||-------------------------------//


app.use( express.static( './public' ) );

app.use( "/api/auth", require( './Routes/authRoute' ) );