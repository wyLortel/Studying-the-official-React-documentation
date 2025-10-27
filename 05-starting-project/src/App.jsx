import NewProject from "./components/NewProject";
import ProjectsSidebar from "./components/ProjectsSidebar";
import NoProjectSelected from "./components/NoProjectSelected";
import { useState } from "react";

function App() {
  const [projectsState ,setProjectsState] = useState({
    selectedProjectId : undefined,
    projects:[]
  });


function onhandleStartAddProject(){
  setProjectsState(prevState=>{
    return{
      ...prevState, //나머지는 동일하게 리턴 이전상태 그대로 복사 뒤에 넣으면 모든게 봇다 되므로 덮어져버림 그래서 가장앞에 써야할듯 
      selectedProjectId : null,
    }
  });
}



  function handleAddProject(projectData){
    setProjectsState(prevState => {
      const projectId = Math.random();

      const newProject = {
        ...projectData,
        id:projectId,
      }

      return{
        ...prevState,
        selectedProjectId:undefined,
        projects:[...prevState.projects , newProject]
      }
    });
  }

  let content;

  if(projectsState.selectedProjectId === null){
    content = <NewProject onAdd={handleAddProject}/>
  } else if (projectsState.selectedProjectId === undefined){
    content = <NoProjectSelected onStartAddProject={onhandleStartAddProject}/>
  }


  return (
    <main className="h-screen my-8 flex gap-8">
      <ProjectsSidebar 
        onStartAddProject={onhandleStartAddProject} 
        projects={projectsState.projects}/>
      {content}
    </main>
  );
}

export default App;
