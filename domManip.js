DFAH.domManip = {
  maintainHatEntryFocus: function(){
    var $inputField = $('#hat-text-input');
    $inputField.parent('form').on("submit", function(e){
      e.preventDefault();
      //check if input is empty
      if ($inputField.val().trim()){
        $inputField.val("").attr("placeholder", "add more!");
        //TODO: add input value to hat contents object
      }
      $inputField.focus();
    });
  },

  initialFocus: function(){
    $('#hat-text-input').focus();
  }
}
