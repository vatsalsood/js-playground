class HashTable {
  constructor(size) {
    this.data = new Array(size);
  }

  set(key, value) {
    // TODO: this will overwrite data. Add a check to see if address taken
    this.data[this._hash(key)] = [key, value];
  }

  get(key){
    for(let i = 0 ; i <= this.data.length ; i++){

      if(typeof this.data[i] !== 'undefined' && this.data[i][0] == key){
        return this.data[i][1];      
      }
    }
  }

  // underscore means its a private method (coding rule). This is a standard not a JS rule
  _hash(key) {
    let hash = 0;
    for (let i = 0; i < key.length; i++) {
      hash = (hash + key.charCodeAt(i) * i) % this.data.length
    }
    return hash;
  }

}

const hash1 = new HashTable(10);
hash1.set('grapes', 10000)
hash1.get('grapes');
hash1.set('apples', 500);
hash1.get('apples');
console.log(hash1.data);