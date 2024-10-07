function welcome(){
    var top = document.getElementById("top");
    top.innerHTML = "Welcome to the Forum";
}
window.onload = welcome;
var posttime = 0;

function postFunction(){
    if(posttime == 0){
        var topic = document.getElementById("topic");
        topic.innerHTML = document.getElementById("message").value
        posttime++;
    }
    else if(posttime == 1){
        var reply1 = document.getElementById("reply1");
        reply1.innerHTML = document.getElementById("message").value
        posttime++;
    }
    else if(posttime == 2){
        var reply2 = document.getElementById("reply2");
        reply2.innerHTML = document.getElementById("message").value
        posttime++;
    }
    var message = document.getElementById("message");
    message.value = null;
}

function clearFunction(){
    var topic = document.getElementById("topic");
    var reply1 = document.getElementById("reply1");
    var reply2 = document.getElementById("reply2");
    topic.innerHTML = null;
    reply1.innerHTML = null;
    reply2.innerHTML = null;
    var message = document.getElementById("message");
    message.value = null;
    posttime = 0;
}