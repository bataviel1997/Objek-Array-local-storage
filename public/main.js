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