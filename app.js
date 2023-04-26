
let plus = document.querySelector('.btn-1')
let minus = document.querySelector('.btn-2')
let input = document.querySelector('input')

plus.onclick = () => {
    input.value++
}

minus.onclick = () => {
    input.value--
}



