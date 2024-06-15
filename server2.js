var fs=require('fs');   //iska matlab mujhe fs module ka require hai 
var os = require('os');

var user=os.userInfo();   //ye system ka pora info dega user k
console.log(user.username);    //ye username batayega 

fs.appendFile('greeting.txt','HI'+user.username +'!\n',()=>{
    console.log("file is created");
});
/* ye jo line no 7 pe likha hai uska matlab hai ki ye woh file ko
checkkarega aur agar woh file nahi hai toh wahi naam ka ek naya 
file banayega  */ 
console.log(os);