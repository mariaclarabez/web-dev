import './vendors/bootstrap/css/bootstrap.min.css';
import './vendors/bootstrap/bootstrap.min.css';
import './vendors/fontawesome/css/all.min.css';
import './App.css';
import HelloWorld from "./components/hello-world";
import Labs from "./components/labs";
import Tuiter from "./components/tuiter";
import {BrowserRouter, Routes, Route}
    from "react-router-dom"
import ExploreScreen from "./components/tuiter/ExploreScreen/ExploreScreen";
import HomeScreen from "./components/tuiter/HomeScreen/index.js";
import ProfileScreen from "./components/tuiter/ProfileScreen/index.js";
import James from './components/James';

function App() {
    return (

        <BrowserRouter>
            <div className="container">
                <Routes>
                    <Route path="/">
                        <Route path="labs"
                               element={<Labs/>}/>
                        <Route path="hello"
                               element={<HelloWorld/>}/>
                        <Route path="tuiter"
                               element={<Tuiter/>}>
                            <Route index
                                   element={<HomeScreen/>}/>
                            <Route path="explore"
                                   element={<ExploreScreen/>}/>
                            <Route path="profile"
                                   element={<ProfileScreen/>}/>
                            {/*<Route path="notifications"*/}
                            {/*       element={<NotificationScreen/>}/>*/}
                        </Route>
                        <Route index element={<James />} />
                    </Route>
                </Routes>
            </div>
        </BrowserRouter>
    );
}


// function App() {
//      return (
//         <BrowserRouter>
//             <div className="container">
//                 <Routes>
//                     <Route path="/">
//                         <Route path="labs"
//                                element={<Labs/>}/>
//                         <Route index element={<Labs />} />
//                         <Route path="hello"
//                                element={<HelloWorld/>}/>
//                         <Route path="tuiter">
//                             <Route path={"explore"} element={<Tuiter />} />
//                             <Route path="explore" element={<ExploreScreen/>}/>
//                             <Route index element={<HomeScreen/>}/>
//                             <Route path="*" element={<HomeScreen/>} />
//                             {/*<Route path="notifications"*/}
//                             {/*       element={<NotificationScreen/>}/>*/}
//                             ...
//                         </Route>
//                     </Route>
//                 </Routes>
//             </div>
//         </BrowserRouter>
//     );
// }


export default App;
