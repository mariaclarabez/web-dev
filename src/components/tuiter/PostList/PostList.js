import PostItems from "./PostItems.json";
import PostItem from "./PostItem.js";

const PostList = () => {
    return (
        <div className="">
            {PostItems.map(post => {
                return (<PostItem post={post}/>
                );
    })
    }
        </div>

    );
}

export default PostList;