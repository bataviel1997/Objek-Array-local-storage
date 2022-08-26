// console.info('handle filee');

// ambil elemen form dgn id user_form
let user_form = document.getElementById('user_form');

// membuat array tampung data_siswa
let data_siswa = [];

// function yang akan selalu berjalan ketika page reload
window.onload = function(){
  //  kita cek apakal ada local storage dgn nama data_siswa
  let storage_data = localStorage.getItem(data_siswa);

  if(!storage_data){
    localStorage.setItem('data_siswa', '[]');
    return
  }
// json to string
 data_siswa = JSON.parse(storage_data);
}

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
// menangkap data dari input html menjadi objek
user_data.user_name = event.target.username.value;
user_data.email = event.target.email.value;
user_data.phone = event.target.phone.value;
user_data.married = event.target.married.value;
user_data.address = event.target.address.value;

// push data ke array
data_siswa.push(user_data);

// input data ke local storage string to json
localStorage.setItem('data_siswa', JSON.stringify(data_siswa));
});