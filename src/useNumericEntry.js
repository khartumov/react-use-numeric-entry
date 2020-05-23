import { useState } from 'react'

function useNumericEntry() {
  const [inputValue, setValue] = useState('')

  const isNumeric = val => /^\d+(\.\d+)?$/.test(val)

  const onSetValue = e => {
    let inputValue = e.target.value

    const first = inputValue.slice(0, 1)
    const last = inputValue.substr(inputValue.length - 1)
    const rest = inputValue.slice(0, -1)

    if (!isNumeric(rest) || +first === 0) {
      setValue(inputValue)
      return
    }

    switch (last.toUpperCase()) {
      case 'H':
        inputValue = Math.ceil(rest * 100)
        break
      case 'K':
        inputValue = Math.ceil(rest * 1000)
        break
      case 'M':
        inputValue = Math.ceil(rest * 1000000)
        break
      case 'B':
        inputValue = Math.ceil(rest * 1000000000)
        break
      case 'T':
        inputValue = Math.ceil(rest * 1000000000000)
        break
      default:
        break
    }

    setValue(inputValue)
  }

  return [inputValue, onSetValue]
}

export default useNumericEntry
