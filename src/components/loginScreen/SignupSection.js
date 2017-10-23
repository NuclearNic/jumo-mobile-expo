import React, { Component, PropTypes } from 'react'
import Dimensions from 'Dimensions'
import { StyleSheet, View, Text } from 'react-native'

import styles from '../../styles/loginScreen/SignupSection'

export default class SignupSection extends Component {
	render() {
		return (
			<View style={styles.container}>
				<Text style={styles.text}>Create Account</Text>
				<Text style={styles.text}>Forgot Password?</Text>
			</View>
		)
	}
}
