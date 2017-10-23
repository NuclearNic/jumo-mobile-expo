import React, { Component, PropTypes } from 'react'
import Logo from '../components/JumoLogo'
import Wallpaper from '../components/Wallpaper'
import Form from '../components/loginScreen/Form'
import ButtonSubmit from '../components/loginScreen/ButtonSubmit'
import SignupSection from '../components/loginScreen/SignupSection'

export default class LoginScreen extends Component {
	render() {
		return (
			<Wallpaper>
				<Logo />
				<Form />
				<SignupSection/>
				<ButtonSubmit/>
			</Wallpaper>
		)
	}
}
