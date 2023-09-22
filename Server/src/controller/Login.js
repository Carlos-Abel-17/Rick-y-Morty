const {User}=require('../DB_connection')

const Login=async(req,res)=>{
    const{email,password}=req.query
    if (!email || !password) {
        res.status(400).json('faltan datos vengo del login')
        return
    }
    try {
        const user = await User.findOne({ where: {email} });
       
         if (!user) {
            return res.status(404).json('Usuario no encontrado')
         } 
         if (user.password !== password) {
            return res.status(403).json('Contraseña incorrecta')
         }
         return res.status(200).json({access:true})
        
    } catch (error) {
        res.status(500).json({error:error.message})
    }
}

module.exports={
    Login
}