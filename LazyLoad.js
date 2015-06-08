function StartLazyLoad() {
    /* Preload waiting image.*/
    var LOADING = '../Images/loading.gif';
    var preLoad = new Image();
    preLoad.src = LOADING;

    /* Get the lazyLoader holder element */
    var $lazyLoadHolder = $('div#lazyLoadHolder');
    if ($lazyLoadHolder.length > 0) {

        /* Get jSon for secions. */
        var sections = getSections();

        /* Create lazyLoad div sections. */
        var waitImg = '<img src="' + LOADING + '" alt="Please wait." />';
        for (var i = 0; i < sections.length; i++) {
            $lazyLoadHolder.append('<div id ="' + sections[i].id + '" class="lazyLoad">' + waitImg + '</div>');
        }

        /* Load first section. */
        if (sections.length > 0 && !sections[0].rendered) {
            RenderSection(sections[0].id, sections[0].url, sections[0].params);
            sections[0].rendered = true;
        }

        /* Load any other sections on screen. */
        var checkSections;
        checkSections = setTimeout(function () { sections = checkElementsInView(sections); }, 500);

        /* Load sections that have scrolled into view. */
        $(window).scroll(function () {
            clearTimeout(checkSections);
            checkSections = setTimeout(function () { sections = checkElementsInView(sections); }, 1000);
        });
    }
}

function RenderSection(id, url, params) {
    var $div = $('div#' + id);
    if ($div.length > 0) {
        $div.load(url, params);
        $div.removeClass('lazyLoad');
    }
    else {
        console.log('div#' + id + ' does not exist.');
    }
}

function checkElementsInView(sections) {
    for (var i = 0; i < sections.length; i++) {
        if (!sections[i].rendered) {
            if (isScrolledIntoView('#' + sections[i].id)) {
                RenderSection(sections[i].id, sections[i].url, sections[i].params);
                sections[i].rendered = true;
            }
        }
    }
    return sections;
}

function isScrolledIntoView(elem) {
    var $elem = $(elem);
    if ($elem.length > 0) {
        var $window = $(window);

        var docViewTop = $window.scrollTop();
        var docViewBottom = docViewTop + $window.height();

        var elemTop = $elem.offset().top;
        var elemBottom = elemTop + $elem.height();

        return ((elemBottom >= docViewTop - 500) && (elemTop <= docViewBottom + 500));
    }
    else { return true; } // Return true here so we stop looking for this element if it doesn't exist.
}

function getSections() {
    var returnValue = [
                    { 'id': 'lazyLoad1', 'url': '/Home/_LazyLoad', 'params': { 'section': '1' }, 'rendered': false },
                    { 'id': 'lazyLoad2', 'url': '/Home/_LazyLoad', 'params': { 'section': '2' }, 'rendered': false },
                    { 'id': 'lazyLoad3', 'url': '/Home/_LazyLoad', 'params': { 'section': '3' }, 'rendered': false },
                    { 'id': 'lazyLoad4', 'url': '/Home/_LazyLoad', 'params': { 'section': '4' }, 'rendered': false },
                    { 'id': 'lazyLoad5', 'url': '/Home/_LazyLoad', 'params': { 'section': '5' }, 'rendered': false },
                    { 'id': 'lazyLoad6', 'url': '/Home/_LazyLoad', 'params': { 'section': '6' }, 'rendered': false },
                    { 'id': 'lazyLoad7', 'url': '/Home/_LazyLoad', 'params': { 'section': '7' }, 'rendered': false },
                    { 'id': 'lazyLoad8', 'url': '/Home/_LazyLoad', 'params': { 'section': '8' }, 'rendered': false },
                    { 'id': 'lazyLoad9', 'url': '/Home/_LazyLoad', 'params': { 'section': '9' }, 'rendered': false },
                    { 'id': 'lazyLoad10', 'url': '/Home/_LazyLoad', 'params': { 'section': '10' }, 'rendered': false },
                    { 'id': 'lazyLoad11', 'url': '/Home/_LazyLoad', 'params': { 'section': '11' }, 'rendered': false },
                    { 'id': 'lazyLoad12', 'url': '/Home/_LazyLoad', 'params': { 'section': '12' }, 'rendered': false },
                    { 'id': 'lazyLoad13', 'url': '/Home/_LazyLoad', 'params': { 'section': '13' }, 'rendered': false },
                    { 'id': 'lazyLoad14', 'url': '/Home/_LazyLoad', 'params': { 'section': '14' }, 'rendered': false },
                    { 'id': 'lazyLoad15', 'url': '/Home/_LazyLoad', 'params': { 'section': '15' }, 'rendered': false },
                    { 'id': 'lazyLoad16', 'url': '/Home/_LazyLoad', 'params': { 'section': '16' }, 'rendered': false },
                    { 'id': 'lazyLoad17', 'url': '/Home/_LazyLoad', 'params': { 'section': '17' }, 'rendered': false },
                    { 'id': 'lazyLoad18', 'url': '/Home/_LazyLoad', 'params': { 'section': '18' }, 'rendered': false },
                    { 'id': 'lazyLoad19', 'url': '/Home/_LazyLoad', 'params': { 'section': '19' }, 'rendered': false },
                    { 'id': 'lazyLoad20', 'url': '/Home/_LazyLoad', 'params': { 'section': '20' }, 'rendered': false }];
    return returnValue;
}
