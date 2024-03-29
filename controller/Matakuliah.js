const MataKuliahModel = require('../models/matakuliahs')

exports.insertMataKuliah = (data) =>
  new Promise((resolve, reject) => {
    MataKuliahModel.create(data)
      .then(res => {
        resolve({
          error: false,
          pesan: 'Berhasil Input Data' 
        })
      })
      .catch (() => {
          reject({
            error: true,
            pesan: 'Gagal Input Data' 
          })
      })
  })
