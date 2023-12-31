import bcryptjs from "bcryptjs";
import User from "../model/user.model.js";
import { errorHandler } from "../utils/error.js";
import Listing from "../model/listing.model.js";

export const test = (req, res) => {
  res.json({
    message: "Hey",
  });
};

export const updateUser = async (req, res, next) => {
  if (req.user.id != req.params.id) {
    console.log(req.user.id);
    // console.log(req.params.id);
    return next(errorHandler(401, "You can only update your own account!"));
  }
  try {
    if (req.body.password) {
      req.body.password = bcryptjs.hashSync(req.body.password, 10);
    }

    // console.log(req.body.username);
    const updatedUser = await User.findByIdAndUpdate(
      req.params.id,
      {
        $set: {
          username: req.body.username,
          email: req.body.email,
          password: req.body.password,
          avatar: req.body.avatar,
        },
      },
      { new: true }
    );
    delete updatedUser._doc.password;
    // console.log(updatedUser);
    res.status(200).json(updatedUser);
  } catch (error) {
    next(error);
  }
};

export const deleteUser = async (req, res, next) => {
  if (req.user.id != req.params.id) {
    // console.log(req.user.id);
    // console.log(req.params.id);
    return next(errorHandler(401, "You can only delete your own account!"));
  }
  try {
    await User.findByIdAndDelete(req.params.id);
    res.clearCookie("access_token");
    res.status(200).json("User has been deleted!");
  } catch (error) {
    next(error);
  }
};

export const getUserListings = async (req, res, next) => {
  // console.log(req.user)
  // console.log(req.params)

  if (req.user.id == req.params.id) {
    try {
      const listings = await Listing.find({ userRef: req.params.id });
      res.status(200).json(listings);
    } catch (error) {
      next(error);
    }
  } else {
    next(errorHandler(401, "You can only view your own listings!"));
  }
};

export const getUser = async (req, res, next) => {
  try {
    const user = await User.findById(req.params.id);
    // console.log(user)
    if (!user) {
      next(errorHandler(404, "User not found!"));
    }

    delete user._doc.password;

    res.status(200).json(user);
  } catch (error) {
    next(error);
  }
};
