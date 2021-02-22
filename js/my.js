// viet 1 ham kiem tra 1 so co phai SNT hay khong?
function checkSNT(number) {
    if (number < 2) {
        return false;
    }

    if (number === 2) {
        return true;
    }

    for (let i = 2; i < number; i++) {
        // kiem tra xem number co chia het cho bat ky mot gia tri i
        if (number % i === 0) {
            return false;
        }
    }
    return true;
}

// dung vong lap while de hien thi 20 SNT dau tien:
// Goi y:
/*
    tao 1 bien count = 0; i = 2;
    moi lan lap kiem tra i co phai la SNT hay khong?
    + Neu i la SNT thi tang count len 1.
    + Sau do tang gia tri i len 1 dv.
 */

let count = 0;
let i = 2;
let sum = 0;
while (count < 20) {
    if (checkSNT(i)) {
        count++;
        sum = sum + i;
        document.write(i + ',')
    }
    i++;
}
document.write("tong = " + sum)


