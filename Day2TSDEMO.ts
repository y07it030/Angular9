function harika10()
{
    var id:number =100;
    var name:string="harsha";
    var check:boolean=true;
    if(name.length==6)
    {
        var newName:string="harshavardhan";
    }
    console.log(id+name+check+newName);
}

function harika11()
{
    const finalValue={"id":"100","name":"harsha","mobile":"7995283271"};
   Object.freeze(finalValue);
    let id:number =100;
    let name:string="harsha";
    let check:boolean=true;
    if(name.length==6)
    {
         finalValue.name="harshavardhan@gmail.com";
        let newName:string="harshavardhan";
    }
    console.log(id+name+check);
    console.log(finalValue);
}

harika10();
harika11();
