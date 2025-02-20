import express from "express";
import { 
    confirmar, 
    perfil, 
    registrar, 
    autenticar,
    olvidePassword,
    comprobarToken,
    nuevoPasword,
    actualizarPerfil,
    actualizarPassword
} from "../controllers/veterinarioController.js";

import checkAuth from "../middleware/authMiddleware.js";

const router = express.Router();

//area publica
router.post('/', registrar);
router.get('/confirmar/:token', confirmar)
router.post('/login', autenticar);
router.post('/olvide-password', olvidePassword);
router.route('/olvide-password/:token').get(comprobarToken).post(nuevoPasword)


//area privada
router.get('/perfil', checkAuth,perfil);
router.put('/perfil/:id', checkAuth, actualizarPerfil);
router.put('/actualizar-password', checkAuth, actualizarPassword);


export default router;