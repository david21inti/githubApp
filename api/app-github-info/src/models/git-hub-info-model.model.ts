import {Entity, model, property} from '@loopback/repository';

@model({settings: {strict: false}})
export class GitHubInfoModel extends Entity {
  @property({
    type: 'number',
    id: true,
  })
  _id?: number;

  @property({
    type: 'string',
    required: true,
  })
  name: string;

  @property({
    type: 'string',
    required: true,
  })
  url: string;

  @property({
    type: 'number',
    required: true,
  })
  repos: number;

  // Define well-known properties here

  // Indexer property to allow additional data
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [prop: string]: any;

  constructor(data?: Partial<GitHubInfoModel>) {
    super(data);
  }
}

export interface GitHubInfoModelRelations {
  // describe navigational properties here
}

export type GitHubInfoModelWithRelations = GitHubInfoModel & GitHubInfoModelRelations;
