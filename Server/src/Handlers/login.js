const usuario =require('../utils/user') 



const login =(req,res)=>{
    const{email,password}=req.query
    const verificar= usuario.find((user)=>user.email === email && user.password === password) 
  
    if (verificar) {
        res.status(200).json({access:true})
    }else{
        res.status(200).json({access:false})
    }
}


module.exports=login
