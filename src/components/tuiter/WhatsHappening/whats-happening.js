import React, {useState} from "react";
import {useDispatch}
    from "react-redux";
import {createTuit}
    from "../../../actions/tuits-actions";

const WhatsHappening = () => {
    let [whatsHappening, setWhatsHappening]
        = useState('');
    const dispatch = useDispatch();
    const [newTuit, setNewTuit] =
        useState({tuit: 'New tuit', postedBy: {username: 'Elon Musk'}, likes: 0, dislikes: 0,
        verified: true, handle: 'elonmusk'});

    // const tuitClickHandler = () => {
    //     dispatch({type: 'create-tuit',
    //         tuit: whatsHappening
    //     });

    return (
        <>
            <table style={{marginBottom: '16px'}}>
                <tr>
                    <td style={{verticalAlign: 'top'}}>
                        <img src={'/images/elon.jpg'}
                             className="rounded-circle"
                             style={{width: '48px', margin: '16px'}} alt=""/>
                    </td>
                    <td style={{width: "100%"}}>
                        <textarea
                                  className="form-control"
                                  onChange={(e) =>
                                      setNewTuit({...newTuit,
                                          tuit: e.target.value})}
                                  style={{width: "100%", color: "white",
                                      padding: "0px",
                                      paddingTop: "15px",
                                      backgroundColor: "black"}}
                                  placeholder="What's happening?"></textarea>
                        <hr/>
                        <span>
                            <a href="/"><i className="fas fa-image me-3"></i></a>
                            <a href="/"><i className="fas fa-chart-line me-3"></i></a>
                            <a href="/"><i className="fas fa-smile me-3"></i></a>
                            <a href="/"><i className="fas fa-calendar me-3"></i></a>
                        </span>
                        <button onClick={() =>
                            createTuit(dispatch, newTuit)}
                                className="btn btn-primary fa-pull-right rounded-pill">
                            Tuit
                        </button>

                        {/*<button onClick={tuitClickHandler} className="btn btn-primary fa-pull-right rounded-pill">*/}
                        {/*    Tweet*/}
                        {/*</button>*/}
                    </td>
                </tr>
            </table>
        </>
    );

}
export default WhatsHappening;