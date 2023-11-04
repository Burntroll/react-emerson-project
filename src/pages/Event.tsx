import { useParams } from "react-router-dom";

export function Event() {
  const { id } = useParams();

  // Create a mapping of event IDs to event names
  const eventNames: { [key: string]: string } = {
    "1": "Halloween",
    "2": "Christmas",
    "3": "New Year",
    "4": "Valentine's Day",
  };

  // Get the event name based on the ID or show "Unknown Event" if not found
  const eventName = id && eventNames[id] ? eventNames[id] : "Unknown Event";

  return (
    <div>
      <h1>Today Event</h1>
      <p>{eventName}</p>
    </div>
  );
}
