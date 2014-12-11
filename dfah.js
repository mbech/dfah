var hat = {
  contents: []
}

hat.prototype = {
  add: function(item){
    this.contents.push(item);
    return this;
  },

  remove: function(index){
    this.contents = this.contents.slice(0,index).concat(this.contents.slice(index+1));
    return this;
  },

  shake: function(){
    //randomize order of contents using Fisher-Yates Shuffle
    var counter = this.contents.length,
        temp,
        counter;

    while (counter){
      index = Math.floor(Math.random() * counter);
      counter--;

      //Swap the random-index value with counter value
      temp = this.contents[index];
      this.contents[counter] = this.contents[index];
      this.contents[index] = temp;
    }
    return this;
  },

  toString: function(){
    var len = this.contents.length,
    str = "";

    while (len--){
      console.log(len);
      str += this.contents[len] + "\n"; 
    }
    return str;
  }
}
