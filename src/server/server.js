import {routes} from '../routes/index.js';
import * as dotenv from 'dotenv'
dotenv.config()
import express from 'express';
class Server {

    constructor(){
        this.app = express();
        this.port = process.env.PORT || 3001;
        this.middlewares();
        this.route();
        this.listen();
    }

    middlewares(){
        this.app.use(express.json());
        this.app.use('/', routes);
    }

    route(){
        this.app.use('/', routes);
    }

    listen(){
      this.app.listen(this.port, ()=>{
        console.log(`Server listen on port ${this.port}`);
      });
    }


}
export default Server;