const path=require('path')

const publicDirectoryPath=path.join(__dirname,'../public')
const express=require('express')
const app=express()
app.get('',(res,req)=>{
    res.setEncoding('Hello Express!')

})
app.get('/help',(req,res)=>{
    res.send({
        name:'Sriram',
        age:18
    
    })
})
app.get('/about',(req,res)=>{
    res.send('<h1>html for life</h1>')
})
app.get('/weather',(req,res)=>{
    res.send({
        Location:'Bangalore',
        forecast:35
    })
})

app.listen(3000,()=>{
    console.log('Server is up on 3000')
})