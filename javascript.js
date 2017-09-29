$(document).ready(function(){
    
var i;
var j = 0;    
var search = 'Please Try Again';
var arr = ["This is another example div", "This is another example div", "This is another example div", "This is another example div", "This is another example div", "This is another example div", "This is another example div", "This is another example div", "This is another example div", ];
    
var trueArr; 
    
    
$("#textOrigin").on("keyup change", function() {
   search = this.value; 
});  
    
    
$("#textOrigin").keyup(function(){
    search = $('#textOrigin').val(); 
});      
    
    
    
    $('button').click(function(){
        
    $('.div2').html('');
    $('.div3').html('');     
        
        
        $.ajax({
        url: 'https://en.wikipedia.org/w/api.php?action=opensearch&search=' + search,
        dataType: 'jsonp',
        success: function(data){ 
        trueArr = data[1];

        for (i=0; i<trueArr.length; i++){
        $.ajax({
        url: 'https://en.wikipedia.org/w/api.php?action=parse&format=json&prop=text&section=0&page=' + trueArr[i],
        dataType: 'jsonp',
        success: function(data, textStatus, jqXHR){
            var pageName = data.parse.title;
            var markup = data.parse.text["*"];
            var content = $('<div></div>').html(markup);
            content.find('a').each(function() { $(this).replaceWith($(this).html()); });
            content.find('sup').remove();
            content.find('.mw-ext-cite-error').remove();
            
            $('.div2').append($('<div><a href="https://en.wikipedia.org/wiki/' + pageName + '" target="_blank"><div class="hmm" style="margin:auto; padding:15px; width:85%; margin-bottom:10px; border-radius:10px"><p class="fontStyle"><strong>' + pageName + '</strong><hr class="style1"></p>' + $(content).find('p').html() + '</div></a></div>').hide().fadeIn(1500));

        }   
        });    
        }
            
        }
        });
        

        
    $('#custom-search-input').find('p').remove();
        
    $('#custom-search-input').animate({
        top: '15px'
    });        
        
    var item2 = $('<div style="margin-bottom:35px; margin-top:35px"><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2b/Powered_by_MediaWiki.svg/2000px-Powered_by_MediaWiki.svg.png" height="75" width="225"</img>').hide().fadeIn(7000);
    $('.div3').append(item2);  
          
    });  
    
  
    
    //////////////////////////BUTTON PRESS//////////////////////  
    
    
    $(document).keypress(function (e) {
    if (e.keyCode == 13) {
    
    $('.div2').html('');
    $('.div3').html('');     
        
        
        $.ajax({
        url: 'https://en.wikipedia.org/w/api.php?action=opensearch&search=' + search,
        dataType: 'jsonp',
        success: function(data){ 
        trueArr = data[1];

        for (i=0; i<trueArr.length; i++){
        $.ajax({
        url: 'https://en.wikipedia.org/w/api.php?action=parse&format=json&prop=text&section=0&page=' + trueArr[i],
        dataType: 'jsonp',
        success: function(data, textStatus, jqXHR){
            var pageName = data.parse.title;
            var markup = data.parse.text["*"];
            var content = $('<div></div>').html(markup);
            content.find('a').each(function() { $(this).replaceWith($(this).html()); });
            content.find('sup').remove();
            content.find('.mw-ext-cite-error').remove();
            
            $('.div2').append($('<div><a href="https://en.wikipedia.org/wiki/' + pageName + '" target="_blank"><div class="hmm" style="margin:auto; padding:15px; width:85%; margin-bottom:10px; border-radius:10px"><p class="fontStyle"><strong>' + pageName + '</strong><hr class="style1"></p>' + $(content).find('p').html() + '</div></a></div>').hide().fadeIn(1500));
        }   
        });    
        }
            
        }
        });
        

        
    $('#custom-search-input').find('p').remove();
        
    $('#custom-search-input').animate({
        top: '15px'
    });        
        
    var item2 = $('<div style="margin-bottom:35px; margin-top:35px"><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2b/Powered_by_MediaWiki.svg/2000px-Powered_by_MediaWiki.svg.png" height="75" width="225"</img>').hide().fadeIn(7000);
    $('.div3').append(item2);      
        
        
        
        
    return false;    
    }
        
    return true;
    });
    
    
  /////////////////////////END BUTTON PRESS////////////////  
    
    
    
    
    
    
    
    
    
    
    
    
    
});
    
 
//        $.ajax({
//        url: 'https://en.wikipedia.org/w/api.php?action=query&format=json&prop=pageimages&titles=Jimi_Hendrix&pithumbsize=400&callback=?',
//        dataType: 'jsonp',
//        success: function(data){
//        var pages = data.query.pages;
//        var pageID1 = data.query.pages[Object.keys(pages)[0]].pageid;
//        var thumbnail = data.query.pages[pageID1].thumbnail.source;
//        var imgWidth = data.query.pages[pageID1].thumbnail.width;
//        var imgheight = data.query.pages[pageID1].thumbnail.height;
//        $('.img').append('<img src="' + thumbnail + '" style="height:250px; width:250px; border-radius: 50px">');      
//        }
//        });   

// var item = $('<div style="margin:auto; padding:15px; width:85%; border: 1px solid black; margin-bottom:10px">' + arr[i] + '</div>').hide().fadeIn(1000);
//        $('.flex-container').append(item);  
    
//        $('.test').each(function(){ $('.test').find('p:not(:first)').hide()});


//
//function searchItems(item){

//        $('.flex-container').append('<div style="margin:auto; padding:15px; width:85%; border: 1px solid black; margin-bottom:10px">' + arr[i] + '</div>');   















































//
//        $.ajax({
//        url: 'https://en.wikipedia.org/w/api.php?action=opensearch&search=' + search,
//        dataType: 'jsonp',
//        success: function(data){ 
//        trueArr = data[1];
//
//        for (i=0; i<trueArr.length; i++){
//        $.ajax({
//        url: 'https://en.wikipedia.org/w/api.php?action=parse&format=json&prop=text&section=0&page=' + trueArr[i],
//        dataType: 'jsonp',
//        success: function(data){
//            var pageName = data.parse.title;
//            var markup = data.parse.text["*"];
////            var content = $('<div></div>').html(markup);
//            content.find('a').each(function() { $(this).replaceWith($(this).html()); });
//            content.find('sup').remove();
//            content.find('.mw-ext-cite-error').remove();
//            $(content).find('p:not(:first)').hide();
//            console.log(content);
//            
//            var item = $('<div class="hmm" style="margin:auto; padding:15px; width:85%; margin-bottom:10px; border-radius:10px"><p>' + pageName + '</p><p>' + content + '</p></div>').hide().fadeIn(1500);
//            $('.div2').append(item);  
//        }   
//        });    
//        }
//            
//        }
//        });



