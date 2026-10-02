// format-date.js — [WEBSITEURL]
// Shared date formatter. Exposed as window.WEBSITESHORTHAND_formatDate(iso).

window.WEBSITESHORTHAND_formatDate = function (iso) {
    try {
        var d = new Date(iso + 'T12:00:00Z');
        return d.toLocaleDateString('en-US', {
            year: 'numeric', month: 'long', day: 'numeric', timeZone: 'UTC'
        });
    } catch (e) { return iso; }
};
