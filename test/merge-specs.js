var expect = require('chai').expect;

var merge = require('../lib/merge.js');

describe('Merge', function(){
    var a, b;

    beforeEach(function(){
        a = {
            k: 1,
            l: [1, 2, 3],
            m: null,
            n: false,
            x: undefined
        };

        b = {
            m: 5,
            n: 6,
            x: 7,
            y: 'String',
            z: { f: 1 }
        };
    });

    it('should merge without forcing', function(){
        merge(a, b);

        expect(a)
            .to.eql({
                k: 1,
                l: [1, 2, 3],
                m: null,
                n: false,
                x: 7,
                y: 'String',
                z: { f: 1 }
            });
    });

    it('should merge with forcing', function(){
        merge(a, b, true);

        expect(a)
            .to.eql({
                k: 1,
                l: [1, 2, 3],
                m: 5,
                n: 6,
                x: 7,
                y: 'String',
                z: { f: 1 }
            });

    });
});
