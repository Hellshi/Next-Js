import React from "react";
import MeetUpForm from "../../components/meetups/NewMeetupForm";

const index = () => {
  const handleMeetUpForm = (meetUpData) => {
    console.log(meetUpData);
  };

  return <MeetUpForm onAddMeetup={handleMeetUpForm} />;
};

export default index;
