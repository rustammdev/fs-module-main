const path = require("path");
const fs = require("fs");

// Mavjud papka ichidagi Filega malumotlarni joylash
const createFile = async (folderName, data) => {
  const filePath = path.join(__dirname, folderName, "note.txt");

  fs.writeFile(filePath, data, (err) => {
    if (err) {
      console.log(err);
    } else {
      console.log("Papkaga malumotlar joylandi: ");
    }

    /*
     * File ichidagi malumotlarni o'qish
     */
    fs.readFile(filePath, "utf-8", (err, data) => {
      if (err) {
        console.log(err);
      } else {
        console.log(data);
      }
    });
  });
};

const newFileNotes = (folderName, data) => {
  const folderPath = path.join(__dirname, folderName);
  // existsSync - file yoki folder mavjudlikka tekshiruvchi method
  const isExists = fs.existsSync(folderPath);

  if (isExists == false) {
    // agar mkdir hamda write file oldidan await ishlatilsa snxron ishlaydi dastur, ya'ni keyingi amalni blokledi

    fs.mkdir(folderPath, (err) => {
      if (err) throw new Error();
      console.log("Notes papkasi ochildi");

      createFile(folderName, data);
    });
  } else {
    createFile(folderName, data);
  }
};

newFileNotes("notes3", "ishladi onasini emsin");
