import React from "react";
import MeetUpForm from "../../components/meetups/NewMeetupForm";

const index = () => {
  const handleMeetUpForm = async (meetUpData) => {
    const response = await fetch("/api/new-meet", {
      method: "POST",
      body: JSON.stringify({
        meetUpData,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    });
    const data = await response.json();
    console.log(data);
  };

  return <MeetUpForm onAddMeetup={handleMeetUpForm} />;
};

export default index;
