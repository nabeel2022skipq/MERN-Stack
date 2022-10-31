
const { MongoClient, ServerApiVersion } = require('mongodb');

async function getdb() {
    console.log("Retreiving data from mongodb")
    const uri = "mongodb+srv://nabeelahmad:nabeelahmad123@cluster0.8fg5bt6.mongodb.net/?retryWrites=true&w=majority";
    const client = new MongoClient(uri);
    try {
        await client.connect();
        const result = await client.db("ItemsList").collection("products").find({}).toArray();
        return result
    }
    finally {
        await client.close()
    }
}

async function createdb(product) {
    console.log("Inserting Item to the Database")
    const uri = "mongodb+srv://nabeelahmad:nabeelahmad123@cluster0.8fg5bt6.mongodb.net/?retryWrites=true&w=majority";
    const client = new MongoClient(uri);
    try {
        await client.connect();
        let isalreadyPresent = false;
        const doc = await client.db("ItemsList").collection("products").find({ "product": product["product"] }).toArray();
        if (doc.length > 0) {
            isalreadyPresent = true
            console.log("Item already exist in the database")
            return doc[0]
        }
        else {
            await client.db("ItemsList").collection("products").insertOne(product);
            return isalreadyPresent
        }
    }
    finally {
        await client.close()
    }
}

async function deletedb(product) {
    console.log("Deleting Item from the Database")
    const uri = "mongodb+srv://nabeelahmad:nabeelahmad123@cluster0.8fg5bt6.mongodb.net/?retryWrites=true&w=majority";
    const client = new MongoClient(uri);
    try {
        await client.connect();
        let isPresent = false;
        const filterdocs = await client.db("ItemsList").collection("products").find({ "product": product["product"] }).toArray();
        if (filterdocs.length > 0) {
            console.log("Present in database")
            isPresent = true
            await client.db("ItemsList").collection("products").deleteOne({ "product": product["product"] })
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

async function updatedb(product) {
    console.log("Updating Item in the Database")
    const uri = "mongodb+srv://nabeelahmad:nabeelahmad123@cluster0.8fg5bt6.mongodb.net/?retryWrites=true&w=majority";
    const client = new MongoClient(uri);
    try {
        await client.connect();
        let isPresent = false;
        const filterdocs = await client.db("ItemsList").collection("products").find({ "product": product["product"] }).toArray();
        if (filterdocs.length > 0) {
            isPresent = true
            await client.db("ItemsList").collection("products").updateOne({ "product": product['product'] }, { $set: { "product": product['updateproduct'] } })
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