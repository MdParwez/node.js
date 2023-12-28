// we are going to create our own REST API
 const express =  require("express");
 const fs =  require('fs');
 const users =  require("./MOCK_DATA.json");

 const app = express();
 const PORT = 7000;

 // middleware-plugin
 app.use(express.urlencoded({extended:false}));

 // middleware setup
 app.use((req,res,next) =>{
   console.log("hello from middleware 1");
   //return res.json({msg: "Hellow from middleware 1"});
   next();
 });
 // routes
 app.get('/api/users', (req,res) => {
   return res.json(users);
 });
 app.get("/users",(req ,res) =>{
    const html = `
    <ul>
    ${users.map((user)=>`<li>${user.first_name}</li>`).join('')}
    </ul>
    `;
    res.send(html);
 });
 // get user by id
 app.get("/api/users/:id", (req,res) => {
    const id = Number(req.params.id);
    const user = users.find ((user) => user.id === id);
    return res.json(user);
 });
 // POST
 app.post("/api/users", (req, res) => {
    const body = req.body;
    users.push(body);
    fs.writeFile('./MOCK_DATA.json'.JSON.stringify(users),(err,data) =>{
        return res.json({status: "sucess", id: users.length + 1});
    });
    
 });
 
 // PATCH
 app.patch("/api/users/:id", (req,res) => {
    // TODO: Edit the user with id
    return res.json({status: "pending"});
 });
 // Delete
 app.delete("/api/users/:id", (req,res) => {
    // TODO: Edit the user with id
    return res.json({status: "pending"});
 });
 app.listen(PORT, () => console.log(`Server started at Port 7000`));