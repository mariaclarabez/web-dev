import React from "react";
// import tuits from "../data/tuits.json";
import TuitListItem
    from "./tuit-list-item";
import './tuit.css';
import {useSelector} from "react-redux";

const TuitList = () => {
    const tuits = useSelector( state => state.tuits);
    return (
        <ul className="ttr-tuits list-group">
            {
                tuits.map && tuits.map(tuit =>
                    <TuitListItem key={tuit._id}
                                  tuit={tuit}/>)
            }
        </ul>
    );
}

export default TuitList;