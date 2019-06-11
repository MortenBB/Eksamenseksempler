const crypto = require("crypto");
/*
crypto.randomBytes(4, (err, buf) => { // 8
    if (err) throw err;
    console.log(`${buf.length} bytes of random data: ${buf.toString('hex')}`);
    crypto.randomBytes(8, (err, buf) => { // 16
        if (err) throw err;
        console.log(`${buf.length} bytes of random data: ${buf.toString('hex')}`);
        crypto.randomBytes(12, (err, buf) => { // 24
            if (err) throw err;
            console.log(`${buf.length} bytes of random data: ${buf.toString('hex')}`);
            crypto.randomBytes(16, (err, buf) => { // 32
                if (err) throw err;
                console.log(`${buf.length} bytes of random data: ${buf.toString('hex')}`);
                crypto.randomBytes(20, (err, buf) => { // 40             
                    if (err) throw err;
                    console.log(`${buf.length} bytes of random data: ${buf.toString('hex')}`);
                    crypto.randomBytes(24, (err, buf) => { // 48
                        if (err) throw err;
                        console.log(`${buf.length} bytes of random data: ${buf.toString('hex')}`);
                    })
                })
            })
        })
    })
})*/
function makeRand(size) {
    crypto.randomBytes(size, function (err, buffer) {
        console.log(`${buffer.length} bytes of random data: ${buffer.toString('hex')}`);
    })
}

function makeSecureRandom(){
    return new Promise((resolve, reject) => makeRand(8))
    .then(makeRand(16))
    .then(makeRand(24))
    .then(makeRand(32))
    .then(makeRand(40))
    .then(makeRand(48))
};
makeSecureRandom()