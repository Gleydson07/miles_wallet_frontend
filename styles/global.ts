import { globalCss } from "../stitches.config";

export const globalStyles = globalCss({
  '*': { margin: 0, padding: 0 },
  'body': {
    backgroundColor: '$black',
    color: '$white',
    '-webkit-font-smooth': 'antialiased',
  },

  'body, input, text-area, button': {
    fontFamily: 'nunito, sans-serif'
  }
});