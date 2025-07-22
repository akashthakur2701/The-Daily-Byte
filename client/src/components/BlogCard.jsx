import React from 'react'
import { useNavigate } from 'react-router-dom';

const BlogCard = ({blog}) => {
   const { title, description, category, image, _id } = blog;
  const navigate = useNavigate();

  return (
    <div
      onClick={() => navigate(`/blog/${_id}`)}
      className="w-full rounded-lg overflow-hidden shadow-md hover:scale-105 hover:shadow-lg hover:shadow-[#5044E5]/25 transition-transform duration-300 cursor-pointer bg-white"
    >
      {/* Blog Image */}
      <img src={image} alt={title} className="aspect-video w-full object-cover" />

      {/* Category */}
      <span className="ml-5 mt-5 px-3 py-1 inline-block bg-[#5044E5]/20 rounded-full text-[#5044E5] text-xs">
        {category}
      </span>

      {/* Content */}
      <div className="p-5 pt-3">
        <h5 className="mb-2 font-semibold text-gray-900 line-clamp-2">{title}</h5>
        <p className="text-xs text-gray-600 line-clamp-3" dangerouslySetInnerHTML={{__html : description?.slice(0, 80)+ '...'}}></p>
      </div>
    </div>
  )
}

export default BlogCard
