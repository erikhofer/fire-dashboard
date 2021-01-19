import { Dropdown, Menu } from 'antd'
import React from 'react'
import { useProject } from '../services/project'

export const ProjectControl: React.FC = () => {
  const { project, setProject } = useProject()

  if (!project) {
    return null
  }

  return (
    <Dropdown
      overlay={
        <Menu>
          <Menu.Item onClick={() => setProject(null)}>Switch Project</Menu.Item>
        </Menu>
      }
    >
      <span style={{ cursor: 'pointer' }}>{project.name}</span>
    </Dropdown>
  )
}
