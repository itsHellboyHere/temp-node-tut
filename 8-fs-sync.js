
const {readFileSync,writeFileSync}=require('fs');
console.log("start");
const firstfile=readFileSync('./content/first.txt','utf-8');
const secondfile=readFileSync('./content/second.txt','utf-8');
console.log(`value:${firstfile},${secondfile}`);

writeFileSync('./content/result.txt',
`here is the result ${firstfile},${secondfile}`
)
console.log("done with the task");
console.log("starting a new task");