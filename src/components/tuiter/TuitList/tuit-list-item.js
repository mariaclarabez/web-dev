import React from "react";
import "./tuit.css";
import {useDispatch} from "react-redux";
import TuitStats from "./tuit-stats";
import {deleteTuit, updateTuit}
    from "../../../actions/tuits-actions";


const VerifiedItem = ({
                          tuit = {
                              verified: false,
                          }
                      }) => {
    if (tuit.verified) {
        return (
            <>
                    <span className="fa-stack fa-1x wd-stacked-icons-small">
                        <i className="fas fa-certificate fa-stack-2x"></i>
                        <i className="fas fa-check fa-stack-1x wd-black"></i>
                    </span>
            </>
        );
    }
    return null;


}


const TuitListItem = ({tuit = {
    _id: "123",
    topic: "Web Development",
    postedBy: {
        username: "ReactJS"
    },
    liked: true,
    verified: false,
    handle: "ReactJS",
    time: "2h",
    title: "React.js is a component based front end library that makes it very easy to build Single Page Applications or SPAs",
    tuit: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
    attachments: {
        image: "../../../../images/react-js-main.jpg"
    },
    logo: "../../../../images/react-blue-2.png",
    avatar: "../../../../images/react-blue-2.png",
    stats: {
        comments: 123,
        retuits: 234,
        likes: 345
    }
}}) => {
    const dispatch = useDispatch();


    return (
        <>
            <div className="wd-bookmarked-tuit">

                <img
                    src={tuit.avatar}
                    className="wd-user-image-3"/>
                <div className="wd-tuit-body">
                    <div className="wd-tuit-header">
                        <span className="wd-username">
                    <span><b>{tuit.postedBy?.username}</b></span>

                    <VerifiedItem tuit={tuit}/>

                    <span className="wd-user-handle-2"> @{tuit.handle}</span>
                </span>
                    </div>
                    <div className="wd-tuit-content">
                        {tuit.tuit}
                    </div>
                    <div>
                        Likes: {tuit.likes}
                        <i onClick={() => updateTuit(dispatch, {
                            ...tuit,
                            likes: tuit.likes + 1
                        })} className="far fa-thumbs-up ms-2"></i>
                    <span>
                        <i onClick={() => updateTuit(dispatch, {
                            ...tuit,
                            likes: tuit.likes - 1
                        })} className="far fa-thumbs-down ms-2"></i></span>
                    </div>


                    <div className="wd-tuit-image-container">
                        {
                            tuit.attachments && tuit.attachments.image &&
                            <img src={tuit.attachments.image}
                                 className="mt-2 wd-border-radius-20px"
                                 style={{width: "100%"}} alt=""/>
                        }
                        {
                            tuit.attachments && tuit.attachments.video &&
                            <iframe width="100%" height="350px"
                                    src={`https://www.youtube.com/embed/${tuit.attachments.video}`}
                                    title="YouTube video player" frameBorder="0"
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                    allowFullScreen></iframe>
                        }
                    </div>
                    <TuitStats tuit={tuit}/>
                    <i onClick={() =>
                        deleteTuit(dispatch, tuit)}
                       className="fas fa-times wd-white" style={{ position: "absolute", right: "10px", top: "10px"}}/>

                </div>
            </div>
        </>
    );

            }

export default TuitListItem;