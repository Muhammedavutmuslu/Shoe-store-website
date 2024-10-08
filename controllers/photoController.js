import Photo from '../models/photoModel.js';

const createPhoto = async (req, res) => {
    try {
        const photo = await Photo.create(req.body);
      res.status(201).json(
      {
        succeded: true,
        photo,
      });
     
      } catch (error) {
        res.status(500).json({
          succeded: false,
          error,
        });
      }
    
};
const getAllPhotos = async (req, res) => {
    try {
      const photos = await Photo.find({});
      res.status(200).render('photos', {
        photos,
        //link: 'photos',
      });
    } catch (error) {
      res.status(500).json({
        succeded: false,
        error,
      });
    }
  };
  const updatePhoto = async (req, res) => {
    try {
      const { id } = req.params;
      const updatedPhoto = await Photo.findByIdAndUpdate(id, req.body, { new: true });
      res.status(200).json({
        succeded: true,
        photo: updatedPhoto,
      });
    } catch (error) {
      res.status(500).json({
        succeded: false,
        error,
      });
    }
  }
export { createPhoto, getAllPhotos, updatePhoto};