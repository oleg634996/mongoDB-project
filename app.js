// xQdCdSfSuKShCig3;
const mongoose = require("mongoose");

const DB_HOST =
  "mongodb+srv://oleg:xQdCdSfSuKShCig3@cluster0.ho3kmez.mongodb.net/contacts_reader?retryWrites=true&w=majority&appName=Cluster0";

mongoose.connect(DB_HOST)
    .then(() => console.log("database connect"))
.catch((err)=>console.log(err))