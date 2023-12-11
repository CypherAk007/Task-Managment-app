import classes from './App.module.scss'
import YourProjects from './YourProjects';
import MainSection from './MainSection';
const App = ()=>{
  return (
    <div className={` flex flex-row `}>
      {/* <h1 className={`${classes.app} text-3xl`}>Hello World</h1> */}
      <div className={`bg-black text-white flex-25 min-h-screen`}>
        <YourProjects></YourProjects>
      </div>
      <div className={` flex-1`}><MainSection></MainSection></div>

    </div>
  )
}

export default App;