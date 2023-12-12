import { useDispatch } from "react-redux"
import { addProjActions } from "./store/addProj"

let projectsArray = ['Learning React','Mastering React']

const YourProjects = ()=>{
    const dispatch = useDispatch()
    const addProjHandler = ()=>{
        dispatch(addProjActions.toggleModal())
    }
    return(
        <div className={`mt-16 ml-24 text-2xl tracking-widest font-thin`}>
            <div className={`text-3xl font-bold uppercase mb-8`}>Your Projects</div>
            <button onClick={addProjHandler} className={`bg-zinc-800 p-4 rounded-xl tracking-widest`}>+ Add Project</button>
            <div className={`mt-12 flex flex-col`}> 
                {projectsArray.map((item)=><div className={`px-4 py-4 flex-auto w-8/12 hover:bg-zinc-800 rounded-xl`}>{item}</div>)}
            </div>
        </div>
    )
}

export default YourProjects;