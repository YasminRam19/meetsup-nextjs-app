import MeetupDetail from "@/components/meetups/MeetupDetail";

const MeetupDetails = () => {
  return (
    <MeetupDetail
      image="https://www.traveller.ee/blog/wp-content/uploads/2016/07/RigaOldTown_Droneview03-1360x900.jpg"
      title="A first meetup"
      addres="Some Street, Some City"
      description="This is a first meetup"
    />
  );
};

export default MeetupDetails;

export const getStaticPaths = async () => {
  return {
    fallback: false,
    paths: [
      {
        params: {
          meetupId: "m1",
        },
      },
      {
        params: {
          meetupId: "m2",
        },
      },
    ],
  };
};

export const getStaticProps = async (context) => {
  const meetupId = context.params.meetupId;
  console.log(meetupId);
  //Fetch data for a single meetup
  return {
    props: {
      meetupData: {
        image:
          "https://www.traveller.ee/blog/wp-content/uploads/2016/07/RigaOldTown_Droneview03-1360x900.jpg",
        id: meetupId,
        title: "First Meetup",
        address: "Some street, some city",
        description: "A first meetup",
      },
    },
  };
};
