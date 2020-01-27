import{taskInterface} from './interface';

class MyTaskManager implements taskInterface{

    myTaskArray: Array<string> = [];
    constructor(){

    }
    
   addTask(task:string):number {
        this.myTaskArray.push(task);//adds and gives length of array
        console.log("Item"+task+"has been added to array");
        let count:number = this.myTaskArray.length;//counts elements of array
        return count;
    }

    listAllTasks():void{
        let i:number = 0;
        for(i=0; i<this.myTaskArray.length; i++){
            console.log(this.myTaskArray[i]);
           
        }
    
    }
    deleteTask(task:string):number{
        let index:number = this.myTaskArray.indexOf(task);
        if(index> -1){
        this.myTaskArray.splice(index,1);
        console.log("Element " + task + "removed from array");
        }
        else{
            console.log("Element " + task + " not in array");
        }
        return this.myTaskArray.length;
    }
}

let myTaskManager1 = new MyTaskManager();
myTaskManager1.addTask("item one");
myTaskManager1.addTask("item two");
myTaskManager1.listAllTasks();
