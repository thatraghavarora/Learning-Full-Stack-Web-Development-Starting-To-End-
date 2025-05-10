function num(number){
    document.getElementById("input").value+=number;
}
function solve(){
    var equation =  document.getElementById("input").value;
    var answer = eval(equation)
    document.getElementById("input").value = answer;
}
function clearinput(){
    document.getElementById("input").value = " ";
}