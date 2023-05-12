import {createSchema} from 'sanity'

import pageInfo from './pageInfo'
import social from './social'
import experience from './experience'
import skill from './skill'
import project from './project'

export const schemaTypes = [pageInfo, social, experience, skill, project]

export default createSchema({
  name: 'default',
  types: schemaTypes.concat([skill, pageInfo, experience, social, project]),
})
