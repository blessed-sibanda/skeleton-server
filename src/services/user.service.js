const merge = require('lodash/merge');

const User = require('../models/user.model');

const userById = async (req, res, next, id) => {
  let user = await User.findById(id);
  if (!user)
    return res.status(404).json({
      error: 'User not found',
    });
  req.profile = user;
  next();
};

const updateUser = async (userData) => {
  delete userData._id;
  delete userData.hashedPassword;
  delete userData.salt;

  if (userData.email && userData.email.trim() === req.profile.email)
    delete userData.email;

  let user = merge(req.profile, userData);
  return await user.save();
};

module.exports = { userById, updateUser };
