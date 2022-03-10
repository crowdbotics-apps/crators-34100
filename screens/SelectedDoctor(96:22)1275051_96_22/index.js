import React from "react"
import {
  View,
  Image,
  ImageBackground,
  TouchableOpacity,
  Text,
  Button,
  Switch,
  TextInput,
  StyleSheet,
  ScrollView
} from "react-native"
import Icon from "react-native-vector-icons/FontAwesome"
import { CheckBox } from "react-native-elements"
import { connect } from "react-redux"
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp
} from "react-native-responsive-screen"
import { getNavigationScreen } from "@screens"
export class Blank extends React.Component {
  constructor(props) {
    super(props)

    this.state = {}
  }
  render = () => (
    <ScrollView
      contentContainerStyle={{ flexGrow: 1 }}
      style={styles.ScrollView_1}
    >
      <View style={styles.View_2} />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/f512/0c74/1f94cf0cbba47a3e2e0ced4b1762a341"
        }}
        style={styles.ImageBackground_96_23}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/5cae/18d3/9322f22ef264f428ae6fe8333cdd4ab1"
        }}
        style={styles.ImageBackground_98_52}
      />
      <View style={styles.View_98_53} />
      <View style={styles.View_105_51} />
      <View style={styles.View_98_54}>
        <Text style={styles.Text_98_54}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam,
          purus sit amet luctus venenatis
        </Text>
      </View>
      <View style={styles.View_105_52}>
        <Text style={styles.Text_105_52}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam,
          purus sit amet luctus venenatis
        </Text>
      </View>
      <View style={styles.View_98_55}>
        <View style={styles.View_98_56}>
          <Text style={styles.Text_98_56}>Schedule</Text>
        </View>
      </View>
      <View style={styles.View_98_63}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/7099/6149/3386b012efee818bb7fc174520c736f7"
          }}
          style={styles.ImageBackground_98_64}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/79a1/4f8e/2473a9a93070449554f6f00765a87a5c"
          }}
          style={styles.ImageBackground_98_65}
        />
      </View>
      <View style={styles.View_98_66}>
        <Text style={styles.Text_98_66}>Dr Jane Doe</Text>
      </View>
      <View style={styles.View_98_67}>
        <Text style={styles.Text_98_67}>Active</Text>
      </View>
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/f035/061d/27292645d81dbc0a9b4a0fc633406eef"
        }}
        style={styles.ImageBackground_98_68}
      />
      <View style={styles.View_98_69}>
        <View style={styles.View_98_80} />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/f3ce/7c1d/afd225c2cf11838c9afaf9396ab997dc"
          }}
          style={styles.ImageBackground_98_72}
        />
        <View style={styles.View_99_81}>
          <Text style={styles.Text_99_81}>Enter your message</Text>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/b4d9/55f7/f84d449b845f77e496b2ff506475831d"
          }}
          style={styles.ImageBackground_98_71}
        />
        <View style={styles.View_99_82}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2bfb/424b/60b73556376bff3af0680469835a2c45"
            }}
            style={styles.ImageBackground_99_83}
          />
        </View>
      </View>
    </ScrollView>
  )
}
const styles = StyleSheet.create({
  ScrollView_1: { backgroundColor: "rgba(255, 255, 255, 1)" },
  View_2: { height: hp("111%") },
  ImageBackground_96_23: {
    width: wp("6%"),
    height: hp("3%"),
    top: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7%")
  },
  ImageBackground_98_52: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("0%"),
    minHeight: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("11%")
  },
  View_98_53: {
    width: wp("63%"),
    minWidth: wp("63%"),
    height: hp("20%"),
    minHeight: hp("20%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9%"),
    top: hp("38%"),
    backgroundColor: "rgba(246, 250, 242, 1)",
    borderColor: "rgba(48, 157, 143, 1)",
    borderWidth: 1,
    borderTopLeftRadius: 0,
    borderTopRightRadius: 30,
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30
  },
  View_105_51: {
    width: wp("63%"),
    minWidth: wp("63%"),
    height: hp("20%"),
    minHeight: hp("20%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("28%"),
    top: hp("61%"),
    backgroundColor: "rgba(255, 197, 35, 1)",
    opacity: 0.20000000298023224,
    borderColor: "rgba(48, 157, 143, 1)",
    borderWidth: 1,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 0,
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30
  },
  View_98_54: {
    width: wp("46%"),
    minWidth: wp("46%"),
    minHeight: hp("13%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("15%"),
    top: hp("41%"),
    justifyContent: "flex-start"
  },
  Text_98_54: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 9.532258033752441,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_105_52: {
    width: wp("46%"),
    minWidth: wp("46%"),
    minHeight: hp("13%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("34%"),
    top: hp("64%"),
    justifyContent: "flex-start"
  },
  Text_105_52: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 9.532258033752441,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_98_55: {
    width: wp("85%"),
    height: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6%"),
    top: hp("89%"),
    backgroundColor: "rgba(34, 150, 135, 1)"
  },
  View_98_56: {
    width: wp("26%"),
    minWidth: wp("26%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("30%"),
    top: hp("1%"),
    justifyContent: "flex-start"
  },
  Text_98_56: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 16,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_98_63: {
    width: wp("9%"),
    minWidth: wp("9%"),
    height: hp("5%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("17%"),
    top: hp("4%")
  },
  ImageBackground_98_64: {
    width: wp("9%"),
    minWidth: wp("9%"),
    height: hp("5%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_98_65: {
    width: wp("9%"),
    minWidth: wp("9%"),
    height: hp("5%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_98_66: {
    width: wp("28%"),
    minWidth: wp("28%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("27%"),
    top: hp("4%"),
    justifyContent: "flex-start"
  },
  Text_98_66: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 14.083333969116211,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_98_67: {
    width: wp("9%"),
    minWidth: wp("9%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("30%"),
    top: hp("7%"),
    justifyContent: "flex-start"
  },
  Text_98_67: {
    color: "rgba(143, 140, 140, 1)",
    fontSize: 9.38888931274414,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_98_68: {
    width: wp("2%"),
    minWidth: wp("2%"),
    height: hp("1%"),
    minHeight: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("28%"),
    top: hp("8%")
  },
  View_98_69: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("14%"),
    minHeight: hp("14%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("97%"),
    backgroundColor: "rgba(246, 250, 242, 1)",
    overflow: "hidden"
  },
  View_98_80: {
    width: wp("70%"),
    height: hp("7%"),
    top: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("21%"),
    backgroundColor: "rgba(48, 157, 143, 1)",
    opacity: 0.20000000298023224
  },
  ImageBackground_98_72: {
    width: wp("8%"),
    height: hp("3%"),
    top: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6%")
  },
  View_99_81: {
    width: wp("40%"),
    top: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("27%"),
    justifyContent: "flex-start"
  },
  Text_99_81: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 12,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_98_71: {
    width: wp("2%"),
    height: hp("1%"),
    top: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("10%")
  },
  View_99_82: {
    width: wp("8%"),
    height: hp("4%"),
    top: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("77%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  ImageBackground_99_83: {
    width: wp("8%"),
    height: hp("4%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  }
})
const mapStateToProps = state => {
  return {}
}
const mapDispatchToProps = () => {
  return {}
}
export default connect(mapStateToProps, mapDispatchToProps)(Blank)
