/**
 * Created by wmy on 2017/6/1.
 */
(function ($) {
    function PreLoad(imgs,options){
        this.imgs = (typeof imgs == 'string')?[imgs]:imgs;
        this.options = $.extend({},PreLoad.DEFAULTS,options)
        this._unoredered();
    }
    PreLoad.DEFAULTS = {
        each :  null,
        all : null
    };
    PreLoad.prototype._unoredered = function () {
        var imgs = this.imgs,
            opts = this.opts,
            len =imgs.length;
        $.each(imgs, function (i,src) {
            if(typeof src != 'string')
                return;

            var imgObj = new Image();
           $(imgObj).on('load erorr', function () {
                opts.each&&opts.each();
                if(count >= len -1){
                    opts.all && opts.all();
                }
               count ++;
           });
            imgObj.src = src;
        });
    };
    $.extend({});
})(jQuery);