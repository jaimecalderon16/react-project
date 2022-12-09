import React from "react";
import { todoContext } from "../todoContext";
import "./CreateButton.css";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faPlus} from '@fortawesome/free-solid-svg-icons';

function CreateButtom(){
    const {openModal, setOpenModal} = React.useContext(todoContext);

    const onClickButton = () => {
        setOpenModal(true)
    }

    return(
        <button className="button" onClick={onClickButton}><FontAwesomeIcon icon={faPlus} className="button-plus"></FontAwesomeIcon></button>
    );
}

export {CreateButtom};