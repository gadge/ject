<div style="text-align:center">
  <img alt="banner" src="./media/ject-banner.svg">
  <p style="text-align:center">functional operations</p>
</div>

[![version](https://img.shields.io/npm/v/@ject/noop?logo=npm&style=flat-square)]()
[![language](https://img.shields.io/github/languages/top/gadge/ject?logo=javascript&style=flat-square)][url-github]
[![manager](https://img.shields.io/badge/manager-pnpm-F69220?logo=pnpm&logoColor=EEE&style=flat-square)][url-github]
[![npm last update](https://img.shields.io/npm/last-update/@ject/noop?logo=npm&style=flat-square)]()
[![github last commit](https://img.shields.io/github/last-commit/gadge/ject?logo=github&style=flat-square)][url-github]
[![github commits](https://img.shields.io/github/commit-activity/t/gadge/ject?logo=github&style=flat-square)][url-github]
[![node version](https://img.shields.io/node/v/@ject/noop/latest?logo=node.js&style=flat-square)]()

[//]: # ([![npm dependents]&#40;https://flat.badgen.net/npm/dependents/@aryth/math&#41;]&#40;https://www.npmjs.com/package/@aryth/math?activeTab=dependents&#41;)

[//]: # (![NPM Downloads by package author]&#40;https://img.shields.io/npm-stat/dw/hoyeung&#41;)

[//]: <> (Link)

[url-github]: https://github.com/hoyeungw/ject

[url-npm]: https://npmjs.org/package/@ject/oneself

### Bullets

- Featured functional operations.
- Small and separate modules. Install on need.
- Lightweight and fast.

### Install

```console
$ npm install @ject/<tool-name>
```

### Tools

|                                   |                                 |      |                   |
|-----------------------------------|---------------------------------|------|-------------------|
| [**callable**](packages/callable) | A class that inherits function  | misc | ![v][callable-dm] |
| [**chore**](packages/chore)       | Factory to create function      | misc | ![v][chore-dm]    |
| [**mixin**](packages/mixin)       | Inherit multiple classes        | misc | ![v][mixin-dm]    |
| [**noop**](packages/noop)         | Function to return nothing      | misc | ![v][noop-dm]     |
| [**oneself**](packages/oneself)   | Function to return input itself | misc | ![v][oneself-dm]  |
| [**pipe**](packages/pipe)         | Pipeline functions              | misc | ![v][pipe-dm]     |
| [**rename**](packages/rename)     | Rename a function               | misc | ![v][rename-dm]   |
|                                   |                                 |      |                   |

[//]: <> (Local routes)

[callable-dm]: https://flat.badgen.net/npm/dm/@ject/callable

[chore-dm]: https://flat.badgen.net/npm/dm/@ject/chore

[mixin-dm]: https://flat.badgen.net/npm/dm/@ject/mixin

[noop-dm]: https://flat.badgen.net/npm/dm/@ject/noop

[oneself-dm]: https://flat.badgen.net/npm/dm/@ject/oneself

[pipe-dm]: https://flat.badgen.net/npm/dm/@ject/pipe

[rename-dm]: https://flat.badgen.net/npm/dm/@ject/rename

### Usage

```ecmascript 6
import { noop } from '@ject/noop'

const input = 'value'
const output = noop(input)
console.log(output) // undefined

```

```ecmascript 6
import { oneself } from '@ject/oneself'

const input = 'value'
const output = oneself(input)
console.log(output) // 'value'

```

#### Meta

[LICENSE (MIT)](LICENSE)
