const validator = require('validator');
const fs = require('fs');
const readline = require('readline');

// Membuat fungsion periksaFolder
const periksaFolder = ()=> {
//Membuat folder data apabila tidak ada
const dirPath = './data';
if(!fs.existsSync(dirPath)){
fs.mkdirSync(dirPath);
}

}

//Membuat fungsi periksaFile
const periksaFile = ()=> {
// Membuat file contacts.json jika belum ada
const dataPath = './data/contacts.json';
if(!fs.existsSync(dataPath)){
 fs.writeFileSync(dataPath,'[]','utf-8');
}
}

function validasiEmail (email){
  if(!validator.isEmail(email)){
    return console.log("Email yang anda Masukan Salah!, Pastikan Format email sesuai.");
  }else {
    console.log("Email yang anda masukan benar");
  }
  

}

function validasiMobile(mobile){
  if(!validator.isMobilePhone(mobile, 'id-ID')){
    return console.log("Nomor Telephone Yang anda Masukan Salah!!, Pastikan Format nomor sesuai.");
  
  } else {
    console.log("Nomor yang anda masukan Benar");
  }
  
}

//Simpan Data
const saveIsiData = (name,mobile,email) => {
periksaFolder();
periksaFile();
const contact = {name, mobile, email};
const file = fs.readFileSync('data/contacts.json', 'utf8');
const contacts =JSON.parse(file);
// Membuat Jika Nama duplikat

const namaDuplikat = contacts.find((contact) => contact.name.toLowerCase() === name.toLowerCase());

//Menambahkan validasi untuk nomor telephone
validasiMobile(mobile);
//Menambahkan validasi untuk email
validasiEmail(email);

if(namaDuplikat){
    //Menampilkan jika nilai true bila sama namanya maka munculkan nama sudah digunakan
    //agar error berhenti disini
    return  console.log("Nama sudah digunakan, silakan ganti nama lain");
}
contacts.push(contact);
fs.writeFileSync('data/contacts.json', JSON.stringify(contacts));
console.log("Terima Kasih sudah memasukkan data!");

}


module.exports = { saveIsiData};