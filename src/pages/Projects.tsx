import React from 'react'
import { Button, Card, Col, Descriptions, Row } from 'antd'
import { useGetProjectListQuery } from '../queries/project.queries'
import { PageHeader } from '../components/PageHeader'
import { PageContent } from '../components/PageContent'
import { FolderOpenOutlined, PlusOutlined } from '@ant-design/icons'
import { AsyncPlaceholder } from '../components/AsyncPlaceholder'
import { useCreateProjectMutation } from '../mutations/project.mutations'
import { renderDate } from '../utils/date'
import { useProject } from '../services/project'
import { Redirect } from 'react-router-dom'

export const Projects: React.FC = () => {
  const result = useGetProjectListQuery()
  const { project: currentProject, setProject } = useProject()
  const createMutation = useCreateProjectMutation()

  const createProject = () => createMutation.mutate('My Project')

  if (currentProject) {
    return <Redirect to="/" />
  }

  if (result.data === undefined) {
    return <AsyncPlaceholder {...result} />
  }

  const projects = result.data

  return (
    <>
      <PageHeader
        title="FIRE Projects"
        extra={[
          <Button
            key="1"
            type="primary"
            icon={<PlusOutlined />}
            onClick={createProject}
          >
            Create Project
          </Button>
        ]}
      />
      <PageContent>
        <Row gutter={[16, 16]}>
          {projects.map((project, index) => (
            <Col key={index} span={6}>
              <Card title={project.name}>
                <Descriptions column={1}>
                  <Descriptions.Item label="Created">
                    {renderDate(project.createdAt)}
                  </Descriptions.Item>
                  <Descriptions.Item label="Modified">
                    {renderDate(project.updatedAt)}
                  </Descriptions.Item>
                </Descriptions>
                <Button
                  icon={<FolderOpenOutlined />}
                  type="primary"
                  block
                  onClick={() => setProject(project)}
                >
                  Open Project
                </Button>
              </Card>
            </Col>
          ))}
        </Row>
      </PageContent>
    </>
  )
}
