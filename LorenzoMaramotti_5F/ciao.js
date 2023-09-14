const http = require('http')

let pagina = `
<html>
    <head>
        <title>ciao.js</title>
    </head>
    <body>
        <h1>ciao</h1>
    </body>
</html>
`

let server = http.createServer((req, res) => {
  res.writeHead(200, {'Content-Type': 'text/html'})
  res.write(pagina)
  res.end()
})

const porta = 8080

server.listen(porta , '127.0.0.1')

console.log('Server running at http://127.0.0.1:8080/')