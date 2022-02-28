import PostItem from "./PostItem.js";
import posts from "./posts.js"

const PostSummaryList = () => {
    return(`
     ${posts.map(posts => {
        return(PostItem(posts));
    }).join('')
    }
    `);
}
export default PostSummaryList;