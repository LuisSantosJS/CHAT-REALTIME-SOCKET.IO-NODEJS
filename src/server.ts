import express, { Request, Response } from 'express';
import knex from './database/connection';
import cors from 'cors';
import http from 'http';
import * as IO from 'socket.io';
const port = 3000;
const app = express();

app.use(cors());

const server = http.createServer(app)
const io = IO.listen(server);

app.get('/', (request: Request, response: Response) => {
  knex('messages').select('*').orderBy('id', 'desc').limit(200).then(res => {
    return response.json(res)
  })
})

io.on("connection", socket => {
  console.log("user connected");
  socket.on("chat", msg => {
    knex('messages').insert([{
      userID: msg.userID,
      name: msg.name,
      msm: msg.msm,
      course: msg.course
    }]).then(() => {
      knex('messages').select('*').orderBy('id', 'desc').limit(200).then(response => {
        io.emit("chat", response);
      })
    })
  });
});


server.listen(port, () => console.log("server running on port:" + port)); 