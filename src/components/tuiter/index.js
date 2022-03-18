import React from "react";
import NavigationSidebar from "./NavigationSidebar/index.js";
import WhoToFollowList from "./WhoToFollowList/index.js";
import PostSummaryList from "./PostSummaryList/index.js";


const Tuiter = () => {
    return(
        <>
            <PostSummaryList/>
            <NavigationSidebar active="home"/>
            <WhoToFollowList/>
        </>

    )
};


export default Tuiter;