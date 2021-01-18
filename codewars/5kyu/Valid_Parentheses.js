/*
    "()"              =>  true
    ")(()))"          =>  false
    "("               =>  false
    "(())((()())())"  =>  true
*/

function validParentheses(parens){
    var length = parens.length;
    var res = 0;

    for (var i=0; i < length; i++) {
       parens[i] == ')' ? res-- : res++;
       if (res < 0) {
           break;
       }
    }

    return !res;
}
