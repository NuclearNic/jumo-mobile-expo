import React, { Component, PropTypes } from 'react'
import Dimensions from 'Dimensions'
import { StyleSheet, TouchableOpacity, Text, Animated, Easing, Image, Alert, View } from 'react-native'
import { Actions, ActionConst } from 'react-native-router-flux'

import spinner from '../../images/loading.gif'
import styles from '../../styles/loginScreen/ButtonSubmit'

const DEVICE_WIDTH = Dimensions.get('window').width
const DEVICE_HEIGHT = Dimensions.get('window').height
const MARGIN = 40

export default class ButtonSubmit extends Component {
	constructor() {
		super()

		this.state = {
			isLoading: false,
		}

		this.buttonAnimated = new Animated.Value(0)
		this.growAnimated = new Animated.Value(0)
		this._onPress = this._onPress.bind(this)
	}

	_onPress() {
		if (this.state.isLoading) return

		this.setState({ isLoading: true })
		Animated.timing(
			this.buttonAnimated,
			{
				toValue: 1,
				duration: 200,
				easing: Easing.linear
			}
		).start()

		setTimeout(() => {
			this._onGrow()
		}, 2000)

		setTimeout(() => {
			Actions.homeScreen()
			this.setState({ isLoading: false })
			this.buttonAnimated.setValue(0)
			this.growAnimated.setValue(0)
		}, 2300)
	}

	_onGrow() {
		Animated.timing(
			this.growAnimated,
			{
				toValue: 1,
				duration: 200,
				easing: Easing.linear
			}
		).start()
	}

	render() {
		const changeWidth = this.buttonAnimated.interpolate({
	    inputRange: [0, 1],
	    outputRange: [DEVICE_WIDTH - MARGIN, MARGIN]
	  })
	  const changeScale = this.growAnimated.interpolate({
	    inputRange: [0, 1],
	    outputRange: [1, MARGIN]
	  })

		return (
			<View style={styles.container}>
				<Animated.View style={{width: changeWidth}}>
					<TouchableOpacity style={styles.button}
						onPress={this._onPress}
						activeOpacity={1} >
							{this.state.isLoading ?
								<Image source={spinner} style={styles.image} />
								:
								<Text style={styles.text}>LOGIN</Text>
							}
					</TouchableOpacity>
					<Animated.View style={[ styles.circle, {transform: [{scale: changeScale}]} ]} />
				</Animated.View>
			</View>
		)
	}
}
