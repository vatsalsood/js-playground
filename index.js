// Create an array

class myArray{
    constructor(){
      this.length = 0;
      this.data = {};
    }
    introduce(){
      console.log("this is my array");
      console.log(this.data);
    }
    access(index){
      console.log(this.data.index);
      return this.data.index;
    }
  
    push(data){
      this.data[this.length] = data;
      this.length++;
    }
  
  }
  
  const array1 = new myArray();
  
  array1.push('hi');
  array1.push('you');
  
  console.log(array1);