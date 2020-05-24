# react-use-numeric-entry

>

[![NPM](https://img.shields.io/npm/v/react-use-numeric-entry.svg)](https://www.npmjs.com/package/react-use-numeric-entry) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Description

Numeric Entry Control allows to use some keys to type big numbers.

For example, when user type 5 and presses K, result in input will be 5000.

When user presses K the system should add 000 to existing number.
When user presses H the system should add 00 to existing number.
When user presses M the system should add 000000 to existing number.
When user presses B the system should add 000000000 to existing number.
When user presses T the system should add 000000000000 to existing number.

User can press H/K/M keys multiple times.
Also works with decimals numbers.

## Install

```bash
npm install --save react-use-numeric-entry
```

## Usage

```jsx
import React from 'react'
import useNumericEntry from 'react-use-numeric-entry'

const Example = () => {
  const [inputValue, onChangeValue] = useNumericEntry('');

  return (
    <div>
      <input
        type="text"
        value={inputValue}
        onChange={(e) => onChangeValue(e)}
      />
    </div>
  )
}
```

## License

MIT © [khartumov](https://github.com/khartumov)

---

This hook is created using [create-react-hook](https://github.com/hermanya/create-react-hook).
