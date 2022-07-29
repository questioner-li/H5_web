console.log(123)
const addButton = document.getElementById('add')
const subButton = document.getElementById('sub')
addButton.addEventListener('click', control,false)
subButton.addEventListener('click', control,false)
function control(e){
    const temp = e.currentTarget.id
    const font =document.getElementById('p')
    if(temp === 'add'){
        font.style.fontSize = tempSize*1.05 +'px'
    }else{
        font.style.fontSize = tempSize*0.95 +'px'
    }
}