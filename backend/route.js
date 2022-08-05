const express=require("express")
const router=express.Router()
const bodyparser=require("body-parser")
const urlencodeparser=bodyparser.urlencoded({extended:false})


module.exports= router