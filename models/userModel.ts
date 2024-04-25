import { Schema, model } from 'mongoose';
import type { UserModel } from '../type/user';

const userSchema = new Schema<UserModel>(
  {
    name: {
      type: String,
      required: [true, '姓名未填寫']
    },

    email: {
      type: String,
      required: [true, 'Email 未填寫']
    },
    photo: {
      type: String,
      default: ''
    }
  },
  {
    versionKey: false
  }
);
const User = model('User', userSchema);

export default User;
