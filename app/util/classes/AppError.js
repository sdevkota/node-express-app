module.exports=class AppError extends Error{
constructor(message){
    super();
    this.statusCode=400;
}
};