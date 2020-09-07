var chatClose=document.querySelector(".chat-close")
var miniChat=document.querySelector("#mini-chat")
var chat=document.getElementById("chat")
var chatInput=document.getElementById("chat-input")

miniChat.onclick=function(){
    chat.classList.remove("active")
}
chatClose.onclick=function(){
    chat.classList.add("active")
}
chatInput.addEventListener("keyup",function(e){
if (e.keyCode == 13){
   let chatValue=chatInput.value;
    
}
})
