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
  return true
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

/**
  *  Removes item from storage
  */
export async function remove (id) {
  if (!hasStorage()) {
    throw new Error('Storage API not supported')
  }

  window.localStorage.removeItem(id.toString())
  return true
}

/**
  * Save new color palette
  */
export async function savePalette (palette) {
  if (!hasStorage()) {
    throw new Error('Storage API not supported')
  }

  let prevList = await load('palettes')
  let newList = [...prevList, palette]
  await save('palettes', newList)
  return true
}

/**
  * Get a color palette
  */
export async function loadPalette (id) {
  if (!hasStorage()) {
    throw new Error('Storage API not supported')
  }

  let result = null
  let list = await load('palettes')

  for (let palette of list) {
    if (palette.id === id) {
      result = palette
    }
  }

  if (!result) {
    throw new Error('Palette not found')
  }

  return result
}

/**
  * Remove color palette from storage
  */
export async function removePalette (id) {
  if (!hasStorage()) {
    throw new Error('Storage API not supported')
  }

  let list = await load('palettes')
  let newList = list.filter((item) => (item.id !== id))
  await save('palettes', newList)

  return true
}

/**
  * Retreives all color palettes
  */
export async function loadAllPalettes () {
  if (!hasStorage()) {
    throw new Error('Storage API not supported')
  }

  return await load('palettes')
}
