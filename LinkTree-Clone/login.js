function login(){
    const email=document.getElementById("email").value
    const password=document.getElementById("password").value
    
    
    if(email==="nandu@gmail.com"&&password==="nandu"){
        alert("Login Successfully")
        console.log("logged in")
        window.location="addlink.html"
        
    }
    else if(email===""&&password===""){
        alert("enter username and password")
    }
    else{
        alert("invalid credentials")
    }
}