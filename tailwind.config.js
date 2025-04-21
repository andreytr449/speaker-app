/** @type {import('tailwindcss').Config} */
module.exports = {
	// NOTE: Update this to include the paths to all of your component files.
	content: ['./app/**/*.{js,jsx,ts,tsx}', './components/**/*.{js,jsx,ts,tsx}', './screens/**/*.{js,jsx,ts,tsx}'],
	presets: [require('nativewind/preset')],
	theme: {
		extend: {
			fontSize: {
				// Headline
				'headline-large': ['40px', {lineHeight: '48px', letterSpacing: '0.3px'}],
				'headline-medium': ['32px', {lineHeight: '40px', letterSpacing: '0.3px'}],
				'headline-small': ['24px', {lineHeight: '32px', letterSpacing: '0.3px'}],
				'headline-xs': ['20px', {lineHeight: '24px', letterSpacing: '0.3px'}],
				
				// Title
				'title-large': ['24px', {lineHeight: '32px', letterSpacing: '0.3px'}],
				'title-medium': ['20px', {lineHeight: '24px', letterSpacing: '0.3px'}],
				'title-small': ['18px', {lineHeight: '24px', letterSpacing: '0.3px'}],
				'title-xs': ['16px', {lineHeight: '20px', letterSpacing: '0.3px'}],
				
				// Label
				'label-large': ['20px', {lineHeight: '24px', letterSpacing: '0.4px'}],
				'label-medium': ['16px', {lineHeight: '20px', letterSpacing: '0.4px'}],
				'label-small': ['14px', {lineHeight: '20px', letterSpacing: '0.4px'}],
				
				// Body
				'body-large': ['20px', {lineHeight: '24px', letterSpacing: '0.3px'}],
				'body-medium': ['16px', {lineHeight: '20px', letterSpacing: '0.3px'}],
				'body-small': ['14px', {lineHeight: '20px', letterSpacing: '0.3px'}]
			},
			colors: {
				primary: {
					DEFAULT: '#007AFF',
					50: '#E6F2FF',
					100: '#CCE4FF',
					150: '#B3D7FF',
					200: '#99CAFF',
					300: '#66AFFF',
					400: '#3395FF',
					500: '#007AFF',
					600: '#0062CC',
					700: '#004999',
					800: '#003166',
					850: '#00254D',
					900: '#001833',
					950: '#000C1A'
				},
				green: {
					DEFAULT: '#38AD49',
					50: '#EBF7ED',
					100: '#D7EFDB',
					150: '#C3E6C8',
					200: '#AFDEB6',
					300: '#88CE92',
					400: '#60BD6D',
					500: '#38AD49',
					600: '#2D8A3A',
					700: '#22682C',
					800: '#16451D',
					850: '#113416',
					900: '#0B230F',
					950: '#061107'
				},
				yellow: {
					DEFAULT: '#FFD60A',
					50: '#FFFBE7',
					100: '#FFF7CE',
					150: '#FFF3B6',
					200: '#FFEF9D',
					300: '#FFE66C',
					400: '#FFDE3B',
					500: '#FFD60A',
					600: '#CCAB08',
					700: '#998006',
					800: '#665604',
					850: '#4D4003',
					900: '#332B02',
					950: '#1A1501'
				},
				red: {
					DEFAULT: '#D53F36',
					50: '#FBECEB',
					100: '#F7D9D7',
					150: '#F2C5C3',
					200: '#EEB2AF',
					300: '#E68C86',
					400: '#DD655E',
					500: '#D53F36',
					600: '#AA322B',
					700: '#802620',
					800: '#551916',
					850: '#401310',
					900: '#2B0D0B',
					950: '#150605'
				},
				neutral: {
					DEFAULT: '#BDBDBD',
					50: '#F8F8F8',
					100: '#F2F2F2',
					150: '#EBEBEB',
					200: '#E5E5E5',
					300: '#D7D7D7',
					400: '#CACACA',
					500: '#BDBDBD',
					600: '#979797',
					700: '#717171',
					800: '#4C4C4C',
					850: '#393939',
					900: '262626',
					950: '#131313'
				},
				'body-primary-light': '#131313',
				'bg-light': '#fff',
				'surfaces-light':{
					1:'#F8F8F8',
					2:'#E6F2FF'
				},
				'body-secondary-light': '#D7D7D7',
				'border-light': '#F2F2F2',
				
				'body-primary-dark': '#FFFFFF',
				'bg-dark': '#131313',
				'surfaces-dark':{
					1:'#262626',
					2:'#00254D'
				},
				'body-secondary-dark': '#4C4C4C',
				'border-dark': '#393939'
			},
			fontFamily: {
				sf: ['SF_Pro_Display_Bold']
			}
		}
	},
	plugins: []
}