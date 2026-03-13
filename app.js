const express = require("express");
const app = express();

app.use(express.json());

let courses = [
 { id: 1, name: "DevOps", instructor: "Dr Rao" },
 { id: 2, name: "Cloud Computing", instructor: "Dr Sharma" }
];

const PORT = process.env.PORT || 4000;

app.get("/", (req,res)=>{
 res.send("Course API Running");
});

app.get("/api/v1/courses",(req,res)=>{
 res.json(courses);
});

app.post("/api/v1/courses",(req,res)=>{
 const newCourse={
  id:courses.length+1,
  name:req.body.name,
  instructor:req.body.instructor
 };

 courses.push(newCourse);

 res.json(newCourse);
});

app.listen(PORT,()=>{
 console.log("Server running on port "+PORT);
});