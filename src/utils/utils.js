export const sessionStorageSet = (name, obj) => {
  if (typeof obj === 'undefined') {
    return false
  }
  if (typeof name !== 'string') {
    return false
  }
  let saveStr = ''
  if (typeof obj === 'object') {
    saveStr = JSON.stringify(obj)
  } else {
    saveStr = obj
  }
  sessionStorage.setItem(name, saveStr)
  return true
}

export const sessionStorageGet = (name) => {
  if (typeof name !== 'string') {
    return
  }
  var savedStr = sessionStorage.getItem(name)
  // 非法值返回
  if (!savedStr) {
    return
  }
  var result
  if ((savedStr.indexOf('"') < 0 && savedStr.indexOf('\'') < 0) || savedStr.indexOf(':') < 0) {
    return savedStr
  }
  try {
    result = JSON.parse(savedStr)
    return result
  } catch (e) {
    return savedStr
  }
}

export const sessionStorageRemove = (name) => {
  if (typeof name !== 'string') {
    return
  }
  sessionStorage.removeItem(name)
}

export const sessionStorageClear = (name) => {
  if (name) {
    return
  }
  sessionStorage.clear()
}

export const localStorageSet = (name, obj) => {
  if (typeof obj === 'undefined') {
    return false
  }
  if (typeof name !== 'string') {
    return false
  }
  let saveStr = ''
  if (typeof obj === 'object') {
    saveStr = JSON.stringify(obj)
  } else {
    saveStr = obj
  }
  localStorage.setItem(name, saveStr)
  return true
}

export const localStorageGet = (name) => {
  if (typeof name !== 'string') {
    return
  }
  var savedStr = localStorage.getItem(name)
  // 非法值返回
  if (!savedStr) {
    return
  }
  var result
  if ((savedStr.indexOf('"') < 0 && savedStr.indexOf('\'') < 0) || savedStr.indexOf(':') < 0) {
    return savedStr
  }
  try {
    result = JSON.parse(savedStr)
    return result
  } catch (e) {
    return savedStr
  }
}

export const localStorageRemove = (name) => {
  if (typeof name !== 'string') {
    return
  }
  localStorage.removeItem(name)
}

export const localStorageClear = (name) => {
  if (!name) {
    localStorage.clear()
  }
}

// 阿拉伯数字转换为中文
export const sectionToChinese = (section) => {
  var chnNumChar = ['零', '一', '二', '三', '四', '五', '六', '七', '八', '九']
  // var chnUnitSection = ['', '万', '亿', '万亿', '亿亿']
  var chnUnitChar = ['', '十', '百', '千']
  var strIns = ''
  var chnStr = ''
  var unitPos = 0
  var zero = true
  while (section > 0) {
    var v = section % 10
    if (v === 0) {
      if (!zero) {
        zero = true
        chnStr = chnNumChar[v] + chnStr
      }
    } else {
      zero = false
      strIns = chnNumChar[v]
      strIns += chnUnitChar[unitPos]
      chnStr = strIns + chnStr
    }
    unitPos++
    section = Math.floor(section / 10)
  }
  if (chnStr.startsWith('一十')) {
    chnStr = chnStr.replace('一十', '十')
  }
  return chnStr
}

export function deepCopyObj (source) {
  let result = source instanceof Array ? [] : {}
  for (let i in source) {
    if (source[i] instanceof Object) {
      result[i] = deepCopyObj(source[i])
    } else {
      result[i] = source[i]
    }
  }
  return result
}

export function getBaseUrl () {
  let location = window.location
  let basePath = location.protocol + '//' + location.host
  return basePath
}
