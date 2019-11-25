const server = require('express')()
const port = 5000

let nilai = 40
// let data = {
//     nama : 'M.iqbal ridzjaldi',
//     Npm : '17411046',
//     jurusan : ' sistem informasi',
//     kuliah : (namamatkul , nama )=>{
//         console.log('selamat kuliah ' + nama + ' dimatakuliah ' + namamatkul)
//     }
// }
// console.log (data.kuliah(' pemrograman III ',data.nama))
 let listmhs=[
   {  
       nama: 'muhammad iqbal ridzjaldi',
       npm : 17411046
       } ,
       {
           nama : 'budi',
           npm  :172273
       }  ,
       {
           nama : 'nana',
           npm  :1828323
       }
 ]
 for (let index = 0; index < listmhs.length; index++) {
console.log(listmhs[index].nama + ':'+ listmhs[index].npm)
 }
//if (nilai>80) {
 //   console.log('nilai anda A')
    
//}else if (nilai>70) {
//    console.log('nilai anda B')
    
//}else  {
 //   console.log('nilai anda c')
    
//}
server.listen(port,function(){
 console.log ('server started on port'+port)
})