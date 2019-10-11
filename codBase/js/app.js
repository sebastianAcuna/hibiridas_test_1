document.addEventListener("DOMContentLoaded", function(){

    const teclas = document.getElementsByClassName("tecla");

    const pantalla = document.getElementById("display")

    for (let item of teclas) {
        console.log(item.id);

        item.addEventListener("click", function(){

            switch(this.id){
                case "0":
                case "1":
                case "2":
                case "3":
                case "4":
                case "5":
                case "6":
                case "7":
                case "8":
                case "9":

                    break;
                case "menos":
                    break;
                case "punto":
                    break;
                case "igual":
                    break;
                case "mas":
                    break;
                case "on":
                    break;
                case "sign":
                    break;
                case "raiz":
                    break;
                case "dividido":
                    break;
                case "por":
                    break;


                    

            }
            alert(this.id);
        })
    }
    console.log(teclas);

    //console.log(typeof(teclas));
    // teclas.forEach(element => {
    //     console.log(element);    
    // });

    


});