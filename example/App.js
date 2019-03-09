import React, { Component } from 'react';
import { StyleSheet, View, Button, Platform } from 'react-native';
import Icon from "react-native-vector-icons";
import IconActionSheet from 'react-native-icon-action-sheet'

const size = Platform.OS == 'ios' ? 30 : 24
const edit = <Icon name={"create"} size={size} color={"#000000"} family={"MaterialIcons"} />;
const share = <Icon name={"share"} size={size} color={"#000000"} family={"MaterialIcons"} />;
const document = <Icon name={"link"} size={size} color={"#000000"} family={"MaterialIcons"} />;

export default class App extends Component {
	openIconActionSheet() {
		IconActionSheet.showActionSheetWithOptions(
			{
				title: 'Options',
				cancelButtonIndex: 3,
				options: [
					{
						title: 'Edit',
						icon: edit,
						titleTextAlignment: 0
					},
					{
						title: 'Share',
						icon: share,
						titleTextAlignment: 0
					},
					{
						title: 'Document',
						icon: document,
						titleTextAlignment: 0
					},
					{
						title: 'Cancel'
					}
				]
			}, (buttonIndex) => console.log('Chegou Aqui', buttonIndex)
		)
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