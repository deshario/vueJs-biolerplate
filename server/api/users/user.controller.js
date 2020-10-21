"use strict";

const usersDataset = [
    {id:1,name:'Optimus Prime'},
    {id:2,name:'Starcream'},
    {id:3,name:'Megatron'},
    {id:4,name:'Bumblebee'},
    {id:5,name:'Arcee'},
    {id:6,name:'Ironhide'},
    {id:7,name:'Groimlock'},
    {id:8,name:'Sideswipe'},
    {id:9,name:'Dinobots'},
    {id:10,name:'Soundwave'}
]

const getUsers = (request, response) => {
    response.status(200).json(usersDataset)
}

const getSingleUser = (request, response) => {
    // console.log('getSingleUser')
    const userId = request.params.id;
    const user = usersDataset.find(e => e.id == userId)
    if(user != undefined){
        response.status(200).json(user)
    }else{
        response.sendStatus(404)
    }
}

module.exports = {
  getUsers,
  getSingleUser
}