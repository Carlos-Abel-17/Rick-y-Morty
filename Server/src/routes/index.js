const {Router} = require("express")
const getCharById = require("../Handlers/getCharById")
const { postUser } = require("../controller/postUser")
const { Login } = require("../controller/Login")
const { deleteFav } = require("../controller/deleteFav")
const {postFav} = require("../controller/postFav")
const routes= Router()

routes.get("/character/:id",getCharById)
routes.get("/login",Login)
routes.post("/login",postUser)
routes.post("/fav",postFav)
routes.delete("/fav/:id",deleteFav)


module.exports=routes


