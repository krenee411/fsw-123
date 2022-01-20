const express = require('express');
const ListRouter = express.Router();
const {v4:uuidv4} = require('uuid')


const  listArray = [
    {podname: "podcast", id: uuidv4()}
]
console.log(listArray)
ListRouter
    //get all
    .get('/',(req,res) => {
        res.send(listArray)
    })

    //get one
    .get('/:ListId',(req, res) => {
        const ListId = req.params.ListId;
        const oneItem = listArray.find(item => item.id === ListId);
        res.send(oneItem)
    })

    //update
    .put('/:ListId',(req,res) => {
        const ListId = req.params.ListId;
        const oneItem = listArray.findIndex(item => item.id === ListId);
        console.log(oneItem, req.body)
        const updatedItems = Object.assign(listArray[oneItem], req.body)
        console.log(updatedItems)
        res.send("New data was successfully added")
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