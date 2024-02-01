const http=require('http');

const server=http.createServer(
    (req,res)=>{
        console.log(`Request received from  ${req.url}`);
        if(req.url==='/'){
            
            res.end("welcome to home page")
        }
        else if(req.url==='/about'){
            res.end("here is our history.")
        }
        else {
            res.statusCode=404;
            res.end(`
            <h1>Oops!</h1>
    <p>We can't seem to find the page you are looking for</p>
    <a href="/">back home</a>`)
        }
    })
server.listen(4000);