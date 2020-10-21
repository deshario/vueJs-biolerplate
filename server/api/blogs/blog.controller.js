"use strict";

const blogDataset = [
    {id:1,name:'Blog 1'},
    {id:2,name:'Blog 2'},
    {id:3,name:'Blog 3'}
]

const getBlogs = (request, response) => {
    response.status(200).json(blogDataset)
}

const getCustomBlog = (request, response) => {
    const blogId = request.params.id;
    const blog = blogDataset.find(e => e.id == blogId)
    if(blog != undefined){
        response.status(200).json(blog)
    }else{
        response.sendStatus(404)
    }
}

module.exports = {
  getBlogs,
  getCustomBlog
}