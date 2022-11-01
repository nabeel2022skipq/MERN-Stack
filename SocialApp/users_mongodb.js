const { MongoClient, ServerApiVersion, ObjectId } = require('mongodb');
const config = require('config')

async function getUsers() {
    console.log("Retreiving data from mongodb")
    const uri = config.get("mongoDBURL")
    const client = new MongoClient(uri);
    try {
        await client.connect();
        const result = await client.db("ItemsList").collection("users").find({}).toArray();
        return result
    }
    finally {
        await client.close()
    }
}
async function findUser(user) {
    console.log("Finding User")
    const uri = config.get("mongoDBURL");
    const client = new MongoClient(uri);
    try {
        await client.connect();
        let isalreadyPresent = false;
        const doc = await client.db("ItemsList").collection("users").find({ "email": user["email"] }).toArray();
        if (doc.length > 0) {
            isalreadyPresent = true
            console.log("User Registered.")
            return doc[0]
        }
        else {
            console.log("User not registered")
        }
    }
    finally {
        await client.close()
    }
}

async function findUserByID(id) {
    console.log("Searching User by ID in database")
    const uri = config.get("mongoDBURL");
    const client = new MongoClient(uri);
    try {
        await client.connect();
        let isalreadyPresent = false;
        const doc = await client.db("ItemsList").collection("users").find({ "_id": ObjectId(id) }).toArray();
        console.log(doc)
        if (doc.length > 0) {
            isalreadyPresent = true
            console.log("User Registered.")
            return doc[0]
        }
        else {
            console.log("User not registered")
        }
    }
    finally {
        await client.close()
    }
}

async function registerUser(newuser) {
    console.log("Registering New User")
    const uri = config.get("mongoDBURL");
    const client = new MongoClient(uri);
    try {
        await client.connect();
        await client.db("ItemsList").collection("users").insertOne(newuser);
        let result = findUser(newuser)
        return result
    }
    finally {
        await client.close()
    }
}

module.exports.registerUser = registerUser
module.exports.findUser = findUser
module.exports.getUsers = getUsers
module.exports.findUserByID = findUserByID