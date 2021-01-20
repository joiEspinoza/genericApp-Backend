const { request, response } = require ( 'express' );
const User = require( '../DataBase/Models/userModel' )
const bcryptjs = require( 'bcryptjs' );

//////<<<<<------------------------------------------------``


const register = async ( request, response = response ) =>
{

    try 
    {   
        
        const { userName, email, password } = request.body;


        let user = await User.findOne( { email, userName } );
        if( user )
        {
            return response.status( 400 ).json( { ok : false, msg : "User name or email already exists" } );  
        };
        

        user = new User( request.body );


        const salt = bcryptjs.genSaltSync();
        user.password = bcryptjs.hashSync( password, salt );


        await user.save(); 
        return response.status( 200 ).json( { ok : true, msg : 'Register control', data : request.body  } )
    
    } 
    catch( error ) 
    {
       
        console.log( error );
        return response.status( 500 ).json( { ok : false, msg : 'Please contact the administraitor' } );
    
    };

};


const login = async ( request, response = response ) =>
{

    try 
    {   
        
        const { email, password } = request.body;
        
        return response.status( 200 ).json( { ok : true, msg : 'login control', data : request.body  } )
    
    } 
    catch( error ) 
    {
       
        console.log( error );
        return response.status( 500 ).json( { ok : false, msg : 'Please contact the administraitor' } );
    
    };

};


//////---------------------------------------------->>>>>

module.exports = { login, register };