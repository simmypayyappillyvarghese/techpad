const router=require('express').Router();
const userRoutes=require('./userRoutes.js');
const homeRoutes=require('./homeRoutes.js');

router.use('/user',userRoutes);
router.use('/home',homeRoutes);




module.exports=router;