import { type Request, type Response } from 'express';
import handleResponse from '../services/handleResponse';
import User from '../models/user';
import { type UserResult } from '../type/user';

const userController = {
  // 取得全部
  async getUserList(req: Request, res: Response) {
    const user: UserResult[] = await User.find();
    handleResponse(res, 200, user, '取得成功');
  },
  // 取得單一User
  async getUser(req: Request, res: Response) {
    try {
      const _id = req.params.id;
      if (!_id) {
        throw new Error('ID is required');
      }

      const userData: UserResult = (await User.findOne({ _id }))!;
      if (!userData) {
        throw new Error('找不到使用者');
      }

      handleResponse(res, 200, userData, '取得成功');
    } catch (error: any) {
      console.error(error);
      handleResponse(res, 400, null, error.message, error);
    }
  }
};

export default userController;
