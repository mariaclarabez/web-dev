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
                        <span className="wd-user-name"> <b>{owner.firstName} {owner.lastName} | </b>
                                                <span className="wd-user-handle"> @{owner.handle}</span>
                        </span>
                        <span className="wd-bio"><h6>{owner.bio}
                        </h6></span>
                        <span className="wd-website">{owner.website}</span>
                        <span
                            className="wd-profile-details">{owner.location} | {owner.dateOfBirth} | {owner.dateJoined} </span>

                    </div>
                    <div className="row">
                        <span className="wd-profile-details">Following {owner.followingCount} | Followers {owner.followersCount}</span>
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
