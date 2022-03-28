import "./profile.css"
import React from "react";
import {useSelector} from "react-redux";
import {useState} from 'react';
import EditProfile from "./EditProfile";

const Profile = () => {
    const owner = useSelector((state) => state.profile.profile);
    const [editProfileOn, setEditProfileOn] = useState(false)
    if (!owner) {
        return null;
    }
    return (
        <>
            {editProfileOn === false ?

                <div>
                <div className="container wd-font">
                    <div className="row wd-top-container">
                        <span><a href="/tuiter/"><i className="fas fa-arrow-left wd-back-button"></i></a>
                        <b>{owner.firstName} {owner.lastName}</b></span>
                        <div className="wd-tweets-num"><b>5,000 Tweets</b></div>
                    </div>
                    <div className="row">
                        <div className="col"><img className="wd-banner" src={owner.banner}/></div>
                        <div className="container">
                            <div className="row">
                                <div className="col-9 wd-a">
            <span >
                        <img className="rounded-circle over"
                             src={owner.avatarIcon}/>
            </span>
                                </div>
                                <div className="col-3">
                                    <button
                                        className="btn btn-primary rounded-pill wd-edit-button"
                                        onClick={() => setEditProfileOn(true)}>
                                        Edit Profile
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <span className="wd-user-name"> <b>{owner.firstName} {owner.lastName} </b>
                        </span>
                        <span className="wd-user-handle"> <b>@{owner.handle}</b></span>

                        <span className="wd-bio">{owner.bio}
                        </span>
                        <span className="wd-website">{owner.website}</span>
                        <span className="wd-profile-details"><b>
                            <i className="fas fa-map-pin"></i>
                            <span className="wd-profile-item"> {owner.location}</span>
                            <i className="fas fa-birthday-cake"></i>
                            <span className="wd-profile-item"> Born {owner.dateOfBirth}</span>
                            <i className="fas fa-calendar"></i>
                            <span className="wd-profile-item"> Joined {owner.dateJoined}</span></b>
                           </span>

                    </div>
                    <div className="row">
                        <span className="wd-follow">
                            <span className="wd-follow-item">
                                <span className="wd-follow-number"><b>{owner.followingCount} </b></span>
                                <b>Following</b></span>
                            <span className="wd-follow-item">
                                <span className="wd-follow-number"><b>{owner.followersCount} </b></span>
                                <b>Followers</b></span>
                        </span>
                    </div>
                </div>

            </div>
                :
                <EditProfile
                    editProfileOn={editProfileOn}
                    setEditProfileOn={setEditProfileOn}/>
            }
        </>
    );
}
export default Profile;
