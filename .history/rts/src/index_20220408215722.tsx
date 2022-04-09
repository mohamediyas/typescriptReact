import ReactDOM from "react-dom";
import EventController from "./events/EventController";
import GuestList from "./state/GuestList";
// import UserSearch from "./state/UserSearch";
import UserSearch from "./refs/UserSearch";

ReactDOM.render(<UserSearch />, document.querySelector("#root"));
