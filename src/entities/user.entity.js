class User {

    constructor(name, user_name, email, password, created_at = null,  updated_at = null, ){
        this.name = name;
        this.user_name = user_name;
        this.email = email;
        this.password= password;
        this.created_at= created_at || Date.now();
        this.updated_at= updated_at || Date.now();
    }

}
export default User;