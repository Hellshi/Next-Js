import React, { Fragment } from "react";
import { useRouter } from "next/router";
import Details from "../components/meetups/MeetupDetails";
const DUMMY_MEETUPS = [
  {
    id: "m1",
    title: "One kiss at a time",
    image:
      "https://thumbor.forbes.com/thumbor/fit-in/1200x0/filters%3Aformat%28jpg%29/https%3A%2F%2Fspecials-images.forbesimg.com%2Fimageserve%2F5f4fdd4a6e7ce7b0dcba0c26%2F0x0.jpg",
    address: "??",
    description: "Then Im taking ur girl and Im making her mine",
  },

  {
    id: "m2",
    title: "Were so young but we probably gonna die",
    image:
      "https://thumbor.forbes.com/thumbor/fit-in/1200x0/filters%3Aformat%28jpg%29/https%3A%2F%2Fspecials-images.forbesimg.com%2Fimageserve%2F5f4fdd4a6e7ce7b0dcba0c26%2F0x0.jpg",
    address: "??",
    description: "Its so fun, were so good at telling lies",
  },

  {
    id: "m3",
    title: "We look so good and we never even try",
    image:
      "https://thumbor.forbes.com/thumbor/fit-in/1200x0/filters%3Aformat%28jpg%29/https%3A%2F%2Fspecials-images.forbesimg.com%2Fimageserve%2F5f4fdd4a6e7ce7b0dcba0c26%2F0x0.jpg",
    address: "??",
    description: "Get ur money from a trust fund, do it all the time",
  },
];

const MeetUpDetails = () => {
  const Router = useRouter();
  const { meetUp } = Router.query;
  const id = DUMMY_MEETUPS.filter((item) => item.id === meetUp);

  return (
    <Fragment>
      {id.map((item) => (
        <Details
          image={item.image}
          title={item.title}
          description={item.description}
          address={item.address}
          key={item.id}
          id={item.id}
        />
      ))}
    </Fragment>
  );
};

export default MeetUpDetails;
