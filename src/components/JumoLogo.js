import React, { Component, PropTypes } from 'react'
import { StyleSheet, View, Text, Image } from 'react-native'

import styles from '../styles/JumoLogo'
import logoImg from '../images/logo.png'

export default class Logo extends Component {
	render() {
		return (
			<View style={styles.container}>
				<Image source={logoImg} style={styles.image} />
			</View>
		)
	}
}
