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
      <View style={styles.View_12_895} />
      <View style={styles.View_12_896}>
        <View style={styles.View_12_897}>
          <Text style={styles.Text_12_897}>Total</Text>
        </View>
        <View style={styles.View_12_898}>
          <Text style={styles.Text_12_898}>N20000</Text>
        </View>
      </View>
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/f512/0c74/1f94cf0cbba47a3e2e0ced4b1762a341"
        }}
        style={styles.ImageBackground_12_899}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/37c2/0c1f/bf22876c289617df10542aefcb33e158"
        }}
        style={styles.ImageBackground_12_900}
      />
      <View style={styles.View_12_901}>
        <Text style={styles.Text_12_901}>Enter OTP sent to 234824******3</Text>
      </View>
      <View style={styles.View_12_902}>
        <Text style={styles.Text_12_902}>Resend OTP</Text>
      </View>
      <View style={styles.View_12_903}>
        <Text style={styles.Text_12_903}>Verification Code</Text>
      </View>
      <View style={styles.View_12_904}>
        <View style={styles.View_12_905} />
        <View style={styles.View_12_906} />
        <View style={styles.View_12_907} />
        <View style={styles.View_12_908} />
        <View style={styles.View_12_909}>
          <Text style={styles.Text_12_909}>8</Text>
        </View>
        <View style={styles.View_12_910}>
          <Text style={styles.Text_12_910}>3</Text>
        </View>
      </View>
      <View style={styles.View_12_911}>
        <View style={styles.View_12_912}>
          <Text style={styles.Text_12_912}>7</Text>
        </View>
        <View style={styles.View_12_913}>
          <Text style={styles.Text_12_913}>8</Text>
        </View>
        <View style={styles.View_12_914}>
          <Text style={styles.Text_12_914}>9</Text>
        </View>
      </View>
      <View style={styles.View_12_915}>
        <View style={styles.View_12_916}>
          <Text style={styles.Text_12_916}>4</Text>
        </View>
        <View style={styles.View_12_917}>
          <Text style={styles.Text_12_917}>5</Text>
        </View>
        <View style={styles.View_12_918}>
          <Text style={styles.Text_12_918}>6</Text>
        </View>
      </View>
      <View style={styles.View_12_919}>
        <View style={styles.View_12_920}>
          <Text style={styles.Text_12_920}>1</Text>
        </View>
        <View style={styles.View_12_921}>
          <Text style={styles.Text_12_921}>2</Text>
        </View>
        <View style={styles.View_12_922}>
          <Text style={styles.Text_12_922}>3</Text>
        </View>
      </View>
      <View style={styles.View_12_923}>
        <View style={styles.View_12_924}>
          <Text style={styles.Text_12_924}>0</Text>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/b551/bb3a/ac64d416ad687a98a23dcbbe2dc2f61f"
          }}
          style={styles.ImageBackground_12_925}
        />
      </View>
      <View style={styles.View_12_929} />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/875b/fcf2/7b7438c2d1635ead32b5724109f95801"
        }}
        style={styles.ImageBackground_12_930}
      />
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: { backgroundColor: "rgba(252, 252, 252, 1)" },
  View_2: { height: hp("111%") },
  View_12_895: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("90%"),
    minHeight: hp("90%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("21%"),
    backgroundColor: "rgba(48, 157, 143, 1)",
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0
  },
  View_12_896: {
    width: wp("29%"),
    minWidth: wp("29%"),
    height: hp("9%"),
    minHeight: hp("9%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7%"),
    top: hp("11%")
  },
  View_12_897: {
    width: wp("15%"),
    minWidth: wp("15%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_12_897: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 17.574256896972656,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_12_898: {
    width: wp("28%"),
    minWidth: wp("28%"),
    minHeight: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("4%"),
    justifyContent: "flex-start"
  },
  Text_12_898: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 22.089109420776367,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_12_899: {
    width: wp("6%"),
    height: hp("3%"),
    top: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7%")
  },
  ImageBackground_12_900: {
    width: wp("28%"),
    height: hp("14%"),
    top: hp("33%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("36%")
  },
  View_12_901: {
    width: wp("69%"),
    minWidth: wp("69%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("16%"),
    top: hp("57%"),
    justifyContent: "flex-start"
  },
  Text_12_901: {
    color: "rgba(242, 242, 242, 1)",
    fontSize: 13,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_12_902: {
    width: wp("26%"),
    minWidth: wp("26%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("63%"),
    top: hp("71%"),
    justifyContent: "flex-start"
  },
  Text_12_902: {
    color: "rgba(242, 242, 242, 1)",
    fontSize: 13,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_12_903: {
    width: wp("48%"),
    minWidth: wp("48%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8%"),
    top: hp("24%"),
    justifyContent: "flex-start"
  },
  Text_12_903: {
    color: "rgba(242, 242, 242, 1)",
    fontSize: 16,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_12_904: {
    width: wp("78%"),
    minWidth: wp("78%"),
    height: hp("7%"),
    minHeight: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("11%"),
    top: hp("63%")
  },
  View_12_905: {
    width: wp("13%"),
    minWidth: wp("13%"),
    height: hp("7%"),
    minHeight: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(242, 242, 242, 1)"
  },
  View_12_906: {
    width: wp("13%"),
    minWidth: wp("13%"),
    height: hp("7%"),
    minHeight: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("22%"),
    top: hp("0%"),
    backgroundColor: "rgba(242, 242, 242, 1)"
  },
  View_12_907: {
    width: wp("13%"),
    minWidth: wp("13%"),
    height: hp("7%"),
    minHeight: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("43%"),
    top: hp("0%"),
    backgroundColor: "rgba(163, 232, 223, 1)"
  },
  View_12_908: {
    width: wp("13%"),
    minWidth: wp("13%"),
    height: hp("7%"),
    minHeight: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("65%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_12_909: {
    width: wp("5%"),
    minWidth: wp("5%"),
    minHeight: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    top: hp("1%"),
    justifyContent: "flex-start"
  },
  Text_12_909: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 22,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_12_910: {
    width: wp("5%"),
    minWidth: wp("5%"),
    minHeight: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("26%"),
    top: hp("1%"),
    justifyContent: "flex-start"
  },
  Text_12_910: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 22,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_12_911: {
    width: wp("66%"),
    minWidth: wp("66%"),
    height: hp("6%"),
    minHeight: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("17%"),
    top: hp("75%")
  },
  View_12_912: {
    width: wp("4%"),
    minWidth: wp("4%"),
    minHeight: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_12_912: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 22,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_12_913: {
    width: wp("5%"),
    minWidth: wp("5%"),
    minHeight: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("31%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_12_913: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 22,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_12_914: {
    width: wp("5%"),
    minWidth: wp("5%"),
    minHeight: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("62%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_12_914: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 22,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_12_915: {
    width: wp("66%"),
    minWidth: wp("66%"),
    height: hp("6%"),
    minHeight: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("17%"),
    top: hp("83%")
  },
  View_12_916: {
    width: wp("4%"),
    minWidth: wp("4%"),
    minHeight: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_12_916: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 22,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_12_917: {
    width: wp("4%"),
    minWidth: wp("4%"),
    minHeight: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("31%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_12_917: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 22,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_12_918: {
    width: wp("4%"),
    minWidth: wp("4%"),
    minHeight: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("62%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_12_918: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 22,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_12_919: {
    width: wp("66%"),
    minWidth: wp("66%"),
    height: hp("6%"),
    minHeight: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("17%"),
    top: hp("91%")
  },
  View_12_920: {
    width: wp("4%"),
    minWidth: wp("4%"),
    minHeight: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_12_920: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 22,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_12_921: {
    width: wp("4%"),
    minWidth: wp("4%"),
    minHeight: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("31%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_12_921: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 22,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_12_922: {
    width: wp("4%"),
    minWidth: wp("4%"),
    minHeight: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("62%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_12_922: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 22,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_12_923: {
    width: wp("36%"),
    minWidth: wp("36%"),
    height: hp("6%"),
    minHeight: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("47%"),
    top: hp("99%")
  },
  View_12_924: {
    width: wp("4%"),
    minWidth: wp("4%"),
    minHeight: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_12_924: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 22,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_12_925: {
    width: wp("6%"),
    height: hp("2%"),
    top: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("30%")
  },
  View_12_929: {
    width: wp("20%"),
    minWidth: wp("20%"),
    height: hp("0%"),
    minHeight: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("41%"),
    top: hp("51%"),
    backgroundColor: "rgba(34, 34, 34, 1)",
    opacity: 0.5
  },
  ImageBackground_12_930: {
    width: wp("58%"),
    minWidth: wp("58%"),
    height: hp("14%"),
    minHeight: hp("14%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("19%"),
    top: hp("30%")
  }
})

const mapStateToProps = state => {
  return {}
}
const mapDispatchToProps = () => {
  return {}
}
export default connect(mapStateToProps, mapDispatchToProps)(Blank)
