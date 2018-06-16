import { combineReducers } from "redux";
import TeamMembersReducer from './reducer_team_members';
import { reducer as formReducer } from 'redux-form'


const rootReducer = combineReducers({
    teamMembers: TeamMembersReducer,
    form: formReducer
});

export default rootReducer;