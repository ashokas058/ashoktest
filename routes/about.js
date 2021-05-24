var express=require('express')
var router=express.Router()

router.get('/',function(req,res,next){
var val=["Ashok",'Akhila','aishwariya']
//res.render('about',{name:"Ashok",address:"Pathanapuram engineering college",values:val});
res.json({name:'Ashok',Adress:'Pathanampuram'});


});
module.exports=router;