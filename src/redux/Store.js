import {applyMiddleware, combineReducers, legacy_createStore} from "redux"
import {thunk} from "redux-thunk";
import authReducer from "./Auth/Reducer";
import ProjectReducer from "./Project/Project.Reducer";
import issueReducer from "./Issue/Issue.reducer";
import ChatReducer from "./Chat/Reducer";


const rootReducers=combineReducers({

    auth:authReducer,
    project:ProjectReducer,
    issue:issueReducer,
    chat:ChatReducer,
    
   

});

export const store = legacy_createStore(rootReducers,applyMiddleware(thunk))