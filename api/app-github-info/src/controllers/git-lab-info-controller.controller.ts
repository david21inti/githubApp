import {
  Count,
  CountSchema,
  Filter,
  FilterExcludingWhere,
  repository,
  Where,
} from '@loopback/repository';
import {
  post,
  param,
  get,
  getModelSchemaRef,
  patch,
  put,
  del,
  requestBody,
} from '@loopback/rest';
import {GitHubInfoModel} from '../models';
import {GitHubInfoModelRepository} from '../repositories';

export class GitLabInfoControllerController {
  constructor(
    @repository(GitHubInfoModelRepository)
    public gitHubInfoModelRepository : GitHubInfoModelRepository,
  ) {}

  @post('/githubinfo', {
    responses: {
      '200': {
        description: 'GitHubInfoModel model instance',
        content: {'application/json': {schema: getModelSchemaRef(GitHubInfoModel)}},
      },
    },
  })
  async create(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(GitHubInfoModel, {
            title: 'NewGitHubInfoModel',
            exclude: ['id'],
          }),
        },
      },
    })
    gitHubInfoModel: Omit<GitHubInfoModel, 'id'>,
  ): Promise<GitHubInfoModel> {
    console.log("a",1);
    return this.gitHubInfoModelRepository.create(gitHubInfoModel);
  }

  @get('/githubinfo/count', {
    responses: {
      '200': {
        description: 'GitHubInfoModel model count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async count(
    @param.where(GitHubInfoModel) where?: Where<GitHubInfoModel>,
  ): Promise<Count> {
    console.log("a",2);
    return this.gitHubInfoModelRepository.count(where);
  }

  @get('/githubinfo', {
    responses: {
      '200': {
        description: 'Array of GitHubInfoModel model instances',
        content: {
          'application/json': {
            schema: {
              type: 'array',
              items: getModelSchemaRef(GitHubInfoModel, {includeRelations: true}),
            },
          },
        },
      },
    },
  })
  async find(
    @param.filter(GitHubInfoModel) filter?: Filter<GitHubInfoModel>,
  ): Promise<GitHubInfoModel[]> {
    console.log("a",3);
    return this.gitHubInfoModelRepository.find(filter);
  }

  @patch('/githubinfo', {
    responses: {
      '200': {
        description: 'GitHubInfoModel PATCH success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async updateAll(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(GitHubInfoModel, {partial: true}),
        },
      },
    })
    gitHubInfoModel: GitHubInfoModel,
    @param.where(GitHubInfoModel) where?: Where<GitHubInfoModel>,
  ): Promise<Count> {
    console.log("a",4);
    return this.gitHubInfoModelRepository.updateAll(gitHubInfoModel, where);
  }

  @get('/githubinfo/{id}', {
    responses: {
      '200': {
        description: 'GitHubInfoModel model instance',
        content: {
          'application/json': {
            schema: getModelSchemaRef(GitHubInfoModel, {includeRelations: true}),
          },
        },
      },
    },
  })
  async findById(
    @param.path.number('id') id: number,
    @param.filter(GitHubInfoModel, {exclude: 'where'}) filter?: FilterExcludingWhere<GitHubInfoModel>
  ): Promise<GitHubInfoModel> {
    console.log("a",5);
    return this.gitHubInfoModelRepository.findById(id, filter);
  }

  @patch('/githubinfo/{id}', {
    responses: {
      '204': {
        description: 'GitHubInfoModel PATCH success',
      },
    },
  })
  async updateById(
    @param.path.number('id') id: number,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(GitHubInfoModel, {partial: true}),
        },
      },
    })
    gitHubInfoModel: GitHubInfoModel,
  ): Promise<void> {
    console.log("a",6);
    await this.gitHubInfoModelRepository.updateById(id, gitHubInfoModel);
  }

  @put('/githubinfo/{id}', {
    responses: {
      '204': {
        description: 'GitHubInfoModel PUT success',
      },
    },
  })
  async replaceById(
    @param.path.number('id') id: number,
    @requestBody() gitHubInfoModel: GitHubInfoModel,
  ): Promise<void> {
    console.log("a",7);
    await this.gitHubInfoModelRepository.replaceById(id, gitHubInfoModel);
  }

  @del('/githubinfo/{id}', {
    responses: {
      '204': {
        description: 'GitHubInfoModel DELETE success',
      },
    },
  })
  async deleteById(@param.path.number('id') id: number): Promise<void> {
    console.log("a",8);
    await this.gitHubInfoModelRepository.deleteById(id);
  }
}
