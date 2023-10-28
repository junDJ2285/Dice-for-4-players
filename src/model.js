import React from "react";
import styles from "./App.css";

const Modal= ({show , onclose})=>{
    if(!show){
        return null
    }
    return <div className="model">
        <div className="model-head">
            <button onClick={onclose} className="onclose">X</button>
            <h1> working</h1>
        </div>
    </div>
};

export default Modal;