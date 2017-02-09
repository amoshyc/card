function init_nav_button() {
    var btnUp = $('.cd-nav-button-up');
    var btnDown = $('.cd-nav-button-down');
    var content = $('.cd-content');
    var main = $('main');

    if (btnUp == null || btnDown == null || content == null || main == null)
        return;

    btnUp.click(function() {
        content.animate({
          scrollTop: 0
        }, 200);
    });
    btnDown.click(function() {
        content.animate({
          scrollTop: main.height()
        }, 200);
    });
}

$(function() {
    init_nav_button();
});
