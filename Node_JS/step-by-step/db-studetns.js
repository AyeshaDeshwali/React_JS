1 ka matlab hota hai ki aap us field ko include(शामिल करना) karna chahte hain.
0 ka matlab hota hai ki aap us field ko exclude(निकालना) karna chahte hain.

"comments" field ko sirf first 5 elements ke saath include karein
db.students.find({}, { "comments": { $slice: 5 } });

 "comments" field ko sirf "text" key ke saath include karein
db.students.find({}, { "comments.text": 1 });

 "comments" field ko sirf first 2 elements ke saath include karein, jinme "author" "John" ho
db.students.find({}, { "comments": { $elemMatch: { "author": "John" } } });

 1. Vo sare students ki list btao jinka email ni hai
 db.students.find({email:null})

 3. Sare students ka only age and mobile return krvao
 db.students.find({},{age:1,mobile:1})

 Cannot do exclusion on field mobile in inclusion projection", yeh is wajah se aa raha hai ki MongoDB ek hi projection object mein inclusion aur exclusion dono ko saath mein nahi support karta.
 db.students.find({},{age:1,mobile:0})

 2. Vo sare students ki list btao jinka mobile number same hai
 db.students.aggregate(
 [
   {
   $group : {_id:"$mobile", 
              mobile:{
              	$push:"$$ROOT"
              }
            }
   }
 ]
 )


db.students.updateMany({}, {$push : {mark : {$each : [11,22,33,44]}}});
db.students.updateOne({},{$set:{mark:[]}})
db.students.deleteOne({mark:[11,22,34]})



