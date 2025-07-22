import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { assets, blog_data, comments_data } from '../assets/assets';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import moment from 'moment/moment';
import Loader from '../components/Loader';
import BlogSkeleton from '../components/BlogSkeleton';
const Blog = () => {
    const {id} = useParams();
    const [data,setData] = useState(null);
    const [comments,setComments] = useState([]);
    const [name,setName] = useState("");
    const [comment,setComment] = useState("");
    const fetchComments = ()=>{
        
        setComments(comments_data);
    }
    const fetchBlogData = async ()=>{
      const data =  blog_data.find(item => item._id === id );
      setData(data);
    }
  const addComment = async (e)=>{
   e.preventDefault();
  }

    useEffect(()=>{
     fetchBlogData();
     fetchComments();
    },[])
  return data ? (
    <div className='relative'>
       <img src={assets.gradientBackground} alt="" className='absolute -top-50 -z-1 opacity-50'/>

     <Navbar/>


      <div className='text-center mt-20 text-gray-600'>
        <p className='text-[#5044E5] py-4 font-medium'>Published on {moment(data.createdAt).format('MMMM Do YYYY')}</p>
        <h1 className='text-2xl sm:text-5xl font:semibold max-w-2xl mx-auto text-gray-800'>{data.title}</h1>
        <h2 className='my-5 max-w-lg truncate mx-auto' dangerouslySetInnerHTML={{__html : data.subTitle}}></h2>
        <p className='inline-block py-1 px-4 rounded-full mb-6 border text-sm border-[#5044E5]/35 bg-[#5044E5]/5 font-medium text-[#5044E5]'>Michael Brown</p>
      </div>


      <div className='mx-5 max-w-5xl md:mx-auto my-10 mt-6'>
        <img src={data.image} alt="" className='rounded-3xl mb-5'/>
        <div className='rich-text max-w-3xl mx-auto' dangerouslySetInnerHTML={{__html : data.description}}></div>
        <div className='mt-14 mb-10 max-w-3xl mx-auto'>
            <p className='font-semibold mb-4'>
              Comments  {comments.length}
               </p>
              <div className='flex flex-col gap-4 '>
               {comments.map((item,index)=>(
                <div key ={index} className='relative bg-[#5044E5]/2 border border-[#5044E5]/5 max-w-xl rounded text-gray-600'>
                    <div className='flex items-center gap-2 mb-2'>
                        <img src={assets.user_icon} alt="" className='w-6'/>
                        <p className='font-medium'>{item.name}</p>
                    </div>
                    <p className='text-sm max-w-md ml-8'>{item.content}</p>
                    <div className='absolute right-4 bottom-3 flex items-center gap-2 text-xs'>{moment(item.createdAt).fromNow()}</div>
                </div>
               ))}
              </div>

           
        </div>

        <div className='max-w-3xl mx-auto'>
             <p className='font-semibold mb-4'>Add your comment</p>
             <form onSubmit={addComment} className='flex flex-col items-start gap-4 max-w-lg'>
                <input onChange={(e)=>setName(e.target.value)} value={name} type="text" placeholder='Name' required className='w-full p-2 border border-gray-300 rounded outline-none'/>
                <textarea onChange={(e)=>setComment(e.target.value)} value={comment} placeholder='Comment' required className='w-full p-2 border border-gray-300 rounded outline-none h-48'></textarea>
                <button type='submit' className='bg-[#5044E5] text-white rounded p-2 px-8 hover:scale-102 transition-all cursor-pointer'>Submit</button>
             </form>
        </div>
        <div className='my-24 max-w-3xl mx-auto'>
            <p className='font-semibold my-4'>Share this article on social media</p>
            <div className='flex'>
                <img src={assets.facebook_icon} width={50} alt="" />
                <img src={assets.twitter_icon} width={50} alt="" />
                <img src={assets.googleplus_icon} width={50} alt="" />
            </div>
        </div>
      </div>

     <Footer />
    </div>

  ): <BlogSkeleton/>
}

export default Blog
