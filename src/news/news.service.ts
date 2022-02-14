/*
 * @Author: xuanyu
 * @LastEditors: xuanyu
 * @email: 969718197@qq.com
 * @github: https://github.com/z-xuanyu
 * @Date: 2021-12-28 11:32:42
 * @LastEditTime: 2022-02-14 17:39:08
 * @Description: Modify here please
 */
import { PaginationResult } from '@app/common/ResponseResultModel';
import { News } from '@app/db/modules/news.model';
import { Injectable } from '@nestjs/common';
import { ReturnModelType } from '@typegoose/typegoose';
import { InjectModel } from 'nestjs-typegoose';
import { CreateNewsDto } from './dto/create-news.dto';
import { QueryNewsDto } from './dto/query-news.dto';
import { UpdateNewsDto } from './dto/update-news.dto';

@Injectable()
export class NewsService {
  // 注入
  constructor(
    @InjectModel(News)
    private newsModel: ReturnModelType<typeof News>,
  ) {}

  /**
   * 新增新闻文章
   *
   * @param {CreateNewsDto} createNewsDto
   * @return {*}  {Promise<News>}
   * @memberof NewsService
   */
  async create(createNewsDto: CreateNewsDto): Promise<News> {
    return await this.newsModel.create(createNewsDto);
  }

  /**
   * 新闻文章列表
   *
   * @param {QueryNewsDto} parameters 参数对象
   * @return {*}  {Promise<PaginationResult<Array<News>>>}
   * @memberof NewsService
   */
  async findAll(
    parameters: QueryNewsDto,
  ): Promise<PaginationResult<Array<News>>> {
    let total = 0;
    const result = await this.newsModel
      .find({ name: { $regex: new RegExp(parameters.title, 'i') } })
      .populate('tags')
      .limit(~~parameters.pageSize)
      .skip(~~((parameters.pageNumber - 1) * parameters.pageSize))
      .then((doc) => {
        total = doc.length;
        return doc;
      });
    return {
      total,
      items: result,
    };
  }

  /**
   * 新闻文章详情
   *
   * @param {string} id 文章id
   * @return {*}  {Promise<News>}
   * @memberof NewsService
   */
  async findOne(id: string): Promise<News> {
    return await this.newsModel.findById(id);
  }

  /**
   * 更新新闻文章信息
   *
   * @param {string} id 文章id
   * @param {UpdateNewsDto} updateNewsDto
   * @return {*}  {Promise<News>}
   * @memberof NewsService
   */
  async update(id: string, updateNewsDto: UpdateNewsDto): Promise<News> {
    return await this.newsModel.findByIdAndUpdate(id, updateNewsDto);
  }

  /**
   * 删除新闻文章
   *
   * @param {string} id 文章id
   * @return {*}  {Promise<News>}
   * @memberof NewsService
   */
  async remove(id: string): Promise<News> {
    return await this.newsModel.findOneAndDelete({ _id: id });
  }
}
