const { log } = require('console');
const {readFile,writeFile, read}=require('fs');
 console.log("starting the task!.");
readFile('./content/first.txt','utf-8',((err,result)=>{
   
    if(err){
        console.log(err);
        return;
    }
    console.log(result);
    const first=result;
    readFile('./content/second.txt','utf-8',((err,result)=>{
        if(err){
            console.log(err);
            return;
        }
        const second=result;
        writeFile('./content/resultasync.txt','utf-8',((err,result)=>{
            if(err){
                console.log(err);
                return;
            }
            console.log('data has been written to ur file.');
            const res=result;
            console.log("task done!");
        }))
    }))
}))
console.log("starting the next task!");