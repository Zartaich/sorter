class Sorter {
  constructor() {
    this.arr = []
    this.comp = function(a, b){
      return a - b;
    }
  }

  add(element) {
    this.arr.push(element);
  }

  at(index) {
    return this.arr[index];
  }

  get length() {
    return this.arr.length;
  }

  toArray() {
    return this.arr;
  }

  sort(indices) {
    var new_arr = [];
    for(var i = 0; i < indices.length; i++){
      new_arr.push(this.arr[indices[i]]);
    }
    indices.sort();
    new_arr.sort(this.comp);
    for(i = 0; i < indices.length; i++){
      this.arr[indices[i]] = new_arr[i];
    }
  }


  setComparator(compareFunction) {
    this.comp = compareFunction
  }
}

module.exports = Sorter;
