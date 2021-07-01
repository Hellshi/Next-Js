import MeetupItem from "./MeetupItem";
import classes from "./MeetupList.module.css";
import { useRouter } from "next/router";

function MeetupList(props) {
  const Router = useRouter();

  const handleSelectMeet = (id) => {
    Router.push(`/${id}`);
  };
  return (
    <ul className={classes.list}>
      {props.meetups.map((meetup) => (
        <MeetupItem
          onSelectMeet={handleSelectMeet}
          key={meetup.id}
          id={meetup.id}
          image={meetup.image}
          title={meetup.title}
          address={meetup.address}
        />
      ))}
    </ul>
  );
}

export default MeetupList;
