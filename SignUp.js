function validate() {
    if (document.getElementById("name").value == "" || document.getElementById("name").value.length < 3) {
        alert("Please provide a valid name");
        document.getElementById("name").focus();
        return false;
    }

    if(document.getElementById("email").value==""){
        alert("please provide your email!");
        document.getElementById("email").focus();
        return false;
    }
    
    if(document.getElementById("password").value==""){
        alert("please provide a password!");
        document.getElementById("password").focus();
        return false;
    }
    if(document.getElementById("password").value.length<8){
        alert("password must contain atleast eight digits!");
        document.getElementById("password").focus();
        return false;
    }
    if(document.getElementById("confirm").value==""){
        alert("please enter confirm password!");
        document.getElementById("confirm").focus();
        return false;
    }
    if(document.getElementById("confirm").value.length<8){
        alert("confirm password must contain atleast eight digits!");
        document.getElementById("confirm").focus();
        return false;
    }
    if(document.getElementById("password").value.length>=8 && document.getElementById("confirm").value.length>=8){
        if(document.getElementById("password").value != document.getElementById("confirm").value){
            alert("confirm password is invalid!");
            document.getElementById("confirm").focus();
            return false;
        }
    }
    if(document.getElementById("PIN").value==""){
        alert("please provide a pincode!");
        document.getElementById("PIN").focus();
        return false;
    }
    if(document.getElementById("PIN").value.length!=6){
        alert("pincode must contain six digits!");
        document.getElementById("PIN").focus();
        return false;
    }

    if (document.getElementById("checkbox").checked == false) {
        alert("You must agree terms and conditions...!");
        return false;
    }
}