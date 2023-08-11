const bcrypt = require("bcryptjs");
const express = require("express");
const mysql = require("mysql");
var session = require('express-session');
const randomstring = require("randomstring")
const sendMail= require('./SendMail');
const multer = require('multer');
const path = require('path');


const salt = 10;


const storage= multer.diskStorage({
  destination:(req,file,cb)=>{
    cb(null,'Public/images')
  },
  filename:(rew,file,cb)=>{
    cp(null,file.fieldname + "_" +Date.now()+path.extname(file.originalname));
  }
})

let upload = multer({storage: storage});



var app = express();

// ADD THIS
var cors = require('cors');
const { cp } = require("fs");
app.use(express.json());
app.use(cors());

// for mail




app.use(session({ 
  secret: '123458cat',
  resave: false,
  saveUninitialized: true,
  cookie: { maxAge: 60000 }
}))



// create dp on sql
const dp =mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"",
    database:"signup"
})


// using mail verifaction seting

app.post("/signup", (req, res) => {
  const q = "SELECT * FROM user WHERE email=?";
  dp.query(q, [req.body.email], (err, data) => {
    if (err) return res.json(err);
    if (data.length > 0) return res.json("account already created pls login");

    const sql = "INSERT INTO user (`firstName`,`lastName`,`email`,`password`,`aadharNumber`,`acountType`) VALUES(?)";
    bcrypt.hash(req.body.password.toString(),salt,(err,hash)=>{
        if(err) return res.json({Error: 'Error for hashing password'});  

    const values= [
        req.body.firstName,
        req.body.lastName,
        req.body.email,
        hash,
        req.body.aadharNumber,
        req.body.acountType,
        
    ]
      dp.query(sql, [values], (err, data) => {
        if (err) {
          return res.json("error");
        }

       const randomToken = randomstring.generate();
        dp.query("UPDATE user set token=? where email=?",[randomToken, req.body.email],function(error,result){
        if(error){
          return res.json("error");
        }
        
       });

       let mailSubject = 'Mail Verification';
       let content ='<p>Hii '+req.body.firstName+',Please <a href="http://localhost:8000/mail-verification?token='+randomToken+'"> verify</a> your Mail.' ;

       sendMail(req.body.email , mailSubject,content);
        console.log(data);
        return res.json(data);
      });
    });
  });
});

app.get('mail-verification', function(req, res, next) {
 
 
  dp.query('SELECT * FROM user WHERE token = ?' + req.query.token + '"', function(err, result) {
       if (err) throw err;

       var type
       var msg

       console.log(result[0].is_verified);

        if(result[0].is_verified === 0){
           if (result.length > 0) {

               var data = {
                is_verified: 1
               }

               dp.query('UPDATE user SET ? WHERE email ="' + result[0].email + '"', data, function(err, result) {
                   if(err) throw err
              
               })
               type = 'success';
               msg = 'Your email has been verified';
               res.redirect('/');
             
           } else {
               console.log('2');
               type = 'success';
               msg = 'The email has already verified';

           }
        }else{
           type = 'error';
           msg = 'The email has been already verified';
        }

       req.flash(type, msg);
      
   });
})


app.post("/owner-signup", upload.single('file'), (req, res) => {
  const q = "SELECT * FROM login WHERE email=?";
  dp.query(q, [req.body.email], (err, data) => {
    if (err) return res.json(err);
    if (data.length) return res.json("account already created pls login");

   
    const sql = "INSERT INTO login (`firstName`,`lastName`,`email`,`password`,`aadharNumber`,`acountType`,`Registration`,`fileUpload`) VALUES(?)";
    bcrypt.hash(req.body.password.toString(),salt,(err,hash)=>{
        if(err) return res.json({Error: 'Error for hashing password'});  

    const values= [
        req.body.firstName,
        req.body.lastName,
        req.body.email,
        hash,
        req.body.aadharNumber,
        req.body.Registration,
        req.body.acountType,
        req.body.fileUpload,
        
    ]
      dp.query(sql, [values], (err,data) => {
        if (err) {
          return res.json("error");
        }
        console.log(data);
        return res.json(data);
      });
    });
  });
});

app.post("/non-registered-pg", (req, res) => {
  const q = "SELECT * FROM ownerNotRegisterPg WHERE email=?";
  dp.query(q, [req.body.email], (err, data) => {
    if (err) return res.json(err);
    if (data.length) return res.json("account already created pls login");

   
    const sql = "INSERT INTO ownerNotRegisterPg (`firstName`,`lastName`,`email`,`password`,`aadharNumber`,`acountType`,`fileUpload`) VALUES(?)";
    bcrypt.hash(req.body.password.toString(),salt,(err,hash)=>{
        if(err) return res.json({Error: 'Error for hashing password'});  

    const values= [
        req.body.firstName,
        req.body.lastName,
        req.body.email,
        hash,
        req.body.aadharNumber,
        req.body.acountType,
        req.body.fileUpload,
        
    ]
      dp.query(sql, [values], (err,data) => {
        if (err) {
          return res.json("error");
        }
        console.log(data);
        return res.json(data);
      });
    });
  });
});



//login verification
app.post("/login", (req, res) => {
  const sql = "SELECT * FROM login WHERE email = ?";

  dp.query(sql, [req.body.email], (err, data) => {
    if (err) {
      return res.json({ Error: "login error in server " });
    }

    if (data.length) {
     // bcrypt.compare(req.body.password, data[0].password, (err, data) => {
      //  if (err) return res.json({ Error: "password compare error" });
        if (data) {
          return res.json("Success");
        } else {
          return res.json({ Error: "Password not match" });
        }
     // });
    } else {
      return res.json({ Error: "no email exixted" });
    }
  });
});

// update  password and checking

app.post("/update", (req, res) => {
  const sql = "SELECT * FROM user WHERE email = ?";

  dp.query(sql, [req.body.email], (err, data) => {
    if (err) return res.json(err);
    if (data.length > 0) {
      console.log(data);
      return res.json("email found");
    } else {
      return res.json("not register");
    }
  });
});

app.put("/update-password", (req, res) => {
  const sql = "UPDATE  user SET password=? WHERE  email=?  ";

  dp.query(sql, [req.body.password, req.body.email], (err, data) => {
    if (err) return res.json("Error");
    else {
      console.log(data);
      return res.json(data);
    }
  });
});

// add customer details .............

app.post("/Add-Customer", (req, res) => {
    const sql =
      "INSERT INTO customer_details (`FirstName`,`LastName`,`Mobilenumber`,`DOB`,`Gender`,`RoomNo`,`Roomtype`,`Address`,`email`) VALUES(?)";

    const values = [
      req.body.FirstName,
      req.body.LastName,
      req.body.Mobilenumber,
      req.body.DOB,
      req.body.Gender,
      req.body.RoomNo,
      req.body.Roomtype,
      req.body.Address,
      req.body.email,
    
    ];
    dp.query(sql, [values], (err, data) => {
      if (err) {
        return res.json("error");
      }
      return res.json(data);
    });
  });

// add hotels details..................
app.post("/Add-Hotel", (req, res) => {
    const sql =
    "INSERT INTO hotels (`OwnerName`,`HotelName`,`Address`,`RoomNumber`,`RoomType`,`Address`,`city`,`District`,`Pincode`,`Email`,`AadharNumber`) VALUES(?)";

  const values = [
    req.body.OwnerName,
    req.body.HotelName,
    
    req.body.RoomNumber,
    req.body.RoomType,
    req.body.Address,
    req.body.city,
    req.body.District,
    req.body.Pincode,
    req.body.Email,
    
    req.body.AadharNumber,
  ];
  dp.query(sql, [values], (err, data) => {
    if (err) {
      return res.json("error");
    }
    else{

    console.log(res.data);
    return res.json(data);
    }
  });
   
   
  });

  app.post("/Add-PG", (req, res) => {
    const sql =
    "INSERT INTO pgadd (`PGName`,`email`,`Address`,`City`,`District`,`State`,`Pincode`,`GSTnumber`,`PanCardNo`,`TotalNoOfRooms`,`AC`,`NONAC`,`ContactPerson`,`SinglePrice`,`SingleImage`,`SingleAmenitiy`,`SingleDetails`,`DoublePrice`,`DoubleImage`,`DoubleAmanitiy`,`DoubleDetails`,`TriplePrice`,`TripleImage`,`TripleAmenities`,`TripleDetails`,`FlatmatePrice`,`FlatmateImage`,`FlatmateAmenities`,`FlatmateDetails`,`PropertyDocuments`) VALUES(?)";

  const values = [
    
    req.body.PGName,
    req.body.email,
    req.body.Address,
    req.body.City,
    req.body.District,
    req.body.State,
    req.body.Pincode,
    req.body.GSTnumber,
    req.body.PanCardNo,
    req.body.TotalNoOfRooms,
    req.body.AC,
    req.body.NONAC,
    req.body.ContactPerson,
  //  Single sharing 
    req.body.SinglePrice,
    req.body.SingleImage,
    req.body.SingleAmenitiy,
    req.body.SingleDetails,
    // Double Sharing 
    req.body.DoublePrice,
    req.body.DoubleImage,
    req.body.DoubleAmanitiy,
    req.body.DoubleDetails,
    // Triple sharing
    req.body.TriplePrice,
    req.body.TripleImage,
    req.body.TripleAmenities,
    req.body.TripleDetails,
    //Flatmate
    req.body.FlatmatePrice,
    req.body.FlatmateImage,
    req.body.FlatmateAmenities,
    req.body.FlatmateDetails,
    
    req.body.PropertyDocuments,




  ];
  dp.query(sql, [values], (err, data) => {
    if (err) {
      return res.json("error");
    }
    else{

    console.log(res.data);
    return res.json(data);
    }
  });
   
   
  });


  
// add room details...................................

app.post("/Add-Room", (req, res) => {
    const sql =
      "INSERT INTO roomii (`HotelName`,`RoomNumber`,`RoomType`,`MaximumOccurance`,`BedType`,`PriceperNight`,`Amenities`,`roomDescription`,`availability`,`additionalNotes`,`roomImages`) VALUES(?)";
    const values = [
      req.body.HotelName,
      req.body.RoomNumber,
      req.body.RoomType,
      req.body.MaximumOccurance,
      req.body.BedType,
      req.body.PriceperNight,
      req.body.Amenities,
      req.body.roomDescription,
      req.body.availability,
      req.body.additionalNotes,
      req.body.roomImages,
    ];
    dp.query(sql, [values], (err, data) => {
      if (err) {
        return res.json("error");
      }
      else{
      console.log(data);
      return res.json(data);
      }
    });
  });


//Add Amenitites

app.post("/Add-Amaniteties", (req, res) => {
  const sql =
  "INSERT INTO  add_amaniteties(`HotelName`,`Amenityname`,`Capacity`,`Price`,`Roomdescription`,`Image`,`Availability`,`additionalnotes`) VALUES(?)";

const values = [
  req.body.HotelName,
  req.body.Amenityname,
  req.body.Capacity,
  req.body.Price,
  req.body.Roomdescription,
  req.body.Image,
  req.body.Availability,
  req.body.additionalnotes,
 

];
dp.query(sql, [values], (err, data) => {
  if (err) {
    return res.json("error");
  }
  return res.json(data);
});
});



// Update Profile
app.put("/Profile-Update", (req, res) => {
  const sql =
    "UPDATE  login SET password=? WHERE  HotelName=? ,Amenityname=?,email=?,city=?,state=?,street=?,phone=?,Birthday=?,Maritial_Status=?,Gender=?,password=?";
  const values = [
    req.body.HotelName,
    req.body.Amenityname,
    req.body.email,
    req.body.city,
    req.body.state,
    req.body.street,
    req.body.phone,
    req.body.Birthday,
    req.body.Maritial_Status,
    req.body.Gender,
    req.body.password,
  ];

  dp.query(sql, [values], (err, data) => {
    if (err) return res.json("Error");
    else {
      console.log(data);
      return res.json(data);
    }
  });
});

app.get("/tabledata",(req,res)=>{
 
  dp.connect(function(error) {
    if(error)console.log(error);
    const sql="SELECT * FROM user";
    dp.query(sql,function(error,result){
      if(error){
        console.log(error);
        return result(500).json({error:"Failed to fetch data from d"})
      }
      console.log(result);
      return res.send(result).json;
      
    });
  });
});

// app.get("/searchfetch",(req,res)=>{
 
//   dp.connect(function(error) {
//     if(error)console.log(error);
//     const sql="Select * from pgadd where Address LIKE %search% OR City LIKE %search% OR District LIKE %search% OR State LIKE %search% " ;
//     dp.query(sql,function(error,result){
//       if(error){
//         console.log(error);
//         return result(500).json({error:"Failed to fetch data from d"})
//       }
//       console.log(result);
//       return res.send(result).json;
      
//     });
//   });
// });



// app.post("/searching",(req,res)=>{
//  const sql="Select * from pgadd where Address LIKE %search% OR City LIKE %search% OR District LIKE %search% OR State LIKE %search% " ;
  
//   const values=[
//     req.body.search,
//   ]
//   dp.query(sql,[values],(err,data)=>{
//     if (err) return res.json("Error");
//     else {
//       console.log(data);
//       return res.json(data);
//     }
//   });
// });



app.post("/searching",(req,res)=>{
  const searchTerm = req.body.search;

  const sql = "SELECT * FROM pgadd WHERE Address LIKE ? OR City LIKE ? OR District LIKE ? OR State LIKE ?";
  
  const values = [
    `%${searchTerm}%`,
    `%${searchTerm}%`,
    `%${searchTerm}%`,
    `%${searchTerm}%`
  ];

  dp.query(sql, values, (err, data) => {
    if (err) {
      console.error(err);
      return res.status(500).json({ error: "Error querying the database" });
    } else {
      console.log(data);
      return res.json(data);
    }
  });
});





// get the data in 




// Chartowner establish
// app.get()

// server establish
app.listen(8000, () => {
  console.log("listining");
});

// dp check with mysql
dp.connect(function (error) {
  if (error) {
    console.log("error occurred while connecting");
  } else {
    console.log("Successfully Connected with MySql");
  }
});

