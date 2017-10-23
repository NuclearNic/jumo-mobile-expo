import { StyleSheet } from 'react-native'

const MARGIN = 40

module.exports = StyleSheet.create({
	container: {
		flex: 1,
		top: -95,
		alignItems: 'center',
		justifyContent: 'flex-start',
	},
	button: {
		alignItems: 'center',
		justifyContent: 'center',
		backgroundColor: '#FFD503',
		height: MARGIN,
		borderRadius: 20,
		zIndex: 100,
	},
	circle: {
		height: MARGIN,
		width: MARGIN,
		marginTop: -MARGIN,
		borderWidth: 1,
		borderColor: '#FFD503',
		borderRadius: 100,
		alignSelf: 'center',
		zIndex: 99,
		backgroundColor: '#FFD503',
	},
	text: {
		color: 'black',
		backgroundColor: 'transparent',
	},
	image: {
		width: 24,
		height: 24,
	},
})
