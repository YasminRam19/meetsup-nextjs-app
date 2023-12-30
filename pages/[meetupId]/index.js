import MeetupDetail from "@/components/meetups/MeetupDetail";
import { MongoClient, ObjectId } from "mongodb";

const MeetupDetails = (props) => {
  return (
    <MeetupDetail
      image={props.meetupData.image}
      title={props.meetupData.title}
      address={props.meetupData.address}
      description={props.meetupData.description}
    />
  );
};

export default MeetupDetails;

export const getStaticPaths = async () => {
  //Connect to the database
  const client = await MongoClient.connect(
    "mongodb+srv://testUser:kLiI4FZDDuQHvcRq@cluster0.wtlgrba.mongodb.net/meetups?retryWrites=true&w=majority"
  );
  const db = client.db();
  const meetupsCollection = db.collection("meetups");

  //Find all the meetups: 1st argument {} means all the meetups, 2nd arguments means which value we will receive
  const meetups = await meetupsCollection.find({}, { _id: 1 }).toArray();
  client.close();

  //Generate the paths dynamically
  return {
    fallback: false,
    paths: meetups.map((meetup) => ({
      params: {
        meetupId: meetup._id.toString(),
      },
    })),
  };
};

export const getStaticProps = async (context) => {
  const meetupId = context.params.meetupId;

  //Connect to the database
  const client = await MongoClient.connect(
    "mongodb+srv://testUser:kLiI4FZDDuQHvcRq@cluster0.wtlgrba.mongodb.net/meetups?retryWrites=true&w=majority"
  );
  const db = client.db();
  const meetupsCollection = db.collection("meetups");

  //Get access to only one meetup
  console.log(meetupId);
  const selectedMeetup = await meetupsCollection.findOne({
    _id: new ObjectId(meetupId),
  });

  console.log(selectedMeetup);

  client.close();

  //Fetch data for a single meetup
  return {
    props: {
      meetupData: {
        id: selectedMeetup._id.toString(),
        image: selectedMeetup.image,
        title: selectedMeetup.title,
        address: selectedMeetup.address,
        description: selectedMeetup.description,
      },
    },
  };
};
