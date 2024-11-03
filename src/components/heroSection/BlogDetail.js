import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';

const BlogDetail = ({ blogs }) => {
   useEffect(() => {
     window.scrollTo(0, 0);
   }, []);

  const { id } = useParams();
  const blog = blogs.find(blog => blog.id === parseInt(id));

  if (!blog) {
    return <div className="text-center mt-10">Blog not found</div>;
  }

  return (
    <div className="container mx-auto mt-4 mb-4 p-4 md:px-28 md:py-4">
      <div className="mb-4 mt-20">
        <img src={blog.image} alt={blog.title} className="w-full max-h-[550px] max-w-[100%] object-cover rounded " />
      </div>
      <div className="mt-10 md:mt-20">
        <h1 className="font-bold text-center text-2xl md:text-4xl mb-6 md:mb-10">
        
        </h1>

      </div>
      <h1  className="font-bold text-center text-2xl md:text-4xl mb-6 md:mb-10 ">{blog.title}</h1>
      <div className="block text-center text-base md:text-lg mb-10 md:mb-20 leading-relaxed font-sans"> {blog.content}</div>
      <div  className="text-gray-600 text-sm mb-8 text-center ">{blog.location}</div>
      <div className="text-gray-500 text-sm text-center mb">Published {blog.date}</div>
    </div>
  );
};

export default BlogDetail;