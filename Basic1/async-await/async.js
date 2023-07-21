const time = 1000;

const url0 = "Passapol.app/p"
const url1 = "Passapol.app/p1"
const url2= "Passapol.app/p2"
const url3 = "Passapol.app/p3"
const url4 = "Passapol.app/p4"
const connect = true

function downloaddata(url){
    return new Promise(function(resolve,reject){
        console.log(`กำลังโหลด ${url}`)
        setTimeout(() => {
            if (connect){
                resolve(`โหลด ${url} เรียบร้อย`)
            }else{
                reject('เกิดข้อผิดพลาด')
            }
        }, time);
    })
}
function download(url){
    console.log(downloaddata(url))
}
async function downloadNew(){
    console.log(await downloaddata(url0))
    console.log(await downloaddata(url1))
    console.log(await downloaddata(url2))
    console.log(await downloaddata(url3))
    console.log(await downloaddata(url4))
}
downloadNew()