const express = require('express');
const authenticate = require('../middleware/authenticate');

const {register,login ,getAllUsers,getUser,upload,loadUser,logout,dashboard} = require('../controllers/userController')

const router = express.Router();

router.post('/register' ,register);
router.post('/login' ,login);
router.get('/auth' ,authenticate, loadUser);
router.get('/logout' , logout);
router.get('/all' ,authenticate, getAllUsers);
router.get('/one/:id' ,getUser);
router.post('/upload',authenticate ,upload);
router.get('/dashboard' ,authenticate, dashboard);

module.exports = router;
