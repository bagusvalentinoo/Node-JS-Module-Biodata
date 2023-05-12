var biodata = require('./module/biodata');

var name = 'Bagus Valentino';
var birthPlace = 'Bandung';
var birthDate = '24 Februari 2005';
var address = 'Kp. Sindangsari No.25';

console.log('Nama : ' + biodata.setName(name));
console.log(`Tempat Lahir : ${biodata.setBirthPlace(birthPlace)}`);
console.log(`Tanggal Lahir : ${biodata.setBirthDate(birthDate)}`);
console.log(`Alamat : ${biodata.setAddress(address)}`);