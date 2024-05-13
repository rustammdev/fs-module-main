const path = require("path");
const fs = require("fs");

const filePath = path.join(__dirname, "notes3", "note.txt");

/*
 * Agar file ichidagi malumotlar to'liq chiqmasa
 * muommo asinxron funksia orqali bo'ladi, barcha malumotlarni
 * yozishni kutme chop etayotgan bo'ladi
 */


/*
 * Buni oldini olish uchun readFile funksiasini writeFile ichida
 * ya'ni eng oxirida ishlatishimiz kerak
 */

fs.readFile(filePath, "utf-8", (err, data) => {
  if (err) {
    console.log(err);
  } else {
    console.log(data);
  }
});
