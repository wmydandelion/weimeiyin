define(['jquery'],function($){

    function Dialog(){
    }
    Dialog.prototype.open = function(options){
        var self = this;
        var settings = {
            width: 400,
            height: 300
        };

        $.extend(settings, options);

        /*var html = '<div class="dialog-container">'
         + '<div class="dialog-mask"></div>'
         + '<div class="dialog-box">'
         +'<div class="dialog-title-box">'
         + '<span class="dialog-title">'+settings.title+'</span>'
         + '<span class="dialog-close-btn">[X]</span>'
         +'</div>'
         +'<div class="dialog-content"></div>'
         + '</div>'
         + '</div>';
         $(document.body).append(html);*/
        this.$container = $('<div class="dialog-container"></div>');
        this.$mask = $('<div class="dialog-mask"></div>');
        this.$dialogBox = $('<div class="dialog-box"></div>');
        this.$titleBox = $('<div class="dialog-title-box"></div>');
        this.$title = $('<span class="dialog-title"></span>');
        this.$btnClose = $('<span class="dialog-close-btn">[X]</span>');
        this.$content = $('<div class="dialog-content"></div>');

        this.$container.append(this.$mask);
        this.$dialogBox.css({
            width: settings.width,
            height: settings.height,
            marginLeft: -settings.width/2,
            marginTop: -settings.height/2
        }).appendTo(this.$container);
        this.$title.html(settings.title).appendTo(this.$titleBox);
        this.$btnClose.on('click', function(){
            self.close();
        }).appendTo(this.$titleBox)
        this.$titleBox.appendTo(this.$dialogBox);
        this.$content.load(settings.url).appendTo(this.$dialogBox);

        this.$mask.on('click', function(){
            self.close();
        });

        $(document.body).append(this.$container);
    };

    Dialog.prototype.close = function(){
        this.$container.remove();
    };



    return Dialog;

});