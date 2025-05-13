const multer = require('multer');
const multerS3 = require('multer-s3');
const { S3Client } = require('@aws-sdk/client-s3');

require('dotenv').config();

const s3 = new S3Client({
  region: process.env.AWS_REGION,
  credentials: {
    accessKeyId: process.env.AWS_ACCESS_KEY_ID,
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
  },
});

const upload = multer({
  storage: multerS3({
    s3: s3,
    bucket: process.env.AWS_S3_BUCKET_NAME,
    key: function (req, file, cb) {
      const timestamp = Date.now();
      const filename = `${timestamp}-${file.originalname}`;
      cb(null, `products/${filename}`);
    },
    contentType: multerS3.AUTO_CONTENT_TYPE,
    // acl: 'public-read',
  }),
});

module.exports = upload;
