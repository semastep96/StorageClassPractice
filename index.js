const STORAGE_TYPES = {
  local: 'local',
  session: 'session',
}

class Storage {
  key = undefined
  value = ''
  storage = localStorage

  constructor(key, options = {}) {
    this.key = key

    if (options.default || options.default == 0) {
      this.value = options.default
    }

    if (options.type == 'session') {
      this.storage = sessionStorage
    }

    this.set()
  }

  get() {
    return this.storage.getItem(this.key)
  }

  set(newValue) {
    if (newValue || newValue == 0) this.value = newValue
    this.storage.setItem(this.key, this.value)
  }

  clear() {
    this.storage.removeItem(this.key)
  }

  isEmpty() {
    return !this.get()
  }
}
