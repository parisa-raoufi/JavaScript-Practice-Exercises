///////////////tamrin-3/////////////
console.log('TAMRIN 3 :');

function finding_GCD_and_LCM(a, b) {


    let GCD;
    let LCM;
    let arr_a = [];
    let arr_b = [];


    for (i = a; i > 0; i--) {
        if (a % i == 0) {
            arr_a.push(i);
        }
    }

    for (i = b; i > 0; i--) {
        if (b % i == 0) {
            arr_b.push(i);
        }
    }

    // console.log(arr_a);
    // console.log(arr_b);

    for (i = arr_a.length - 1; i >= 0; i--) {

        for (k = arr_b.length - 1; k >= 0; k--) {
            if (arr_a[i] == arr_b[k]) {
                GCD = arr_a[i];
            }
        }
    } // (: find B_M_M :) //

    LCM = a * b / GCD; // (: find K_M_M  :) //

    let func = {
        GCD_NUM: GCD,
        LCM_NUM: LCM
    };

    console.log('func.GCD_NUM : ', func.GCD_NUM, '   /    func.LCM_NUM: ', func.LCM_NUM);




}


finding_GCD_and_LCM(15, 6);


