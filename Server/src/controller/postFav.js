const { Favorite } = require("../DB_connection");

const postFav = async (req, res) => {
  const {name, origin, status, image, species, gender } = req.body;

  if (!name || !origin || !status || !image || !species || !gender)res.status(401).json("falta datos");
    
  try {
     
     await Favorite.findOrCreate({
      where: {
        name:name,
        origin:origin,
        status:status,
        image:image,
        species:species,
        gender:gender
      },
    });
    const alel = await Favorite.findAll();
    res.status(200).json(alel);
  } catch (error) {
     res.status(500).json(error.message);
  }
};

module.exports={
  postFav
}