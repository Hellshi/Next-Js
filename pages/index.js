import React, { useState } from "react";
import { MongoClient } from "mongodb";
import MeetUps from "../components/meetups/MeetupList";

const index = (props) => {
  return <MeetUps meetups={props.meetups} />;
};

export async function getStaticProps() {
  const client = await MongoClient.connect(
    `mongodb+srv://hellem:621251@cluster0.dimwp.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`
  );
  const db = client.db();
  const meetUpsCollection = db.collection("meetups");
  const meetups = await meetUpsCollection.find().toArray();

  console.log(meetups[0].meetUpData.title);
  client.close();
  return {
    props: {
      meetups: meetups.map((meet) => ({
        meetups: meet.meetUpData.title,
        image: meet.meetUpData.image,
        address: meet.meetUpData.address,
        id: meet._id.toString(),
      })),
    },
    revalidate: 10,
  };
}

export default index;
