import React, { useContext, useState } from 'react'
import { Project } from '../models/project.model'

const ProjectContext = React.createContext<{
  project: Project | null
  setProject: (project: Project | null) => void
}>({} as any)

export const ProjectProvider: React.FC = props => {
  const [project, setProject] = useState<Project | null>(null)

  return (
    <ProjectContext.Provider value={{ project, setProject }}>
      {props.children}
    </ProjectContext.Provider>
  )
}

export const useProject = () => useContext(ProjectContext)
