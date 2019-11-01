//test for getting url value from attr
// var img1 = $('.test').attr("data-thumbnail");
// console.log(img1);

//test for iterating over child elements
var langArray = [];
$('.id_100 option').each(function(){
  var img = $(this).attr("data-thumbnail");
  var text = this.innerText;
  var value = $(this).val();
  var item = '<li><img src="'+ img +'" alt="" value="'+value+'"/><span>'+ text +'</span></li>';
  langArray.push(item);
})

$('#a').html(langArray);

//Set the button value to the first el of the array
$('.btn-select').html(langArray[0]);
$('.btn-select').attr('value', 'en');

//change button stuff on click
$('#a li').click(function(){
$('.id_100 option').removeAttr('selected')

    console.log(this.innerText)
  $('.id_100 option[value='+$(this).find('img').attr('value')+']').attr('selected','selected');
   var img = $(this).find('img').attr("src");
   var value = $(this).find('img').attr('value');
   var text = this.innerText;
   var item = '<li><img src="'+ img +'" alt="" /><span>'+ text +'</span></li>';
  $('.btn-select').html(item);
  $('.btn-select').attr('value', value);
  $(".b").toggle();
  
  //console.log(value);
});



$(".btn-select").click(function(){
        $(".b").toggle();
    });

//check local storage for the lang
var sessionLang = localStorage.getItem('lang');
if (sessionLang){
  //find an item with value of sessionLang
  var langIndex = langArray.indexOf(sessionLang);
  $('.btn-select').html(langArray[langIndex]);
  $('.btn-select').attr('value', sessionLang);
} else {
   var langIndex = langArray.indexOf('ch');
  console.log(langIndex);
  $('.btn-select').html(langArray[langIndex]);
  //$('.btn-select').attr('value', 'en');
}


$('.id_100').change(function(){
    // var img = $(this).attr("data-thumbnail");
    var e = document.getElementById("selection");
    var value = e.options[e.selectedIndex].value;
  
    var text = e.options[e.selectedIndex].innerText;
 
    var img = e.options[e.selectedIndex].getAttribute('data-thumbnail');
    var item = '<li><img src="'+ img +'" alt="" /><span>'+ text +'</span></li>';
    $('.btn-select').attr('value', value);
    $('.btn-select').html(item);
    // console.log(e);
})