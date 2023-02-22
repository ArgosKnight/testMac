const { MongoClient } = require("mongodb");
 
// Replace the following with your Atlas connection string                                                                                                                                        
const url = "mongodb+srv://test.p3fkywo.mongodb.net/myFirstDatabas";
const client = new MongoClient(url);

async function run() {
    try {
        await client.connect();
        console.log("Connected correctly to server");

    } catch (err) {
        console.error(err);
    }
    finally {
        await client.close();
    }
}

run().catch(console.dir);