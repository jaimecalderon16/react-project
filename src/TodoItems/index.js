import React from "react";
import "./TodoItems.css";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faCheck, faXmark} from '@fortawesome/free-solid-svg-icons';

function TodoItems(props){
    return(
        <li className="TodoItems">
        <FontAwesomeIcon className={`icon icon-check ${props.complete && 'icon-check-active'}`}
         icon={faCheck}
         onClick={props.onComplete}
         ></FontAwesomeIcon>
        <p className={`todoitems-p ${props.complete && 'todoitems-p-complete'}`}>{props.text}</p>
        <FontAwesomeIcon 
        className="icon icon-delete"
         icon={faXmark}
         onClick={props.onDelete}
         ></FontAwesomeIcon>
        </li>
    );
}

export {TodoItems};