import express from 'express';
import {getBlogById, publishBlog ,getAllBlogs, deleteBlogById, togglePublish, addComment, getBlogComments} from '../controllers/blog.controller.js'
import upload from '../middleware/multer.js';
import auth from '../middleware/auth.js';

const blogRouter = express();



blogRouter.post('/publishBlog',upload.single('image'),auth,publishBlog);
blogRouter.get('/all',getAllBlogs);
blogRouter.get('/:blogId',getBlogById);
blogRouter.post('/delete',auth,deleteBlogById);
blogRouter.post('/toggle-publish',auth,togglePublish);

blogRouter.post('/add-comment',addComment);
blogRouter.get('/comments',getBlogComments);



export default blogRouter ;