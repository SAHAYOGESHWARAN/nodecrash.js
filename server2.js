import { createServer } from 'http';
const PORT = process.env.PORT;
const users = [
    {id: 1, name: 'saha'},
    {id: 2, name: 'saha'},
    {id: 3, name: 'gokul'},
];

const server = createServer((req,res) => {
    if(req.url === '/api/users' && req.method === 'GET'){
        res.setHeader('Content-Type', 'application/json');
        res.write(JSON.stringify(users));
       res.end();
     } else if (req.url.match(/\/api\/users\/([0-9]+)/) && req.method === 'GET'){
        res.setHeader('Content-Type', 'application/json');
        res.write(JSON.stringify({id: 1, name:'saha'}));
        res.end();
       }else { 
        res.setHeader('Content-Type', 'application/json');
        res.statusCode = 404;
        res.write(JSON.stringify({message: 'Route not found'}));
       res.end();
    }

});

server.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});