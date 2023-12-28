import MeetupList from "@/components/meetups/MeetupList";
import Layout from "@/components/layout/Layout";

const DUMMY_MEETUPS = [
  {
    id: 1,
    title: "A first meetup",
    image:
      "https://www.traveller.ee/blog/wp-content/uploads/2016/07/RigaOldTown_Droneview03-1360x900.jpg",
    address: "Riga, Latvia",
    description: "This is a first meetup",
  },
  {
    id: 2,
    title: "A second meetup",
    image:
      "https://images.adsttc.com/media/images/5d44/14fa/284d/d1fd/3a00/003d/newsletter/eiffel-tower-in-paris-151-medium.jpg?1564742900",
    address: "Paris, France",
    description: "This is a first meetup",
  },
  {
    id: 3,
    title: "A third meetup",
    image:
      "https://www.traveller.ee/blog/wp-content/uploads/2016/07/RigaOldTown_Droneview03-1360x900.jpg",
    address: "Riga, Latvia",
    description: "This is a first meetup",
  },
];

const HomePage = () => {
  return <MeetupList meetups={DUMMY_MEETUPS} />;
};

export default HomePage;
