import {DefaultCrudRepository} from '@loopback/repository';
import {GitHubInfoModel, GitHubInfoModelRelations} from '../models';
import {DbMongoDataSource} from '../datasources';
import {inject} from '@loopback/core';

export class GitHubInfoModelRepository extends DefaultCrudRepository<
  GitHubInfoModel,
  typeof GitHubInfoModel.prototype.id,
  GitHubInfoModelRelations
> {
  constructor(
    @inject('datasources.dbMongo') dataSource: DbMongoDataSource,
  ) {
    super(GitHubInfoModel, dataSource);
  }
}
