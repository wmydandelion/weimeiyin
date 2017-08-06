/**
 * Created by wmy on 2017/8/5.
 */
$(function () {
    $('#J_scroll').width($('#J_scroll').width()
        -$('#J_scroll li:first-child').innerWidth());
    $('#J_scroll').addClass('theanimateion');
});
