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
        style={styles.ImageBackground_86_3}
      />
      <View style={styles.View_86_17} />
      <View style={styles.View_86_25}>
        <Text style={styles.Text_86_25}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam,
          purus sit amet luctus venenatis Lorem ipsum dolor sit amet,
          consectetur adipiscing elit ut aliquam, purus sit amet luctus
          venenatis
        </Text>
      </View>
      <View style={styles.View_87_33}>
        <Text style={styles.Text_87_33}>Dr. Jane Doe</Text>
      </View>
      <View style={styles.View_87_35}>
        <Text style={styles.Text_87_35}>Overview</Text>
      </View>
      <View style={styles.View_87_36}>
        <Text style={styles.Text_87_36}>Schedule</Text>
      </View>
      <View style={styles.View_87_34} />
      <View style={styles.View_92_2}>
        <Text style={styles.Text_92_2}>Dentist</Text>
      </View>
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/8932/d152/3f8f5ffade2175e0c297d73626480287"
        }}
        style={styles.ImageBackground_96_16}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/8932/d152/3f8f5ffade2175e0c297d73626480287"
        }}
        style={styles.ImageBackground_96_17}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/8932/d152/3f8f5ffade2175e0c297d73626480287"
        }}
        style={styles.ImageBackground_96_18}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/8932/d152/3f8f5ffade2175e0c297d73626480287"
        }}
        style={styles.ImageBackground_96_19}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/8932/d152/3f8f5ffade2175e0c297d73626480287"
        }}
        style={styles.ImageBackground_96_20}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/95b5/7177/865855e45d52f34851a7d5937f74b697"
        }}
        style={styles.ImageBackground_96_21}
      />
      <View style={styles.View_199_82}>
        <View style={styles.View_199_83} />
        <View style={styles.View_199_84}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3852/5c12/f4e3399824eb1f2c66cdfd2286b03ff6"
            }}
            style={styles.ImageBackground_199_85}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/4ba2/fcd7/090f903dfe3c62a05021cd4473f07a95"
            }}
            style={styles.ImageBackground_199_86}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/efd8/83ea/2558350c6acbd3b52d51fa2b8f9aa266"
            }}
            style={styles.ImageBackground_199_90}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/4d11/da03/597a7a8251a9f1b237b09ed132dc1a72"
            }}
            style={styles.ImageBackground_199_91}
          />
        </View>
      </View>
    </ScrollView>
  )
}
const styles = StyleSheet.create({
  ScrollView_1: { backgroundColor: "rgba(252, 252, 252, 1)" },
  View_2: { height: hp("111%") },
  ImageBackground_86_3: {
    width: wp("6%"),
    height: hp("3%"),
    top: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7%")
  },
  View_86_17: {
    width: wp("107%"),
    minWidth: wp("107%"),
    height: hp("62%"),
    minHeight: hp("62%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("24%"),
    top: hp("-14%"),
    backgroundColor: "rgba(246, 250, 242, 1)"
  },
  View_86_25: {
    width: wp("83%"),
    minWidth: wp("83%"),
    minHeight: hp("19%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6%"),
    top: hp("69%"),
    justifyContent: "flex-start"
  },
  Text_86_25: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 12,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_87_33: {
    width: wp("59%"),
    minWidth: wp("59%"),
    minHeight: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6%"),
    top: hp("52%"),
    justifyContent: "flex-start"
  },
  Text_87_33: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 28,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_87_35: {
    width: wp("8%"),
    minWidth: wp("8%"),
    minHeight: hp("13%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9%"),
    top: hp("31%"),
    justifyContent: "flex-start"
  },
  Text_87_35: {
    color: "rgba(48, 157, 143, 1)",
    fontSize: 16,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_87_36: {
    width: wp("8%"),
    minWidth: wp("8%"),
    minHeight: hp("13%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9%"),
    top: hp("14%"),
    justifyContent: "flex-start"
  },
  Text_87_36: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 16,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_87_34: {
    width: wp("28%"),
    minWidth: wp("28%"),
    height: hp("4%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6%"),
    top: hp("61%"),
    borderColor: "rgba(0, 0, 0, 1)",
    borderWidth: 0.8479999899864197
  },
  View_92_2: {
    width: wp("16%"),
    minWidth: wp("16%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("12%"),
    top: hp("61%"),
    justifyContent: "flex-start"
  },
  Text_92_2: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 13.959999084472656,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_96_16: {
    width: wp("5%"),
    height: hp("3%"),
    top: hp("90%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("66%")
  },
  ImageBackground_96_17: {
    width: wp("5%"),
    height: hp("3%"),
    top: hp("90%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("69%")
  },
  ImageBackground_96_18: {
    width: wp("5%"),
    height: hp("3%"),
    top: hp("90%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("73%")
  },
  ImageBackground_96_19: {
    width: wp("5%"),
    height: hp("3%"),
    top: hp("90%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("77%")
  },
  ImageBackground_96_20: {
    width: wp("5%"),
    height: hp("3%"),
    top: hp("90%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("81%")
  },
  ImageBackground_96_21: {
    width: wp("65%"),
    minWidth: wp("65%"),
    height: hp("48%"),
    minHeight: hp("48%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("34%"),
    top: hp("1%"),
    resizeMode: "cover"
  },
  View_199_82: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("8%"),
    minHeight: hp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("103%")
  },
  View_199_83: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("8%"),
    minHeight: hp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_199_84: {
    width: wp("83%"),
    minWidth: wp("83%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8%"),
    top: hp("3%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_199_85: {
    width: wp("5%"),
    height: hp("3%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_199_86: {
    width: wp("5%"),
    height: hp("3%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("26%")
  },
  ImageBackground_199_90: {
    width: wp("5%"),
    height: hp("3%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("52%")
  },
  ImageBackground_199_91: {
    width: wp("5%"),
    height: hp("3%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("78%")
  }
})

const mapStateToProps = state => {
  return {}
}
const mapDispatchToProps = () => {
  return {}
}
export default connect(mapStateToProps, mapDispatchToProps)(Blank)
