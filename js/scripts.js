$(document).ready(function(){
  $("form#stressTest").submit(function(event){
    event.preventDefault();
    $("#suggest").hide();
    $("#goodJob").hide();
    var warningSigns = []; $("input:checkbox[name=warning-signs]:checked").each(function() {
       warningSigns.push($(this).val());
    });

    var symptoms = [];
    $("input:checkbox[name=symptoms]:checked").each(function() {
       symptoms.push($(this).val());
    });

    var coping = [];
    $("input:checkbox[name=cope]:checked").each(function() {
      coping.push($(this).val());
    });
    if (warningSigns.length > 1 || symptoms.length > 1) {
      if (warningSigns.length >= 4 && coping.length < 3 || symptoms.length >= 3 && coping.length < 3) {
        $("#suggest").show();
      } else if (warningSigns.length >= 4 && coping.length >= 3) {
        $("#goodJob").show();
      } else if (symptoms.length >= 3 && coping.length >= 3) {
        $("#goodJob").show();
      } else {
        $("#goodJob").show();
      }} else {
        alert("Good job staying unstressed!")
    };
  });
});
