import { useQuery } from 'react-query'
import { Project, ProjectModel } from '../models/project.model'
import { fireBasePath } from '../models/storagePaths'
import { queryNames } from './names'
import { usePodRootUrlQuery } from './podRootUrl.query'

export const useGetProjectListQuery = () => {
  const { data: podRootUrl } = usePodRootUrlQuery()

  return useQuery(
    [queryNames.projects, podRootUrl],
    async () => {
      const models = await ProjectModel.from(podRootUrl + fireBasePath).all()
      return models.map(m => new Project(m))
    },
    { enabled: !!podRootUrl }
  )
}
