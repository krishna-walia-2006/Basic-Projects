const input=document.getElementById('number-input');

function handleClickButton(el) {
    if(el.innerHTML=='=') {
        input.value = eval(input.value)
    }
    else if(el.innerHTML=='x') {
        const temp=`${input.value}*`;
        input.value=temp 
    }
    else if(el.innerHTML=='÷') {
        const temp=`${input.value}/`;
        input.value=temp 
    }
    else if(el.innerHTML=='AC') {
        input.value='0'
    }
    else {
        const temp=`${input.value}${el.innerHTML}`;
        input.value=temp 
    }
    
}
