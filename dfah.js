var hat = {
  contents: []
}

hat.prototype = {
  add: function(item){
    //TODO: Implement
  },

  remove: function(index){
    //TODO: Implement
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
