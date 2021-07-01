import MeetupDetail from "../components/meetups/MeetupDetails";
import { MongoClient } from "mongodb";
const ObjectId = require("mongodb").ObjectId;

function MeetupDetails(props) {
  return (
    <MeetupDetail
      image={props.meetupData.image}
      title={props.meetupData.title}
      address={props.meetupData.address}
      description={props.meetupData.description}
    />
  );
}
export async function getStaticPaths() {
  const client = await MongoClient.connect(
    `mongodb+srv://hellem:621251@cluster0.dimwp.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`
  );
  const db = client.db();
  const meetUpsCollection = db.collection("meetups");
  const meetups = await meetUpsCollection.find({}, { _id: 1 }).toArray();

  client.close();

  return {
    fallback: false,
    paths: meetups.map((meet) => ({
      params: { meetupId: meet._id.toString() },
    })),
  };
}

export async function getStaticProps(context) {
  // fetch data for a single meetup
  const meetupId = context.params.meetupId;
  var o_id = new ObjectId(meetupId);
  const client = await MongoClient.connect(
    `mongodb+srv://hellem:621251@cluster0.dimwp.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`
  );
  const db = client.db();
  const meetUpsCollection = db.collection("meetups");
  const meet = await meetUpsCollection.findOne({ _id: o_id });
  const meetData = meet.meetupData;

  client.close();

  return {
    props: {
      meetupData: {
        image: meet.meetUpData.image,
        id: meetupId,
        title: meet.meetUpData.title,
        address: meet.meetUpData.address,
        description: meet.meetUpData.description,
      },
    },
  };
}

export default MeetupDetails;
