import express from 'express'
import {approveCommentById, deleteCommentById, getAllBlogsAdmin, getAllComments, getDashboard, userLogin} from '../controllers/user.controller.js'
import auth from '../middleware/auth.js';
const userRouter = express.Router();

userRouter.post("/login",userLogin);
userRouter.get('/comments',auth,getAllComments);
userRouter.get('/blogs',auth,getAllBlogsAdmin);
userRouter.post('/delete-comment',auth,deleteCommentById);
userRouter.post('/approve-comment',auth,approveCommentById);
userRouter.get("/dashboard",auth,getDashboard);

export default userRouter ;