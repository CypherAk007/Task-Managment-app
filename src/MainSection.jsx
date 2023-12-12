import Modal from './UI/Modal';
import notepad from './assets/notepad3.png'
const MainSection = ()=>{
    return(
        <div className={`  text-3xl absolute top-1/4 left-2/4 `}>
            <div className={`flex flex-col justify-center items-center `}>
            <div className={` w-80`}>
                <img src={notepad} alt='notepad'/>
            </div>
            <div className={`my-8 text-5xl font-bold `}>No Project Selected</div>
            <p className={`tracking-wide flex height-8 scale-x-110 scale-y-125`}>Select a project or get started with a new one</p>
            <button className={` border-none tracking-wide mt-16 bg-black text-white p-6 rounded-xl focus:outline-none focus:border-none `}>Create New Project</button>
            </div>
            <Modal title={'Title'} descriptionHeading={'Description'} emailHeading={'Email'} phoneHeading={'Phone No.'} dateHeading={'Date'}></Modal>
        </div>
        
    )
}

export default MainSection;