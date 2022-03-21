import PostItems from "./PostItems.json";
import PostItem from "./PostItem.js";

const PostList = () => {
    return (
        <div className="wd-bookmarked-tuits wd-flex">
            {PostItems.map(post => {
                return (<PostItem post={post}/>
                );
    })
    }
        </div>

    );
}

export default PostList;