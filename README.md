app.post('student',async(req.res)=>{
    const {name,email,password,......all fields}=req.body
    if(!name||!email||.....){
        return res.json(error:"envalidfielsd")
    }
    try{
        const userExist = await user.findOne({email:email});
        if(userExist){
            return res.json(error:'alredy exists')
        }
        const user= new user({name,email,password......});

        awit user.save();
        res.json(message:'succesfull')
    }catch(err){
        console.log(err)
    }
})




// go to schema file
const bycript=require('bycrypt)

userSchema.pre('save',async function(next){
if(this.isModified('password')){
    this.password=bycript.hash(this.password,12)
}
})