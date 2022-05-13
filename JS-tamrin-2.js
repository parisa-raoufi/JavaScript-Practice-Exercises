
///////////////tamrin-2/////////////
console.log('TAMRIN 2 :');

function reverseString(q) {

    let w = '';
    let p;
    let s = 0;

    for (i = q.length - 1; i >= 0; i--) {

        p = w.concat(q[i]);
        w = p;

        s = s + 1;

    }

    console.log('String :', q, '  =>  reverseString :', w);
}

reverseString('12345');