class HashTable {
    constructor(size) {
      this.data = new Array(size);
    }
  
    set(key, value) {
      this.data[this._hash(value)] = [key, value];
    }
  
    get(key){
      for(let i = 0 ; i <= this.data.length ; i++){
        if(this.data[i][0] == key){
          return this.data[i][1];      
        }
      }
    }
  
    _hash(key) {
      let hash = 0;
      for (let i = 0; i < key.length; i++) {
        hash = (hash + key.charCodeAt(i) * i) % this.data.length
      }
      console.log(hash);
      return hash;
    }
  
  }
  
  const hash1 = new HashTable(10);
  hash1.set('grapes', 10000)
  hash1.get('grapes');
  hash1.set('apples', 500);
  hash1.get('apples');
  console.log(hash1.data);
  
  