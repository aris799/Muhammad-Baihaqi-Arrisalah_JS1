const readline = require('readline-sync');
let repeat = 'y';
function tambah(f, g) {
    return f + g;
}
//Do While 
do {
    console.log("Tugas JS - Muhammad Baihaqi Arrisalah\n");
    console.log("Contoh Program JS :");
    console.log("1. If Else");
    console.log("2. Nested If");
    console.log("3. For ");
    console.log("4. While ");
    console.log("5. Function\n");

    const pilihan = readline.question("Input Pilihan Anda : ");

    //Switch Case 
    switch (pilihan) {
        // If Else 
        case '1':
            a = parseFloat(readline.question("Input Nilai Anda: "));
            if (a >= 80) {
                console.log("Selamat, Anda lulus!");
            } else {
                console.log("Maaf, Anda Tidak Lulus. Tetap Semangat :)");
            }
            break;

        // Nested If 
        case '2':
            b = parseFloat(readline.question("Input Nilai Anda: "));
            if (b >= 70) {
                console.log("Selamat, Anda lulus!");
                if (b >= 85) {
                    console.log("Anda Mendapatkan Nilai A.");
                } else {
                    console.log("Anda Mendapatkan Nilai B.");
                }
            } else {
                console.log("Maaf, Anda Tidak Lulus. Tetap Semangat :)");
            }
            break;

        // For 
        case '3':
            console.log("Formasi Bintang Dengan Perulangan For :");
            for (let c = 1; c <= 5; c++) {
                let bintang = '';
                for (let d = 1; d <= c; d++) {
                    bintang += '* ';
                }
                console.log(bintang);
            }
            break;

        // While 
        case '4':
            console.log("Formasi Bintang Dengan Perulangan While  :");
            let d = 5;
            while (d >= 1) {
                let bintang = '';
                let e = 1;

                while (e <= d) {
                    bintang += '* ';
                    e++;
                }

                console.log(bintang);
                d--;
            }
            break;

        // Function
        case '5':
            console.log("Function Penjumlahan");
            const bil1 = parseFloat(readline.question("Input Bilangan Pertama : "));
            const bil2 = parseFloat(readline.question("Input Bilangan Kedua   : "));
            const sum = tambah(bil1, bil2);
            console.log("Hasil penjumlahan      : " + sum);
            break;

        default:
            console.log("Pilihan Tidak Valid, Harap Inputkan Angka 1-5.");
    }

    repeat = readline.question("Apakah Anda ingin mencoba program lagi? (y/n): ");
} while (repeat.toLowerCase() === 'y');
