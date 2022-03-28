import {useDispatch, useSelector} from "react-redux";
import {useState} from "react";

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
            <div class="container">
                <div class="row">
                    <div class="col"><img className="wd-banner" src={owner.banner}></img></div>
                    <div className="container">
                        <div className="row">
                            <div className="col-9">
          <span className="align-text-top">
                      <img className="rounded-circle over" src={owner.avatarIcon}/>
          </span>

                                <button
                                    className="btn btn-success btn-block rounded-pill wd-edit-buttons {
"
                                    onClick={() => editClickHandler()}>
                                    Save Changes
                                </button>
                                <button
                                    className="btn btn-danger rounded-pill wd-edit-buttons {
"
                                    onClick={() => setEditProfileOn(false)}>
                                    Cancel Changes
                                </button>

                            </div>

                        </div>
                    </div>
                </div>
                <div className="row">
                    <h5>{owner.firstName} {owner.lastName}</h5>
                    <input type="email" className="form-control wd-form" id="exampleFormControlInput1"
                           defaultValue={userName} onChange={e => setUserName(e.target.value)}></input>

                    <input type="email" className="form-control wd-form" id="exampleFormControlInput1"
                           defaultValue={userWeb} onChange={e => setUserWeb(e.target.value)}></input>

                    <textarea className="form-control wd-formarg " rows="3" defaultValue={userBio}
                              onChange={e => setUserBio(e.target.value)}></textarea>
                    <span className="wd-user-handle"><input type="email" className="form-control wd-form"
                                                            id="exampleFormControlInput1" defaultValue={userLoc}
                                                            onChange={e => setUserLoc(e.target.value)}></input>
             <input type="email" className="form-control" id="exampleFormControlInput1" defaultValue={userDOB}
                    onChange={e => setUserDOB(e.target.value)}></input>  | {owner.dateJoined} </span>
                </div>
                <div className="row">
                    <h6>Following {owner.followingCount} | Followers {owner.followersCount}</h6>
                </div>

            </div>

        </div>
    )


}
export default EditProfile;