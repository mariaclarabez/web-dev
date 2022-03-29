import {useDispatch, useSelector} from "react-redux";
import React, {useState} from "react";

const EditProfile = (props) => {
    const {editProfileOn, setEditProfileOn} = props;
    const owner = useSelector(state => state.profile.profile);
    const dispatch = useDispatch();
    const editClickHandler = () => {
        dispatch({
            type: 'update',
            profile: {
                handle: userName,
                location: userLoc,
                bio: userBio,
                dateOfBirth: userDOB,
                website: userWeb
            }
        })
        setEditProfileOn(false)
    }

    const [userName, setUserName] = useState(owner.handle)
    const [userLoc, setUserLoc] = useState(owner.location)
    const [userBio, setUserBio] = useState(owner.bio)
    const [userDOB, setUserDOB] = useState(owner.dateOfBirth)
    const [userWeb, setUserWeb] = useState(owner.website)

    return (
        <div>
            <div className="container wd-font">
                <div className="row wd-top-container">
                    <div className="row wd-top-container">
                        <span>
                            <i onClick={() => setEditProfileOn(false)}
                               className="fas fa-times wd-gray-text wd-cancel-edit-profile"></i>
                        <b className="wd-gray-text">Edit Profile</b>
                            <span className="wd-save-changes"><button

                                className="btn rounded-pill wd-save-changes-btn {
"
                                onClick={() => editClickHandler()}>
                                    <b>Save</b>
                                </button></span>
                        </span>
                    </div>
                    <div className="row">
                    <div class="col">

                        <img className="wd-banner" src={owner.banner}></img></div>
                    <div className="container">
                        <div className="row">
                            <div className="col-9">
          <span className="align-text-top">
                      <img className="rounded-circle over" src={owner.avatarIcon}/>
          </span>

                            </div>

                        </div>
                    </div>
                </div>
                </div>
                <div className="row">
                    <span className="wd-user-name"> <b>{owner.firstName} {owner.lastName} </b></span>
                    <input type="email" className="form-control wd-form wd-user-handle" id="exampleFormControlInput1"
                           defaultValue={userName} onChange={e => setUserName(e.target.value)}></input>

                    <textarea className="form-control wd-formarg wd-user-handle" rows="3" defaultValue={userBio}
                              onChange={e => setUserBio(e.target.value)}></textarea>

                    <input type="email" className="form-control wd-form wd-user-handle" id="exampleFormControlInput1"
                           defaultValue={userWeb} onChange={e => setUserWeb(e.target.value)}></input>


                    <input type="email" className="form-control wd-form wd-user-handle"
                                                            id="exampleFormControlInput1" defaultValue={userLoc}
                                                            onChange={e => setUserLoc(e.target.value)}></input>
             <input type="email" className="form-control wd-user-handle" id="exampleFormControlInput1" defaultValue={userDOB}
                    onChange={e => setUserDOB(e.target.value)}></input>
                    <span className="wd-user-handle">
                        <span className="wd-profile-item">
                            <i className="fas fa-calendar"></i>
                            <b> Joined {owner.dateJoined}</b></span>
                        <span></span>
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
    )


}
export default EditProfile;