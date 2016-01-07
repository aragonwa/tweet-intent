

$.getScript('//platform.twitter.com/widgets.js', function()
{

  var twitterUrl = "https://twitter.com/intent/tweet";

  var $tweetDivs = $('.tweet-intent');

  $tweetDivs.each(function(){

       var text = $(this).text().trim();

       var template = '<div class="tweet-intent"><div class="media"><div class="media-left"><button href="#" class="btn btn-primary">Tweet this&nbsp;<span class="fa fa-twitter"></span></button></div><div class="media-body">'+ text +'</div></div></div>';
       $(this).html(template);

       var tweet = twitterUrl + '?text=' + encodeURIComponent(text);
     
       $(this).find('button').click(function(){
         window.open(tweet, '_blank', 'height=420, width=550, scrollbars=no');
       });
  });

});

