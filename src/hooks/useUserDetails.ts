import { getSolidDataset, getStringNoLocale, getThing, getUrl } from "@inrupt/solid-client";
import { VCARD } from "@inrupt/vocab-common-rdf";
import { useEffect, useState } from "react";
import { useAuth } from "../auth/auth";

export interface UserDetails {
  name?: string | null,
  imageUrl?: string | null,
  loading: boolean,
  error?: any
}

export function useUserDetails(): UserDetails {
  const [userDetails, setUserDetails] = useState<UserDetails>({ loading: true})
  const {session} = useAuth()

  useEffect(() => {
    const fetchData = async (): Promise<UserDetails> => {
      if (!session.info.webId) {
        return {error: "WebID missing", loading: false}
      }
      let dataset;
      try {
        dataset = await getSolidDataset(session.info.webId, { fetch: session.fetch });
      } catch(error) {
        return {error, loading: false}
      }
      const profile = getThing(dataset, session.info.webId)
      if (!profile) {
        return {loading: false, error: "Failed to load profile"}
      }
      return {
        loading: false,
        name: getStringNoLocale(profile, VCARD.fn),
        imageUrl: getUrl(profile, VCARD.hasPhoto)
      }
    }
    fetchData().then(setUserDetails)
  }, [session])

  return userDetails
}