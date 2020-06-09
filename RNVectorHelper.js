import EntypoGlyphMap from "react-native-vector-icons/glyphmaps/Entypo.json";
import EvilIconsGlyphMap from "react-native-vector-icons/glyphmaps/EvilIcons.json";
import FeatherGlyphMap from "react-native-vector-icons/glyphmaps/Feather.json";
import FontAwesomeGlyphMap from "react-native-vector-icons/glyphmaps/FontAwesome.json";
import FoundationGlyphMap from "react-native-vector-icons/glyphmaps/Foundation.json";
import IoniconsGlyphMap from "react-native-vector-icons/glyphmaps/Ionicons.json";
import MaterialCommunityIconsGlyphMap from "react-native-vector-icons/glyphmaps/MaterialCommunityIcons.json";
import MaterialIconsGlyphMap from "react-native-vector-icons/glyphmaps/MaterialIcons.json";
import OcticonsGlyphMap from "react-native-vector-icons/glyphmaps/Octicons.json";
import SimpleLineIconsGlyphMap from "react-native-vector-icons/glyphmaps/SimpleLineIcons.json";
import ZocialGlyphMap from "react-native-vector-icons/glyphmaps/Zocial.json";

import { Platform } from "react-native";

class RNVectorHelper {
	static Resolve(family, name) {
		let glyph, fontFamily
		switch (family.toLowerCase()) {
			case "entypo":
				glyph = EntypoGlyphMap[name];
				if (typeof glyph === "number") {
					glyph = String.fromCharCode(glyph);
				}
				fontFamily = "Entypo"
				return { glyph: glyph, family: fontFamily };
			case "evil-icons":
			case "evilicons":
				glyph = EvilIconsGlyphMap[name];
				if (typeof glyph === "number") {
					glyph = String.fromCharCode(glyph);
				}
				fontFamily = "EvilIcons"
				return { glyph: glyph, family: fontFamily };
			case "feather":
				glyph = FeatherGlyphMap[name];
				if (typeof glyph === "number") {
					glyph = String.fromCharCode(glyph);
				}
				fontFamily = "Feather"
				return { glyph: glyph, family: fontFamily };
			case "font-awesome":
			case "fontawesome":
				glyph = FontAwesomeGlyphMap[name];
				if (typeof glyph === "number") {
					glyph = String.fromCharCode(glyph);
				}
				fontFamily = "FontAwesome";
				return { glyph: glyph, family: fontFamily };
			case "foundation":
				glyph = FoundationGlyphMap[name];
				if (typeof glyph === "number") {
					glyph = String.fromCharCode(glyph);
				}
				fontFamily = Platform.OS === "ios" ? "fontcustom" : "Foundation";
				return { glyph: glyph, family: fontFamily };
			case "ionicons":
				glyph = IoniconsGlyphMap[name];
				if (typeof glyph === "number") {
					glyph = String.fromCharCode(glyph);
				}
				fontFamily = "Ionicons"
				return { glyph: glyph, family: fontFamily };
			case "material-community-icons":
			case "materialcommunityicons":
				glyph = MaterialCommunityIconsGlyphMap[name];
				if (typeof glyph === "number") {
					glyph = String.fromCharCode(glyph);
				}
				fontFamily = Platform.OS === "ios" ? "Material Design Icons" : "MaterialCommunityIcons";
				return { glyph: glyph, family: fontFamily };
			case "material-icons":
			case "materialicons":
				glyph = MaterialIconsGlyphMap[name];
				if (typeof glyph === "number") {
					glyph = String.fromCharCode(glyph);
				}
				fontFamily = Platform.OS === "ios" ? "Material Icons" : "MaterialIcons";
				return { glyph: glyph, family: fontFamily };
			case "octicons":
				glyph = OcticonsGlyphMap[name];
				if (typeof glyph === "number") {
					glyph = String.fromCharCode(glyph);
				}
				fontFamily = "Octicons";
				return { glyph: glyph, family: fontFamily };
			case "simple-line-icons":
			case "simplelineicons":
				glyph = SimpleLineIconsGlyphMap[name];
				if (typeof glyph === "number") {
					glyph = String.fromCharCode(glyph);
				}
				fontFamily = Platform.OS === "ios" ? "simple-line-icons" : "SimpleLineIcons";
				return { glyph: glyph, family: fontFamily };
			case "zocial":
				glyph = ZocialGlyphMap[name];
				if (typeof glyph === "number") {
					glyph = String.fromCharCode(glyph);
				}
				fontFamily = Platform.OS === "ios" ? "zocial" : "Zocial";
				return { glyph: glyph, family: fontFamily };
		}
	}
}

export default RNVectorHelper;