import React from "react";
import WhoToFollowListItem from "./WhoToFollowListItem.js";
import who from "./who.json"
import '../explore.css';


const WhoToFollowList = () => {
    return (
        <div className="list-group wd-wtf-bar">
            <div className="list-group-item wd-wtf-item">
                Who to Follow
            </div>
            {who.map(who =>{
        return (<WhoToFollowListItem who={who}/>
        );
    })
    }
        </div>
    );
}

export default WhoToFollowList;