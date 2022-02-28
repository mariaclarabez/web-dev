import PostSummaryList from "../PostSummaryList/index.js";

const ExploreComponent = () => {
    return(`
            <div>
                       <!-- search field and cog -->
                   <span class="wd-magnifying-glass"><i class="fas fa-search"></i></span>
                <input class="wd-search-twitter" placeholder="Search Twitter"/>
                <a class=" wd-configuration wd-link" href="explore-settings.html"><i
                        class="fas fa-cog"></i></a>
           </div>
           <ul class="nav mb-2 nav-tabs wd-top-padding">
                      <!-- tabs -->
                <li class="nav-item">
                        <a class="nav-link active" href="../for-you.html">For you</a>
                    </li>
                    <li class="nav-item ">
                        <a class="nav-link" href="../trending.html">Trending</a>
                    </li>
                    <li class="nav-item ">
                        <a class="nav-link" href="../news.html">News</a>
                    </li>
                    <li class="nav-item ">
                        <a class="nav-link" href="../sports.html">Sports</a>
                    </li>
                    <li class="nav-item ">
                        <a class="nav-link" href="../entertainment.html">Entertainment</a>
                    </li>
           </ul>
           
           <!-- image with overlaid text -->
           <div class="img-container">
                    <img src="https://earthsky.org/upl/2020/11/spacex-starship-prototype-2020-photo-e1604508831201.jpg"
                         class="wd-content-holder1" />
                    <span class="bottom-left">SpaceX's Starship</span>
                </div>
           
           <div>
           ${PostSummaryList()}
           </div>
    `);
}
export default ExploreComponent;