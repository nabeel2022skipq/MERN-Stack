const { MongoClient, ServerApiVersion, ObjectId } = require('mongodb');
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
    console.log(`object id or id ${oldpost["id"]}`)
    console.log("Deleting Item from the Database")
    const uri = config.get('mongoDBURI');
    const client = new MongoClient(uri);
    try {
        await client.connect();
        const filterdocs = await client.db("PostsList").collection("posts").find({ "_id": ObjectId(oldpost["id"]) }).toArray();
        if (filterdocs.length > 0) {
            console.log("Present in database")
            await client.db("PostsList").collection("posts").deleteOne({ "_id": ObjectId(oldpost["id"]) })
        }
        else {
            console.log("Item not exist in database")
        }
    }
    finally {
        await client.close()
    }
}

async function updatedb(post) {
    console.log("Updating Item in the Database")
    const uri = config.get('mongoDBURI');;
    const client = new MongoClient(uri);
    try {
        await client.connect();
        let isPresent = false;
        const filterdocs = await client.db("PostsList").collection("posts").find({ _id: ObjectId(post["id"]) }).toArray();
        if (filterdocs.length > 0) {
            isPresent = true
            await client.db("PostsList").collection("posts").updateOne({ "_id": ObjectId(post["id"]) }, { $set: { "title": post['updateTitle'], "description": post["updateDescription"] } }, { upsert: true })
            return isPresent
        }
        else {
            console.log("Item not exist in database")
            return isPresent
        }
    }
    finally {
        await client.close()
    }
}



module.exports.getdb = getdb
module.exports.createdb = createdb
module.exports.deletedb = deletedb
module.exports.updatedb = updatedb