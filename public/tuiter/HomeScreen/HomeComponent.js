import PostList from "../PostList/PostList.js";

const HomeComponent = () => {
    return(`
           <div class="wd-top-padding">
           ${PostList()}
           </div>
    `);
}
export default HomeComponent;