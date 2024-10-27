"use strict";



const express=require("express");
const app=express();

require('express-async-errors')
require("dotenv").config();

const PORT=process.env.PORT ||8000;
const DB_PATH=process.env.DB_PATH ||;

app.use(express.json())
app.all('/',(req,res)=>{
res.send('WELCOME TO DO API')

})


const {sequelize,DataTYpes}=require('sequelize')

const
