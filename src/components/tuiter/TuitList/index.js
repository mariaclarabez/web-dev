import React, {useEffect} from "react";
import TuitListItem
    from "./tuit-list-item";
import './tuit.css';
import {useDispatch, useSelector} from "react-redux";
import * as service
    from '../../../services/tuits-service';

const TuitList = () => {
    const tuits = useSelector( state => state.tuits);
    const dispatch = useDispatch();
    const findAllTuits = async () => {
        const tuits = await service.findAllTuits();
        dispatch({
            type: 'FIND_ALL_TUITS',
            tuits: tuits
        });
    }
    useEffect(findAllTuits, []);
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