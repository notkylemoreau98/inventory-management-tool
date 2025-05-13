const express = require('express');
const router = express.Router();
const upload = require('../middleware/s3Uploader');
const controller = require('../controllers/productController');

router.get('/', controller.getAll);
router.post('/', upload.single('image'), controller.create);

module.exports = router;
