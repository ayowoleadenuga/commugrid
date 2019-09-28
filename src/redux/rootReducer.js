import { reducer as reduxFormReducer } from "redux-form";
import { combineReducers } from "redux";

export default combineReducers({
    form: reduxFormReducer
})