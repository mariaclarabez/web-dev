import React from "react";
import '../explore.css';

const WhoToFollowListItem = ({
                                 who = {
                                     avatarIcon: '../../../images/nasa.png',
                                     userName: 'NASA',
                                     handle: 'NASA',
                                 }
                             }) => {

    return (
        <>
        <div className="wd-wtf-item list-group-item">
            <div className="wd-wtf-user">
                <img
                    src={who.avatarIcon}
                    className="wd-wtf-image"/>
                <div className="wd-wtf-user-info">
                    <span><b>{who.userName}</b></span>
                    <i class="fas fa-check-circle"></i> <br/>
                    <span>{who.handle}</span>
                </div>
            </div>
            <button className="btn wd-wtf-follow">Follow</button>
        </div>
        </>
    );
}
export default WhoToFollowListItem;