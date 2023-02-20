var menu_visible = false;
let menu = document.getElementById("nav");


function mostrarOcultarMenu(){

    if(menu_visible==false){
        menu.style.display = "block";
        menu_visible = true;
    }
    else{
        menu.style.display = "none";
        menu_visible = false;
    }
    
    let contIz = document.getElementById("left-side");
    let titulos = document.querySelectorAll("h1.name, h2.title-right, div.institution-diploma h4, div.position-information h4");
    
    let estilos = document.querySelectorAll("nav p");

    for(let x = 0; x <estilos.length; x++){
        estilos[x].onclick = function(){

            menu.style.display = "none";
            menu_visible = false;
            
            if(x==0){
                contIz.style.backgroundColor="red"; 
                for(let y = 0; y <titulos.length; y++)
                    {titulos[y].style.color="red";}
            }
            if(x==1){
                contIz.style.backgroundColor="green";
                for(let y = 0; y <titulos.length; y++)
                    {titulos[y].style.color="green";}
            }
            if(x==2){
                contIz.style.backgroundColor="orange";
                for(let y = 0; y <titulos.length; y++)
                    {titulos[y].style.color="orange";}
            }
            if(x==3){
                contIz.style.backgroundColor="blue";
                for(let y = 0; y <titulos.length; y++)
                    {titulos[y].style.color="blue";}
            }
            if(x==4){
                contIz.style.backgroundColor="black";
                for(let y = 0; y <titulos.length; y++)
                    {titulos[y].style.color="black";}
            }
                        
        }
    }
}



function cambiarColor(){

}