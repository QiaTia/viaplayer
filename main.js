// 引入相应模块
const http = require('http'),
  url = require('url'),
	path = require('path'),
  fs = require('fs');

const  { playlist, lyric } = require('./serve/index')
	  
const port = process.argv[2] || 8080;

const types = {
	'css': 'text/css',
	'html': 'text/html',
	'js': 'application/javascript'
},

site = 'http://localhost:' + port;

http.createServer(function (request, response) {
  let uri = url.parse(request.url).pathname
  if(/^\/playlist\//.test(uri)){
    let id = uri.replace(/^\/playlist\//,'')
    playlist(id).then(res=>{
      console.log("playlist:", id)
      response.writeHead(res.status, {'Content-Type': 'application/json; charset=UTF-8'})
      response.write(res.body)
      // response.getWriter().print(JSON.toJSONString(res));
      response.end()
    }).catch(e=>{
      console.warn('Error:',e)
    })
    return false
  }else if(/^\/lyric\//.test(uri)){
    let id = uri.replace(/^\/lyric\//,'')
    lyric(id).then(res=>{
      console.log("lyric:", id)
      response.writeHead(res.status, {'Content-Type': 'application/json; charset=UTF-8'});
      response.write(res.body);
      response.end();
    }).catch(e=>{
      console.warn('Error:',e)
    })
    return false
  }else{
    let filename = path.join(__dirname, uri)
    fs.exists(filename, function (exists) {
      if (!exists) {
        response.writeHead(404, {'Content-Type': 'text/plain', 'X-my-param':'zcyue'});
        response.write('404 Not Found\n');
        response.end();
        return;
      }
  
      if(!fs.lstatSync(filename).isDirectory()) {
          var type = filename.split('.');
          type = type[type.length - 1];
          response.writeHead(200, { 'Content-Type': types[type] + '; charset=utf-8' });
          fs.createReadStream(filename).pipe(response);
      } else {
        response.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });
        fs.createReadStream(path.join(__dirname,'/index.html')).pipe(response);
      }
    });
  }
}).listen(parseInt(port, 10));

console.log('server running at \n => ' + site + '/\n CTRL + C to shutdown');