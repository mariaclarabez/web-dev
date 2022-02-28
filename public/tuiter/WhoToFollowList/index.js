
import WhoToFollowListItem from "./WhoToFollowListItem.js";
import who from "./who.js"

const WhoToFollowList = () => {
    return (`
            <ul class="list-group wd-top-padding">
            <!-- continue here -->
                <li class="list-group-item wd-bold-font sub-dark-mode">Who to follow</li>
                
       ${who.map(who => {
        return(WhoToFollowListItem(who));
    }).join('')
    }
            </ul> 
`);
}
export default WhoToFollowList;