window.onload = loginLoad;
function loginLoad(){
	var form = document.getElementById("myLogin");
    form.onsubmit = checkLogin;
}

function checkLogin(){
	//ถ้าตรวจสอบแล้วพบว่ามีการ login ไม่ถูกต้อง ให้ return false ด้วย
const urlParams = new URLSearchParams(window.location.search);
const username = urlParams.get('username');
const password = urlParams.get('password');
if((document.forms["myLogin"]["username"].value != username )||(document.forms["myLogin"]["password"].value != password)){
	alert("Username or Password invalid");
	return false;
}
alert("Login sucessful");
}

			