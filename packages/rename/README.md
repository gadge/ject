## @vect/renamer
Rename a function

[![npm version][badge-npm-version]][url-npm]
[![npm download monthly][badge-npm-download-monthly]][url-npm]
[![npm download total][badge-npm-download-total]][url-npm]
[![npm dependents][badge-npm-dependents]][url-github]
[![npm license][badge-npm-license]][url-npm]
[![pp install size][badge-pp-install-size]][url-pp]
[![github commit last][badge-github-last-commit]][url-github]
[![github commit total][badge-github-commit-count]][url-github]

[//]: <> (Shields)
[badge-npm-version]: https://flat.badgen.net/npm/v/@ject/rename
[badge-npm-download-monthly]: https://flat.badgen.net/npm/dm/@ject/rename
[badge-npm-download-total]:https://flat.badgen.net/npm/dt/@ject/rename
[badge-npm-dependents]: https://flat.badgen.net/npm/dependents/@ject/rename
[badge-npm-license]: https://flat.badgen.net/npm/license/@ject/rename
[badge-pp-install-size]: https://flat.badgen.net/packagephobia/install/@ject/rename
[badge-github-last-commit]: https://flat.badgen.net/github/last-commit/hoyeungw/vect
[badge-github-commit-count]: https://flat.badgen.net/github/commits/hoyeungw/vect

[//]: <> (Link)
[url-npm]: https://npmjs.org/package/@ject/rename
[url-pp]: https://packagephobia.now.sh/result?p=@ject/rename
[url-github]: https://github.com/hoyeungw/vect

## Features

- Rename a function

## Install
```console
$ npm install @ject/rename
```

## Usage
```js
import { rename } from '@ject/rename'

const func = x => x
console.log(func.name) // func
rename(func, 'not-a-method')
console.log(func.name) // not-a-method

```

## Meta
[LICENSE (MIT)](LICENSE)
