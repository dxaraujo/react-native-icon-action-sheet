import React, { Component } from 'react';
import { StyleSheet, View, Button } from 'react-native';
import Icon from "react-native-vector-icons";
import IconActionSheet from 'react-native-icon-action-sheet'

const settings = require('./assets/icons/32/settings.png')
const whatsapp = <Icon name={"whatsapp"} size={32} family={"FontAwesome"} />;

export default class App extends Component {
	openIconActionSheet() {
		IconActionSheet.showActionSheetWithOptions(
			{
				cancelButtonIndex: 3,
				tintColor: '#007aff',
				options: [
					{
						title: 'User',
						icon: 'user',
						titleTextAlignment: 0,
						titleTextColor: 'red'
					},
					{
						title: 'Whatsapp',
						icon: whatsapp,
						titleTextAlignment: 0,
						titleTextColor: '#fc6c85'
					},
					{
						title: 'Settings',
						icon: settings,
						titleTextAlignment: 0
					},
					{
						title: 'Cancel'
					}
				]
			}, (buttonIndex) => console.log('Chegou Aqui', buttonIndex))
	}
	render() {
		return (
			<View style={styles.container}>
				<Button title='Call IconActionSheet' onPress={() => this.openIconActionSheet()} />
			</View>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: 'white',
	}
});