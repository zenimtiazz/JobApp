import { useHistory } from "react-router";
import NewMeetupForm from "../components/meetups/NewMeetupForm";

const NewMeetup = () => {
  const history = useHistory();
  function addMeetupHandler(meetupData){
// to send http request in firebase meetups.json that the format whic firebase hase
fetch('https://react-meetups-7d806-default-rtdb.firebaseio.com/meetups.json',
{
  method:'POST',
  body: JSON.stringify(meetupData),
  headers:{
    'Content-Type':'applications/json'
  }
}
);
  }
  return (<section>
     <h1>  Add new meetup </h1>
     <NewMeetupForm onAddMeetup={addMeetupHandler}/>
  </section>)
};

export default NewMeetup;
