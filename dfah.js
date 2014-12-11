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
  toString: function(){
    var str = "";
    var len = this.contents.length;
    while(len--){
      console.log(len);
      str += this.contents[len] + "\n"; 
    }
    return str;
  }
}
