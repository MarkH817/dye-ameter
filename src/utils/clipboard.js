/**
  * Reads from clipboard
  * TODO: Fix or scrap this
  */

export async function read (inputId) {
  let inputElement = document.getElementById(inputId)
  inputElement.style.display = 'block'

  let lastActive = document.activeElement

  let result = null
  inputElement.value = ''
  inputElement.select()

  if (document.execCommand('paste')) {
    result = inputElement.value
    inputElement.value = ''
  }

  lastActive.focus()
  inputElement.style.display = 'none'

  if (!result) {
    throw new Error('Could not read from clipboard')
  }

  return result
}

/**
  * Writes to clipboard
  */
export async function write (inputId, value) {
  let inputElement = document.getElementById(inputId)
  inputElement.style.display = 'block'

  let lastActive = document.activeElement

  let success = false
  inputElement.value = value
  inputElement.select()

  if (document.execCommand('copy')) {
    success = true
    inputElement.value = ''
  }

  lastActive.focus()
  inputElement.style.display = 'none'

  if (!success) {
    throw new Error('Could not read from clipboard')
  }

  return null
}
