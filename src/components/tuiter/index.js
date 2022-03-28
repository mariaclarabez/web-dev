import React from "react";
import ExploreScreen from "./ExploreScreen/ExploreScreen.js";
import {Outlet} from "react-router-dom";
import NavigationSidebar from "./NavigationSidebar/index.js";
import "./explore.css";
import whoReducer from "./reducers/who-reducer";
import tuitsReducer from "./reducers/tuits-reducer";
import profileReducer from "./reducers/profile-reducer";
import {createStore, combineReducers} from "redux";
import {Provider} from "react-redux";
import WhoToFollowList from "./WhoToFollowList";

const reducer = combineReducers({
    tuits: tuitsReducer, who: whoReducer,
    profile: profileReducer
});

const store = createStore(reducer);


const Tuiter = () => {
    return (
        <Provider store={store}>
        <div className="row mt-2 flex-nowrap wd-main-content">
            <div className="col-2 col-md-2 col-lg-1 col-xl-2 wd" >
                <NavigationSidebar/>
            </div>
            <div className="col-10 col-md-10 col-lg-7 col-xl-6"
                 style={{"position": "relative"}}>
                <Outlet/>
            </div>
            <div className="d-sm-none d-md-none d-lg-block col-lg-4 col-xl-4">
                <WhoToFollowList/>
            </div>
        </div>
        </Provider>

    );
};
export default Tuiter;
