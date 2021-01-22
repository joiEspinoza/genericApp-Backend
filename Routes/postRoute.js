const { Router } = require( 'express' );
const router = Router();
const { createPost, getPost, deletePost } = require('../Control/postActions');
const { check } = require( 'express-validator' );
const { ValidatorMidd } = require( '../Middleware/validadorDatos' );


//////<<<<<------------------------------------------------``


router.post( 
    
    '/', 
    [
        check( 'postCategory','Category is required' ).notEmpty(),
        check( 'postTitle','Post title must be at least 3 characters' ).isLength( { min: 3 } ),
        check( 'postBody','Post body is required' ).notEmpty(),
        check( 'postLike','Post like is required' ).notEmpty(),
        check( 'userCreatorId','User creator id is required' ).notEmpty(),
        ValidatorMidd
    ], 
    createPost

);


router.get( '/', [], getPost )


router.delete( '/', [], deletePost );
    
    
//////---------------------------------------------->>>>>


module.exports = router;