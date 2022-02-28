import posts from "./posts.js"

const PostItem = (posts) => {
    return (`
     <div class="wd-content-holder-post">
      <div class="wd-grid-row">
        <div class="wd-grid-col-left-sidebar">
          <img src="${posts.image}" class="wd-circle-icon">
        </div>
        <div class="wd-grid-col-main-content">
            <span class='wd-user'>${posts.topic}</span>
            <span class="wd-user-handle"> @${posts.userName} · ${posts.time} </span>
            <span class='wd-content-menu'>...</span>
            <br>
            <p class="wd-content">
              ${posts.title}
            </p>
            <br><br>
          <div class="wd-content-holder-thumbnail">
            <img src="${posts.shareImage}" class="wd-bookmark-img"><br>
            <span class='wd-user' id="post-title">${posts.subtextTitle}</span><br>
            <div id="post-content">${posts.subtext}</div>
            <div id="post-content-link"><i class="fas fa-link"></i>${posts.link}</div>
          </div>
          
          <div class=" wd-icon-grid-container wd-top-padding">
            <div class="item1"><a class="wd-link wd-light-text" href="#"><i class="fa fa-comment"></i> ${posts.comments}</a></div>
            <div class="item2"><a class="wd-link wd-light-text" href="#"><i class="fa fa-retweet"></i> ${posts.retweet}</a></div>
            <div class="item3"><a class="wd-link wd-red-text" href="#">&hearts; ${posts.likes}</a></div>
            <div class="item4"><a class="wd-link wd-light-text" href="#"><i class="far fa-share-square"></i></a></div>
        </div>
          
          
        </div>
      </div> 
    </div>
    `);
}
export default PostItem;