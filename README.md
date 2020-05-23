# react-use-numeric-entry

>

[![NPM](https://img.shields.io/npm/v/react-use-numeric-entry.svg)](https://www.npmjs.com/package/react-use-numeric-entry) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

```bash
npm install --save react-use-numeric-entry
```

## Usage

```jsx
import React, { Component } from 'react'
import { useNumericEntry } from 'react-use-numeric-entry'

const Example = () => {
  const [inputValue, onChangeValue] = useState('');

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
