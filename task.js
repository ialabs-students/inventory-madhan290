const http = require('http');
const express = require('express');
const { response } = require('express');
const app = express();
app.use(express.json());

//Function for next parameter
var name_validate=(request,response, next)=>{
    var data=request.body;
    if(data.Name==undefined){
        response.status(400);
        response.send("No name is provided");
    }
    next();
};

http.createServer(app).listen(8000,()=>{
    console.log("HTTP SERVER IS RUNNING");
});

const Employee=[{"Name":"madhan","Age":18,"Email_id":"madhan@gmail.com"},
{"Name":"tharun","Age":20,"Email_id":"tharun@gmail.com"},
{"Name":"sree","Age":25,"Email_id":"sree@gmail.com"}
];

//GET CALL
app.get("/employee",(request,response)=>{
    response.send(Employee);
    });

//POST CALL
app.post("/add/obj",name_validate,(request,response)=>{
    const new_employee={
        "Name":request.body.Name,
        "Age":request.body.Age,
        "Email_id":request.body.Email_id
    }
    console.log(request.body);
    Employee.push(new_employee);
    response.send("Employee created");
    });

app.put("/put/obj",(request,response)=>{
    for(let emp of Employee){
        if(emp.Name==request.body.Name){
            emp.Name="Vignesh"
        }
    }
    response.send(Employee);
})

app.delete("/delete/obj/",(request,response)=>{
    for(let emp in Employee){
        if(Employee[emp].Name=="vasanth"){
            delete Employee[emp];
        }
    }
    response.send(Employee);
})

app.get("/find/obj/",(request,response)=>{
    for(let emp in Employee){
        if(Employee[emp].Name=="pio"){
            response.send(Employee[emp]);
        }
    }
})


