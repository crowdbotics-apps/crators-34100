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
      <View style={styles.View_155_11}>
        <Text style={styles.Text_155_11}>Invoice</Text>
      </View>
      <View style={styles.View_155_13}>
        <Text style={styles.Text_155_13}>July 4, 2021</Text>
      </View>
      <View style={styles.View_155_14}>
        <Text style={styles.Text_155_14}>#3098U3</Text>
      </View>
      <View style={styles.View_155_12}>
        <Text style={styles.Text_155_12}>Date:</Text>
      </View>
      <View style={styles.View_155_15}>
        <Text style={styles.Text_155_15}>ID:</Text>
      </View>
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/d37f/6b6d/a56f94b86e78fd372e0e3cb59b1d31ba"
        }}
        style={styles.ImageBackground_155_17}
      />
      <View style={styles.View_155_18}>
        <Text style={styles.Text_155_18}>Ibrahim Moh..</Text>
      </View>
      <View style={styles.View_155_20}>
        <Text style={styles.Text_155_20}>Opeyemi Pharm</Text>
      </View>
      <View style={styles.View_155_22}>
        <Text style={styles.Text_155_22}>Pay to:</Text>
      </View>
      <View style={styles.View_155_19}>
        <Text style={styles.Text_155_19}>No 13, sjsdakmsjj ashkadsdhaksu</Text>
      </View>
      <View style={styles.View_155_21}>
        <Text style={styles.Text_155_21}>No 13, sjsdakmsjj ashkadsdhaksu</Text>
      </View>
      <View style={styles.View_155_23}>
        <Text style={styles.Text_155_23}>Description</Text>
      </View>
      <View style={styles.View_155_24}>
        <Text style={styles.Text_155_24}>Quantity</Text>
      </View>
      <View style={styles.View_155_25}>
        <Text style={styles.Text_155_25}>Rate</Text>
      </View>
      <View style={styles.View_155_26}>
        <Text style={styles.Text_155_26}>Subtotal</Text>
      </View>
      <View style={styles.View_155_27}>
        <Text style={styles.Text_155_27}>Item 1</Text>
      </View>
      <View style={styles.View_155_36}>
        <Text style={styles.Text_155_36}>Item 1</Text>
      </View>
      <View style={styles.View_155_44}>
        <Text style={styles.Text_155_44}>Item 1</Text>
      </View>
      <View style={styles.View_155_52}>
        <Text style={styles.Text_155_52}>Item 1</Text>
      </View>
      <View style={styles.View_155_60}>
        <Text style={styles.Text_155_60}>Item 1</Text>
      </View>
      <View style={styles.View_155_31}>
        <Text style={styles.Text_155_31}>Item 1</Text>
      </View>
      <View style={styles.View_155_37}>
        <Text style={styles.Text_155_37}>Item 1</Text>
      </View>
      <View style={styles.View_155_45}>
        <Text style={styles.Text_155_45}>Item 1</Text>
      </View>
      <View style={styles.View_155_53}>
        <Text style={styles.Text_155_53}>Item 1</Text>
      </View>
      <View style={styles.View_155_61}>
        <Text style={styles.Text_155_61}>Item 1</Text>
      </View>
      <View style={styles.View_155_28}>
        <Text style={styles.Text_155_28}>3</Text>
      </View>
      <View style={styles.View_155_38}>
        <Text style={styles.Text_155_38}>3</Text>
      </View>
      <View style={styles.View_155_46}>
        <Text style={styles.Text_155_46}>3</Text>
      </View>
      <View style={styles.View_155_54}>
        <Text style={styles.Text_155_54}>3</Text>
      </View>
      <View style={styles.View_155_62}>
        <Text style={styles.Text_155_62}>3</Text>
      </View>
      <View style={styles.View_155_32}>
        <Text style={styles.Text_155_32}>3</Text>
      </View>
      <View style={styles.View_155_39}>
        <Text style={styles.Text_155_39}>3</Text>
      </View>
      <View style={styles.View_155_47}>
        <Text style={styles.Text_155_47}>3</Text>
      </View>
      <View style={styles.View_155_55}>
        <Text style={styles.Text_155_55}>3</Text>
      </View>
      <View style={styles.View_155_63}>
        <Text style={styles.Text_155_63}>3</Text>
      </View>
      <View style={styles.View_155_29}>
        <Text style={styles.Text_155_29}>N700</Text>
      </View>
      <View style={styles.View_155_40}>
        <Text style={styles.Text_155_40}>N700</Text>
      </View>
      <View style={styles.View_155_48}>
        <Text style={styles.Text_155_48}>N700</Text>
      </View>
      <View style={styles.View_155_56}>
        <Text style={styles.Text_155_56}>N700</Text>
      </View>
      <View style={styles.View_155_64}>
        <Text style={styles.Text_155_64}>N700</Text>
      </View>
      <View style={styles.View_155_33}>
        <Text style={styles.Text_155_33}>N700</Text>
      </View>
      <View style={styles.View_155_41}>
        <Text style={styles.Text_155_41}>N700</Text>
      </View>
      <View style={styles.View_155_49}>
        <Text style={styles.Text_155_49}>N700</Text>
      </View>
      <View style={styles.View_155_57}>
        <Text style={styles.Text_155_57}>N700</Text>
      </View>
      <View style={styles.View_155_65}>
        <Text style={styles.Text_155_65}>N700</Text>
      </View>
      <View style={styles.View_155_30}>
        <Text style={styles.Text_155_30}>N2100</Text>
      </View>
      <View style={styles.View_155_42}>
        <Text style={styles.Text_155_42}>N2100</Text>
      </View>
      <View style={styles.View_155_50}>
        <Text style={styles.Text_155_50}>N2100</Text>
      </View>
      <View style={styles.View_155_58}>
        <Text style={styles.Text_155_58}>N2100</Text>
      </View>
      <View style={styles.View_155_66}>
        <Text style={styles.Text_155_66}>N2100</Text>
      </View>
      <View style={styles.View_155_34}>
        <Text style={styles.Text_155_34}>N2100</Text>
      </View>
      <View style={styles.View_155_43}>
        <Text style={styles.Text_155_43}>N2100</Text>
      </View>
      <View style={styles.View_155_51}>
        <Text style={styles.Text_155_51}>N2100</Text>
      </View>
      <View style={styles.View_155_59}>
        <Text style={styles.Text_155_59}>N2100</Text>
      </View>
      <View style={styles.View_155_67}>
        <Text style={styles.Text_155_67}>N2100</Text>
      </View>
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/6d10/2d64/099207ff0cc0b9e103f795be3be8d519"
        }}
        style={styles.ImageBackground_155_35}
      />
      <View style={styles.View_155_68} />
      <View style={styles.View_156_71}>
        <Text style={styles.Text_156_71}>Totals</Text>
      </View>
      <View style={styles.View_157_72}>
        <Text style={styles.Text_157_72}>Subtotal:</Text>
      </View>
      <View style={styles.View_157_74}>
        <Text style={styles.Text_157_74}>Tax:</Text>
      </View>
      <View style={styles.View_157_76}>
        <Text style={styles.Text_157_76}>Total:</Text>
      </View>
      <View style={styles.View_157_73}>
        <Text style={styles.Text_157_73}>N4000.00</Text>
      </View>
      <View style={styles.View_157_75}>
        <Text style={styles.Text_157_75}>N40.00</Text>
      </View>
      <View style={styles.View_157_77}>
        <Text style={styles.Text_157_77}>N4040.00</Text>
      </View>
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2c38/3f5c/632aed046190aa78d48e65f7ee86856b"
        }}
        style={styles.ImageBackground_156_69}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2c38/3f5c/632aed046190aa78d48e65f7ee86856b"
        }}
        style={styles.ImageBackground_156_70}
      />
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: { backgroundColor: "rgba(255, 255, 255, 1)" },
  View_2: { height: hp("154%") },
  View_155_11: {
    width: wp("27%"),
    minWidth: wp("27%"),
    minHeight: hp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7%"),
    top: hp("7%"),
    justifyContent: "flex-start"
  },
  Text_155_11: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 32,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_155_13: {
    width: wp("16%"),
    minWidth: wp("16%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("16%"),
    top: hp("14%"),
    justifyContent: "flex-start"
  },
  Text_155_13: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 12.491329193115234,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_155_14: {
    width: wp("13%"),
    minWidth: wp("13%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("14%"),
    top: hp("18%"),
    justifyContent: "flex-start"
  },
  Text_155_14: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 12.491329193115234,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_155_12: {
    width: wp("8%"),
    minWidth: wp("8%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7%"),
    top: hp("14%"),
    justifyContent: "flex-start"
  },
  Text_155_12: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 12.491329193115234,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_155_15: {
    width: wp("8%"),
    minWidth: wp("8%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7%"),
    top: hp("17%"),
    justifyContent: "flex-start"
  },
  Text_155_15: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 16,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_155_17: {
    width: wp("13%"),
    minWidth: wp("13%"),
    height: hp("8%"),
    minHeight: hp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("81%"),
    top: hp("8%"),
    resizeMode: "cover"
  },
  View_155_18: {
    width: wp("21%"),
    minWidth: wp("21%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7%"),
    top: hp("31%"),
    justifyContent: "flex-start"
  },
  Text_155_18: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 13,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_155_20: {
    width: wp("24%"),
    minWidth: wp("24%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("67%"),
    top: hp("31%"),
    justifyContent: "flex-start"
  },
  Text_155_20: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 13,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_155_22: {
    width: wp("10%"),
    minWidth: wp("10%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("82%"),
    top: hp("28%"),
    justifyContent: "flex-start"
  },
  Text_155_22: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 13,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_155_19: {
    width: wp("23%"),
    minWidth: wp("23%"),
    minHeight: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7%"),
    top: hp("35%"),
    justifyContent: "flex-start"
  },
  Text_155_19: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 12.491329193115234,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_155_21: {
    width: wp("23%"),
    minWidth: wp("23%"),
    minHeight: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("69%"),
    top: hp("35%"),
    justifyContent: "flex-start"
  },
  Text_155_21: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 12.491329193115234,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_155_23: {
    width: wp("17%"),
    minWidth: wp("17%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7%"),
    top: hp("50%"),
    justifyContent: "flex-start"
  },
  Text_155_23: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 13,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_155_24: {
    width: wp("13%"),
    minWidth: wp("13%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("31%"),
    top: hp("50%"),
    justifyContent: "flex-start"
  },
  Text_155_24: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 13,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_155_25: {
    width: wp("7%"),
    minWidth: wp("7%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("55%"),
    top: hp("50%"),
    justifyContent: "flex-start"
  },
  Text_155_25: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 13,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_155_26: {
    width: wp("13%"),
    minWidth: wp("13%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("79%"),
    top: hp("50%"),
    justifyContent: "flex-start"
  },
  Text_155_26: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 13,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_155_27: {
    width: wp("9%"),
    minWidth: wp("9%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8%"),
    top: hp("57%"),
    justifyContent: "flex-start"
  },
  Text_155_27: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 13,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_155_36: {
    width: wp("9%"),
    minWidth: wp("9%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8%"),
    top: hp("68%"),
    justifyContent: "flex-start"
  },
  Text_155_36: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 13,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_155_44: {
    width: wp("9%"),
    minWidth: wp("9%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8%"),
    top: hp("79%"),
    justifyContent: "flex-start"
  },
  Text_155_44: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 13,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_155_52: {
    width: wp("9%"),
    minWidth: wp("9%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8%"),
    top: hp("90%"),
    justifyContent: "flex-start"
  },
  Text_155_52: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 13,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_155_60: {
    width: wp("9%"),
    minWidth: wp("9%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8%"),
    top: hp("101%"),
    justifyContent: "flex-start"
  },
  Text_155_60: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 13,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_155_31: {
    width: wp("9%"),
    minWidth: wp("9%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8%"),
    top: hp("63%"),
    justifyContent: "flex-start"
  },
  Text_155_31: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 13,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_155_37: {
    width: wp("9%"),
    minWidth: wp("9%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8%"),
    top: hp("74%"),
    justifyContent: "flex-start"
  },
  Text_155_37: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 13,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_155_45: {
    width: wp("9%"),
    minWidth: wp("9%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8%"),
    top: hp("85%"),
    justifyContent: "flex-start"
  },
  Text_155_45: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 13,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_155_53: {
    width: wp("9%"),
    minWidth: wp("9%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8%"),
    top: hp("96%"),
    justifyContent: "flex-start"
  },
  Text_155_53: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 13,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_155_61: {
    width: wp("9%"),
    minWidth: wp("9%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8%"),
    top: hp("107%"),
    justifyContent: "flex-start"
  },
  Text_155_61: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 13,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_155_28: {
    width: wp("2%"),
    minWidth: wp("2%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("32%"),
    top: hp("57%"),
    justifyContent: "flex-start"
  },
  Text_155_28: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 13,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_155_38: {
    width: wp("2%"),
    minWidth: wp("2%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("32%"),
    top: hp("68%"),
    justifyContent: "flex-start"
  },
  Text_155_38: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 13,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_155_46: {
    width: wp("2%"),
    minWidth: wp("2%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("32%"),
    top: hp("79%"),
    justifyContent: "flex-start"
  },
  Text_155_46: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 13,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_155_54: {
    width: wp("2%"),
    minWidth: wp("2%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("32%"),
    top: hp("90%"),
    justifyContent: "flex-start"
  },
  Text_155_54: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 13,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_155_62: {
    width: wp("2%"),
    minWidth: wp("2%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("32%"),
    top: hp("101%"),
    justifyContent: "flex-start"
  },
  Text_155_62: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 13,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_155_32: {
    width: wp("2%"),
    minWidth: wp("2%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("32%"),
    top: hp("63%"),
    justifyContent: "flex-start"
  },
  Text_155_32: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 13,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_155_39: {
    width: wp("2%"),
    minWidth: wp("2%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("32%"),
    top: hp("74%"),
    justifyContent: "flex-start"
  },
  Text_155_39: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 13,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_155_47: {
    width: wp("2%"),
    minWidth: wp("2%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("32%"),
    top: hp("85%"),
    justifyContent: "flex-start"
  },
  Text_155_47: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 13,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_155_55: {
    width: wp("2%"),
    minWidth: wp("2%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("32%"),
    top: hp("96%"),
    justifyContent: "flex-start"
  },
  Text_155_55: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 13,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_155_63: {
    width: wp("2%"),
    minWidth: wp("2%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("32%"),
    top: hp("107%"),
    justifyContent: "flex-start"
  },
  Text_155_63: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 13,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_155_29: {
    width: wp("8%"),
    minWidth: wp("8%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("56%"),
    top: hp("57%"),
    justifyContent: "flex-start"
  },
  Text_155_29: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 13,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_155_40: {
    width: wp("8%"),
    minWidth: wp("8%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("56%"),
    top: hp("68%"),
    justifyContent: "flex-start"
  },
  Text_155_40: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 13,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_155_48: {
    width: wp("8%"),
    minWidth: wp("8%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("56%"),
    top: hp("79%"),
    justifyContent: "flex-start"
  },
  Text_155_48: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 13,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_155_56: {
    width: wp("8%"),
    minWidth: wp("8%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("56%"),
    top: hp("90%"),
    justifyContent: "flex-start"
  },
  Text_155_56: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 13,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_155_64: {
    width: wp("8%"),
    minWidth: wp("8%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("56%"),
    top: hp("101%"),
    justifyContent: "flex-start"
  },
  Text_155_64: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 13,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_155_33: {
    width: wp("8%"),
    minWidth: wp("8%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("56%"),
    top: hp("63%"),
    justifyContent: "flex-start"
  },
  Text_155_33: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 13,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_155_41: {
    width: wp("8%"),
    minWidth: wp("8%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("56%"),
    top: hp("74%"),
    justifyContent: "flex-start"
  },
  Text_155_41: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 13,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_155_49: {
    width: wp("8%"),
    minWidth: wp("8%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("56%"),
    top: hp("85%"),
    justifyContent: "flex-start"
  },
  Text_155_49: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 13,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_155_57: {
    width: wp("8%"),
    minWidth: wp("8%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("56%"),
    top: hp("96%"),
    justifyContent: "flex-start"
  },
  Text_155_57: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 13,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_155_65: {
    width: wp("8%"),
    minWidth: wp("8%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("56%"),
    top: hp("107%"),
    justifyContent: "flex-start"
  },
  Text_155_65: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 13,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_155_30: {
    width: wp("9%"),
    minWidth: wp("9%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("80%"),
    top: hp("57%"),
    justifyContent: "flex-start"
  },
  Text_155_30: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 13,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_155_42: {
    width: wp("9%"),
    minWidth: wp("9%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("80%"),
    top: hp("68%"),
    justifyContent: "flex-start"
  },
  Text_155_42: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 13,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_155_50: {
    width: wp("9%"),
    minWidth: wp("9%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("80%"),
    top: hp("79%"),
    justifyContent: "flex-start"
  },
  Text_155_50: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 13,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_155_58: {
    width: wp("9%"),
    minWidth: wp("9%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("80%"),
    top: hp("90%"),
    justifyContent: "flex-start"
  },
  Text_155_58: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 13,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_155_66: {
    width: wp("9%"),
    minWidth: wp("9%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("80%"),
    top: hp("101%"),
    justifyContent: "flex-start"
  },
  Text_155_66: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 13,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_155_34: {
    width: wp("9%"),
    minWidth: wp("9%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("80%"),
    top: hp("63%"),
    justifyContent: "flex-start"
  },
  Text_155_34: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 13,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_155_43: {
    width: wp("9%"),
    minWidth: wp("9%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("80%"),
    top: hp("74%"),
    justifyContent: "flex-start"
  },
  Text_155_43: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 13,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_155_51: {
    width: wp("9%"),
    minWidth: wp("9%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("80%"),
    top: hp("85%"),
    justifyContent: "flex-start"
  },
  Text_155_51: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 13,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_155_59: {
    width: wp("9%"),
    minWidth: wp("9%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("80%"),
    top: hp("96%"),
    justifyContent: "flex-start"
  },
  Text_155_59: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 13,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_155_67: {
    width: wp("9%"),
    minWidth: wp("9%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("80%"),
    top: hp("107%"),
    justifyContent: "flex-start"
  },
  Text_155_67: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 13,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_155_35: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("0%"),
    minHeight: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("55%")
  },
  View_155_68: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("25%"),
    minHeight: hp("25%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("129%"),
    backgroundColor: "rgba(242, 242, 242, 1)"
  },
  View_156_71: {
    width: wp("10%"),
    minWidth: wp("10%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("81%"),
    top: hp("131%"),
    justifyContent: "flex-start"
  },
  Text_156_71: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 14,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_157_72: {
    width: wp("16%"),
    minWidth: wp("16%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("55%"),
    top: hp("137%"),
    justifyContent: "flex-start"
  },
  Text_157_72: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 15.286344528198242,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_157_74: {
    width: wp("7%"),
    minWidth: wp("7%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("55%"),
    top: hp("141%"),
    justifyContent: "flex-start"
  },
  Text_157_74: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 15.286344528198242,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_157_76: {
    width: wp("10%"),
    minWidth: wp("10%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("55%"),
    top: hp("146%"),
    justifyContent: "flex-start"
  },
  Text_157_76: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 15.286344528198242,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_157_73: {
    width: wp("17%"),
    minWidth: wp("17%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("74%"),
    top: hp("137%"),
    justifyContent: "flex-start"
  },
  Text_157_73: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 15.286344528198242,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_157_75: {
    width: wp("13%"),
    minWidth: wp("13%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("79%"),
    top: hp("141%"),
    justifyContent: "flex-start"
  },
  Text_157_75: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 15.286344528198242,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_157_77: {
    width: wp("17%"),
    minWidth: wp("17%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("74%"),
    top: hp("146%"),
    justifyContent: "flex-start"
  },
  Text_157_77: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 15.286344528198242,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_156_69: {
    width: wp("90%"),
    minWidth: wp("90%"),
    height: hp("0%"),
    minHeight: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%"),
    top: hp("136%")
  },
  ImageBackground_156_70: {
    width: wp("90%"),
    minWidth: wp("90%"),
    height: hp("0%"),
    minHeight: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%"),
    top: hp("153%")
  }
})

const mapStateToProps = state => {
  return {}
}
const mapDispatchToProps = () => {
  return {}
}
export default connect(mapStateToProps, mapDispatchToProps)(Blank)
