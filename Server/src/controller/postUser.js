const {User} = require('../DB_connection')

const postUser = async(req,res)=>{
  const {email,password}=req.body;
  if (!email || !password) {
     res.status(400).json('Faltan datos')
  }
  try {
    const responsive = await User.create({email,password})
    res.status(200).json(responsive) 
  } catch (error) {
    res.status(500).json({error:error.message})
  }
}

module.exports={
    postUser
}