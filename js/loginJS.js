/********************************************
 *    función de validación
 */

function validacion(){
    let correcto = true;      // todo el mundo es inocente hasta que ...
    let username = document.getElementById('username').value;       //getter
    let password = document.getElementById('password').value;       //getter
  
    if (username=="")  {
       document.getElementById('usernameHelp').style.visibility="visible";
       document.getElementById('username').style.borderColor="red";
       correcto = false;
       // no deberia volverse aquí: return false;
    }
     
    if (password=="")  {
     document.getElementById('passwordHelp').style.visibility="visible";
     document.getElementById('password').style.borderColor="red";
     correcto = false;
     // no deberia volverse aquí: return false;
  }
    return correcto;
  }
  
  function resetear(id){  //instancio con nombre, apellidos, etc...
     document.getElementById(id+'Help').style.visibility="hidden"; //concateno el id con 'Help'
     document.getElementById(id).style.borderColor="lightgray";
  }