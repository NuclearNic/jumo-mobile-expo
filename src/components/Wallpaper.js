import React, { Component, PropTypes } from 'react'
import Dimensions from 'Dimensions'
import { StyleSheet, Image } from 'react-native'

import styles from '../styles/Wallpaper'
import bgSrc from '../images/wallpaper.png'

export default class Wallpaper extends Component {
	render() {
		return (
			<Image style={styles.picture} source={bgSrc}>
				{this.props.children}
			</Image>
		)
	}
}
