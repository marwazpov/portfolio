import ProjectPage from "../../components/ProjectPage"
import {projectsData} from "../../util/data/projectsData"

const TheMovieProject = () => {
  return (
    <ProjectPage data={projectsData} number={1} />
  )
}

export default TheMovieProject
