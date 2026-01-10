const express = require('express')
const { servicesData , projectsData , aboutData} = require("./views/src/layout/data");


const app = express()

require('dotenv').config()

app.set('view engine','ejs')

// for image offile 
app.use(express.static('public'));

// const PORT = process.env.PORT || 5000
const PORT = 8000
// app.get('/',(req,res)=>{
//     res.render('src/pages/home',{
//         title:"Home",
//         allData:[{id:123,name:"testname1"}]
//     })
// })

app.get('/projects', (req, res) => {
  res.render('src/pages/projects', {
    title: "projects",
    allData: projectsData
  });
});

app.get('/',(req,res)=>{
    res.render('src/pages/heroSection',{
        title:"heroSection",
       
    })
})

app.get('/policy',(req,res)=>{
    res.render('src/pages/policy',{
        title:"policy",
        
    })
})

app.get('/services', (req, res) => {
  res.render('src/pages/services', {
    title: "services",
    servicesData
  });
});

app.get('/aboutUs', (req, res) => {
  res.render('src/pages/aboutUs', {
    title: "aboutUs",
    aboutData
  });
});


app.listen(PORT,()=>{
    console.log(`Listen http://localhost:${PORT}`)
})
