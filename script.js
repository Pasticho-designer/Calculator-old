const pantalla = document.querySelector('#input');

function calculate(num) {

    pantalla.value += num;

    if ( num == "c") {
        pantalla.value = '';
    }
    
}

function resolver(){

    try {
        pantalla.value = eval(pantalla.value);
        return

    }
    catch{
        pantalla.value = '0';
    }
}