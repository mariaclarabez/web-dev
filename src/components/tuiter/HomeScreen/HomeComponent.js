import PostList from "../PostList/PostList.js";

const HomeComponent = () => {
    return (
        <>
            <div className="row">
                <div className="wd-header">
                    <div className="wd-search-area">
                        <i class="fas fa-search wd-mag-image"></i>
                        <input class="wd-search-bar" type="text" placeholder="Search Tuiter"/>
                    </div>
                    <a href="settings.html"><i class="fa fa-cog wd-settings-icon"></i></a>
                </div>
            </div>
            <PostList/>
        </>
    );
}

export default HomeComponent;