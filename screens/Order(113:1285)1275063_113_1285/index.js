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
      <View style={styles.View_113_1295}>
        <View style={styles.View_113_1296} />
        <View style={styles.View_113_1297}>
          <Text style={styles.Text_113_1297}>Orders</Text>
        </View>
      </View>
      <View style={styles.View_113_1298}>
        <View style={styles.View_113_1299} />
        <View style={styles.View_113_1300}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/c78a/5bdf/8df1323d87ff79c5a7d36f96b0228975"
            }}
            style={styles.ImageBackground_113_1301}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/187f/69fa/dfa98a845627d36d65cc73e4b3f304b8"
            }}
            style={styles.ImageBackground_113_1303}
          />
          <View style={styles.View_113_1306}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a930/9c43/f8be4578e6cc748227b7f11f9761136a"
              }}
              style={styles.ImageBackground_113_1307}
            />
            <View style={styles.View_113_1308}>
              <Text style={styles.Text_113_1308}>5</Text>
            </View>
          </View>
          <View style={styles.View_113_1309}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/7623/4d95/23fbe9ab8b5cc002ef4d04d2f4cee898"
              }}
              style={styles.ImageBackground_113_1310}
            />
            <View style={styles.View_113_1311}>
              <Text style={styles.Text_113_1311}>5</Text>
            </View>
          </View>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/7549/914c/1b9c5fd1fb1faf161873a8a253ed3c42"
          }}
          style={styles.ImageBackground_113_1312}
        />
      </View>
      <View style={styles.View_113_1313}>
        <View style={styles.View_113_1314} />
        <View style={styles.View_113_1315}>
          <Text style={styles.Text_113_1315}>Search</Text>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/ec0f/e947/1e8e589cf668158b06013425d2101a32"
          }}
          style={styles.ImageBackground_113_1316}
        />
      </View>
      <View style={styles.View_113_1317}>
        <View style={styles.View_113_1318}>
          <View style={styles.View_113_1319}>
            <Text style={styles.Text_113_1319}>Choose Date Range</Text>
          </View>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/e29c/3e7d/22624a9aec81eb21a4fc3b4b0bc5a97e"
            }}
            style={styles.ImageBackground_113_1320}
          />
          <View style={styles.View_113_1322} />
        </View>
        <View style={styles.View_113_1323}>
          <View style={styles.View_113_1324} />
          <View style={styles.View_113_1325}>
            <Text style={styles.Text_113_1325}>Show All</Text>
          </View>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/e29c/3e7d/22624a9aec81eb21a4fc3b4b0bc5a97e"
            }}
            style={styles.ImageBackground_113_1326}
          />
        </View>
      </View>
      <View style={styles.View_113_1328}>
        <View style={styles.View_113_1329} />
        <View style={styles.View_113_1330} />
        <View style={styles.View_113_1331}>
          <Text style={styles.Text_113_1331}>101100</Text>
        </View>
        <View style={styles.View_113_1332}>
          <Text style={styles.Text_113_1332}>Boska 4 Tables</Text>
        </View>
        <View style={styles.View_113_1333}>
          <Text style={styles.Text_113_1333}>Hydraxx</Text>
        </View>
        <View style={styles.View_113_1334}>
          <Text style={styles.Text_113_1334}>
            No 16, Belgore str Ilorin, Kwara St
          </Text>
        </View>
        <View style={styles.View_113_1335}>
          <Text style={styles.Text_113_1335}>101100</Text>
        </View>
        <View style={styles.View_113_1336}>
          <Text style={styles.Text_113_1336}>Tramadol 4 Packets</Text>
        </View>
        <View style={styles.View_113_1337}>
          <Text style={styles.Text_113_1337}>Hydraxx</Text>
        </View>
        <View style={styles.View_113_1338}>
          <Text style={styles.Text_113_1338}>
            No 16, Belgore str Ilorin, Kwara St
          </Text>
        </View>
        <View style={styles.View_113_1339}>
          <Text style={styles.Text_113_1339}>101105</Text>
        </View>
        <View style={styles.View_113_1340}>
          <Text style={styles.Text_113_1340}>Cough Syrub 4 bottles</Text>
        </View>
        <View style={styles.View_113_1341}>
          <Text style={styles.Text_113_1341}>Detol Cream 1 Piece</Text>
        </View>
        <View style={styles.View_113_1342}>
          <Text style={styles.Text_113_1342}>Hydraxx</Text>
        </View>
        <View style={styles.View_113_1343}>
          <Text style={styles.Text_113_1343}>
            No 16, Belgore str Ilorin, Kwara St
          </Text>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/ed30/fceb/da1fc85130cd35b5e356fe904b05113c"
          }}
          style={styles.ImageBackground_113_1344}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1d19/d9e7/91286b8ff6af46293500d92ff2cf078c"
          }}
          style={styles.ImageBackground_113_1345}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/0b55/b645/86f9e609dd6faee5756eac250016e2af"
          }}
          style={styles.ImageBackground_113_1346}
        />
        <View style={styles.View_113_1347}>
          <View style={styles.View_113_1348}>
            <View style={styles.View_113_1349}>
              <Text style={styles.Text_113_1349}>Page 2 of 24</Text>
            </View>
            <View style={styles.View_113_1350}>
              <Text style={styles.Text_113_1350}>1 2 3 4 5 6 7 8 9 10</Text>
            </View>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/51fd/95be/8999fb0f8402f9b208db623eafb7467e"
              }}
              style={styles.ImageBackground_113_1351}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/c1e5/8b7e/d362cf4240dbdf6b2a83c6c630d5df50"
              }}
              style={styles.ImageBackground_113_1354}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/e0cd/760d/1a504e0743521532c98f10235ad97caf"
              }}
              style={styles.ImageBackground_113_1356}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/cdff/009c/427cbcd5341dd2a195c07bc0402b628b"
              }}
              style={styles.ImageBackground_113_1359}
            />
          </View>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/e452/48ab/dbe64f4fa3dfd8bbec9696d0b0255f10"
          }}
          style={styles.ImageBackground_113_1361}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/8a2f/3c1d/009960376c94a0fcd41beac5787efe2a"
          }}
          style={styles.ImageBackground_113_1363}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/79ee/ff99/c06ff4c18f9ac762ccaa6b75bb9bdf7c"
          }}
          style={styles.ImageBackground_113_1366}
        />
        <View style={styles.View_113_1368}>
          <View style={styles.View_113_1369} />
          <View style={styles.View_113_1370}>
            <Text style={styles.Text_113_1370}>Order ID</Text>
          </View>
          <View style={styles.View_113_1371}>
            <Text style={styles.Text_113_1371}>Items</Text>
          </View>
          <View style={styles.View_113_1372}>
            <Text style={styles.Text_113_1372}>Customer</Text>
          </View>
          <View style={styles.View_113_1373}>
            <Text style={styles.Text_113_1373}>Delivery Address</Text>
          </View>
        </View>
        <View style={styles.View_113_1374}>
          <Text style={styles.Text_113_1374}>Status</Text>
        </View>
        <View style={styles.View_113_1375}>
          <View style={styles.View_113_1376}>
            <Text style={styles.Text_113_1376}>20/20/2020 10:08PM</Text>
          </View>
          <View style={styles.View_113_1377}>
            <Text style={styles.Text_113_1377}>Today 10:08PM</Text>
          </View>
          <View style={styles.View_113_1378}>
            <Text style={styles.Text_113_1378}>22/08/2020 10:08PM</Text>
          </View>
          <View style={styles.View_113_1379}>
            <Text style={styles.Text_113_1379}>Time</Text>
          </View>
        </View>
      </View>
    </ScrollView>
  )
}
const styles = StyleSheet.create({
  ScrollView_1: { backgroundColor: "rgba(252, 252, 252, 1)" },
  View_2: { height: hp("100%") },
  View_113_1295: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("9%"),
    minHeight: hp("9%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("21%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_113_1296: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("9%"),
    minHeight: hp("9%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_113_1297: {
    width: wp("13%"),
    minWidth: wp("13%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%"),
    top: hp("3%"),
    justifyContent: "flex-start"
  },
  Text_113_1297: {
    color: "rgba(48, 157, 143, 1)",
    fontSize: 11,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_113_1298: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("10%"),
    minHeight: hp("10%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("11%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_113_1299: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("10%"),
    minHeight: hp("10%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(48, 157, 143, 1)"
  },
  View_113_1300: {
    width: wp("16%"),
    minWidth: wp("16%"),
    height: hp("4%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("80%"),
    top: hp("3%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_113_1301: {
    width: wp("3%"),
    height: hp("3%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9%")
  },
  ImageBackground_113_1303: {
    width: wp("4%"),
    height: hp("3%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_113_1306: {
    width: wp("3%"),
    minWidth: wp("3%"),
    height: hp("2%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    top: hp("0%")
  },
  ImageBackground_113_1307: {
    width: wp("3%"),
    minWidth: wp("3%"),
    height: hp("2%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_113_1308: {
    width: wp("1%"),
    minWidth: wp("1%"),
    minHeight: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_113_1308: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 4.285236358642578,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_113_1309: {
    width: wp("3%"),
    minWidth: wp("3%"),
    height: hp("2%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("13%"),
    top: hp("0%")
  },
  ImageBackground_113_1310: {
    width: wp("3%"),
    minWidth: wp("3%"),
    height: hp("2%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_113_1311: {
    width: wp("1%"),
    minWidth: wp("1%"),
    minHeight: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_113_1311: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 4.285236358642578,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_113_1312: {
    width: wp("5%"),
    height: hp("3%"),
    top: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%")
  },
  View_113_1313: {
    width: wp("33%"),
    minWidth: wp("33%"),
    height: hp("5%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("33%"),
    top: hp("35%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_113_1314: {
    width: wp("33%"),
    minWidth: wp("33%"),
    height: hp("5%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    borderColor: "rgba(153, 153, 153, 1)",
    borderWidth: 0.6903889775276184
  },
  View_113_1315: {
    width: wp("10%"),
    minWidth: wp("10%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    top: hp("1%"),
    justifyContent: "flex-start"
  },
  Text_113_1315: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 8.3558349609375,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "italic",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_113_1316: {
    width: wp("2%"),
    height: hp("2%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("26%")
  },
  View_113_1317: {
    width: wp("70%"),
    minWidth: wp("70%"),
    height: hp("4%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("16%"),
    top: hp("42%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_113_1318: {
    width: wp("31%"),
    minWidth: wp("31%"),
    height: hp("4%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_113_1319: {
    width: wp("21%"),
    minWidth: wp("21%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%"),
    top: hp("1%"),
    justifyContent: "flex-start"
  },
  Text_113_1319: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 5.976778984069824,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_113_1320: {
    width: wp("2%"),
    height: hp("1%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("26%")
  },
  View_113_1322: {
    width: wp("31%"),
    minWidth: wp("31%"),
    height: hp("4%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    borderColor: "rgba(153, 153, 153, 1)",
    borderWidth: 0.531785249710083
  },
  View_113_1323: {
    width: wp("25%"),
    minWidth: wp("25%"),
    height: hp("4%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("44%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_113_1324: {
    width: wp("25%"),
    minWidth: wp("25%"),
    height: hp("4%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    borderColor: "rgba(153, 153, 153, 1)",
    borderWidth: 0.531785249710083
  },
  View_113_1325: {
    width: wp("10%"),
    minWidth: wp("10%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%"),
    top: hp("1%"),
    justifyContent: "flex-start"
  },
  Text_113_1325: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 5.976778984069824,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_113_1326: {
    width: wp("2%"),
    height: hp("1%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("22%")
  },
  View_113_1328: {
    width: wp("94%"),
    minWidth: wp("94%"),
    height: hp("43%"),
    minHeight: hp("43%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    top: hp("50%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_113_1329: {
    width: wp("94%"),
    minWidth: wp("94%"),
    height: hp("38%"),
    minHeight: hp("38%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("5%"),
    borderColor: "rgba(189, 189, 189, 1)",
    borderWidth: 0.2872615456581116
  },
  View_113_1330: {
    width: wp("91%"),
    minWidth: wp("91%"),
    height: hp("1%"),
    minHeight: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("1%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderColor: "rgba(0, 0, 0, 1)",
    borderWidth: 0.2872615456581116
  },
  View_113_1331: {
    width: wp("5%"),
    minWidth: wp("5%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%"),
    top: hp("6%"),
    justifyContent: "flex-start"
  },
  Text_113_1331: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 5.319754123687744,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_113_1332: {
    width: wp("7%"),
    minWidth: wp("7%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("12%"),
    top: hp("6%"),
    justifyContent: "flex-start"
  },
  Text_113_1332: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 5.319754123687744,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_113_1333: {
    width: wp("7%"),
    minWidth: wp("7%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("28%"),
    top: hp("6%"),
    justifyContent: "flex-start"
  },
  Text_113_1333: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 5.319754123687744,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_113_1334: {
    width: wp("19%"),
    minWidth: wp("19%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("58%"),
    top: hp("6%"),
    justifyContent: "flex-start"
  },
  Text_113_1334: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 5.319754123687744,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_113_1335: {
    width: wp("5%"),
    minWidth: wp("5%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%"),
    top: hp("27%"),
    justifyContent: "flex-start"
  },
  Text_113_1335: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 5.319754123687744,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_113_1336: {
    width: wp("10%"),
    minWidth: wp("10%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("12%"),
    top: hp("27%"),
    justifyContent: "flex-start"
  },
  Text_113_1336: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 5.319754123687744,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_113_1337: {
    width: wp("7%"),
    minWidth: wp("7%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("28%"),
    top: hp("27%"),
    justifyContent: "flex-start"
  },
  Text_113_1337: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 5.319754123687744,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_113_1338: {
    width: wp("19%"),
    minWidth: wp("19%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("58%"),
    top: hp("27%"),
    justifyContent: "flex-start"
  },
  Text_113_1338: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 5.319754123687744,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_113_1339: {
    width: wp("5%"),
    minWidth: wp("5%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%"),
    top: hp("13%"),
    justifyContent: "flex-start"
  },
  Text_113_1339: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 5.319754123687744,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_113_1340: {
    width: wp("11%"),
    minWidth: wp("11%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("12%"),
    top: hp("13%"),
    justifyContent: "flex-start"
  },
  Text_113_1340: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 5.319754123687744,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_113_1341: {
    width: wp("11%"),
    minWidth: wp("11%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("12%"),
    top: hp("19%"),
    justifyContent: "flex-start"
  },
  Text_113_1341: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 5.319754123687744,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_113_1342: {
    width: wp("7%"),
    minWidth: wp("7%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("28%"),
    top: hp("13%"),
    justifyContent: "flex-start"
  },
  Text_113_1342: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 5.319754123687744,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_113_1343: {
    width: wp("19%"),
    minWidth: wp("19%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("58%"),
    top: hp("13%"),
    justifyContent: "flex-start"
  },
  Text_113_1343: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 5.319754123687744,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_113_1344: {
    width: wp("94%"),
    minWidth: wp("94%"),
    height: hp("0%"),
    minHeight: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("12%")
  },
  ImageBackground_113_1345: {
    width: wp("94%"),
    minWidth: wp("94%"),
    height: hp("0%"),
    minHeight: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("25%")
  },
  ImageBackground_113_1346: {
    width: wp("94%"),
    minWidth: wp("94%"),
    height: hp("0%"),
    minHeight: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("38%")
  },
  View_113_1347: {
    width: wp("88%"),
    minWidth: wp("88%"),
    height: hp("2%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    top: hp("39%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_113_1348: {
    width: wp("88%"),
    minWidth: wp("88%"),
    height: hp("2%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_113_1349: {
    width: wp("12%"),
    minWidth: wp("12%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_113_1349: {
    color: "rgba(224, 224, 224, 1)",
    fontSize: 6.181539058685303,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_113_1350: {
    width: wp("21%"),
    minWidth: wp("21%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("63%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_113_1350: {
    color: "rgba(224, 224, 224, 1)",
    fontSize: 6.181539058685303,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_113_1351: {
    width: wp("1%"),
    height: hp("1%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("87%")
  },
  ImageBackground_113_1354: {
    width: wp("1%"),
    height: hp("1%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("85%")
  },
  ImageBackground_113_1356: {
    width: wp("1%"),
    height: hp("1%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("58%")
  },
  ImageBackground_113_1359: {
    width: wp("1%"),
    height: hp("1%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("60%")
  },
  ImageBackground_113_1361: {
    width: wp("3%"),
    height: hp("2%"),
    top: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("85%")
  },
  ImageBackground_113_1363: {
    width: wp("3%"),
    height: hp("2%"),
    top: hp("16%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("85%")
  },
  ImageBackground_113_1366: {
    width: wp("3%"),
    height: hp("2%"),
    top: hp("27%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("85%")
  },
  View_113_1368: {
    width: wp("94%"),
    minWidth: wp("94%"),
    height: hp("4%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("-1%")
  },
  View_113_1369: {
    width: wp("94%"),
    minWidth: wp("94%"),
    height: hp("4%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderColor: "rgba(196, 196, 196, 1)",
    borderWidth: 0.2872615456581116
  },
  View_113_1370: {
    width: wp("7%"),
    minWidth: wp("7%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%"),
    top: hp("1%"),
    justifyContent: "flex-start"
  },
  Text_113_1370: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 5.319754123687744,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_113_1371: {
    width: wp("5%"),
    minWidth: wp("5%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("12%"),
    top: hp("1%"),
    justifyContent: "flex-start"
  },
  Text_113_1371: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 5.319754123687744,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_113_1372: {
    width: wp("8%"),
    minWidth: wp("8%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("28%"),
    top: hp("1%"),
    justifyContent: "flex-start"
  },
  Text_113_1372: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 5.319754123687744,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_113_1373: {
    width: wp("14%"),
    minWidth: wp("14%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("58%"),
    top: hp("1%"),
    justifyContent: "flex-start"
  },
  Text_113_1373: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 5.319754123687744,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_113_1374: {
    width: wp("5%"),
    minWidth: wp("5%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("83%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_113_1374: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 5.319754123687744,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_113_1375: {
    width: wp("10%"),
    minWidth: wp("10%"),
    height: hp("30%"),
    minHeight: hp("30%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("43%"),
    top: hp("0%")
  },
  View_113_1376: {
    width: wp("10%"),
    minWidth: wp("10%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("6%"),
    justifyContent: "flex-start"
  },
  Text_113_1376: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 5.319754123687744,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_113_1377: {
    width: wp("7%"),
    minWidth: wp("7%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("27%"),
    justifyContent: "flex-start"
  },
  Text_113_1377: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 5.319754123687744,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_113_1378: {
    width: wp("10%"),
    minWidth: wp("10%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("13%"),
    justifyContent: "flex-start"
  },
  Text_113_1378: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 5.319754123687744,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_113_1379: {
    width: wp("4%"),
    minWidth: wp("4%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_113_1379: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 5.319754123687744,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  }
})
const mapStateToProps = state => {
  return {}
}
const mapDispatchToProps = () => {
  return {}
}
export default connect(mapStateToProps, mapDispatchToProps)(Blank)
