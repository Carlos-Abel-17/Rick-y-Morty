let myFavorites=[];

const postFav=(req,res)=>{
    const character=req.body
   
    myFavorites.push(character)
    res.status(200).json(myFavorites)

}

const deleteFav=(req,res)=>{
   const {id}=req.params
   
   const DLTFav = myFavorites.filter((character)=>character.id !== Number(id))

   myFavorites = DLTFav
   res.status(200).json(DLTFav)
}



module.exports={postFav,deleteFav}