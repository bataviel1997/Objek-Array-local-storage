// console.info('handle filee');

// ambil elemen form dgn id user_form
let user_form = document.getElementById('user_form');

// tambahkan event listener

user_form.addEventListener('submit', function(event){
// stop form dari reload
event.preventDefault();

// buat wadah simpan ke dalam sebuah objek
let user_data = {
  user_name : '',
  email : '',
  phone : '',
  married : '',
  address : ''
}
// event.target.id dari html.value
user_data.user_name = event.target.username.value;
user_data.email = event.target.email.value;
user_data.phone = event.target.phone.value;
user_data.married = event.target.married.value;
user_data.address = event.target.address.value;

console.info(user_data);

});