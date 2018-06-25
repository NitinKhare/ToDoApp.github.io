$("ul").on("click", "li" , function(){
    $(this).toggleClass("completed");
    });


$("ul").on("click","span",function(e){
    $(this).parent().fadeOut(650 , function () { remove(); });
    e.stopPropagation();
});


$("input[type = 'text']").keypress(function(e){
    if(e.keyCode === 13){
        $("ul").append('<li><span><i class = "fa fa-trash-alt"></i></span> '+$(this).val()+'</li>');
    }
});

$("#editIcon").on("click", function(){
    $("input[type = 'text']").fadeToggle();

});