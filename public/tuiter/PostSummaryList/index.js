import PostSummaryItem from "./PostSummaryItem.js";
import posts from "./posts.js"

const PostSummaryList = () => {
    return(`
     ${posts.map(posts => {
        return(PostSummaryItem(posts));
    }).join('')
    }
    `);
}
export default PostSummaryList;