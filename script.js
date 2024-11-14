//your JS code here. If required.

document.querySelector('#form').addEventListener('submit', submitForm);
function submitForm(e) {
	e.preventDefault();
	const age = document.getElementById('age').value;
	const name = document.getElementById('name').value;

	new Promise((resolve, reject) => {
		if(age > 18) {
			return resolve(`Welcome, ${name}. You can vote.`)
		} else {
			return reject(`Oh sorry ${name}. You aren't old enough.`);
		}
		
	}).then((success) => {
		setTimeout(() => {
			alert(success);
		},4000);
	}).catch((error) => {
		setTimeout(() => {
			alert(error);
		},4000);
	})
}










