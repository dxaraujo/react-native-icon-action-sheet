import { NativeModules, processColor } from 'react-native';
import resolveAssetSource from 'react-native/Libraries/Image/resolveAssetSource';
import RNVectorHelper from './RNVectorHelper';

const { RNIconActionSheet } = NativeModules;

/**
 * Display action sheets on IOS and ANDROID.
 */
const IconActionSheet = {

	showActionSheetWithOptions(
		props = {
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
		if (props.options) {
			props.options = props.options.map(opt => {
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
		const tintColor = processColor(props.tintColor)
		RNIconActionSheet.showActionSheetWithOptions({ ...props, tintColor }, callback);
	}
};

module.exports = IconActionSheet;