const { MongoClient, ServerApiVersion } = require('mongodb');
const config = require('config')

async function getdb() {
    console.log("Retreiving data from mongodb")
    const uri = config.get('mongoDBURI');
    const client = new MongoClient(uri);
    try {
        await client.connect();
        const result = await client.db("PostsList").collection("posts").find({}).toArray();
        return result
    }
    finally {
        await client.close()
    }
}

async function createdb(newpost) {
    console.log("Inserting Post to the Database")
    const uri = config.get('mongoDBURI');
    const client = new MongoClient(uri);
    try {
        await client.connect();
        await client.db("PostsList").collection("posts").insertOne(newpost);
    }
    finally {
        await client.close()
    }
}

async function deletedb(oldpost) {
    console.log("Deleting Item from the Database")
    const uri = config.get('mongoDBURI');
    const client = new MongoClient(uri);
    try {
        await client.connect();
        const filterdocs = await client.db("PostsList").collection("posts").find({ "title": oldpost["title"], "description": oldpost["description"] }).toArray();
        if (filterdocs.length > 0) {
            console.log("Present in database")
            await client.db("PostsList").collection("posts").deleteOne({ "title": oldpost["title"], "description": oldpost["description"] })
        }
        else {
            console.log("Item not exist in database")
        }
    }
    finally {
        await client.close()
    }
}

// async function updatedb(product) {
//     console.log("Updating Item in the Database")
//     const uri = "mongodb+srv://nabeelahmad:nabeelahmad123@cluster0.8fg5bt6.mongodb.net/?retryWrites=true&w=majority";
//     const client = new MongoClient(uri);
//     try {
//         await client.connect();
//         let isPresent = false;
//         const filterdocs = await client.db("ItemsList").collection("products").find({ "product": product["product"] }).toArray();
//         if (filterdocs.length > 0) {
//             isPresent = true
//             await client.db("ItemsList").collection("products").updateOne({ "product": product['product'] }, { $set: { "product": product['updateproduct'] } })
//             return isPresent
//         }
//         else {
//             console.log("Item not exist in database")
//             return isPresent
//         }
//     }
//     finally {
//         await client.close()
//     }
// }



module.exports.getdb = getdb
module.exports.createdb = createdb
module.exports.deletedb = deletedb
// module.exports.updatedb = updatedb