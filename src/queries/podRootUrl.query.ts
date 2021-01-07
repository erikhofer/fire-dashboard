import { getSolidDataset, getThing, getUrl } from '@inrupt/solid-client'
import { useQuery } from 'react-query'
import { useAuth } from '../services/auth'
import { queryNames } from './names'

export const usePodRootUrlQuery = () => {
  const { webId, fetch, isLoggedIn } = useAuth()
  return useQuery(
    queryNames.podRootUrl,
    async () => {
      let dataset = await getSolidDataset(webId, { fetch })
      const profile = getThing(dataset, webId)
      if (!profile) {
        throw new Error('Could not load profile')
      }
      return getUrl(profile, 'http://www.w3.org/ns/pim/space#storage')
    },
    { enabled: isLoggedIn }
  )
}
