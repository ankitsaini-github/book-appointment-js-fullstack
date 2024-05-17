const User = require('../models/users');

// get all users
exports.getUsers = (req, res, next) => {
  User.findAll().then(result => {
    console.log('ALL USERSSSSSSSSSSSS ======= ',result)
    res.send(result);
  }).catch(err => console.log(err));
};

// post user
exports.postAddUser = (req, res, next) => {
  const name = req.body.name;
  const email = req.body.email;
  const phone = req.body.phone;
  User.create({
    name: name,
    email: email,
    phone: phone
  }).then(result => {
    console.log(result);
  }).catch(err => console.log(err))
};

// get edit user
exports.getEditUser = (req, res, next) => {

};

//post edit user
exports.postEditUser = (req, res, next) => {
  const userId = req.body.userId;
  const updatedName = req.body.name;
  const updatedEmail = req.body.email;
  const updatedPhone = req.body.phone;
  const updatedUser = new User(
    userId,
    updatedName,
    updatedEmail,
    updatedPhone
  );
  updatedUser.save();
  res.redirect('/');
};

// delete user
exports.postDeleteProduct = (req, res, next) => {
  const userId = req.body.userId;
  User.deleteById(userId);
  res.redirect('/');
};
