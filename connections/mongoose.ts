import mongoose from 'mongoose';

if (!process.env.DATABASE) {
  throw new Error('資料庫連接資訊錯誤');
}

// 資料庫連接
const DB = process.env.DATABASE.replace('<password>', process.env.DATABASE_PASSWORD ?? '');

// 連接資料庫
mongoose
  .connect(DB)
  .then(() => {
    console.log('資料庫連接成功');
  })
  .catch((err) => {
    console.error('資料庫連接失敗: ', err.message);
  });
