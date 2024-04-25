import express from 'express';
import postController from '../controllers/postController';

const router = express.Router();

// 取得全部文章
router.get(
  '/',
  /**
   * #swagger.tags = ['Post']
   * #swagger.description = '取得所有 Posts 文章'
   */
  /* #swagger.responses[200] = {
      description: '取得所有文章成功',
      schema: {
        "status": true,
        "data": [{
          "_id": "661f4919e7a934d777e3cf1f",
          "name": "name",
          "title": "title",
          "content": "content",
          "description": "description9",
          "tag": [
            "教學"
          ],
          "image": "https://placehold.co/600x400",
          "likes": 0,
          "comments": 0,
          "isPublic": true,
          "createdAt": "2024-04-17T03:59:21.350Z",
          "updatedAt": "2024-04-24T16:18:34.032Z"
        }]
      }
  } */
  postController.getPosts
);

// 新增文章
router.post(
  '/',
  /**
   * #swagger.tags = ['Post']
   * #swagger.description = '新增 Post 文章'
      #swagger.parameters['post'] = {
        in: 'body',
        description: '新增文章',
        required: true,
        schema: {
          $name: 'name',
          $title: 'title',
          $content: 'content',
          $description: 'description',
          $tag: ['教學'],
          image: 'https://placehold.co/600x400',
          isPublic: true
        }
      }
      #swagger.security = [{
        "JWT": []
      }]
   */
  postController.createPost
);

// 刪除全部文章
router.delete('/all', postController.deleteAllPost);

// 刪除文章
router.delete('/:id', postController.deletePost);

// 更新文章
router.patch('/:id', postController.updatePost);

export default router;
