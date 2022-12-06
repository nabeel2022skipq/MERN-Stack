const { MongoClient, ServerApiVersion, ObjectId } = require('mongodb');
const config = require('config')

async function getList() {
    console.log("Retreiving data from mongodb")
    const uri = config.get("mongoDBURI")
    const client = new MongoClient(uri);
    try {
        await client.connect();
        const result = await client.db("ItemsList").collection("favs").find({}).toArray();
        return result
    }
    finally {
        await client.close()
    }
}




module.exports.getList = getList