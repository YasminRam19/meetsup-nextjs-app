import MeetupList from "@/components/meetups/MeetupList";
import Layout from "@/components/layout/Layout";
import { MongoClient } from "mongodb";

const DUMMY_MEETUPS = [
  {
    id: "m1",
    title: "A first meetup",
    image:
      "https://www.traveller.ee/blog/wp-content/uploads/2016/07/RigaOldTown_Droneview03-1360x900.jpg",
    address: "Riga, Latvia",
    description: "This is a first meetup",
  },
  {
    id: "m2",
    title: "A second meetup",
    image:
      "https://images.adsttc.com/media/images/5d44/14fa/284d/d1fd/3a00/003d/newsletter/eiffel-tower-in-paris-151-medium.jpg?1564742900",
    address: "Paris, France",
    description: "This is a first meetup",
  },
  {
    id: "m3",
    title: "A third meetup",
    image:
      "https://www.traveller.ee/blog/wp-content/uploads/2016/07/RigaOldTown_Droneview03-1360x900.jpg",
    address: "Riga, Latvia",
    description: "This is a first meetup",
  },
];

const HomePage = (props) => {
  return <MeetupList meetups={props.meetups} />;
};

export const getStaticProps = async () => {
  //fetch data from an API
  const client = await MongoClient.connect(
    "mongodb+srv://testUser:kLiI4FZDDuQHvcRq@cluster0.wtlgrba.mongodb.net/meetups?retryWrites=true&w=majority"
  );
  const db = client.db();
  const meetupsCollection = db.collection("meetups");
  const meetups = await meetupsCollection.find().toArray(); //Array of documents (meetups)
  console.log(meetups);
  client.close();

  return {
    props: {
      meetups: meetups.map((meetup) => ({
        title: meetup.title,
        address: meetup.address,
        image: meetup.image,
        id: meetup._id.toString(),
      })),
    },
    revalidate: 1, //The number of seconds will depend on the data update frecuency.
  };
};

/*
//Server-side rendering
export const getServerSideProps = async (context) => {
  const req = context.req;
  const res = context.res;

  //fetch data from an API
  return {
    props: {
      meetups: DUMMY_MEETUPS,
    },
  };
};
*/
export default HomePage;
