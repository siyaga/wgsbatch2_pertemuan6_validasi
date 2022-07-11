
    const { argv } = require('process')
    const contact = require('./contact')
    // Memanggil Yargs
    const yargs = require("yargs");
    
    // Membuat Yargs 
    yargs.command({
        command:'add',
        describe:'add new contact',
        builder:{
            //membuat isi Objek deksripsinya
            // Membuat nama
            name: {
                describe:'Contact name',
                demandOption:true,
                type:'string',
            },
            // membuat email
            email:{
                describe:'Contacct Email',
                demandOption:false,
                type:'string',
            },
            // membuat Mobile
            mobile:{
                describe:'Contact Mobile phone number',
                demandOption:true,
                type:'string',
            },
    
        },
        //Memanggil yargs
        handler(argv){
      
    
            
    
                contact.saveIsiData(argv.name,argv.mobile,argv.email);
            
        },
    });
    yargs.parse();
 