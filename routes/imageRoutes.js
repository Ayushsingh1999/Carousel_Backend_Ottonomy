const express = require('express');
const { uploadImage, allImages,deleteImages,imageOrderUpdate} = require('../controllers/imageControllers');
const upload = require('../middleware/uploadMiddleware')

const router =  express.Router();


router.post('/upload',upload.single('image'),uploadImage)

router.get('/',allImages)

router.delete('/:id',deleteImages)

router.put('/order',imageOrderUpdate)   // image order



module.exports = router