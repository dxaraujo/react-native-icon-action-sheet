import { NativeModules, processColor } from 'react-native';
import resolveAssetSource from 'react-native/Libraries/Image/resolveAssetSource';

const RNIconActionSheet = NativeModules.RNIconActionSheet;
const RCTActionSheetManager = NativeModules.ActionSheetManager;

/**
 * Display action sheets and share sheets on iOS.
 */
const IconActionSheet = {

	showActionSheetWithOptions(
		options = {
			title: undefined,
			message: undefined,
			options: [],
			destructiveButtonIndex: undefined,
			cancelButtonIndex: undefined,
			anchor: undefined,
			tintColor: undefined
		},
		callback = () => { }
	) {
		if (options.options) {
			options.options = options.options.map(opt => {
				return { ...opt, icon: opt.icon ? resolveAssetSource(opt.icon) : opt.icon, titleTextColor: processColor(opt.titleTextColor) }
			})
		}
		RNIconActionSheet.showActionSheetWithOptions({ ...options, tintColor: processColor(options.tintColor) }, callback);
	},

	showShareActionSheetWithOptions(
		options = {},
		failureCallback = () => { },
		successCallback = () => { }
	) {
		RCTActionSheetManager.showShareActionSheetWithOptions({ ...options, tintColor: processColor(options.tintColor) }, failureCallback, successCallback);
	},
};

module.exports = IconActionSheet;