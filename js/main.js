let userNameInput = document.getElementById("userName");
let userEmailInput = document.getElementById("userEmail");
let userPassInput = document.getElementById("userPass");

let signEmailInput = document.getElementById("signEmail");
let signPassInput = document.getElementById("signPass");


let users ;

if(localStorage.getItem("usersList")==null){
    let users=[];
}
else{
    users = JSON.parse(localStorage.getItem("usersList"));
}
function addUser(){
    if(!checkIsEmpty()){
        if(exist()){
            displayExist();
        }
        else{
        var user = {
            name:userNameInput.value,
            email:userEmailInput.value,
            password:userPassInput.value,
        }
        users.push(user);
        localStorage.setItem("usersList",JSON.stringify(users));
        displaySucess()
        
    }
        
    }
    else{
        displayRequired();
    }
   
   
};
function  welcome(){
    document.getElementById("welcome").innerHTML = `Welcome ${JSON.parse(localStorage.getItem("homeList"))}`;
    console.log("doneeee");
};
function exist(){
    for(var i=0;i<users.length;i++){
        if(users[i].email==userEmailInput.value ){
            return true; 
        }
    }
    return false;
}
function existLogin(){
for(var i=0;i<users.length;i++){
    if(users[i].email==signEmailInput.value && users[i].password==signPassInput.value){
        console.log(users[i].name);
        var name=users[i].name;
        localStorage.setItem("homeList",JSON.stringify(name));
        location.replace("home.html");
        
        
       
        console.log("gamdaa");
       return true;
    }
}
};
function searchUser(){
    if(checkIsEmptySign()){
        displayRequiredSign();
        console.log("Omniaaa");
    }
    else{
        if( existLogin()){

        }
        else{
            displayIncorrect();
        }
        
    }

};
function clearForm(){
   userNameInput.value="";
   userEmailInput.value="";
   userPassInput.value="";
  

};

function checkIsEmpty(){
    if(userNameInput.value!="" && userPassInput.value !="" && userEmailInput.value !=""){
        return false;
    }
    else{
        return true;
    }
}
function checkIsEmptySign(){
    if(signEmailInput.value =="" || signPassInput.value =="" ){
        return true;
    }
    else{
        return false;
    }
}

// email  exists
function displayRequired(){
    document.getElementById("required").innerHTML=`<span class=' text-danger'>All inputs is required</span>`;
};
function displayExist(){
    document.getElementById("required").innerHTML=`<span class=' text-danger'>email already exists</span>`;

};
function displayIncorrect(){
    document.getElementById("result-sign").innerHTML=`<span class=' text-danger'>incorrect email or password</span>`;
};
function displayRequiredSign(){
    document.getElementById("result-sign").innerHTML=`<span class=' text-danger'>All inputs is required</span>`;
};
function displaySucess(){
    document.getElementById("required").innerHTML=`<span class=' text-success'>Success</span>`;
};
