var traverseDomAndCollectElements = function(matchFunc, startEl = document.body) {
  var resultSet = [];
  if(matchFunc(startEl)) resultSet.push(startEl)

  for (let i = 0; i < startEl.children.length; i++) {
   
      let result = traverseDomAndCollectElements(matchFunc, startEl.children[i])
      resultSet = [...resultSet, ... result]
  }
  return resultSet
};

// Detecta y devuelve el tipo de selector
// devuelve uno de estos tipos: id, class, tag.class, tag


var selectorTypeMatcher = function(selector) {
  // tu código aquí
  if(selector[0] === '#') return 'id';
    if(selector[0] === '.') return 'class';

    //tag.class es un string
    for (let i = 0; i < selector.length; i++) {
        if(selector[i]=== '.') return 'tag.class'
    }
    return 'tag'
};

// NOTA SOBRE LA FUNCIÓN MATCH
// recuerda, la función matchFunction devuelta toma un elemento como un
// parametro y devuelve true/false dependiendo si el elemento
// matchea el selector.

var matchFunctionMaker = function(selector) {
  var selectorType = selectorTypeMatcher(selector); //me guardo el tipo de selector //vamos a esa function
    var matchFunction;
    //Si el selector es un id
    if (selectorType === "id"){
      // La funcion matchFunction recibe un elemento del HTML
        matchFunction = function (elemento) { 
        //Si el elemento que recibe tiene ese id
        //Con element.id accedo al id del elemento y lo comparo con el selector
          return '#' + elemento.id === selector //¿Qué me devuelve esto? true o false
        }
    }
    else if (selectorType === "class") {
        matchFunction = function (elemento){
        //metodo classList me devuelve un array con todas las clases del elemento
        //Observar en consola var h2 = document.getElementsByClassName('lead')
        //h2[0].classList
        //se puede recorrer el array de clases hasta acceder al elemento que se espera
            for (let i = 0; i < elemento.classList.length; i++) {
                if('.' + elemento.classList[i] === selector) return true   
            }
            return false
        }
    } 
    else if (selectorType === "tag.class") { //¿Que vamos a recibir? 'div.myClass'.split('.'), me lo guarda en un array [div, myClass]
        matchFunction = function (elemento) {
        //Destructuring
            let[t, c] = selector.split('.') //[tag, class]
        //Recursión, ya lo tenemos escrito
        //Llamo a tag, ¿coincide con el elemento?           //Le paso la clase y el elemento
        //                                                    Debemos concatenar el punto
        //matchFunctionMaker devuelve una funcion y esa funcion devuelve matchFunction(param)
            return matchFunctionMaker(t)(elemento) && matchFunctionMaker('.'+ c)(elemento)
        }
    } 
    else if (selectorType === "tag") {
        matchFunction = function (elemento) {
            return elemento.tagName.toLowerCase() === selector;
           //Mostrar en la consola document.body.tagName
        //"BODY" , estaria comparando el tag del elemento con el selector 
        
        //otra opcion:
//          return elemento.tagName === selector.toUpperCase() 
        }
    }
    return matchFunction;
};

var $ = function(selector) {
  var elements;
  var selectorMatchFunc = matchFunctionMaker(selector);
  elements = traverseDomAndCollectElements(selectorMatchFunc);
  return elements;
};
