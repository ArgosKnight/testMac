import { MongoClient } from "mongodb"

// Replace the following with your Atlas connection string                                                                                                                                        
const url = "mongodb+srv://argos:skatelife1995@test.p3fkywo.mongodb.net/myFirstDatabase";
const client = new MongoClient(url);

async function run() {
    try {
        await client.connect();
        console.log("Connected correctly to server");

        client.db()

    } catch (err) {
        console.error(err);
    }
    finally {
        await client.close();
    }
}

run().catch(console.dir);