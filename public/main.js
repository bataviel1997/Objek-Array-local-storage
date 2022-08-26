// objek untuk wadah menampung bnyak nilai
// dengan simbol {obj_key : obj_value,}

// console.info('heloo');
// 1. membuat objek
let user_details = {
  user_name : 'elbatavi',
  email : 'elbatavi@gmail.com',
  phone : '0884343422',
  age : 22,
  married : false
};

// 2.merubah value properti objek
user_details.user_name = 'batavi199';
user_details.email = 'gatau@gmail.com';
user_details.age = 20;

// 3. menambahkan properti baru di dalam objek
// user_details.address = 'Bekasi';

// 4. mengakses masing2 properti pada objek
// console.info(user_details.address + " " + user_details.user_name);
// 5. mengambil value pada property email di dalam objek user_detail tanpa titik
// console.info(user_details['age']='22');
// 6. mengambil dgn aca backtik
// console.info(`${user_details.user_name} ${user_details.email}`);
// 7. objek destruk | let  {property, } = obj_name;
// let {address} = user_details;
// console.info(address);

// ARRAY
// 1. urutan type data yang di mulai dari paling kiri = 0
let hoby = ['makan', 'berenang','futsal', 'catur'];
let age = [22,11,44,24];
let myData = ['elbatavi','23',true,{street : 'jl bekasi', no : 33}];
// contoh data array dgn 2 objek di dalam
let dataMahasiswa = [{
  nama : 'elbatavi',
  nim : 444535
},{
  nama : 'ali',
  nim : 6643454
}
];

// 2.menambahkan data pada array
// variable.property array(data yang ditambahkan);
hoby.unshift('game');


// 3.mengambil data sesuai urutan
// console.info(hoby[1]);

// console.info(dataMahasiswa);