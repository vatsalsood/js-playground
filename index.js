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
  
    push(item){
      this.data[this.length] = item;
      this.length++;
    }
  
    pop(){
      delete this.data[this.length-1];
      this.length--;
    }
  
    deleteItembyIndex(index){
      console.log(this.data[index]);
      delete this.data[index];
      for(let i = index ; i < (this.length-1); i++){
        this.data[i] = this.data[i+1];
      }
      delete this.data[this.length-1];
    }
  
    deleteItembyValue(value){
      const objectValues = Object.values(this.data);
      for(let i = 0 ; i < objectValues.length ; i++){
          let j = 0;
          if(objectValues[i] !== value){
            this.data[j] = objectValues[i];
            j++; 
          }
      }
    }
  
  }
  
  const array1 = new myArray();
  
  array1.push('hi');
  array1.push('you');
  array1.push('there');
  array1.push('how');
  array1.push('you');
  array1.push('doing');
  
  // array1.pop();
  // array1.deleteItembyIndex(2);
  array1.deleteItembyValue('you');
  
  console.log(array1);