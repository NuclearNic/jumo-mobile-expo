import React, { Component, PropTypes } from 'react'
import Dimensions from 'Dimensions'
import { StyleSheet, KeyboardAvoidingView, View, ActivityIndicator, TouchableOpacity, Image } from 'react-native'

import UserInput from './UserInput'
import ButtonSubmit from './ButtonSubmit'
import SignupSection from './SignupSection'

import usernameImg from '../../images/username.png'
import passwordImg from '../../images/password.png'

import styles from '../../styles/loginScreen/Form'

export default class Form extends Component {
	constructor(props) {
    super(props)
    this.state = {
			showPass: true,
			press: false,
		}
		this.showPass = this.showPass.bind(this)
	}

	showPass() {
  this.state.press === false ? this.setState({ showPass: false, press: true }) :this.setState({ showPass: true, press: false })
  }

	render() {
		return (
			<KeyboardAvoidingView behavior='padding'
				style={styles.container}>
				<UserInput source={usernameImg}
					placeholder='Username'
					autoCapitalize={'none'}
					returnKeyType={'done'}
					autoCorrect={false} />
				<UserInput source={passwordImg}
					secureTextEntry={this.state.showPass}
					placeholder='Password'
					returnKeyType={'done'}
					autoCapitalize={'none'}
					autoCorrect={false} />
					<TouchableOpacity
						activeOpacity={0.7}
						style={styles.btnEye}
						onPress={this.showPass}
					>
					</TouchableOpacity>
			</KeyboardAvoidingView>
		)
	}
}
