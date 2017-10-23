import { StyleSheet } from 'react-native'

const SIZE = 40

module.exports = StyleSheet.create({
	container: {
		flex: 1,
		margin: 20,
		alignItems: 'flex-end',
		justifyContent: 'flex-end',
	},
	button: {
		alignItems: 'center',
		justifyContent: 'center',
		width: SIZE,
		height: SIZE,
		borderRadius: 100,
		zIndex: 99,
		backgroundColor: '#FFD503',
	},
	circle: {
		height: SIZE,
		width: SIZE,
		marginTop: -SIZE,
		borderRadius: 100,
		backgroundColor: '#FFD503',
	},
	image: {
		width: 24,
		height: 24,
	}
})
