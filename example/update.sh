#!/bin/bash

rm -rf ./node_modules/react-native-icon-action-sheet/
mkdir ./node_modules/react-native-icon-action-sheet
mkdir ./node_modules/react-native-icon-action-sheet/android
mkdir ./node_modules/react-native-icon-action-sheet/ios
cp -R ../android/* ./node_modules/react-native-icon-action-sheet/android/
cp -R ../ios/* ./node_modules/react-native-icon-action-sheet/ios/
cp ../index.js ./node_modules/react-native-icon-action-sheet/
cp ../RNVectorHelper.js ./node_modules/react-native-icon-action-sheet/
cp ../package.json ./node_modules/react-native-icon-action-sheet/
cp ../react-native-icon-action-sheet.podspec ./node_modules/react-native-icon-action-sheet/