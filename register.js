// $('#reg').click(function(){
// 	const user1 = {
// 		name: $('#name').val(),
// 		age: $('#age').val(),
// 		email: $('#email').val(),
// 	}
// 	console.log(user1.name)
// })

//Làm form register:
function reg(){
	const name = document.getElementById('name').value;
	const age = parseInt(document.getElementById('age').value)
	const mail = document.getElementById('email').value;
	const pw = document.getElementById('pw').value;
	
	const user = {
		Name: name,
		Age: age,
		Mail: mail,
		Password: pw,
	}
	if(user.Name !== '' && user.Age !== ''  && user.Mail !== '' && user.Password !== ''){
		localStorage.setItem('user', JSON.stringify(user))
		document.getElementById('regPage').style.display='none'
		document.getElementById('lPage').style.display='block'
	} else {
		alert("Please fulfill your information")
	}

}

//Form log in:
function l(){
	const mailCheck = document.getElementById('emailCheck').value;
	const pwCheck = document.getElementById('pwCheck').value;
	var user = localStorage.getItem('user');
	var user = JSON.parse(user);
	// console.log(user.Mail)
	const mail = user.Mail
	const pw = user.Password
	

	// console.log(mailCheck)

	// console.log(mail)

	if (mailCheck == mail && pwCheck == pw) {
		document.getElementById('lPage').style.display='none'
		document.getElementById('congrats').style.display='block'
	} else {
		alert('Incorrect password or email ')
	}
}

