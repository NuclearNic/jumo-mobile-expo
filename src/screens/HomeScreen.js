import React, { Component, PropTypes } from 'react'
import { StyleSheet, View, Image, TouchableOpacity, Animated, Easing } from 'react-native'
import { Actions, ActionConst } from 'react-native-router-flux'
import arrowImg from '../images/left-arrow.png'

import styles from '../styles/Home'

const SIZE = 40

export default class HomeScreen extends Component {
	constructor() {
		super()

		this.state = {
			isLoading: false,
		}

		this._onPress = this._onPress.bind(this)
		this.growAnimated = new Animated.Value(0)
	}

	_onPress() {
		if (this.state.isLoading) return

		this.setState({ isLoading: true })

		Animated.timing(
			this.growAnimated,
			{
				toValue: 1,
				duration: 300,
				easing: Easing.linear,
			}
		).start()

		setTimeout(() => {
			Actions.pop()
		}, 500)
	}

	render() {
		const changeScale = this.growAnimated.interpolate({
			inputRange: [0, 1],
			outputRange: [1, SIZE],
		})

		return (
			<View style={styles.container}>
				<TouchableOpacity onPress={this._onPress}
					style={styles.button}
					activeOpacity={1}>
					<Image style={styles.image} source={arrowImg} />
				</TouchableOpacity>
				<Animated.View style={[ styles.circle, {transform: [{scale: changeScale}]} ]} />
			</View>
		)
	}
}
