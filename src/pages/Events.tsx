import { Link } from "react-router-dom";

export function Events() {
  return (
    <div>
      <h1>Next Events</h1>
      <Link to="/events/1" data-eventname="Halloween">
        Halloween
      </Link>
      <Link to="/events/2" data-eventname="Christmas">
        Christmas
      </Link>
      <Link to="/events/3" data-eventname="New Year">
        New Year
      </Link>
      <Link to="/events/4" data-eventname="Valentine's Day">
        Valentine's Day
      </Link>
      <br />
      <Link to="/events/new" data-eventname="New Event">
        New Event
      </Link>
    </div>
  );
}
