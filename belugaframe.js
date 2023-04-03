


function calcularmedia(){

    console.log(arguments); 
    qtd = arguments.length;
    var soma = 0;
    var x = 0;

   while(typeof arguments[x] === 'number'){
    soma += arguments[x]
    x++;

   }

    return (soma / qtd).toFixed(2); 
    
    }

