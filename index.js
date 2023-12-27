const http =  require("http");
//const fs =  require("fs");
//const { query } = require("express");
const express =  require("express");

const app = express();
app.get("/",(req,res) =>{
    return res.send("Hello from Home Page");
});
app.get("/about",(req,res) =>{
    return res.send("Hello from About Page");
});
const myServer = http.createServer(app);
myServer.listen(8000,() => console.log("Server Started"));
/* it is not good to maintain this much fuzzy code so use express for that
const myServer = http.createServer((req,res) => {
    if(req.url === "/favicon.ico") return res.end();
    const log = `${Date.now()}: ${req.url} New Req Recieved\n`;
    const myUrl = url.parse(req.url, true);
    console.log(myUrl);
    fs.appendFile("log.txt",log,(err,data) => {
        switch(myUrl.pathname){
            case "/":
                res.end("HomePage");
                break;
                case "/about":
                    res.end("AboutPage");
                    break;
                    case "/search":
                    const search = myUrl.query.search-query;
                    res.end("Here are your result for" + search);
                    default:
                    res.end("404 Not found");
        }
    });

    console.log("New Req Recieved");
    res.end("Hello from server");
});
*/
