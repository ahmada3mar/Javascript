var arr = [];
var even = 0 ;
var odd = 0 ;
function Myfunction(){
    for (i = 1 ; i <= 10 ; i++ ) {
        if (i % 2 === 0 ){
            even += i ;
        }else{
            odd += i ;
        }
        arr.push(i)
    }
    alert("The sum of even number is : " + even);
    alert("The sum of odd number is : " + odd);
    alert("The array is : " + arr);
}
Myfunction();