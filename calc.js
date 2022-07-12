function keyPress(event) {
    console.log(event);
    if (['1','2','3', '4', '5', '6', '7', '8', '9', '0', '.', '+', '-', '/', '*', '='].includes(event.key)) {
        insert(event.key);
        } 
        else {
        console.log(event.key + ' was not added');
        };    
    }
  
  document.body.onkeydown = keyPress;

    
    function insert(num) {
        document.forms[0][0].value = document.forms[0][0].value + num
    }
    function equal() {
        var exp = document.forms[0][0].value;
        if(exp) {
            document.forms[0][0].value = eval(exp)
        }
    }
    function clean() {
        document.forms[0][0].value = "";
    }
    function back() {
        var exp = document.forms[0][0].value;
        document.forms[0][0].value = exp.substring(0, exp.length -1)
    }

