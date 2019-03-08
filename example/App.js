import React, { Component } from 'react';
import { StyleSheet, View, Button } from 'react-native';
import Icon from "react-native-vector-icons";
import IconActionSheet from 'react-native-icon-action-sheet'

const user = <Icon name={"md-person"} size={24} color={"#737373"} family={"Ionicons"} />;
const bookmark = <Icon name={"md-bookmark"} size={24} color={"#737373"} family={"Ionicons"} />;
const settings = <Icon name={"md-cog"} size={24} color={"#737373"} family={"Ionicons"} />;

export default class App extends Component {
	openIconActionSheet() {
		IconActionSheet.showActionSheetWithOptions(
			{
				tintColor: '#007aff',
				options: [
					{
						title: 'User',
						icon: user,
						titleTextAlignment: 0,
						titleTextColor: '#fc6c85'
					},
					{
						title: 'Bookmark',
						icon: bookmark,
						titleTextAlignment: 0,
						titleTextColor: '#fc6c85'
					},
					{
						title: 'Settings',
						icon: settings,
						titleTextAlignment: 0
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