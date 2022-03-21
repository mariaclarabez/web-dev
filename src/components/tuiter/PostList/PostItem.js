import React from "react";


const TuitImageCaption = ({
    post = {
        imageTitle: "",
        imageBody: "",
        imageLink: "",
    }
}) => {
        return (
            <>
            <div className="wd-tuit-image-caption">
                <span><b>{post.imageTitle}</b></span><br/>
                <span className="wd-light-gray-color">{post.imageBody}</span><br/>
                <i class="wd-detail fa fa-link"></i>
                <span className="wd-detail">{post.imageLink}</span>
            </div>
            </>
        );


}

const TuitImageComponent = ({
    post = {
        image: "../../images/grimes.jpg",
    }
    }) => {
        return (
                <>
                <div className="wd-tuit-image-container">
                    <img
                        src={post.image}
                        className="wd-tuit-image"/>
                    <TuitImageCaption post={post}/>
                </div>

                </>
    );


}

const PostItem = ({
    post = {
        userPhoto: "../../images/nypost.jpg",
        userName: "New York Post",
        handle: "@nypost",
        body: "Grimes seen reading Karl Marx following split with world's richest man Elon Musk trib.al/nx2Gfaq",
        comments: "965",
        retweets: "2.4K",
        likes: "4K"
    }
}) => {
    return (
        <div className="wd-bookmarked-tuit">
        <img
            src={post.userPhoto}
            className="wd-user-image"/>
        <div className="wd-tuit-body">
            <div className="wd-tuit-header">
                <span className="wd-username">
                    <span>{post.userName}</span>
                    <span className="fa-stack fa-1x wd-stacked-icons-small">
                        <i class="fas fa-certificate fa-stack-2x"></i>
                        <i class="fas fa-check fa-stack-1x wd-black"></i>
                    </span>
                    <span className="wd-user-handle">{post.handle}</span>
                </span>
            </div>
            <div className="wd-tuit-content">
                {post.body}
            </div>
            <TuitImageComponent  post={post}/>
            <div className="wd-tuit-metrics">
                <div className="wd-tuit-metric">
                    <a href="#" className="wd-no-underline">
                        <i class="fa fa-comment wd-silver"></i>
                        <span className="wd-light-gray-color">{post.comments}</span>
                    </a>
                </div>
                <div className="wd-tuit-metric">
                    <a href="#" className="wd-no-underline">
                        <i class="fa fa-retweet wd-silver"></i>
                        <span className="wd-light-gray-color">{post.retweets}</span>
                    </a>
                </div>
                <div className="wd-tuit-metric">
                    <a href="#" className="wd-no-underline">
                        <i class="fas fa-heart wd-liked-tuit"></i>
                        <span className="wd-light-gray-color">{post.likes}</span>
                    </a>
                </div>
                <div className="wd-tuit-metric">
                    <a href="#" className="wd-no-underline wd-silver">
                        <i class="fa fa-share"></i>
                    </a>
                </div>
            </div>
        </div>
    </div>
    );
}

export default PostItem;