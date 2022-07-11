
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

