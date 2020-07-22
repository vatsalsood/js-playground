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
    delete this.data[index];
    for(let i = index ; i < (this.length-1); i++){
      this.data[i] = this.data[i+1];
    }
    delete this.data[this.length-1];
  }

  deleteItembyValue(value){
    const objectValues = Object.values(this.data);
    let j = 0;
    let itemsToDelete = 0;
    for(let i = 0 ; i < objectValues.length ; i++){
        if(objectValues[i] !== value){
          // console.log(objectValues[i], "i ", i, "j", j);
          this.data[j] = objectValues[i];
          j++; 
        } else {
          itemsToDelete++ ;
        }
    }
    for (let i = 1 ; i <= itemsToDelete ; i++){
      console.log("itemstoDelete", i);
      delete this.data[this.length-i];
    }
    this.length = this.data.length;
  }

}

const array1 = new myArray();

array1.push('hi');
array1.push('you');
array1.push('there');
array1.push('how');
array1.push('you');
array1.push('doing');
array1.push('you');
array1.push('rock');

// array1.pop();
// array1.deleteItembyIndex(2);
array1.deleteItembyValue('you');

console.log(array1);