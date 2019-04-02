/*
 * @Author: ruiluo
 * @Date: 2018-11-29 13:43:21
 * @Last Modified by: wenKe
 * @Last Modified time: 2018-12-14 15:25:17
 * @Description: 屏幕适配
 */

(function (doc, win) {
  let docEl = doc.documentElement
  docEl.style.fontSize = 100 * (docEl.clientWidth / 1366) + 'px'
  let resizeEvt = 'orientationchange' in window ? 'orientationchange' : 'resize'
  window.unit = 100 * (docEl.clientWidth / 1366)
  let recalc = function () {
    let clientWidth = docEl.clientWidth
    if (!clientWidth) return
    docEl.style.fontSize = 100 * (clientWidth / 1366) + 'px'
    window.unit = 100 * (docEl.clientWidth / 1366)
  }
  if (!doc.addEventListener) return
  win.addEventListener(resizeEvt, recalc, false)
  doc.addEventListener('DOMContentLoaded', recalc, false)
  doc.addEventListener('pageshow', recalc, false) // 后退重新计算
})(document, window)
