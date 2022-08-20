import User from "../schemas/User.js";

export const updateUser = async (req, res) => {
  if (req.params.id === req.user.id) {
    try {
      const updatedUser = await User.findByIdAndUpdate(
        req.params.id,
        { $set: req.body },
        { new: true }
      );
      res.status(200).send(updatedUser);
    } catch (error) {
        res.send(error);
    }
  } else {
    res.send("You can only update your account...!");
  }

};

export const deleteUser = async (req, res) => {

    if (req.params.id === req.user.id){
        try {
            await User.findByIdAndDelete(req.params.id);
            res.send("User Successfully Deleted...!")
        } catch (error) {
            res.send(error)
        }
    }else{
        res.send("You can only Delete Your account...!")
    }

};


export const getUser = async (req, res) => {
    try {
        const user = await User.findById(req.params.id);
        res.json(user);
        
    } catch (error) {
        res.send(error)
    }
};
const subscribe = (req, res) => {};
const unsubscribe = (req, res) => {};
const like = (req, res) => {};
const dislike = (req, res) => {};
