const { Schema, model } = require( 'mongoose' );

//////<<<<<------------------------------------------------``


const categorySchema = Schema(

    {
        
        categoryName : { type : String, required : true, unique : true },

        categoryColor : { type : String, required : true },
        
        userCreatorId : { type : Schema.Types.ObjectId, ref : "User", required : true }

    }

);

//////---------------------------------------------->>>>>

module.exports = model( 'Category', categorySchema );