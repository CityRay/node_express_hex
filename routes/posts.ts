import express from 'express';
import postController from '../controllers/postController';

const router = express.Router();

// 取得全部文章
router.get('/', postController.getPosts);

// 新增文章
router.post('/', postController.createPost);

// 刪除全部文章
router.delete('/all', postController.deleteAllPost);

// 刪除文章
router.delete('/:id', postController.deletePost);

// 更新文章
router.patch('/:id', postController.updatePost);

export default router;
