import React, { useState } from 'react'
import { blog_data, blogCategories } from '../assets/assets'
import {motion} from 'motion/react'
import BlogCard from './BlogCard'
import { useAppContext } from '../context/AppContext'
const BlogList = () => {
    const [menu,setMenu] = useState('All')
    const {blogs,input} = useAppContext();
    const filteredBlogs = ()=>{
        if(input === ""){
            return blogs ;
        }
        return blogs.filter((blog)=>blog.title.toLowerCase().includes(input.toLowerCase())|| blog.category.toLowerCase().includes(input.toLowerCase()))
    }
    console.log('blogs from context:', blogs);
    console.log('filteredBlogs:', filteredBlogs());
    console.log('menu:', menu);
  return (
     <div>
      {/* Category Filter Buttons */}
      <div className="flex justify-center gap-4 sm:gap-8 my-10 relative flex-wrap">
        {blogCategories.map((item) => (
          <div key={item} className="relative">
            <button
              onClick={() => setMenu(item)}
              className={`relative px-4 py-1 rounded-full font-medium transition text-sm sm:text-base
                ${
                  menu === item
                    ? 'text-white z-10'
                    : 'text-gray-500 hover:text-[#5044E5]'
                }`}
            >
              {item}

              {/* Active Category Highlight */}
              {menu === item && (
                <motion.div
                  layoutId="underline"
                  transition={{ type: 'spring', stiffness: 500, damping: 30 }}
                  className="absolute inset-0 -z-10 bg-[#5044E5] rounded-full"
                />
              )}
            </button>
          </div>
        ))}
      </div>

      {/* Blog Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-8 mb-24 mx-8 sm:mx-16 xl:mx-40">
        {filteredBlogs()
          .filter((blog) => menu === 'All' || blog.category === menu)
          .map((blog) => (
            <BlogCard key={blog._id} blog={blog} />
          ))}
      </div>
    </div>
  )
}

export default BlogList
