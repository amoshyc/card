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

    // next section
    var current = content.scrollTop();
    var anchors = [];

    function extract_anchor(idx, source) {
        var elem = $(source);
        anchors.push({
            'id': elem.attr('id'),
            'offset': current + elem.offset().top
        });
    }

    function extract_anchor_rst(idx, source) {
        var elem = $(source);
        anchors.push({
            'id': elem.parent().attr('id'),
            'offset': current + elem.offset().top
        });
    }

    $('a.anchor').each(extract_anchor);
    if ($('.cd-article-card-rst-content') == null)
        $('h2').each(extract_anchor);
    else
        $('h2').each(extract_anchor_rst);
    anchors.sort(function(a, b) {
        return a.offset - b.offset
    });

    btnDown.click(function() {
        var cur = content.scrollTop();
        for (var idx in anchors) {
            if (anchors[idx].offset > cur + 1) { // prevent eps
                content.animate({
                    scrollTop: anchors[idx].offset
                }, 200, 'swing', function() {
                    window.location.hash = anchors[idx].id;
                });
                break;
            }
        }
    });
}

$(function() {
    init_nav_button();
});
