import MeetupDetail from "../components/meetups/MeetupDetails";

function MeetupDetails() {
  return (
    <MeetupDetail
      image="https://thumbor.forbes.com/thumbor/fit-in/1200x0/filters%3Aformat%28jpg%29/https%3A%2F%2Fspecials-images.forbesimg.com%2Fimageserve%2F5f4fdd4a6e7ce7b0dcba0c26%2F0x0.jpg"
      title="Pretty preety preety"
      address="Pretty preety preety"
      description="The sin that I'll confess to resease myself from consequence"
    />
  );
}

export async function getStaticPaths() {
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
}

export async function getStaticProps(context) {
  // fetch data for a single meetup

  const meetupId = context.params.meetupId;

  console.log(meetupId);

  return {
    props: {
      meetupData: {
        image:
          "https://thumbor.forbes.com/thumbor/fit-in/1200x0/filters%3Aformat%28jpg%29/https%3A%2F%2Fspecials-images.forbesimg.com%2Fimageserve%2F5f4fdd4a6e7ce7b0dcba0c26%2F0x0.jpg",
        id: meetupId,
        title: "Pretty preety preety",
        address: "??",
        description:
          "This is the sin that I'll confess to resease myself from consequence",
      },
    },
  };
}

export default MeetupDetails;
