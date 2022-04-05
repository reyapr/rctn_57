import fs from 'fs'
let path = '/Users/renalapriansyah/me/hacktiv8/RCTN_57/sesi-3/person.json'

let getData = (path) => {
    return new Promise((resolve, reject) => {
        fs.readFile(path, 'utf-8', function(err, data){
            if(err) {
                reject(err)
            }
            resolve(data)
        })
    })
}

(async () => {
    let result = await getData(path)
    console.log(result, `<=================== result ==================`);
})()