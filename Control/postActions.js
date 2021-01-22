const { response } = require( 'express' );
const Post = require( '../DataBase/Models/postModel' );

//////<<<<<------------------------------------------------``


const createPost = async ( request, response = response ) =>
{

    try 
    {

        const { postTitle } = request.body;

        let post = await Post.findOne( { postTitle } );
        if( post )
        {
            return response.status( 400 ).json( { ok : false, msg : 'Post already exist', data : request.body } );
        };

        post = new Post( request.body );

        await post.save();

        return response.status( 200 ).json( { ok : true, msg : 'Post Created succesfuly', data : request.body } );

    } 
    catch( error ) 
    {
        console.log( error );
        return response.status( 500 ).json( { ok : false, msg : 'Please contact the administraitor' } );
    
    };

};



const getPost = async ( request, response = response ) =>
{
    
    try 
    {

        const posts = await Post.find();

        return response.status( 200 ).json( { ok : true, msg : 'Get post action', posts } );

    } 
    catch( error ) 
    {
        console.log( error );
        return response.status( 500 ).json( { ok : false, msg : 'Please contact the administraitor' } );
    
    };

};



const deletePost = async ( request, response = response ) =>
{
    
    try 
    {

        const { _id } = request.body;

        let post = await Post.findOne( { _id } );
        if( !post )
        {
            response.status( 400 ).json( { ok : false, msg : `Post don't exist` } );
        };

        await Post.findByIdAndDelete( { _id } );
        return response.status( 200 ).json( { ok : true, msg : 'Delete post action' } );

    } 
    catch( error ) 
    {
        console.log( error );
        return response.status( 500 ).json( { ok : false, msg : 'Please contact the administraitor' } );
    
    };

};


//////---------------------------------------------->>>>>

module.exports = { createPost, getPost, deletePost };