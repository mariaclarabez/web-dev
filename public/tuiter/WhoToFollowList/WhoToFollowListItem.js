const WhoToFollowListItem = (who) => {
    return (`
         <li class="list-group-item">
        <div class="box">
            <div><img
                    src="${who.avatarIcon}"
                    class="wd-circle-icon overlay-image"></div>
            <div class="left-margin username-font"><span
                    class="wd-bold-font">${who.userName}</span> <i
                    class="fas fa-check-circle"></i><br>@${who.handle}
            </div>
            <div class="push">
                <button class="btn btn-primary wd-float-right round follow-button button-primary-override">
                    Follow
                </button>
            </div>
        </div>
     </li>
        `);
}
export default WhoToFollowListItem;