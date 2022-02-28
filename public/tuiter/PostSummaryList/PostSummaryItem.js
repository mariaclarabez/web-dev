import posts from "./posts.js"

const PostSummaryItem = (posts) => {
    return (`
     <div class="wd-tweet wd-border-overlap">
        <div class="box">
            <div><span class="wd-tweet-subtitle">${posts.topic}</span> <br>
                <span class="wd-bold-font">${posts.userName}</span> 
                <i class="fas fa-check-circle"></i>
                <span class="wd-tweet-subtitle"> - ${posts.time}</span>
                <br>
                ${posts.title}<br>
                <span class="wd-tweet-subtitle">${posts.tweets}</span>
            </div>
            <div class="push"><img
                    class="wd-rounded-image"
                    src="${posts.image}"/>
            </div>
        </div>
    </div>
    `);
}
export default PostSummaryItem;