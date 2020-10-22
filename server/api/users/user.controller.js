"use strict";

const mongoose = require('mongoose')
const User = require("./user.model")

const usersDataset = [
    {id:1,name:'Optimus Prime',email:'optimus@transformer.com'},
    {id:2,name:'Starcream',email:'starcream@transformer.com'},
    {id:3,name:'Megatron', email:'megatron@transformer.com'},
    {id:4,name:'Bumblebee', email:'bumblebee@transformer.com'},
    {id:5,name:'Arcee', email:'arcee@transformer.com'},
    {id:6,name:'Ironhide', email:'ironhide@transformer.com'},
    {id:7,name:'Groimlock', email:'groimlock@transformer.com'},
    {id:8,name:'Sideswipe', email:'sideswipe@transformer.com'},
    {id:9,name:'Dinobots', email:'dinobots@transformer.com'},
    {id:10,name:'Soundwave', email:'soundwave@transformer.com'}
]

const getUsers = async (request, response) => {
    const users = await User.find({})
    response.status(200).json(users)
}

const getSingleUser = async (request, response) => {
    const userId = request.params.id;
    try {
        const singleUser = await User.findOne({ _id: userId})
        response.status(200).json(singleUser)
    }catch(error){
        response.status(400).json(error)
    }
}

const createUser = async (request, response) => {
    const payload = request.body
    const product = new User(payload)
    const savedModel = await product.save()
    response.status(200).json(savedModel)
}

const modifyUser = async (request, response) => {
    const userId = request.params.id;
    const isValidObjectId = mongoose.Types.ObjectId.isValid(userId)
    if(isValidObjectId){
        const payload = {$set: request.body}
        const options = {new:true} // return object after update
        const user = await User.findByIdAndUpdate(userId,payload,options);
        response.status(200).json(user)
    }else{
        response.send('Invalid User ID')
    }
}

const deleteUser = async (request,response) => {
    const userId = request.params.id;
    const isValidObjectId = mongoose.Types.ObjectId.isValid(userId)
    if(isValidObjectId){
        const deletedItem = await User.findByIdAndDelete(userId)
        response.status(200).json(deletedItem)
    }else{
        response.send('Invalid User ID')
    }
}

module.exports = {
  getUsers,
  getSingleUser,
  createUser,
  modifyUser,
  deleteUser
}