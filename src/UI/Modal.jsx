import { createPortal } from "react-dom";
import Card from "./Card";
import classes from './Modal.module.scss'
import { useState } from "react";
const Modal = (props)=>{
    
    return createPortal(
        <div>
            <div className={classes.backdrop} onClick={props.onCloseModal}></div>
    <Card className={`${classes.modal}`}>
        <form onSubmit={props.onSaveModal}>
        <footer>
            <button onClick={props.onCloseModal}>Cancel</button>
            <button type="submit">Save</button>
        </footer>
        <header>
            <h2>{props.title}</h2>
            <input onChange={props.titleChangeHandler} value={props.enteredTitle} type="text" placeholder={props.title}></input>
        </header>
        <div>
            <h2>
                {props.descriptionHeading}
            </h2>
            <input onChange={props.descChangeHandler} value={props.enteredDesc} type="text" placeholder={props.descriptionHeading}   ></input>
        </div>
        
        <div>
            <h2>{props.emailHeading}</h2>
            <input onChange={props.emailChangeHandler} value={props.enteredEmail} type="email" placeholder={props.emailHeading}></input>
        </div>
        <div>
            <h2>{props.phoneHeading}</h2>
            <input onChange={props.phoneChangeHandler}value={props.enteredPhone} type="number" placeholder={props.phoneHeading}></input>
        </div>
        <div>
            <h2>{props.dateHeading}</h2>
            <input onChange={props.dateChangeHandler} value={props.enteredDate} type="date" placeholder={props.dateHeading}></input>
        </div>
        </form>

    </Card>
        </div>,
        document.getElementById('modal')
    )
}

export default Modal;