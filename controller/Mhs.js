const mahasiswamodel = require('../models/mahasiswa')

exports.insertmahasiswa = (data) =>
new Promise((resolve,reject) => {
    mahasiswamodel.create(data)
     .then (res => {
         resolve({
             error : false,
             pesan : 'Berhasil Input data'
         })
     })
     .catch(() =>{
         reject ({
            error : false,
            pesan : 'Gagal Input data'
         })
     })
})