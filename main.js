window.onload = pageLoad;
function pageLoad(){
    var infoBtn = document.getElementById('info');
    infoBtn.onclick = Showinfo;
}
function Showinfo(){
    var MyPic = document.getElementById('MyPic');
    var infoBtn = document.getElementById('info');
    var Info = document.createElement("div");
    Info.className = "Info";
    Info.innerHTML = "<ul><li>Nickname: Pond</li><li>Birth Date: 19/01/2004</li><li> Nationality: Thailand</li><li>Blood Type: B</li><li>Favorite Color: Blue</li><li>Favorite Sport: Badminton</li></ul>";
    if(MyPic.classList.contains("moreinfo")){
        MyPic.classList.remove("moreinfo");
        var More = document.querySelectorAll(".Info");
        for (var i=0;i<More.length;i++){
            MyPic.parentNode.removeChild(More[i]);
        }
        infoBtn.innerHTML = "<button>Click for more Info</button>";
    }
    else{
        MyPic.classList.add("moreinfo");
        MyPic.parentNode.appendChild(Info);
        infoBtn.innerHTML = "<button>Show less</button>";
    }
}