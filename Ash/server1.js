console.log("Welcome to Server app");
// create logic for  HTTP server creation
// Applications are self executable
// explicitly started  , explicitly terminiate

// Servers are auto started and they are terminated when shut down machine


var http=require("http");
var url=require("url");
var fs=require("fs");

var  onCreateServer=function(request, response)
{

   var pathname = url.parse(request.url).pathname;
      
    fs.readFile(pathname.substr(1), 
			function (err, data) {
       				if (err) 
				{
          			     console.log(err);
          			      response.writeHead(404, {'Content-Type': 'text/html'});
       			}
				else
				{	
          			       response.writeHead(200, {'Content-Type': 'text/html'});	
          			       response.write(data.toString());		
       			}
       				response.end();
    });   
};


var server=http.createServer(onCreateServer);
server.listen(7000);

console.log("Server is listening on port no http://localhost:7000/");
