import Card from '../ui/Card';
import classes from './MeetupItem.module.css';
const MeetupItem = (props) => {
  return <li className={classes.item} >
    <Card>
    <div className={classes.image}>
    <img src= {props.image} alt={props.title} />
</div>
<div className = {classes.content}>
<title>{props.title}</title>
<address>{props.address}</address>
 <p>{props.description}</p>
</div>
<div className= {classes.actions}>
    <button>To favorites</button>
</div>
</Card>
  </li>;
  
};

export default MeetupItem;
