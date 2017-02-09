function init_nav_button() {
    var btnUp = $('.cd-nav-button-up');
    var btnDown = $('.cd-nav-button-down');
    var content = $('.cd-content');
    var main = $('main');

    if (btnUp == null || btnDown == null || content == null || main == null)
        return;

    // go top button
    btnUp.click(function() {
        content.animate({
            scrollTop: 0
        }, 200, 'swing', function() {
            window.location.hash = "";
        });
    });

    // next card
    var anchors = $('a.anchor');
    var current = content.scrollTop();
    var ids = [], offsets = [];
    anchors.each(function(idx, val) {
        var elem = $(val);
        ids.push(elem.attr('id'));
        offsets.push(current + elem.offset().top);
    });

    btnDown.click(function() {
        var cur = content.scrollTop();
        for (idx in offsets) {
            if (offsets[idx] > cur + 1) { // prevent eps
                var id = ids[idx];
                var target = offsets[idx];
                content.animate({
                    scrollTop: target
                }, 200, 'swing', function() {
                    window.location.hash = id;
                });
                break;
            }
        }
    });
}

$(function() {
    init_nav_button();
});
