// xQdCdSfSuKShCig3;
const mongoose = require("mongoose");

const {DB_HOST}=require("./config")

mongoose.connect(DB_HOST)
    .then(() => console.log("database connect"))
.catch((err)=>console.log(err))