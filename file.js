const fs =  require("fs");

// sync
//fs.writeFileSync("./test.txt", "Hello World");
// Async
//fs.writeFile("./test.txt", "Hello world Async", (err) => {});

//const result = fs.readFileSync("./test.txt" , "utf-8");
//console.log(result);
/*
fs.readFile("./test.txt", "utf-8" , (err,result)=> {
    if(err){
        console.log("Error", err);
    }
    else{
       console.log(result);
    }
});
*/
//fs,fs.appendFileSync("./test.txt",new Date().getDate().toLocaleString());
//fs.cpSync("./test.txt","./copy.txt");
//fs.unlinkSync("./copy.txt");
//console.log(fs.statSync("./test.txt")); // will show stats of files
//fs.mkdirSync("my-docs");