/**
  * Checks if localStorage is available
  */
export function hasStorage () {
  return typeof Storage !== 'undefined'
}

/**
  * Saves the item as JSON string
  */
export async function save (id, item) {
  if (!hasStorage()) {
    throw new Error('Storage API not supported')
  }

  window.localStorage.setItem(id.toString(), JSON.stringify(item))
  return null
}

/**
  * Retreives the item
  */
export async function load (id) {
  if (!hasStorage()) {
    throw new Error('Storage API not supported')
  }

  let itemJson = window.localStorage.getItem(id.toString())
  return JSON.parse(itemJson)
}

export async function remove (id) {
  if (!hasStorage()) {
    throw new Error('Storage API not supported')
  }

  window.localStorage.removeItem(id.toString())
  return null
}
