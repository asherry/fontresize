(function ($,Drupal) {
  Drupal.behaviors.textResize = {
    attach: function(context,settings) {
      var inc = .5;
      var toRem = function(px) {
        var htmlPx = parseInt($('html').css('font-size'));
        return Math.floor((parseInt(px) / htmlPx) * 100) / 100;
      }
      $('.fontresize-control').click(function(e) {
        var $changer = $(this);
        $('.resizable').each(function() {
          $this = $(this).addClass('resizing');
          var cur = $this.css('font-size');
          if ($changer.attr('id') == 'text-resize-increase') {
            $this.animate({'font-size': toRem(cur) + inc + 'rem'});
          }
          else if ($changer.attr('id') == 'text-resize-decrease') {
            $this.animate({'font-size': toRem(cur) - inc + 'rem'});
          }
          else {
            $this.css('font-size', 'inherit');
          }
        });
        e.preventDefault();
      });
    }
  }
})(jQuery, Drupal);
