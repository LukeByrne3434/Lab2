let myTaskArray:String[]= [];

function addTask(task:String):number {
    let count:number = myTaskArray.push(task);//adds and gives length of array
    console.log("Item"+task+"has been added to array");
    //let count:number = myTaskArray.length(task);//counts elements of array
    return count;
}

function listAllTasks():void{
    let i:number = 0;
    for(i=0; i<myTaskArray.length; i++){
        console.log(myTaskArray[i]);
       
    }

}

function deleteTask(task:String):number{
    let index:number = myTaskArray.indexOf(task);
    if(index> -1){
    myTaskArray.splice(index,1);
    console.log("Element " + task + "removed from array");
    }
    else{
        console.log("Element " + task + " not in array");
    }
    return myTaskArray.length;
}

//listAllTasks();

let elementCount  = addTask("number one");
let elementCount2  = addTask("number two");
let elementCount3  = addTask("number three");

let x:number = deleteTask("number two");
console.log(x);

listAllTasks();

console.log(elementCount);



 


// function listAllTasks():void{
//     console.log("list all items in array");
//     myTaskArray.forEach(function(task)){
//         console.log(task);
//     })
// }