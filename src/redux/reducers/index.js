import {combineReducers} from "redux"
import moviesReducers from "./movies.reducers";
import departmentsReducers from "./departments.reducers";

export default combineReducers({
    Movies: moviesReducers,
    Department: departmentsReducers,
});
