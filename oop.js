class User {

  constructor(firstName , email, password, ) {
    this.firstName = firstName;
    this.email = email;
    this.password = password;
   }

   login(){
  alert(`${this.firstName}Logged in sucessfully`);
   }
logout(){
  alert(`${this.firstName}Logged out sucessfully`);
}
}
 


  /*sayHi() {
    alert( "hey"+" "+this.firstName);
          } */
class anotherUser extends user {
    constructor(firstName,LastName, email, password, gender, age, address,){
    super(firstName,email, password,)
    this.LastName = LastName;
     this.gender  =gender;
     this.age = age;
     this.address = address;
    }
    login(){
      alert(`${this.firstName}Logged in sucessfully`);
       }
    logout(){
      alert(`${this.firstName}Logged out sucessfully`);
    

}










