import {createCommand, LexicalCommand} from 'lexical'

export const RATION_CHANGE_IMAGE_COMMAND: LexicalCommand<{width: number, height: number}> =
  createCommand('RATION_CHANGE_IMAGE_COMMAND')

export const CONTENT_FONT_SIZE_CHANGE_EMAIL_COMMAND: LexicalCommand<number> =
  createCommand('CONTENT_WIDTH_CHANGE_EMAIL_COMMAND')