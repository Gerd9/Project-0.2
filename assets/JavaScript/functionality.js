window.onload = () => {
    //capturamos el formulario
    let form = document.getElementById("form");
 
    //escuchamos el evento submit o onsubmit (pulsar el boton de enviar)
    form.addEventListener("submit", (e) => {
       //evitamos el comportamiento por defecto
       e.preventDefault();
 
       //capturamos los inputs de texto
       let name = document.getElementById("inputName").value;
       let email = document.getElementById("inputEmail").value;
       let text = document.getElementById("inputTextarea").value;
 
       //función para descargar el archivo
       function download(filename, text) {
          var element = document.createElement('a');
          element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(text));
          element.setAttribute('download', filename);
        
          element.style.display = 'none';
          document.body.appendChild(element);
        
          element.click();
        
          document.body.removeChild(element);
       }
 
       //constrimos la variable de texto
       let tempText = `
          Emisor: ${name}, \n
          Email: ${email},\n
          Mensaje: ${text}`;
 
       //invocamos la funcion para descargar el archivo
       download("email.txt",tempText);
 
       //ahora hay que mostrar un mensaje en la pantalla, os toca hacerlo a vosotros
       document.getElementById("noti").style.display = 'block';
       
       //código que se ejecuta a los tres segundos de haber sido leido
       setTimeout(function(){
          document.getElementById("noti").style.display = 'none';
       }, 4000);
    });
   
    document.getElementById('noti__close').addEventListener('click', () => {
      noti.style.display = 'none';
   })
  
  }
 


//codigo para que el navbar cambie usando js
window.onscroll = function() {
    myFunction();
}
console.log('window');
//navbar top

   
var header = document.getElementById("navbar_header");
var navTop = header.offsetTop;
 



function myFunction() {

    if (window.scrollY >= 100) {    
      header.classList.add('sticky');
    } else {
       header.classList.remove('sticky');    
    }

   }

