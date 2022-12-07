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

async function addToList(item) {
    console.log("Adding movie to the list mongodb")
    const uri = config.get("mongoDBURI")
    const client = new MongoClient(uri);
    try {
        await client.connect();
        const doc = await client.db("ItemsList").collection("favs").find({ "email": item.email }).toArray();
        if (doc.length > 0) {
            await client.db("ItemsList").collection("favs").updateOne({ "email": item.email }, { $push: { myFavouritesList: item.myFavouritesList[0] } })
        }
        else {
            await client.db("ItemsList").collection("favs").insertOne(item)
        }
    }
    finally {
        await client.close()
    }
}


async function removeFromList(item) {
    console.log("Removing movie from the list mongodb")
    const uri = config.get("mongoDBURI")
    const client = new MongoClient(uri);
    try {
        await client.connect();
        const doc = await client.db("ItemsList").collection("favs").find({ "email": item.email }).toArray();
        if (doc.length > 0) {
            await client.db("ItemsList").collection("favs").updateOne({ "email": item.email }, { $pull: { myFavouritesList: item.myFavouritesList[0] } })
        }
    }
    finally {
        await client.close()
    }
}


module.exports.getList = getList
module.exports.addToList = addToList
module.exports.removeFromList = removeFromList