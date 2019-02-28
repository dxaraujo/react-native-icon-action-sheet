# react-native-icon-action-sheet

> This is custom ActionSheetIOS, whith a possibility to add icons, change menu itens colors and text alignment

[![NPM](https://img.shields.io/npm/v/react-native-icon-action-sheet.svg)](https://www.npmjs.com/package/react-native-icon-action-sheet) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

<img src="https://raw.githubusercontent.com/danielxaraujo/react-native-icon-action-sheet/master/assets/2019-02-28%2017.32.22.gif" width="30%" height="30%">

## Getting started

```bash
npm install react-native-icon-action-sheet --save
```

or

```bash
yarn add react-native-icon-action-sheet
```

## Dependencies

```bash
npm install react-native-vector-icons --save
```

or

```bash
yarn add react-native-vector-icons
```


### Mostly automatic installation

```bash
react-native link react-native-icon-action-sheet

react-native link react-native-vector-icons
```

### Manual installation

#### iOS

1. In XCode, in the project navigator, right click `Libraries` ➜ `Add Files to [your project's name]`
2. Go to `node_modules` ➜ `react-native-icon-action-sheet` and add `RNIconActionSheet.xcodeproj`
3. In XCode, in the project navigator, select your project. Add `libRNIconActionSheet.a` to your project's `Build Phases` ➜ `Link Binary With Libraries`
4. Run your project (`Cmd+R`)<

#### Android

1. Open up `android/app/src/main/java/[...]/MainActivity.java`
  - Add `import br.com.dx.RNIconActionSheetPackage;` to the imports at the top of the file
  - Add `new RNIconActionSheetPackage()` to the list returned by the `getPackages()` method
2. Append the following lines to `android/settings.gradle`:
  	```
  	include ':react-native-icon-action-sheet'
  	project(':react-native-icon-action-sheet').projectDir = new File(rootProject.projectDir, 	'../node_modules/react-native-icon-action-sheet/android')
  	```
3. Insert the following lines inside the dependencies block in `android/app/build.gradle`:
  	```
      compile project(':react-native-icon-action-sheet')
  	```


## Usage

```jsx
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
```

## License

MIT© [danielxaraujo](https://github.com/danielxaraujo)