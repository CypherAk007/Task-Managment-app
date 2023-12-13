import { useEffect, useState } from 'react';
import Modal from './UI/Modal';
import notepad from './assets/notepad3.png'
import { useDispatch, useSelector } from 'react-redux';
import { addProjActions } from './store/addProj';
import { projectActions } from './store/projects';

const MainSection = () => {
    const [enteredTitle, setEnteredTitle] = useState('')
    const [enteredDesc, setEnteredDesc] = useState('')
    const [enteredEmail, setEnteredEmail] = useState('')
    const [enteredPhone, setEnteredPhone] = useState()
    const [enteredDate, setEnteredDate] = useState('')
    
    const projectsArr = useSelector(state=>state.projects.projects)

    
    
    const titleChangeHandler = (event) => {
        setEnteredTitle(event.target.value)
    }

    const descChangeHandler = (event) => {
        setEnteredDesc(event.target.value)
    }

    const emailChangeHandler = (event) => {
        setEnteredEmail(event.target.value)
    }

    const phoneChangeHandler = (event) => {
        setEnteredPhone(event.target.value)
    }

    const dateChangeHandler = (event) => {
        setEnteredDate(event.target.value)
    }

    const modalToggle = useSelector(state => state.addProj.toggle)
    const dispatch = useDispatch()
    const addProjHandler = () => {
        dispatch(addProjActions.toggleModal())
    }

    const closeModal = () => {
        dispatch(addProjActions.toggleModal())
    }

    const saveModal = (event) => {
        event.preventDefault()
        console.log(enteredTitle, enteredDesc, enteredEmail, typeof(enteredPhone),enteredPhone, enteredDate);
        const value={
            title:enteredTitle,
            description:enteredDesc,
            email:enteredEmail,
            phone:enteredPhone,
            date:enteredDate
        }
        dispatch(projectActions.addProject(value))

        setEnteredTitle('')
        setEnteredDesc('')
        setEnteredEmail('')
        setEnteredPhone()
        setEnteredDate('')
        dispatch(addProjActions.toggleModal())
        
    }
    return (
        <div className={`  text-3xl absolute top-1/4 left-2/4 `}>
            <div className={`flex flex-col justify-center items-center `}>
                <div className={` w-80`}>
                    <img src={notepad} alt='notepad' />
                </div>
                <div className={`my-8 text-5xl font-bold `}>No Project Selected</div>
                <p className={`tracking-wide flex height-8 scale-x-110 scale-y-125`}>Select a project or get started with a new one</p>
                <button className={` border-none tracking-wide mt-16 bg-black text-white p-6 rounded-xl focus:outline-none focus:border-none `} onClick={addProjHandler}>Create New Project</button>
            </div>
            {modalToggle && <Modal
                titleChangeHandler={titleChangeHandler}
                descChangeHandler={descChangeHandler}
                emailChangeHandler={emailChangeHandler}
                phoneChangeHandler={phoneChangeHandler}
                dateChangeHandler={dateChangeHandler}
                enteredTitle={enteredTitle}
                enteredDesc={enteredDesc}
                enteredEmail={enteredEmail}
                enteredPhone={enteredPhone}
                enteredDate={enteredDate}
                onSaveModal={saveModal} onCloseModal={closeModal} title={'Title'} descriptionHeading={'Description'} emailHeading={'Email'} phoneHeading={'Phone No.'} dateHeading={'Date'}></Modal>}
        </div>

    )
}

export default MainSection;