/**
 * Load dependencies
 */

var type = require('component-type');

/**
 * Expose `merge`
 */

module.exports = merge;


/**
 * Merge one object with another,
 * optionally keeping attributes on first.
 *
 * @param  {Object} target
 * @param  {Object} source
 * @param  {Boolean} force [optional]
 * @return {Object}
 */

function merge(target, source, force) {
    if (!source || type(source) != 'object')
        return target;

    for (var attr in source)
        if (type(target[attr]) == 'undefined' || force)
            target[attr] = source[attr];

    return target;
}
