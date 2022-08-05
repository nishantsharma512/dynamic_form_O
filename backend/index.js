const express=require("express")
const port= process.env.port|| 2000
const cors=require("cors")
const mysqlconnector=require("./sqlConnector")
const app=express()
const bodyparser=require("body-parser")
app.use(bodyparser.json())
const urlencodeparser=bodyparser.urlencoded({extended:false})
app.use(cors())
app.post("/customerInfo",urlencodeparser,(req,res)=>{
    var customerName=req.body.customerInfo.customerName
    var streetAddress=req.body.customerInfo.streetAddress
    var unit=req.body.customerInfo.unitNumber
    var city=req.body.customerInfo.city
    var state=req.body.customerInfo.state
    var zipCode=req.body.customerInfo.zipCode
    var contacts=JSON.stringify(req.body.contacts)
    console.log(contacts)
    mysqlconnector.getConnection((err,connection)=>{
        if(err)
        {
            connection.release()
            res.send(err)
            res.end()
        }
        else
        {
            var q="insert into customerinfo(customername,streetaddress,unitnumber,city,state,zipcode,contacts) values('"+customerName+"','"+streetAddress+"','"+unit+"','"+city+"','"+state+"','"+zipCode+"','"+contacts+"')";
            connection.query(q,(err,result)=>{
                if(err)
                {
                    connection.release()        
                    res.send(err)
                    res.end()
                }
                else
                {
                    connection.release()
                    res.send("Data has been uploaded")
                    res.end()

                }
            })
        }
    })
})

app.get('/tabledata',(req,res)=>{
    mysqlconnector.getConnection((err,connection)=>{
        if(err)
        {
            connection.release()
            res.send(err)
            res.end()
        }
        else
        {
            connection.release()
            var q="select * from customerinfo"
            connection.query(q,(err,result)=>{
                if(err)
                {
                    res.send(err)
                    res.end()
                }

                else
                {
                    res.send(result)
                    res.end()
                }
            })
        }
    })
})
app.listen(port,()=>console.log(`listening server http://localhost:${port}`))