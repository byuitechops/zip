/*eslint-env node, es6*/
/*eslint no-console:1*/

const zip = require('zip-dir');
const fs = require('fs');

module.exports = (course, stepCallback) => {
    /* Zip that file right up */
    zip(course.info.processedPath, {
        saveTo: course.info.uploadZipPath
    }, function (err, buffer) {
        if (err) {
            stepCallback(err, course);
            return;
        }
        course.message('Course successfully zipped');
        stepCallback(null, course);
    });
};