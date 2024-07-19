// xQdCdSfSuKShCig3;
const mongoose = require("mongoose");

console.log(process.env.DB_HOST)
const {DB_HOST}=process.env

mongoose.connect(DB_HOST)
    .then(() => console.log("database connect"))
.catch((err)=>console.log(err))