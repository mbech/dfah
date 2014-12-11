DFAH.domManip = {
  maintainHatEntryFocus: function(){
    var $inputField = $('#hat-text-input');
    $inputField.parent('form').on("submit", function(e){
      e.preventDefault();
      $inputField.val("").attr("placeholder", "add more!");
    });
  }
}
