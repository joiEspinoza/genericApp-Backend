const { Schema, model } = require( 'mongoose' );

//////<<<<<------------------------------------------------``


const PostSchema = Schema(

    {

        postCategory : { type : String, required : true },

        postTitle : { type : String, required : true, unique : true },

        postBody : { type : String, required : true },

        postLike : { type : Number, required : true },
        
        userCreatorId : { type : Schema.Types.ObjectId, ref : "User", required : true }

    }

);

//////---------------------------------------------->>>>>

module.exports = model( 'Post', PostSchema );