const {Favorite}=require('../DB_connection')

const deleteFav=async (req,res)=>{
 const {id}=req.params
 try {
    await Favorite.destroy({where:{id:id}})
    const devolver = await Favorite.findAll()
    res.status(200).json(devolver)
 } catch (error) {
    res.status(500).json({error:error.message})
 }
}

module.exports={
 deleteFav
}