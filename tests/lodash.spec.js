import * as _ from '../src/lodash';

describe('Lodash library', () => {
  describe('identity', () => {
    it('Should return the same value that has been passed', () => {
      expect(_.identity(1)).toMatchSnapshot();
      expect(_.identity({})).toMatchSnapshot();
      expect(_.identity('Hackages')).toMatchSnapshot();
      expect(_.identity(1, 2, 3)).toMatchSnapshot();
    });
  });

  describe('forEachObjIndexed', () => {
    it('should map values of an object', () => {
      const result = [];
      const results2 = [];
      let name = '';
      let count = 0;
      _.forEachObjIndexed({a: 33}, (a, b) => result.push([a, b]));
      _.forEachObjIndexed({a: undefined, b: null, c: true}, (a, b) =>
        result.push([a, b])
      );
      _.forEachObjIndexed(
        {4: 42, 35: 35},
        (a, b) => (count += parseInt(a) + parseInt(b))
      );
      _.forEachObjIndexed(
        {name: 'Antonio'},
        (a, b) => (name = `My ${b} is ${a}`)
      );
      expect(result).toMatchSnapshot();
      expect(results2).toMatchSnapshot();
      expect(count).toMatchSnapshot();
      expect(name).toMatchSnapshot();
    });
  });

  describe('entries', () => {
    describe('should pair values', () => {
      it('in a function', () => {
        function Test() {
          this.a = 32;
          this.b = 45;
        }

        expect(_.entries(new Test())).toMatchSnapshot();
      });

      it('in an object', () => {
        const Test = {
          a: 32,
          b: 45
        };
        expect(_.entries(Test)).toMatchSnapshot();
      });

      it('in a class', () => {
        class Test {
          a = 32;
          b = 45;
        }
        expect(_.entries(new Test())).toMatchSnapshot();
      });
    });
  });

  describe('map', () => {
    it('it should work with the identity function', () => {
      const results = _.map([1, 2, 3, 4], x => x);
      expect(results).toMatchSnapshot();
    });
    it('it should return the index', () => {
      const results = _.map([1, 1, 1], (x, index) => index).reduce(
        (acc, next) => acc + next,
        0
      );
      expect(results).toMatchSnapshot();
    });
    it('it should return the entire array as the third parameter', () => {
      _.map([1, 2], (a, b, arr) => arr);
      expect(_.map([1, 2], (a, b, arr) => arr)[0]).toMatchSnapshot();
    });
  });

  describe('findKey', () => {
    const users = {
      barney: {age: 36, active: true},
      fred: {age: 40, active: false},
      pebbles: {age: 1, active: true}
    };

    it('should work with functions', () => {
      expect(
        _.findKey(users, function(o) {
          return o.age < 40;
        })
      ).toMatchSnapshot();
    });

    it('should work with objects', () => {
      expect(_.findKey(users, {age: 1, active: true})).toMatchSnapshot();
    });
  });

  describe('flatten', () => {
    it('should flatten', () => {
      expect(
        _.flatten([1, 2, false, {a: 32}, NaN, null, undefined])
      ).toMatchSnapshot();
      expect(
        _.flatten([[1, 2], [[false, {a: 32}], NaN], [null, [{undefined}]]])
      ).toMatchSnapshot();
      expect(_.flatten([[[[[[[[[[[[['Sorry']]]]]]]]]]]]])).toMatchSnapshot();
    });
  });

  describe('flattenDeep', () => {
    it('should flatten recursively', () => {
      expect(
        _.flattenDeep([1, 2, false, {a: 32}, NaN, null, undefined])
      ).toMatchSnapshot();
      expect(
        _.flattenDeep([[1, 2], [[false, {a: 32}], NaN], [null, [{undefined}]]])
      ).toMatchSnapshot();
      expect(
        _.flattenDeep([[[[[[[[[[[[['Sorry']]]]]]]]]]]]])
      ).toMatchSnapshot();
    });
  });

  describe('compact', () => {
    it('should compact', () => {
      expect(
        _.compact([
          1,
          2,
          false,
          {a: 32},
          NaN,
          null,
          undefined,
          false,
          null,
          0,
          '',
          undefined
        ])
      ).toMatchSnapshot();
    });
  });

  describe('chunk', () => {
    it('should chunk', () => {
      expect(
        _.chunk(['a', 'b', 12, true, false, undefined, null, 'aa'], 1)
      ).toMatchSnapshot();
      expect(
        _.chunk(['a', 'b', 12, true, false, undefined, null, 'aa'], 2)
      ).toMatchSnapshot();
      expect(
        _.chunk(['a', 'b', 12, true, false, undefined, null, 'aa'], 3)
      ).toMatchSnapshot();
      expect(_.chunk([], 2)).toMatchSnapshot();
      expect(_.chunk([42], 2)).toMatchSnapshot();
      expect(_.chunk(undefined, 4)).toMatchSnapshot();
      expect(_.chunk(32, 2)).toMatchSnapshot();
      expect(_.chunk({a: 12, b: 32, c: 45}, 2)).toMatchSnapshot();
    });
  });

  describe('zip', () => {
    it('should zip', () => {
      expect(_.zip(['a', 'b'], [1, 2], [true, false])).toMatchSnapshot();
      expect(_.zip(['a'], [1, 2], [true, true, false])).toMatchSnapshot();
      expect(_.zip(['a', 'b', 'c'], [1, 2], [true])).toMatchSnapshot();
      expect(_.zip(['hello'], [undefined])).toMatchSnapshot();
      expect(_.zip([32], 'ohoh')).toMatchSnapshot();
      expect(_.zip([32])).toMatchSnapshot();
      expect(_.zip(32)).toMatchSnapshot();
    });
  });

  describe('zipObject', () => {
    it('should zip', () => {
      expect(_.zipObject(['a', 'b'], [1, 2])).toMatchSnapshot();
      expect(_.zipObject(['a'], [1, 2])).toMatchSnapshot();
      expect(_.zipObject(['a', 'b'], [1])).toMatchSnapshot();
      expect(_.zipObject(['hello'], [true])).toMatchSnapshot();
      expect(_.zipObject([32], [false])).toMatchSnapshot();
      expect(_.zipObject([true], ['or not'])).toMatchSnapshot();
    });
  });

  describe('groupBy', () => {
    it('should group', () => {
      expect(
        _.groupBy(
          [
            {sex: 'M', name: 'Robert'},
            {sex: 'M', name: 'Bob'},
            {sex: 'F', name: 'Louise'}
          ],
          e => e.sex
        )
      ).toMatchSnapshot();
    });
  });

  describe('uniq', () => {
    it('should remove duplicate', () => {
      expect(_.uniq([1, 2, 3, 4])).toMatchSnapshot();
      expect(_.uniq([1, 1])).toMatchSnapshot();
      expect(_.uniq([null, null, true, true])).toMatchSnapshot();
      expect(_.uniq([{a: 32}, {a: 32}, {a: 32, b: 21}])).toMatchSnapshot();
    });
  });

  describe('memoize', () => {
    it('should compute the value only once', () => {
      const myMock = jest.fn((...args) => args);
      const memoized = _.memoize(myMock);
      expect(memoized(42)).toMatchSnapshot();
      expect(memoized(42)).toMatchSnapshot();
      expect(myMock).toHaveBeenCalledTimes(1);
    });

    it('should work with multiple arguments', () => {
      const myMock = jest.fn((...args) => args);
      const memoized = _.memoize(myMock);
      expect(memoized(42, 'hello', true)).toMatchSnapshot();
      expect(memoized(42, 'hello', true)).toMatchSnapshot();
      expect(myMock).toHaveBeenCalledTimes(1);
    });

    it('recompute with new arguments', () => {
      const myMock = jest.fn((...args) => args);
      const memoized = _.memoize(myMock);
      expect(memoized(42, 'hello', true)).toMatchSnapshot();
      expect(memoized(43)).toMatchSnapshot();
      expect(myMock).toHaveBeenCalledTimes(2);
    });
  });
});
