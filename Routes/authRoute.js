const { Router } = require( 'express' );
const { login, register } = require('../Control/authControl');
const router = Router();
const { check } = require( 'express-validator' );
const { ValidatorMidd } = require( '../Middleware/validadorDatos' );


//////<<<<<------------------------------------------------``


router.post( 
    
    '/register', 
    [
        check( 'userName','User name must be at least 4 characters' ).isLength( { min: 4 } ),
        check( 'email','Email is required' ).isEmail(),
        check( 'password','Password must be at least 6 characters' ).isLength( { min: 6 } ),
        ValidatorMidd
    ], 
    register

);


router.post( 
    
    '/', 
    [
        check( 'email','Email is required' ).isEmail(),
        check( 'password','Password must be at least 6 characters' ).isLength( { min: 6 } ),
        ValidatorMidd
    ], 
    login 

);


//////---------------------------------------------->>>>>


module.exports = router;