import { useMutation, useQueryClient } from 'react-query'
import { ProjectModel } from '../models/project.model'
import { fireBasePath } from '../models/storagePaths'
import { queryNames } from '../queries/names'
import { usePodRootUrlQuery } from '../queries/podRootUrl.query'
import { messageService } from '../services/message'

export const useCreateProjectMutation = () => {
  const queryClient = useQueryClient()
  const storageUrl = usePodRootUrlQuery()
  return useMutation(
    async (name: string) => {
      await ProjectModel.at(storageUrl.data + fireBasePath).create({
        name
      })
    },
    {
      onError: messageService.error,
      onSuccess: () => {
        messageService.success('Project created')
        queryClient.invalidateQueries(queryNames.projects)
      }
    }
  )
}
