import {EMAIL_TABLE_DEFAULT_CSS} from '../constants.ts'

const OUTLOOK_COMMENT ={
  mso: 'mso',
  ie: 'IE',
  oneOf: '(mso)|(IE)',
  notOneOf: '(!mso)&(!IE)'
}

export const createEmailTableElement = () => {
  const table = document.createElement('table')
  table.setAttribute('cellpadding', '0')
  table.setAttribute('cellspacing', '0')
  table.style.cssText = EMAIL_TABLE_DEFAULT_CSS
  const tbody = document.createElement('tbody')
  table.appendChild(tbody)

  return {
    table,
    tbody,
  }
}
export const createEmailTableCellElement = () => {
  const td = document.createElement('td')
  td.setAttribute('valign', 'top')
  td.setAttribute('align', 'left')
  td.style.padding = '0'
  td.style.margin = '0'
  td.style.border = '0'
  td.style.boxSizing = 'border-box'
  td.style.overflowWrap = 'break-word'
  td.style.wordWrap = 'break-word'
  td.style.wordBreak = 'break-word'

  return td
}

export function createEmailTableRowCellElement(withoutTD: true): { tr: HTMLTableRowElement; td: null }
export function createEmailTableRowCellElement(withoutTD?: false): {
  tr: HTMLTableRowElement;
  td: HTMLTableCellElement
}
export function createEmailTableRowCellElement(withoutTD = false) {
  const tr = document.createElement('tr')
  if (withoutTD) {
    return {tr, td: null}
  }
  const td = createEmailTableCellElement()
  tr.appendChild(td)

  return {
    tr,
    td,
  }
}

export function eventFiles (event: DragEvent): [boolean, File[]] {
  if (!event.dataTransfer) {
    return [false, []]
  }
  const files = Array.from(event.dataTransfer.files)
  return [files.length > 0, files]
}

interface CSSStyleDeclarationT extends CSSStyleDeclaration {
  msTableLspace: string
  msTableRspace: string
}

export const createElement = (tag: string, attrs: Record<string, string> = {}, styles: Partial<CSSStyleDeclarationT> = {}) => {
  const element = document.createElement(tag)
  Object.entries(attrs).forEach(([key, value]) => {
    element.setAttribute(key, value)
  })
  Object.assign(element.style, styles)
  return element
}

export interface CreateOutlookCommentProps {
  comment: string
  condition?: keyof typeof OUTLOOK_COMMENT
}

export const createOutlookComment = ({comment, condition}: CreateOutlookCommentProps) => {
  if (condition) {
    return document.createComment(`[if ${OUTLOOK_COMMENT[condition]}]>${comment}<![endif]`)
  }
  return document.createComment(comment)
}