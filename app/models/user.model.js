class User{
    constructor(name,age){
        this.name=name;
        this.age=age;
}
}
module.exports=User;

//if you user sequelize, you will need to model these otherwise, 
//we are just using a plain way of conencting to the database