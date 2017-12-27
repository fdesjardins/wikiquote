# Wikiquote

[![Build Status][travis-image]][travis-url]
[![NPM Version][npm-image]][npm-url]
[![Coverage][coveralls-image]][coveralls-url]

Some handy methods for Wikiquote

## Installation

```sh
npm install --save wikiquote
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

### Getting a Page Title

You can use the URL for the page you want to pull a quote from. For example, for https://en.wikiquote.org/wiki/Steve_Jobs you can use `Steve_Jobs` or `Steve Jobs` for the `pageTitle` argument.

Another way is to use the searchPeople method:

```js
wikiquote.searchPeople('steve jobs')
  .then(page => wikiquote.getRandomQuote(page.title))
  .then(quote => console.log(quote))
```

## License

MIT © [Forrest Desjardins](https://github.com/fdesjardins)

[npm-url]: https://www.npmjs.com/package/wikiquote
[npm-image]: https://img.shields.io/npm/v/wikiquote.svg?style=flat
[travis-url]: https://travis-ci.org/fdesjardins/wikiquote
[travis-image]: https://img.shields.io/travis/fdesjardins/wikiquote.svg?style=flat
[coveralls-url]: https://coveralls.io/r/fdesjardins/wikiquote
[coveralls-image]: https://img.shields.io/coveralls/fdesjardins/wikiquote.svg?style=flat
