const { Router } = require( 'express' );
const router = Router();
const { check } = require( 'express-validator' );
const { createCategory, deleteCategory, getCategories } = require('../Control/categoryControl');
const { ValidatorMidd } = require( '../Middleware/validadorDatos' );


//////<<<<<------------------------------------------------``


router.post( 
    
    '/', 
    [
        check( 'categoryName','Category name must be at least 4 characters' ).isLength( { min: 4 } ),
        check( 'categoryColor','Color is required' ).notEmpty(),
        check( 'userCreatorId','User creator id is required' ).notEmpty(),
        ValidatorMidd
    ], 
    createCategory

);


router.get( '/', [], getCategories )


router.delete( '/', [], deleteCategory );
    
    
//////---------------------------------------------->>>>>


module.exports = router;