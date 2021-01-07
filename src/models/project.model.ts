import { FieldType, Model } from 'soukai'
import { SolidModel } from 'soukai-solid'

export class Project {
  name?: string
  updatedAt?: Date
  createdAt?: Date

  constructor(model: Model) {
    this.name = model.name
    this.updatedAt = model.updatedAt
    this.createdAt = model.createdAt
  }
}

export class ProjectModel extends SolidModel {
  static rdfContexts = {
    fire: 'https://w3id.org/personalfinance/fire',
    foaf: 'http://xmlns.com/foaf/0.1/'
  }

  static rdfsClasses = ['fire:Project']

  static fields = {
    name: {
      type: FieldType.String,
      rdfProperty: 'foaf:name'
    }
  }
}
