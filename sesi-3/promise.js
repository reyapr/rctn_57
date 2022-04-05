let uangUdin = 12000
let cilok = 11000

const beliSesuatu = (uang, barang) => {
    return new Promise((resolve, reject) => {
        console.log('udin jalan kaki ke amang2 bakso')
        setTimeout(() => {
            if(uang > barang) {
                // kondisi janji sudah bisa terpenuhi    
                resolve(`udin berhasil membeli bakso`)
            } else {
                reject(`uang udin tidak cukup kurang: ${cilok-uangUdin}`) // kondisi janji tidak bisa terpenuhi
            }
        }, 2000)
    })
}

const udinBeliCilok = beliSesuatu(uangUdin, cilok)
udinBeliCilok
    .then((response) => {
        console.log(response, `<=================== response ==================`);
    })
    .catch((error) => {
        console.log(error, `<=================== err ==================`);
    })

const budi = {
    name: 'budi',
    uang: 1000
}

console.log(`uang ${budi.name} sebesar:${budi.uang}`);


