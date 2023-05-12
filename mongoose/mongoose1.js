/*
the native mongodb driver only does the connection for us.
but mongoose offer many commonly feature like data validation, query building.

each schema maps to a collection defines the shape of documents
within the collection

it is pass to a model, a model is a constructure it create new documents.
documents created the same model constructure follow the same schema.
*/
const mongoose=require("mongoose")
//initial or default connection
mongoose.connect('mongodb://localhost:27017/test',
{useNewUrlParser:true,useUnifiedTopology:true}
)

//
const Cat=mongoose.model("Cat",{name:String}
    /*   create a new collection
    it create plural collections
    the model name is Cat, collection name is Cats
    */
)

