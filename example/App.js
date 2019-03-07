import React, { Component } from 'react';
import { StyleSheet, View, Button } from 'react-native';
import Icon from "react-native-vector-icons";
import IconActionSheet from 'react-native-icon-action-sheet'

const user = <Icon name={"people"} size={32} color={'gray'} family={"FontAwesome"} />;
const settings = <Icon name={"cog"} size={32} color={'gray'} family={"FontAwesome"} />;
const whatsapp = <Icon name={"whatsapp"} size={32} color={'gray'} family={"FontAwesome"} />;

export default class App extends Component {
	openIconActionSheet() {
		IconActionSheet.showActionSheetWithOptions(
			{
				title: 'Test',
				cancelButtonIndex: 3,
				tintColor: '#007aff',
				options: [
					{
						title: 'User',
						icon: user,
						titleTextAlignment: 0,
						titleTextColor: '#fc6c85'
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