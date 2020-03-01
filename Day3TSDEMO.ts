
// Normal function

function lucku10(n:number) : void{
    let i:number=1;
    while(n>=1)
    {
          i = i * n;
          n--;
    }
    console.log(i);
}
lucku10(5);

// Anonymous function

(function(i:number){
    let n:number=1;
while(i>=1)
{
       n= n*i;
       i--;

}
console.log(n);
}(5));

// Arrow function

let fac10 = () =>
{

    let n:number=5;
    let i:number=1;

    while(n>=1)
    {
        i = i * n;
        n--;
    }
    console.log(i);

    
}

fac10();

class Harsha00
{
fac:number=0;
callLucky(k:number) : void
    {
       let n:number=1;
       let i:number=k;
       while(i>=1)
       {

           n=n * i;
           i--;
       }
      console.log(n);
    }


}

let h00=new Harsha00();
h00.callLucky(5);
