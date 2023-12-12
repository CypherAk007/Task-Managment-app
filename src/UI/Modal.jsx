import { createPortal } from "react-dom";
import Card from "./Card";
import classes from './Modal.module.scss'
const Modal = (props)=>{
    return createPortal(
        <div>
            <div className={classes.backdrop} onClick={props.onCloseModal}></div>
    <Card className={`${classes.modal}`}>
        <footer>
            <button onClick={props.onCloseModal}>Cancel</button>
            <button>Save</button>
        </footer>
        <header>
            <h2>{props.title}</h2>
            <input type="text" placeholder={props.title}></input>
        </header>
        <div>
            <h2>
                {props.descriptionHeading}
            </h2>
            <input type="text" placeholder={props.descriptionHeading}   ></input>
        </div>
        
        <div>
            <h2>{props.emailHeading}</h2>
            <input type="email" placeholder={props.emailHeading}></input>
        </div>
        <div>
            <h2>{props.phoneHeading}</h2>
            <input type="number" placeholder={props.phoneHeading}></input>
        </div>
        <div>
            <h2>{props.dateHeading}</h2>
            <input type="date" placeholder={props.dateHeading}></input>
        </div>

    </Card>
        </div>,
        document.getElementById('modal')
    )
}

export default Modal;