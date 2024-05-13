const path = require("path")
const fs = require("fs")

/*
    * appendFile() - mavjud file ichiga malumotlarni yangilab yozadi
*/


fs.appendFile(path.join(__dirname, "notes3", "note.txt"), "\nYangi malumot qo'shildi",(err) => {
    if (err) {
        console.log(err);
    }else {
        console.log("File malumoti yangilandi");
    }
})