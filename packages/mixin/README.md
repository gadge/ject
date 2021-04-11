## @ject/mixin
Make class mixin.

[![npm version][badge-npm-version]][url-npm]
[![npm download monthly][badge-npm-download-monthly]][url-npm]
[![npm download total][badge-npm-download-total]][url-npm]
[![npm dependents][badge-npm-dependents]][url-github]
[![npm license][badge-npm-license]][url-npm]
[![pp install size][badge-pp-install-size]][url-pp]
[![github commit last][badge-github-last-commit]][url-github]
[![github commit total][badge-github-commit-count]][url-github]

[//]: <> (Shields)
[badge-npm-version]: https://flat.badgen.net/npm/v/@ject/mixin
[badge-npm-download-monthly]: https://flat.badgen.net/npm/dm/@ject/mixin
[badge-npm-download-total]:https://flat.badgen.net/npm/dt/@ject/mixin
[badge-npm-dependents]: https://flat.badgen.net/npm/dependents/@ject/mixin
[badge-npm-license]: https://flat.badgen.net/npm/license/@ject/mixin
[badge-pp-install-size]: https://flat.badgen.net/packagephobia/install/@ject/mixin
[badge-github-last-commit]: https://flat.badgen.net/github/last-commit/hoyeungw/vect
[badge-github-commit-count]: https://flat.badgen.net/github/commits/hoyeungw/vect

[//]: <> (Link)
[url-npm]: https://npmjs.org/package/@ject/mixin
[url-pp]: https://packagephobia.now.sh/result?p=@ject/mixin
[url-github]: https://github.com/hoyeungw/vect

## Features

- Make class mixin

## Install
```console
$ npm install @ject/mixin
```

## Usage
```js
import { Callable } from '@ject/mixin'
// inherit the class Callable
class CallableClass extends Callable {
  constructor (a, b) {
    super(row => this.a + this.b + row)
    this.a = a
    this.b = b
  }
}

const callableClass = new CallableClass(5, 4)
console.log(callableClass(3)) // 12

```

## Meta
[LICENSE (MIT)](LICENSE)
