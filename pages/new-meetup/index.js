import React from "react";
import MeetUpForm from "../../components/meetups/NewMeetupForm";
import { useRouter } from "next/router";

const index = () => {
  const Router = useRouter();
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
    Router.push("/");
  };

  return <MeetUpForm onAddMeetup={handleMeetUpForm} />;
};

export default index;
