class Server {

    constructor(name, user_name, email, password, created_at = null,  updated_at = null, ){
        this.name = name;
        this.user_name = user_name;
        this.email = email;
        this.password= password;
        this.created_at= created_at || Date.now();
        this.updated_at= updated_at || Date.now();
        this.app = express();
        this.middlewares();
        this.route();
    }
    middlewares(){
        this.app.use(express.json());
        this.app.use(express.urlencoded());
        this.app.use('/', routes);
    
    }

    route(){
        this.app.use('/', userRoutes);
    }



}
export default Server;