import './vendors/bootstrap/css/bootstrap.min.css';
import './vendors/bootstrap/bootstrap.min.css';
import './vendors/fontawesome/css/all.min.css';
import './App.css';
import HelloWorld from "./components/hello-world";
import Labs from "./components/labs";
import Tuiter from "./components/tuiter";
import {BrowserRouter, Redirect, Route}
    from "react-router-dom"
import ExploreScreen from "./components/tuiter/ExploreScreen/ExploreScreen";
import HomeScreen from "./components/tuiter/HomeScreen/HomeScreen";



function App() {
    return (
        <BrowserRouter>
            <Route exact path="/">
                <Redirect to="/labs" />
            </Route>
            <div className="container">
                <Route path={["/", "/hello"]} exact={true}>
                    <HelloWorld/>
                </Route>
                <Route path={["/", "/labs"]} exact={true}>
                    <Labs/>
                </Route>
                <Route path={["/", "/tuiter/explore"]} exact={true}>
                    <ExploreScreen/>
                </Route>
                <Route path={["/tuiter/home"]} exact={true}>
                    <HomeScreen/>
                </Route>

            </div>
        </BrowserRouter>
    );
}

export default App;
