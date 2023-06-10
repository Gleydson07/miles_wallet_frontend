import { createStitches } from '@stitches/react';

export const {
	styled,
	css,
	globalCss,
	keyframes,
	getCssText,
	theme,
	createTheme,
	config,
} = createStitches({
	theme: {
		colors: {
      transparent: 'transparent',
			white: '#F7F7F7',
			gray50: '#E7E7E7',
			gray100: '#C2C2C2',
			gray500: '#808080',
      blue300: '#00baf7',
      blue400: '#007cf6',
      blue500: '#0047AB',
      green400: '#007D00',
      green500: '#006B00',
      red400: '#B70000',
      red500: '#A30000',
      yellow400: '#ffc837',
      yellow600: '#FF8008',
      yellow800: '#AC5605',
			black: '#161719',
      darkOpacity: 'rgba(0, 0, 0, 0.5)',
		},
	},
	media: {
		bp1: '(min-width: 480px)',
	},
	utils: {
		marginX: (value: number) => ({ marginLeft: value, marginRight: value }),
	},
});