const { DateTime } = require('luxon')
const CleanCSS = require('clean-css')

module.exports = {
    dateToFormat: function(date, format) {
        return DateTime.fromJSDate(date, { zone: 'utc-4' }).toFormat(
            String(format)
        )
    },

    dateToISO: function(date) {
        return DateTime.fromJSDate(date, { zone: 'utc-4' }).toISO({
            includeOffset: false,
            suppressMilliseconds: true
        })
    },

    cssmin: function(css) {
        return new CleanCSS({ level: 2 }).minify(css).styles
    }
}
