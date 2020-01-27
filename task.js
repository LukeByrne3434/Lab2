"use strict";
exports.__esModule = true;
var MyTaskManager = /** @class */ (function () {
    function MyTaskManager() {
        this.myTaskArray = [];
    }
    MyTaskManager.prototype.addTask = function (task) {
        this.myTaskArray.push(task); //adds and gives length of array
        console.log("Item" + task + "has been added to array");
        var count = this.myTaskArray.length; //counts elements of array
        return count;
    };
    MyTaskManager.prototype.listAllTasks = function () {
        var i = 0;
        for (i = 0; i < this.myTaskArray.length; i++) {
            console.log(this.myTaskArray[i]);
        }
    };
    MyTaskManager.prototype.deleteTask = function (task) {
        var index = this.myTaskArray.indexOf(task);
        if (index > -1) {
            this.myTaskArray.splice(index, 1);
            console.log("Element " + task + "removed from array");
        }
        else {
            console.log("Element " + task + " not in array");
        }
        return this.myTaskArray.length;
    };
    return MyTaskManager;
}());
var myTaskManager1 = new MyTaskManager();
myTaskManager1.addTask("item one");
myTaskManager1.addTask("item two");
myTaskManager1.listAllTasks();
