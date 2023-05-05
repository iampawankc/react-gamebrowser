import { Fragment } from "react";
import { MouseEvent } from "react";

let cities = ["Bangalore", "Mumbai", "Hyderabad", "Chennai"];
//cities = [];

//Handling events
const clickEvent = (Event: MouseEvent) => console.log(Event);

function ListGroup() {
  return (
    <Fragment>
      <h1>List groups</h1>
      {cities.length === 0 && <p>No items found!! </p>}
      <ul className="list-group">
        {cities.map((city) => (
          <li key={city} className="list-group-item" onClick={clickEvent}>
            {city}
          </li>
        ))}
      </ul>
    </Fragment>
  );
}

export default ListGroup;
