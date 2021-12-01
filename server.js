const express= require("express");

const blogRoutes=require("./routes/blog");
const portfolioRoutes=require("./routes/portfolio");
const contactRoutes=require("./routes/contact");

const app=express();
const PORT=3004;

app.set("view engine","ejs");

app.get("/",(req,res)=>{
    console.log("Done");
   res.render("index",{name:"Hamza Baig"});
});

// app.get("/portfolio",(req,res)=>{
//     res.render("portfolio");
// })

// app.get("/blog",(req,res)=>{
//     res.render("blog");
// })

// app.get("/contact",(req,res)=>{
//     res.render("contact");
// })

app.use("/portfolio",portfolioRoutes);
app.use("/blog",blogRoutes);
app.use("/contact",contactRoutes);

app.get("/hello",(req,res)=>{
    res.send("<h1>Hello From the other side</h1>")
});


app.post("/blogPost",(req,res)=>{
    res.json({status:"Success",data:[{name:"Hamza Baig",age:23},{name:"Haider Ali",age:31}]})
});

app.get("/downloadServer",(req,res)=>{
    res.download("server.js");
});

app.get("*",(req,res)=>{
    console.log("PAGE NOT FOUND");
    res.send("You must be lost!")
});



app.listen(PORT,()=>{
    console.log(`Server listening at ${PORT}`)
})
