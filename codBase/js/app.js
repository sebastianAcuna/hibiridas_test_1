document.addEventListener("DOMContentLoaded", function(){

    const teclas = document.getElementsByClassName("tecla");
    var numeroOperacion;
    var operador;
    const pantalla = document.getElementById("display")

    for (let item of teclas) {
        
        item.addEventListener("click", function(){
            switch(this.id){
                case '0':
                case '1':
                case '2':
                case '3':
                case '4':
                case '5':
                case '6':
                case '7':
                case '8':
                case '9':
                    if(pantalla.innerHTML.length < 8){
                        var numeroAntiguo = pantalla.innerHTML;
                        if(numeroAntiguo.length <= 1 && numeroAntiguo <= 0){
                            pantalla.innerHTML = "";
                            pantalla.innerHTML = this.id;
                        }else{
                            numeroAntiguo+=this.id;
                            pantalla.innerHTML = numeroAntiguo;        
                        }
                    }

                    break;
                case "menos":
                        operador = "-";
                        numeroOperacion  = pantalla.innerHTML;
                        pantalla.innerHTML = "";
                    break;
                case "punto":
                    if(pantalla.innerHTML.length > 0 && pantalla.innerHTML.length < 8){
                        var yaHayPunto = false;
                        var numeroAntiguo = pantalla.innerHTML;

                        for(let e = 0; e < numeroAntiguo.length; e++){
                            if(numeroAntiguo[e] == '.'){ yaHayPunto = true; }
                        }
                        if(!yaHayPunto){
                            numeroAntiguo += ".";
                            pantalla.innerHTML = numeroAntiguo;
                        }
                        
                    }
                    break;
                case "igual":
                    var enteroDecimal = false; /* true = decimal; false = entero; */
                    var numeroOp = pantalla.innerHTML;


                    for(let e = 0; e <= numeroOperacion.length; e++){
                         if(numeroOperacion[e] == '.'){ enteroDecimal = true; break;}
                    }
                    numeroOperacion = (enteroDecimal) ? parseFloat(numeroOperacion) : parseInt(numeroOperacion);
                    
                    enteroDecimal = false;
                    for(let e = 0; e <= numeroOp.length; e++){
                        if(numeroOp[e] == '.'){ enteroDecimal = true; break;}
                   }

                   numeroOp = (enteroDecimal) ? parseFloat(numeroOp) : parseInt(numeroOp);


                    switch(operador){
                        case "+":
                            pantalla.innerHTML = numeroOperacion + numeroOp;
                            break;

                        case "-":
                                pantalla.innerHTML = numeroOperacion - numeroOp;
                            break;

                        case "*":
                                pantalla.innerHTML = numeroOperacion * numeroOp;
                            break;
                        case "/":
                                pantalla.innerHTML = numeroOperacion / numeroOp;
                            break;
                    }
                    

                    numeroOperacion = "";
                    numeroOp = "";
                    break;
                case "mas":
                    operador = "+";
                    numeroOperacion  = pantalla.innerHTML;
                    pantalla.innerHTML = "";
                    break;
                case "on":
                    pantalla.innerHTML = "0";
                    numeroOperacion = "";
                    break;
                case "sign":
                        numeroAntiguo = pantalla.innerHTML;

                        if(numeroAntiguo[0] == '-'){
                            numeroAntiguo = numeroAntiguo.substring(1);
                        }else if(numeroAntiguo != '0'){
                            numeroAntiguo = "-" + numeroAntiguo;
                        }

                        pantalla.innerHTML = numeroAntiguo;
                    break;
                case "raiz":
                        operador = "r";
                        numeroOperacion  = pantalla.innerHTML;
                        pantalla.innerHTML = "";
                    break;
                case "dividido":
                        operador = "/";
                        numeroOperacion  = pantalla.innerHTML;
                        pantalla.innerHTML = "";
                    break;
                case "por":
                        operador = "*";
                        numeroOperacion  = pantalla.innerHTML;
                        pantalla.innerHTML = "";
                    break;
            }
            
        })
    }

});