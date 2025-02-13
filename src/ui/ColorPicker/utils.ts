import {Color, HSV, RGB} from './types'

export const clamp = (value: number, max: number, min: number): number => {
  return value > max ? max : value < min ? min : value
}

const toHex = (value: string): string => {
  if (!value.startsWith('#')) {
    const ctx = document.createElement('canvas').getContext('2d')

    if (!ctx) {
      throw new Error('2d context not supported or canvas already initialized')
    }

    ctx.fillStyle = value

    return ctx.fillStyle
  } else if (value.length === 4 || value.length === 5) {
    value = value
      .split('')
      .map((v, i) => (i ? v + v : '#'))
      .join('')

    return value
  } else if (value.length === 7 || value.length === 9) {
    return value
  }

  return '#000000'
}

const hex2rgb = (hex: string): RGB => {
  const rbgArr = (
    hex
      .replace(
        /^#?([a-f\d])([a-f\d])([a-f\d])$/i,
        (_m, r, g, b) => '#' + r + r + g + g + b + b,
      )
      .substring(1)
      .match(/.{2}/g) || []
  ).map((v) => parseInt(v, 16))

  return {
    r: rbgArr[0],
    g: rbgArr[1],
    b: rbgArr[2]
  }
}

const rgb2hsv = ({r, g, b}: RGB): HSV => {
  r /= 255
  g /= 255
  b /= 255

  const max = Math.max(r, g, b)
  const d = max - Math.min(r, g, b)

  const h = d
    ? (max === r
        ? (g - b) / d + (g < b ? 6 : 0)
        : max === g
        ? 2 + (b - r) / d
        : 4 + (r - g) / d) * 60
    : 0
  const s = max ? (d / max) * 100 : 0
  const v = max * 100

  return {
    h,
    s,
    v
  }
}

const hsv2rgb = ({h, s, v}: HSV): RGB => {
  s /= 100
  v /= 100

  const i = ~~(h / 60)
  const f = h / 60 - i
  const p = v * (1 - s)
  const q = v * (1 - f * s)
  const t = v * (1 - (1 - f) * s)
  const mod = i % 6

  const r = Math.round([v, q, p, p, t, v][mod] * 255)
  const g = Math.round([t, v, v, q, p, p][mod] * 255)
  const b = Math.round([p, p, t, v, v, q][mod] * 255)

  return {
    r,
    g,
    b
  }
}

const rgb2hex = ({r, g, b}: RGB): string => {
  return '#' + [r, g, b].map((v) => v.toString(16).padStart(2, '0')).join('')
}

export const transformColor = <M extends keyof Color, C extends Color[M]>(format: M, color: C): {hex: string, rgb: RGB, hsv: HSV} => {
  if (color === 'inherit' || color === 'transparent') {
    return {
      hex: color,
      rgb: {r: 0, g: 0, b: 0},
      hsv: {h: 0, s: 0, v: 0}
    }
  }
  let hex: Color['hex'] = toHex('#121212')
  let rgb: Color['rgb'] = hex2rgb(hex)
  let hsv: Color['hsv'] = rgb2hsv(rgb)

  if (format === 'hex') {
    const value = color as Color['hex']

    hex = toHex(value)
    rgb = hex2rgb(hex)
    hsv = rgb2hsv(rgb)
  } else if (format === 'rgb') {
    rgb = color as Color['rgb']
    hex = rgb2hex(rgb)
    hsv = rgb2hsv(rgb)
  } else if (format === 'hsv') {
    hsv = color as Color['hsv']
    rgb = hsv2rgb(hsv)
    hex = rgb2hex(rgb)
  }

  return {
    hex,
    rgb,
    hsv
  }
}