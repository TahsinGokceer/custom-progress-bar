const progress = document.querySelector('.progress-done')
const data = progress.innerText

let data1 = data.slice(0, data.length -1)
let intData = parseInt(data1)

setTimeout(() => {
    progress.style.width = progress.getAttribute('data-done') + '%'
    progress.style.opacity = 1 
}, 500)

setInterval(() => {
    intData += 1

    if(intData > 100){
        intData = 10
    }

    let newData = intData.toString() + '%'   

    progress.innerText = newData
    progress.setAttribute('data-done', newData)

    setTimeout(() => {
        progress.style.width = progress.getAttribute('data-done')
        progress.style.opacity = 1 
    }, 500)

}, 1000)