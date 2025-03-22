const Image = require("../models/Image");

//upload image
const uploadImage =  async (req,res) =>
{
   try
   {
    const {title,description} = req.body;

    const imageUrl = `uploads/${req.file.filename}`;
    const order = await Image.countDocuments() + 1;


    const newImage = new Image({title,description,imageUrl,order});
    await newImage.save();

    res.json(newImage);
   }
   catch(error)
   {
    res.status(500).json({message:"Error uploading image",error})
   }
}

//get all image
const allImages = async (req,res) =>
{
  const images = await Image.find().sort({order:1});
  res.json(images);
}

// delete image
const deleteImages = async (req,res) =>
{
  await Image.findByIdAndDelete(req.params.id)
  res.json({message:"Image is deleted sucessfully!"})
}

// image order
const imageOrderUpdate = async(req,res) =>
{
    const {updatedImages} = req.body;

    for(let img of updatedImages)
    {
        await Image.findByIdAndUpdate(img._id,{order:img.order});
    }

    res.json({message:"order updated successfully!"})
}


module.exports = {uploadImage,allImages,deleteImages,imageOrderUpdate}

