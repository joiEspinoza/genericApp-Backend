const { request, response } = require ( 'express' );
const Category = require( '../DataBase/Models/categoryModel' );


//////<<<<<------------------------------------------------``


const createCategory = async ( request, response = response ) =>
{

    try 
    {   
        
        const { categoryName } = request.body;

       
        let category = await Category.findOne( { categoryName } );
        if( category )
        {
            return response.status( 400 ).json( { ok : false, msg : "Category already exists" } );  
        };


        category = new Category( request.body );
        

        await category.save();
       

        return response.status( 200 ).json( { ok : true, msg : 'Create category control', data : request.body  } )
    
    } 
    catch( error ) 
    {
       
        console.log( error );
        return response.status( 500 ).json( { ok : false, msg : 'Please contact the administraitor' } );
    
    };

};


const getCategories = async ( request, response = response ) =>
{

    try 
    {
        const categories = await Category.find().populate( "userCreatorId", ( "_id","userName" ) );

        return response.status( 200 ).json( { ok : true, msg : "Get Categories", categories } ); 
    } 
    catch( error ) 
    {

        console.log( error );
        return response.status( 500 ).json( { ok : false, msg : 'Please contact the administraitor' } );
    
    };

};


const deleteCategory = async ( request, response = response ) =>
{

    try 
    {   
        
        return response.status( 200 ).json( { ok : true, msg : 'Delete category control', data : request.body  } )
    
    } 
    catch( error ) 
    {
       
        console.log( error );
        return response.status( 500 ).json( { ok : false, msg : 'Please contact the administraitor' } );
    
    };

};


//////---------------------------------------------->>>>>


module.exports = { createCategory, getCategories, deleteCategory };