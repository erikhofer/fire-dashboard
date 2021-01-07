import Soukai from 'soukai'
import SoukaiSolid, { Fetch, SolidEngine } from 'soukai-solid'
import { ProjectModel } from '../models/project.model'

export function initSoukai(fetch: Fetch) {
  SoukaiSolid.loadSolidModels()
  Soukai.loadModels({ ProjectModel })
  // eslint-disable-next-line react-hooks/rules-of-hooks
  Soukai.useEngine(new SolidEngine(fetch))
}
