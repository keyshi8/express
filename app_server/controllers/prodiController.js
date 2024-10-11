const index = (req, res) =>{
    const prodi = [
        {
           prodi : ' sistem informasi',
           fakultas : ' FIKR',
           singkatan : 'SI'
        },
        {
            prodi : 'informatika',
           fakultas : ' FIKR',
           singkatan : 'IF'
        },
        {
            prodi : 'teknik elektro',
           fakultas : ' FIKR',
           singkatan : 'TE'
        },
        {
            prodi : 'manajemen informatika',
           fakultas : ' FIKR',
           singkatan : 'MI'
        },
        {
            prodi : ' manajemen',
           fakultas : ' FEB',
           singkatan : 'MJ'
        },
        {
            prodi : 'akutansi',
           fakultas : ' FEB',
           singkatan : 'AK'
        },
    ];

    res.render('prodi', {title: 'Halaman Prodi', prodi, layout: 'main'});
}
module.exports = {index}