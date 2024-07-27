import { createServer } from 'http';
const PORT = process.env.PORT;
const users = [
    {id: 1, name: 'saha'},
    {id: 2, name: 'saha'},
    {id: 3, name: 'saha'},
];

const server = createServer((req,res) => {

});

server.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});