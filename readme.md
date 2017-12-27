# Wikiquote

[![Build Status][travis-image]][travis-url]
[![NPM Version][npm-image]][npm-url]
[![Coverage][coveralls-image]][coveralls-url]

Some handy methods for Wikiquote

## Installation

```sh
npm install --save wikiquote
```
### Usage

```js
wikiquote.searchPeople('steve jobs')
  .then(page => wikiquote.getRandomQuote(page.title))
  .then(quote => console.log(quote))
```

```
You always have to keep pushing to innovate. Dylan could have sung protest songs
forever and probably made a lot of money, but he didn’t. He had to move on, and
when he did, by going electric in 1965, he alienated a lot of people. His 1966
Europe tour was his greatest…. The Beatles were the same way. They kept evolving,
moving, refining their art. That’s what I’ve always tried to do — keep moving.
Otherwise, as Dylan says, if you are not busy being born, you’re busy dying.

As quoted in Steve Jobs (2011) by Walter Isaacson, p. 570
```

## API

### `search(query)`

#### `query`

The search terms used to query wikiquote

Type: `string`

Examples:

- Person Name
- Book Title
- Movie Title

### `searchByTitle(query)`

#### `query`

The search terms used to query page titles

Type: `string`

### `searchPeople(query)`

#### `query`

The search terms used to query people

Type: `string`

### `getPageSections(pageTitle)`

### `pageTitle`

The title of the wikiquote page

Type: `string`

### `getSectionContent(pageTitle, sectionIndex)`

### `pageTitle`

The title of the wikiquote page

Type: `string`

### `getRandomQuote(pageTitle)`

### `pageTitle`

The title of the wikiquote page

Type: `string`

## License

MIT © [Forrest Desjardins](https://github.com/fdesjardins)

[npm-url]: https://www.npmjs.com/package/wikiquote
[npm-image]: https://img.shields.io/npm/v/wikiquote.svg?style=flat
[travis-url]: https://travis-ci.org/fdesjardins/wikiquote
[travis-image]: https://img.shields.io/travis/fdesjardins/wikiquote.svg?style=flat
[coveralls-url]: https://coveralls.io/r/fdesjardins/wikiquote
[coveralls-image]: https://img.shields.io/coveralls/fdesjardins/wikiquote.svg?style=flat
