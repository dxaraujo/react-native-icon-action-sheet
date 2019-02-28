# react-native-icon-action-sheet

![react-native-icon-action-sheet](https://raw.githubusercontent.com/danielxaraujo/react-native-icon-action-sheet/master/assets/2019-02-28%2017.32.22.gif)

## Getting started

`$ npm install react-native-icon-action-sheet --save`

### Mostly automatic installation

`$ react-native link react-native-icon-action-sheet`

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
```javascript
import RNIconActionSheet from 'react-native-icon-action-sheet';

// TODO: What to do with the module?
RNIconActionSheet;
```
