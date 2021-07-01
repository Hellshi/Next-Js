import { MongoClient } from "mongodb";
require("dotenv").config();

async function handler(req, res) {
  if (req.method === "POST") {
    const data = req.body;
    const client = await MongoClient.connect(
      `mongodb+srv://hellem:${process.env.DB_PASS}@cluster0.dimwp.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`
    );
    const db = client.db();
    const meetUpsCollection = db.collection("meetups");
    const response = await meetUpsCollection.insertOne(data);
    console.log(response);
    client.close();

    res.status(201).json({
      message: "Success",
    });
  }
}

export default handler;
