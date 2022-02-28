import NavigationSidebar from "../NavigationSidebar/index.js";
import HomeComponent from "./HomeComponent.js";

(function ($) {
    $('#wd-home').append(`
        <div class="row mt-2">
            <div class="col-2 col-md-2 col-lg-2 col-xl-2">
                ${NavigationSidebar('home')}
            </div>
            <div class="col-10 col-md-10 col-lg-7 col-xl-7">
                ${HomeComponent()}
            </div>
            <div class="d-sm-none d-md-none d-lg-block col-lg-3 col-xl-3">
            </div>
        </div>
    `);
})($);