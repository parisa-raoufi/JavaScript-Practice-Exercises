
/////////////////////////// tamrin-1 ////////////////////////
console.log('TAMRIN 1 :');


function findingmax(String_Max) {

    let y = [];
    let f = [];
    let Max_Num = [];
    let k;

    for (let i = 0; i < String_Max.length; i++) {
        let z = 0;
        for (a = i; a < String_Max.length; a++) {
            if (String_Max[a] == String_Max[i]) {
                z = z + 1;
            }
        }
        y[i] = String_Max[i] + ' => ' + z;
        f[i] = z;
    }

    // console.log('y => ' + y);
    // console.log('f => ' + f);

    let max = Math.max(...f);

    for (i = 0; i < f.length; i++) {
        if (max == f[i]) {
            Max_Num.push(String_Max[i]);
        }
    }
    console.log('String_Max : ' + String_Max, '  =>    Max_Num : ' + Max_Num);

}


findingmax([1, 2, 3, 4, 3, 5, 3, 5, 5])