const index = (req, res) => {
    const berita = [
        {
            judul : 'berita 1',
            isi : ' isi berita 1'
        },
        {
            judul : 'berita 2',
            isi : ' isi berita 2'
        },
    ];
    res.render('index', {title: 'Halaman Home', berita, layout: 'main'});

}
const about = (req, res) => {
    res.render('about', {title: 'About us', layout: 'main'});

}
const contact = (req, res) => {
res.render('contact', {title: 'Halaman Contact', layout: 'main'});
// }
// const prodi = (req, res) =>{
//     const prodi = [
//         {
//            prodi : ' sistem informasi',
//            fakultas : ' FIKR',
//            singkatan : 'SI'
//         },
//         {
//             prodi : 'informatika',
//            fakultas : ' FIKR',
//            singkatan : 'IF'
//         },
//         {
//             prodi : 'teknik elektro',
//            fakultas : ' FIKR',
//            singkatan : 'TE'
//         },
//         {
//             prodi : 'manajemen informatika',
//            fakultas : ' FIKR',
//            singkatan : 'MI'
//         },
//         {
//             prodi : ' manajemen',
//            fakultas : ' FEB',
//            singkatan : 'MJ'
//         },
//         {
//             prodi : 'akutansi',
//            fakultas : ' FEB',
//            singkatan : 'AK'
//         },
//     ];

//     res.render('prodi', {title: 'Halaman Prodi', prodi, layout: 'main'});

}
module.exports = {index, about, contact}