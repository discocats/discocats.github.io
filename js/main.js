var url = window.location;
$('ul.navbar-nav a[href="'+ url +'"]').parent().addClass(" " + 'active');
$('ul.navbar-nav a').filter(function() {
    return this.href == url;
}).parent().addClass(" " + 'active');

$('ul.navbar-nav li.nav-item a[href="'+ url +'"]').css("color", "#FFBB3F");
$('ul.navbar-nav li.nav-item a').filter(function() {
    return this.href == url;
}).css("color", "#FFBB3F");

$('[data-fancybox="mainPicture"]').fancybox({
  protect    : true,
  slideClass : 'mainPicture',
  toolbar    : false,
  smallBtn   : true,
  buttons : [
    'zoom',
    'thumbs',
    'close'
  ]
});

/*$(function(){
  
  $("li.nav-item.dropdown div.dropdown-menu a.dropdown-item").click(function(){
    
    $("a.nav-link.dropdown-toggle:first-child").text($(this).text());
     $("a.nav-link.dropdown-toggle:first-child").val($(this).text());
  });

});*/
