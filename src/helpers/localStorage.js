export const save = (key, value) => {
  window.localStorage.setItem(key, JSON.stringify(value))
  return value
}

export const load = (key) => JSON.parse(window.localStorage.getItem(key))
