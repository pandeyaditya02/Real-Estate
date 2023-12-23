import Listing from "../model/listing.model.js";

export const createListing = async (req, res, next) => {
  try {
    // console.log(req.body);
    const listing = await Listing.create(req.body);
    res.status(201).json(listing);
  } catch (error) {
    next(error);
  }
};
