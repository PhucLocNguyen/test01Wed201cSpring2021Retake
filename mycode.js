
function checkForm(event){
    event.preventDefault();
var alertArr =["Invalid Fullname","Invalid Phone number","Invalid Email"];
var getForm = document.querySelector("#formContact");
var getInputElement = document.querySelectorAll("#formContact>div>input");
var getName = getInputElement[0].value;
var getNumber = getInputElement[1].value;
if( getName!=="" || getNumber!==""){
getForm.innerHTML = `Welcome ${getName} - ${getNumber}, We will respond to you as soon as possible`;
}else{

    for(var i = 0; i<getInputElement.length; i++){
       if(getInputElement[i].value ===""){
        alert(alertArr[i]);
    }
    
    }
}
}