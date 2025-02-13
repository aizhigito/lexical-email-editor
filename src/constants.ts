export const EMAIL_TABLE_DEFAULT_CSS = 'border-collapse: collapse; table-layout: fixed; border-spacing: 0; mso-table-lspace: 0pt; mso-table-rspace: 0pt; vertical-align: top; padding: 0; box-sizing: border-box; border: 0;'
export const DEFAULT_EMAIL_ROOT_LAYOUT_WIDTH = 600
export const DEFAULT_EMAIL_ROOT_COLOR = '#000000'
export const DEFAULT_EMAIL_ROOT_FONT_SIZE = 16
export const DEFAULT_EMAIL_ROOT_BACKGROUND_COLOR = 'transparent'
export const DEFAULT_EMAIL_ROOT_FONT_FAMILY = 'Arial, sans-serif'
export const DEFAULT_EMAIL_ROOT_LINE_HEIGHT = 1.5
export const DEFAULT_EMAIL_ROOT_ALIGN_ITEMS = 'center'
export const DEFAULT_EMAIL_BLOCK_BACKGROUND_COLOR = 'transparent'
export const DEFAULT_EMAIL_BLOCK_PADDING = 0
export const DEFAULT_EMAIL_LAYOUT_BACKGROUND_COLOR = 'transparent'
export const DEFAULT_EMAIL_LAYOUT_ITEM_BACKGROUND_COLOR = 'transparent'
export const DEFAULT_EMAIL_LAYOUT_ITEM_PADDING = 0
export const DEFAULT_EMAIL_LAYOUT_ITEM_BORDER = 0
export const DEFAULT_EMAIL_LAYOUT_ITEM_BORDER_COLOR = '#000000'
export const DEFAULT_FONT_SIZE = 16
export const MIN_ALLOWED_FONT_SIZE = 8
export const MAX_ALLOWED_FONT_SIZE = 72

export const BLOCK_LAYOUTS = [
  {
    label: ['100%'],
    value: '1fr',
  },
  {
    label: ['50%', '50%'],
    value: '1fr 1fr',
  },
  {
    label: ['33%', '33%', '33%'],
    value: '1fr 1fr 1fr',
  },
  {
    label: ['25%', '75%'],
    value: '1fr 3fr',
  },
  {
    label: ['75%', '25%'],
    value: '3fr 1fr',
  },
  {
    label: ['25%', '50%', '25%'],
    value: '1fr 2fr 1fr',
  },
  {
    label: ['25%', '25%', '25%', '25%'],
    value: '1fr 1fr 1fr 1fr',
  },
]

export const BLOCKS_OF_LAYOUT_ITEM = {
  'custom-paragraph': 'Paragraph',
  h1: 'Heading 1',
  h2: 'Heading 2',
  h3: 'Heading 3',
  'image-block': 'Image',
  'button-link-block': 'Button',
}

export const FORMATTABLE_BLOCKS = ['custom-paragraph', 'h1', 'h2', 'h3']

export const INITIAL_STATE = '{"root":{"children":[{"children":[{"children":[{"children":[{"children":[{"children":[],"direction":null,"format":"","indent":0,"type":"custom-paragraph","version":1,"textFormat":0,"textStyle":""}],"direction":null,"format":"","indent":0,"type":"layout-item","version":1,"backgroundColor":"transparent","paddingLeft":0,"paddingRight":0,"paddingTop":0,"paddingBottom":0,"borderLeftWidth":0,"borderLeftColor":"#000000","borderRightWidth":0,"borderRightColor":"#000000","borderTopWidth":0,"borderTopColor":"#000000","borderBottomWidth":0,"borderBottomColor":"#000000"}],"direction":null,"format":"","indent":0,"type":"layout-container","version":1,"templateColumns":"1fr"}],"direction":null,"format":"","indent":0,"type":"email-template-block","version":1,"backgroundColor":"transparent","paddingLeft":0,"paddingRight":0,"paddingTop":0,"paddingBottom":0}],"direction":null,"format":"","indent":0,"type":"email-template-root","version":1,"layoutWidth":700,"color":"#000000","fontSize":17,"backgroundColor":"#ffffff","fontFamily":"Arial, sans-serif","lineHeight":1.5,"alignItems":"center"}],"direction":null,"format":"","indent":0,"type":"root","version":1}}'