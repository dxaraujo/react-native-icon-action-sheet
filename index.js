import { NativeModules, processColor, ActionSheetIOS } from 'react-native';
import resolveAssetSource from 'react-native/Libraries/Image/resolveAssetSource';
import RNVectorHelper from './RNVectorHelper';

const { RNIconActionSheet } = NativeModules;

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
				let icon = undefined;
				let type = undefined;
				if (opt.icon) {
					if (typeof opt.icon === 'string') {
						icon = opt.icon;
						type = 1;
					} else if (typeof opt.icon === 'number') {
						icon = resolveAssetSource(opt.icon);
						type = 2;
					} else if (opt.icon.props) {
						let vectorIcon = RNVectorHelper.Resolve(opt.icon.props.family, opt.icon.props.name);
						icon = Object.assign({}, opt.icon.props, vectorIcon);
						type = 3;
					}
				}
				const titleTextColor = processColor(opt.titleTextColor);
				return { ...opt, icon, titleTextColor, type };
			})
		}
		const tintColor = processColor(options.tintColor)
		RNIconActionSheet.showActionSheetWithOptions({ ...options, tintColor }, callback);
	},

	showShareActionSheetWithOptions(
		options = {},
		failureCallback = () => { },
		successCallback = () => { }
	) {
		ActionSheetIOS.showShareActionSheetWithOptions(options, failureCallback, successCallback);
	}
};

module.exports = IconActionSheet;