function gen_password(){
    var chars = "0123456789abcdefghijklmnopqrstuvwxyz!@#$%&ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    var password_length=8;
    var password="";
    var pass = document.getElementById("password");

    for(var i=0;i<=password_length;i++){
        var randomNumber = Math.floor(Math.random()*chars.length);
        password += chars.substring(randomNumber,randomNumber+1);
    }
    //document.getElementById("password").value = password;
    pass.value=password;
}

function copy_password(){
    //var copytext=document.getElementById("password");
    //copytext.select();
    document.getElementById("password").select();
    document.execCommand("copy");
}