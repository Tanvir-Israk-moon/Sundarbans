window.heap = window.heap || [];
heap.load = function (e, t) {
    window.heap.appid = e;
    window.heap.config = t = t || {};
    var r = t.forceSSL || "https:" === document.location.protocol,
        a = document.createElement("script");
    a.type = "text/javascript";
    a.async = !0;
    a.src = (r ? "https:" : "http:") + "//cdn.heapanalytics.com/js/heap-" + e + ".js";
    var n = document.getElementsByTagName("script")[0];
    n.parentNode.insertBefore(a, n);
    for (var o = function (e) {
        return function () {
            heap.push([e].concat(Array.prototype.slice.call(arguments, 0)));
        };
    }, p = ["addEventProperties", "addUserProperties", "clearEventProperties", "identify", "resetIdentity", "removeEventProperties", "setEventProperties", "track", "unsetEventProperty"], c = 0; c < p.length; c++) heap[p[c]] = o(p[c]);
};
heap.load("2758063570");

window.addEventListener('message', event => {
    if (event.data.type === 'hsFormCallback' && event.data.eventName === 'onFormSubmit') {
        gtag('event', 'lp_contact_form', { 'send_to': 'G-ECJ4B3DB7V' });
    }
});

function contains(selector, text) {
    var elements = document.querySelectorAll(selector);
    return Array.prototype.filter.call(elements, function (element) {
        return RegExp(text, 'i').test(element.innerText) || RegExp(text, 'i').test(element.value);
    });
}

setTimeout(() => {
    contains('input', 'Register Now').forEach(element => element.addEventListener("click", function () {
        fbq('track', 'Lead')
    }), { once: true });
}, 1000);

setTimeout(() => {
    contains('input', 'Submit').forEach(element => element.addEventListener("click", function () {
        fbq('track', 'Contact')
    }), { once: true });
}, 1500);

var leadin_wordpress = { "userRole": "visitor", "pageType": "home", "leadinPluginVersion": "10.1.16" };

window.ASL = typeof window.ASL !== 'undefined' ? window.ASL : {};
window.ASL.wp_rocket_exception = "DOMContentLoaded";
window.ASL.ajaxurl = "https://ncx.com/wp-admin/admin-ajax.php";
window.ASL.backend_ajaxurl = "https://ncx.com/wp-admin/admin-ajax.php";
window.ASL.js_scope = "jQuery";
window.ASL.asl_url = "https://ncx.com/wp-content/plugins/ajax-search-lite/";
window.ASL.detect_ajax = 0;
window.ASL.media_query = 4758;
window.ASL.version = 4758;
window.ASL.pageHTML = "";
window.ASL.additional_scripts = [
    { "handle": "wd-asl-ajaxsearchlite", "src": "https://ncx.com/wp-content/plugins/ajax-search-lite/js/min/plugin/optimized/asl-prereq.js", "prereq": [] },
    { "handle": "wd-asl-ajaxsearchlite-core", "src": "https://ncx.com/wp-content/plugins/ajax-search-lite/js/min/plugin/optimized/asl-core.js", "prereq": [] },
    { "handle": "wd-asl-ajaxsearchlite-vertical", "src": "https://ncx.com/wp-content/plugins/ajax-search-lite/js/min/plugin/optimized/asl-results-vertical.js", "prereq": ["wd-asl-ajaxsearchlite"] },
    { "handle": "wd-asl-ajaxsearchlite-load", "src": "https://ncx.com/wp-content/plugins/ajax-search-lite/js/min/plugin/optimized/asl-load.js", "prereq": ["wd-asl-ajaxsearchlite-vertical"] }
];
window.ASL.script_async_load = false;
window.ASL.init_only_in_viewport = true;
window.ASL.font_url = "https://ncx.com/wp-content/plugins/ajax-search-lite/css/fonts/icons2.woff2";
window.ASL.css_async = false;
window.ASL.highlight = { "enabled": false, "data": [] };
window.ASL.analytics = {
    "method": 0,
    "tracking_id": "",
    "string": "?ajax_search={asl_term}",
    "event": {
        "focus": { "active": 1, "action": "focus", "category": "ASL", "label": "Input focus", "value": "1" },
        "search_start": { "active": 0, "action": "search_start", "category": "ASL", "label": "Phrase: {phrase}", "value": "1" },
        "search_end": { "active": 1, "action": "search_end", "category": "ASL", "label": "{phrase} | {results_count}", "value": "1" },
        "magnifier": { "active": 1, "action": "magnifier", "category": "ASL", "label": "Magnifier clicked", "value": "1" },
        "return": { "active": 1, "action": "return", "category": "ASL", "label": "Return button pressed", "value": "1" },
        "facet_change": { "active": 0, "action": "facet_change", "category": "ASL", "label": "{option_label} | {option_value}", "value": "1" },
        "result_click": { "active": 1, "action": "result_click", "category": "ASL", "label": "{result_title} | {result_url}", "value": "1" }
    }
};

jQuery(window).on('load', function () {
    jQuery('input[name="um_request"]').val('');
});

setTimeout(function () {
    $('.page-loader-overlay').css({ zIndex: 0 }).hide();
}, 1000);
