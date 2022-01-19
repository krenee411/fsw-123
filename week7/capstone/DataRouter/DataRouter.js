const express = require('express');
const { STATUS_CODES } = require('http');
const { nextTick } = require('process');
const DataRouter = express.Router();
const {v4:uuidv4} = require('uuid')


let dataArray = [
   {query: "Ted Bundy",pod1: "https://open.spotify.com/episode/2sKe749IhzGDIgrwSS1iRB?si=oW-nXHdAT1mKgDjtLhqS9g", pod2: "https://open.spotify.com/episode/3wSMA69i1PN9EEqaxB4IB0?si=51qs4aqJR3OLy2YBZ2aFcQ"},
   {query: "John Wayne Gacy", pod1: "https://open.spotify.com/episode/0egtYC8J2QGbJDpotjxhC4?si=1tJxR89eTfyuK1bexngfLQ", pod2: "https://open.spotify.com/episode/5D1l1GJp7QD6EGb6CmTht5?si=uFeO1d3rQm6Nyf5XaeVJLg"},
   {query: "Ed Kemper", pod1: "https://open.spotify.com/episode/1C6RGUwcNZjINzR0ScCp3b?si=xeRvMA-7R5OSJoRnt0QfQA", pod2: "https://open.spotify.com/episode/6sPJGfegP068Ex3hYWpeqD?si=FQ-6LmjrQpCnvtAUBjXVXA"},
   {query: "Jeffrey Dahmer", pod1: "https://open.spotify.com/episode/7fbHBbBIHP40rthX519x75?si=Vy_OscDPRkeH5EPJB5eiXA", pod2: "https://open.spotify.com/episode/0CJjrSD9Pu080VukiQBrKj?si=maQbeXp3RR6ZkPEkDHseTQ"},
   {query: "Ed Gein", pod1: "https://open.spotify.com/episode/2WcMW12DHoSzeYZF3ErPCv?si=5SObAt8GSrmi-S1TQ58MbA", pod2: "https://open.spotify.com/playlist/7MGFja4ssxIeC2SChevTT5?si=08905a5705574c5c"},
   {query: "H H Holmes", tcat: "https://open.spotify.com/episode/1n1OdZ9rZ14t8SNvFGGq88?si=brleh9McSQC-TKETaiGt1g", pod2: "https://open.spotify.com/episode/3HEcbzzn33qrpHqoQXQuyX?si=EIVlBPkXTxKKnHY6aYboZg"},
   {query: "Dr. Death", pod1: "https://open.spotify.com/episode/4ZOoFR9E8S5k0YM8hJqNTS?si=rMdKEkrOTy2Hu7mnaoYA6w", pod2: "https://open.spotify.com/episode/0cLXrwYwT4LeZNyYFq5THr?si=FEuvX9ZqSIqGNGM1khasvw"}

]
console.log(dataArray)

DataRouter
    //get all
    .get('/',(req,res) => {
        res.send(dataArray)// 200 good request
    })

    //get one
    .get('/:DataId',(req, res, next) => {
        const DataId = req.params.DataId;
        const oneItem = dataArray.find(item => item.id === DataId);
        if(!oneItem){
            const error= new Error("Sorry that show was not found")
            return next(error)
        }
        res.send(oneItem)
    })

    //get some
    .get('/search/query',(req,res)=> {
        const dataQuery = req.query.query
        const filterData = dataArray.filter(data => data.query === dataQuery)
        res.send(filterData)
        
    })

    //update
    .put('/:DataId',(req,res) => {
        const DataId = req.params.DataId;
        const oneItem = dataArray.findIndex(item => item.id === DataId);
        console.log(oneItem, req.body)
        const updatedItems = Object.assign(dataArray[oneItem], req.body)
        console.log(updatedItems)
        res.status(201).send("New data was successfully added")
    })

    //delete
    .delete('/:DataId',(req,res) => {
        const DataId = req.params.DataId;
        const oneItem = dataArray.find(item => item.id === DataId);
        dataArray.splice(oneItem, 1)
        res.send('The Data was successfully deleted!')
    })

    //add
    .post('/',(req,res) => {
        const newData = req.body;
        newData.id = uuidv4();
        dataArray.push(newData)
    })

module.exports = DataRouter;