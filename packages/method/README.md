## @ject/method
Make class method.

[![npm version][badge-npm-version]][url-npm]
[![npm download monthly][badge-npm-download-monthly]][url-npm]
[![npm download total][badge-npm-download-total]][url-npm]
[![npm dependents][badge-npm-dependents]][url-github]
[![npm license][badge-npm-license]][url-npm]
[![pp install size][badge-pp-install-size]][url-pp]
[![github commit last][badge-github-last-commit]][url-github]
[![github commit total][badge-github-commit-count]][url-github]

[//]: <> (Shields)
[badge-npm-version]: https://flat.badgen.net/npm/v/@ject/method
[badge-npm-download-monthly]: https://flat.badgen.net/npm/dm/@ject/method
[badge-npm-download-total]:https://flat.badgen.net/npm/dt/@ject/method
[badge-npm-dependents]: https://flat.badgen.net/npm/dependents/@ject/method
[badge-npm-license]: https://flat.badgen.net/npm/license/@ject/method
[badge-pp-install-size]: https://flat.badgen.net/packagephobia/install/@ject/method
[badge-github-last-commit]: https://flat.badgen.net/github/last-commit/hoyeungw/vect
[badge-github-commit-count]: https://flat.badgen.net/github/commits/hoyeungw/vect

[//]: <> (Link)
[url-npm]: https://npmjs.org/package/@ject/method
[url-pp]: https://packagephobia.now.sh/result?p=@ject/method
[url-github]: https://github.com/hoyeungw/vect

## Features

- Make class method

## Install
```console
$ npm install @ject/method
```

## Usage
```js
import { Callable } from '@ject/method'
// inherit the class Callable
class CallableClass extends Callable {
  constructor (a, b) {
    super(row => this.a + this.b + row)
    this.a = a
    this.b = b
  }
}

const methodClass = new CallableClass(5, 4)
console.log(methodClass(3)) // 12

```

## Meta
[LICENSE (MIT)](LICENSE)
