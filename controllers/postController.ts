import { type Request, type Response } from 'express';
import handleResponse from '../services/handleResponse';
import Post from '../models/postModel';
import { type PostModel, type PostResult } from '../type/post';
import { type FilterQuery } from 'mongoose';

const postController = {
  // 取得全部文章
  async getPosts(req: Request, res: Response) {
    // asc 遞增(由小到大，由舊到新) : 1
    // desc 遞減(由大到小、由新到舊) : -1
    const timeSort = req.query.timeSort === 'asc' ? 1 : -1;
    const q: FilterQuery<PostModel> =
      req.query.q !== undefined ? { content: new RegExp(String(req.query.q)) } : {};

    const posts: PostResult[] = await Post.find(q)
      .populate({
        path: 'user', // user 欄位
        select: 'name photo'
      })
      .sort({ createdAt: timeSort })
      .lean();

    handleResponse(res, 200, posts, '取得成功');
  },
  // 新增文章
  async createPost(req: Request, res: Response) {
    try {
      const { body } = req;

      if (body?.title && body.content) {
        const newPost = await Post.create(body);
        handleResponse(res, 200, newPost, '新增成功');
      } else {
        throw new Error('請確認欄位是否填寫完整');
      }
    } catch (error: any) {
      console.error(error);
      handleResponse(res, 400, null, error.message, error);
    }
  },
  // 更新文章
  async updatePost(req: Request, res: Response) {
    try {
      const _id = req.params.id;
      if (!_id) {
        throw new Error('ID is required');
      }

      const { body } = req as { body: PostResult };
      if (body?.title && body.content) {
        const postData = await Post.findByIdAndUpdate(_id, body);
        if (!postData) {
          throw new Error('找不到文章');
        } else {
          handleResponse(res, 200, { _id: postData._id }, '更新成功');
        }
      } else {
        throw new Error('請確認欄位是否填寫完整');
      }
    } catch (error: any) {
      console.error(error);
      handleResponse(res, 400, null, error.message, error);
    }
  },
  // 刪除文章
  async deletePost(req: Request, res: Response) {
    try {
      const _id = req.params.id;
      if (!_id) {
        throw new Error('ID is required');
      }

      await Post.findByIdAndDelete(_id);
      handleResponse(res, 200, [], '刪除成功');
    } catch (error: any) {
      console.error(error);
      handleResponse(res, 400, null, error.message, error);
    }
  },
  async deleteAllPost(req: Request, res: Response) {
    try {
      await Post.deleteMany();
      handleResponse(res, 200, [], '刪除成功');
    } catch (error: any) {
      console.error(error);
      handleResponse(res, 400, null, error.message, error);
    }
  }
};

export default postController;
