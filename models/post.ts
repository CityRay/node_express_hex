import { Schema, model } from 'mongoose';
import type { PostModel } from '../type/post';

const postSchema = new Schema<PostModel>(
  {
    name: {
      type: String,
      required: [true, '姓名未填寫']
    },
    title: {
      type: String,
      required: [true, '標題未填寫']
    },
    content: {
      type: String,
      required: [true, '文章內容未填寫']
    },
    description: {
      type: String,
      default: ''
    },
    tag: {
      type: [String],
      default: []
    },
    image: {
      type: String,
      default: ''
    },
    likes: {
      type: Number,
      default: 0
    },
    comments: {
      type: Number,
      default: 0
    },
    isPublic: {
      type: Boolean,
      default: false
    }
  },
  {
    versionKey: false,
    timestamps: true
  }
);
const Post = model('Post', postSchema);

export default Post;
