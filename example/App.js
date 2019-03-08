import React, { Component } from 'react';
import { StyleSheet, View, Button } from 'react-native';
import Icon from "react-native-vector-icons";
import IconActionSheet from 'react-native-icon-action-sheet'

const edit = <Icon name={"pencil"} size={24} color={"#737373"} family={"MaterialCommunityIcons"} />;
const share = <Icon name={"share-variant"} size={24} color={"#737373"} family={"MaterialCommunityIcons"} />;
const document = <Icon name={"file-document"} size={24} color={"#737373"} family={"MaterialCommunityIcons"} />;

export default class App extends Component {
	openIconActionSheet() {
		IconActionSheet.showActionSheetWithOptions(
			{
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
						itleTextAlignment: 0
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