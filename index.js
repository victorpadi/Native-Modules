 const fs = require("fs");

/* fs.writeFile("message.txt", "Hello from Victor!", (err) =>{
if (err) throw err;
Console.log("The file has been saved!");
});  */



fs.readFile("./message.txt", "utf8" ,(err, data) => {
    if (err) throw err;
    console.log(data);
});