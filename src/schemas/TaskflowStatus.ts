import { SchemaDef, RDBType } from 'reactivedb/interface'
import { schemaColl } from './schemas'
import { TaskflowId, TaskflowStatusId, UserId } from 'teambition-types'

export interface TaskflowStatusSnippet {
  _id: TaskflowStatusId
  _taskflowId: TaskflowId
  kind: 'start' | 'end' | 'unset'
  name: string
  pos: number
  rejectStatusIds: TaskflowStatusId[]
}

export interface TaskflowStatusSchema extends TaskflowStatusSnippet {
  _creatorId: UserId
  taskCount: number
  created: string
  updated: string
}

const schema: SchemaDef<TaskflowStatusSchema> = {
  _id: {
    type: RDBType.STRING,
    primaryKey: true
  },
  _creatorId: {
    type: RDBType.STRING
  },
  _taskflowId: {
    type: RDBType.STRING
  },
  created: {
    type: RDBType.DATE_TIME
  },
  kind: {
    type: RDBType.STRING
  },
  name: {
    type: RDBType.STRING
  },
  pos: {
    type: RDBType.NUMBER
  },
  rejectStatusIds: {
    type: RDBType.OBJECT
  },
  taskCount: {
    type: RDBType.NUMBER
  },
  updated: {
    type: RDBType.DATE_TIME
  }
}

schemaColl.add({ schema, name: 'TaskflowStatus' })
