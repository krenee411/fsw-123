const express = require('express');
const ListRouter = express.Router();
const {v4:uuidv4} = require('uuid')


const  listArray = [
    {podname: "podcast", id: uuidv4()}
]

ListRouter
    //get all
    .get('/',(req,res) => {
        res.send(listArray)// 200 good request
    })

    //get one
    .get('/:ListId',(req, res, next) => {
        const ListId = req.params.ListId;
        const oneItem = listArray.find(item => item.id === ListId);
        if(!oneItem){
            const error= new Error("Sorry that show was not found")
            return next(error)
        }
        res.send(oneItem)
    })

    //update
    .put('/:ListId',(req,res) => {
        const ListId = req.params.ListId;
        const oneItem = listArray.findIndex(item => item.id === ListId);
        console.log(oneItem, req.body)
        const updatedItems = Object.assign(listArray[oneItem], req.body)
        console.log(updatedItems)
        res.status(201).send("New data was successfully added")
    })

    //delete
    .delete('/:ListId',(req,res) => {
        const ListId = req.params.ListId;
        const oneItem = listArray.find(item => item.id === ListId);
        listArray.splice(oneItem, 1)
        res.send('The Data was successfully deleted!')
    })

    //add
    .post('/',(req,res) => {
        const newData = req.body;
        newData.id = uuidv4();
        listArray.push(newData)
    })

module.exports = ListRouter;