const User = require('../Models/userModel');

const getAllUsers = async (req, res, next) => {

    let users;
    //get all users
    try{
        users = await User.find();
    } catch (err) {
        console.log(err);
    }
    //not found 
    if(!users) {
        return res.status(404).son({message:"Users not found"});
    }

    //display all users
    return res.status(200).json({ users});

};

//data insert
const addUsers = async(req, res, next) => {
    const {name, gmail,age,address} = req.body;

    let users;

    try {
        user = new users({name,gmail,age,address});
        await users.save();
    
    }catch(err){
        console.log(err);
    }

    //not insert users
    if(!users){
        return res.status(404).send({message: "unable to add users"});
    }
    return res.status(200).json({users});
}
exports.getAllUsers = getAllUsers;