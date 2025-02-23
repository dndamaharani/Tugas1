// Kalkulator sederhana

const readline = require("readline");
const {
  tambah,
  kurang,
  kali,
  bagi,
  pangkat,
  faktorial,
  isPrima,
  modulus,
  absolut,
  maksimum,
  minimum,
  bulatkan,
} = require("./solution");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

function kalkulator() {
  console.log("=== KALKULATOR SEDERHANA ===");
  console.log("1. Tambah");
  console.log("2. Kurang");
  console.log("3. Kali");
  console.log("4. Bagi");
  console.log("5. Pangkat");
  console.log("6. Faktorial");
  console.log("7. Cek Bilangan Prima");
  console.log("8. Modulus");
  console.log("9. Absolut");
  console.log("10. Maksimum");
  console.log("11. Minimum");
  console.log("12. Bulatkan");
  console.log("0. Keluar");
  rl.question("Pilih operasi (0-12): ", (pilihan) => {
    if (pilihan === "0") {
      console.log("Terima kasih telah menggunakan kalkulator.");
      rl.close();
      return;
    }

    let a, b;
    switch (pilihan) {
      case "1":
        rl.question("Masukkan angka pertama: ", (num1) => {
          rl.question("Masukkan angka kedua: ", (num2) => {
            console.log("Hasil:", tambah(Number(num1), Number(num2)));
            kalkulator();
          });
        });
        break;
      case "2":
        rl.question("Masukkan angka pertama: ", (num1) => {
          rl.question("Masukkan angka kedua: ", (num2) => {
            console.log("Hasil:", kurang(Number(num1), Number(num2)));
            kalkulator();
          });
        });
        break;
      case "3":
        rl.question("Masukkan angka pertama: ", (num1) => {
          rl.question("Masukkan angka kedua: ", (num2) => {
            console.log("Hasil:", kali(Number(num1), Number(num2)));
            kalkulator();
          });
        });
        break;
      case "4":
        rl.question("Masukkan angka pertama: ", (num1) => {
          rl.question("Masukkan angka kedua: ", (num2) => {
            console.log("Hasil:", bagi(Number(num1), Number(num2)));
            kalkulator();
          });
        });
        break;
      case "5":
        rl.question("Masukkan angka: ", (num1) => {
          rl.question("Masukkan pangkat: ", (num2) => {
            console.log("Hasil:", pangkat(Number(num1), Number(num2)));
            kalkulator();
          });
        });
        break;
      case "6":
        rl.question("Masukkan angka: ", (num) => {
          console.log("Hasil:", faktorial(Number(num)));
          kalkulator();
        });
        break;
      case "7":
        rl.question("Masukkan angka: ", (num) => {
          console.log(
            "Hasil:",
            isPrima(Number(num)) ? "Bilangan Prima" : "Bukan Bilangan Prima"
          );
          kalkulator();
        });
        break;
      case "8":
        rl.question("Masukkan angka pertama: ", (num1) => {
          rl.question("Masukkan angka kedua: ", (num2) => {
            console.log("Hasil:", modulus(Number(num1), Number(num2)));
            kalkulator();
          });
        });
        break;
      case "9":
        rl.question("Masukkan angka: ", (num) => {
          console.log("Hasil:", absolut(Number(num)));
          kalkulator();
        });
        break;
      case "10":
        rl.question("Masukkan angka pertama: ", (num1) => {
          rl.question("Masukkan angka kedua: ", (num2) => {
            console.log("Hasil:", maksimum(Number(num1), Number(num2)));
            kalkulator();
          });
        });
        break;
      case "11":
        rl.question("Masukkan angka pertama: ", (num1) => {
          rl.question("Masukkan angka kedua: ", (num2) => {
            console.log("Hasil:", minimum(Number(num1), Number(num2)));
            kalkulator();
          });
        });
        break;
      case "12":
        rl.question("Masukkan angka: ", (num) => {
          console.log("Hasil:", bulatkan(Number(num)));
          kalkulator();
        });
        break;
      default:
        console.log("Pilihan tidak valid.");
        kalkulator();
        break;
    }
  });
}

kalkulator();
