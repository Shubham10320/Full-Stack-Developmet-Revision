const mongoose=require('mongoose');
require("dotenv").config();

export const connection=mongoose.connect(process.env.MONGOURL)