var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
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
});

//route /about
router.get("/about", (req,res)=>{
    // res.send("About us");
    // res.sendFile(__dirname + "/About.html");
    res.render('about', {title: 'About us', layout: 'main'});
});
    
//route /contact
router.get("/contact", (req,res)=>{
    ///res.send("contact us");
    // res.sendFile(__dirname + "/contact.html");
    res.render('contact', {title: 'Halaman Contact', layout: 'main'});
});

// route prodi
router.get("/prodi", (req, res)=>{
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
});

//route /mahasiswa
router.get("/mahasiswa", (req,res)=>{      
    res.json({
        "status" : "succes",
        "message" : "Data Mahasiswa",
        "data" : [{"npm": 2226240020, "nama": "Bryan"
        },{
            "npm" : 2226240010,
            "nama" : "Niko"
        }]
    })
});

//route /dosen
router.get("/dosen", (req,res)=>{      
    res.json({
        "status" : "succes",
        "message" : "Data Dosen",
        "data" : [
            {"Sistem Informasi" : ["Iis" , "Faris", "Dafid"]},
            {"Informatika" : ["Derry" , "Siska", "Yohannes"]}
    ]
    })
});

module.exports = router;
