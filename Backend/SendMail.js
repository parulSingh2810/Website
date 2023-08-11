const nodemailer=  require('nodemailer');
const SMTP_MAIL='rajputhimanshusingh2002@gmail.com'
const SMTP_PASSWORD='szdlifutbjbmdlly'

const sendMail= async(email ,mailSubject,content)=>{
try{
   
    const transport = nodemailer.createTransport({
        host:'smtp.gmail.com',
        port: 587,
        secure: false,
        requireTLS:true,
        auth:{
            user:SMTP_MAIL,
            pass:SMTP_PASSWORD

        }

    });

    const mailOption ={
        from: SMTP_MAIL,
        to:email,
        subject: mailSubject,
        html:content
    }

    transport.sendMail(mailOption,function(error,info){
        if(error) console.log(error);
        else{
            console.log('mail sent successfully:-' ,info.response);
        }
    })
}
catch(error){
   console.log(error.message);
}


}

module.exports =sendMail