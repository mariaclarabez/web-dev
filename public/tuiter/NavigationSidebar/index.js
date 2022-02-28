const NavigationSidebar = (active) => {
    if (active === 'home') {
        return (`
            <div class="list-group wd-top-padding">
                <a class="list-group-item  list-group-item-action" href="/">
                    <i class="fab fa-twitter"></i></a>
                <a href="../HomeScreen/index.html"
                       class="list-group-item list-group-item-action active">
                        <i class="fas fa-home"></i> Home</a>
                    <a href="../ExploreScreen/explore.html"
                       class="list-group-item list-group-item-action">
                        <i class="fas fa-hashtag "></i> Explore</a>
                    <a href="../notifications.html"
                       class="list-group-item list-group-item-action">
                        <i class="fas fa-bell"></i> Notifications</a>
                    <a href="../messages.html"
                       class="list-group-item list-group-item-action">
                        <i class="fas fa-envelope"></i> Messages</a>
                    <a href="../bookmarks.html"
                       class="list-group-item list-group-item-action">
                        <i class="fas fa-bookmark"></i> Bookmarks</a>
                    <a href="#"
                       class="list-group-item list-group-item-action">
                        <i class="fas fa-list-ul"></i> Lists</a>
                    <a href="../profile.html"
                       class="list-group-item list-group-item-action">
                        <i class="fas fa-user"></i> Profile</a>
                    <a href="#"
                       class="list-group-item list-group-item-action">
                        <span class="fa-stack fa-xs" style="float:left;">
                        <i class="fas fa-circle fa-stack-2x"></i>
                        <i class="overlay-font fas fa-ellipsis-h fa-stack-1x fa-inverse"></i>
                            </span>
                        <span style="float:left;">More</span>
                    </a>
            </div>
            <div class="d-grid mt-2">
                <a href="tuit.html"
                   class="btn btn-primary btn-block rounded-pill">
                    Tweet</a>
            </div>
    `);
    }

    return (`
            <div class="list-group wd-top-padding">
                <a class="list-group-item  list-group-item-action" href="/">
                    <i class="fab fa-twitter"></i></a>
                <a href="../HomeScreen/index.html"
                       class="list-group-item list-group-item-action">
                        <i class="fas fa-home"></i> Home</a>
                    <a href="../explore.html"
                       class="list-group-item list-group-item-action active">
                        <i class="fas fa-hashtag "></i> Explore</a>
                    <a href="../notifications.html"
                       class="list-group-item list-group-item-action">
                        <i class="fas fa-bell"></i> Notifications</a>
                    <a href="../messages.html"
                       class="list-group-item list-group-item-action">
                        <i class="fas fa-envelope"></i> Messages</a>
                    <a href="../bookmarks.html"
                       class="list-group-item list-group-item-action">
                        <i class="fas fa-bookmark"></i> Bookmarks</a>
                    <a href="#"
                       class="list-group-item list-group-item-action">
                        <i class="fas fa-list-ul"></i> Lists</a>
                    <a href="../profile.html"
                       class="list-group-item list-group-item-action">
                        <i class="fas fa-user"></i> Profile</a>
                    <a href="#"
                       class="list-group-item list-group-item-action">
                        <span class="fa-stack fa-xs" style="float:left;">
                        <i class="fas fa-circle fa-stack-2x"></i>
                        <i class="overlay-font fas fa-ellipsis-h fa-stack-1x fa-inverse"></i>
                            </span>
                        <span style="float:left;">More</span>
                    </a>
            </div>
            <div class="d-grid mt-2">
                <a href="../tuit.html"
                   class="btn btn-primary btn-block rounded-pill">
                    Tweet</a>
            </div>
    `);
}
export default NavigationSidebar;