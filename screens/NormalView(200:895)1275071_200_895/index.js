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
      <View style={styles.View_200_896}>
        <View style={styles.View_200_897} />
        <View style={styles.View_200_898}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/c78a/5bdf/8df1323d87ff79c5a7d36f96b0228975"
            }}
            style={styles.ImageBackground_200_899}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2f57/50f0/bb5307b43df4eff3538c7fe14a630797"
            }}
            style={styles.ImageBackground_200_901}
          />
          <View style={styles.View_200_904}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a930/9c43/f8be4578e6cc748227b7f11f9761136a"
              }}
              style={styles.ImageBackground_200_905}
            />
            <View style={styles.View_200_906}>
              <Text style={styles.Text_200_906}>5</Text>
            </View>
          </View>
          <View style={styles.View_200_907}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/7623/4d95/23fbe9ab8b5cc002ef4d04d2f4cee898"
              }}
              style={styles.ImageBackground_200_908}
            />
            <View style={styles.View_200_909}>
              <Text style={styles.Text_200_909}>5</Text>
            </View>
          </View>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/7549/914c/1b9c5fd1fb1faf161873a8a253ed3c42"
          }}
          style={styles.ImageBackground_200_910}
        />
      </View>
      <View style={styles.View_200_911}>
        <View style={styles.View_200_912}>
          <View style={styles.View_200_913} />
          <View style={styles.View_200_914} />
          <View style={styles.View_200_915}>
            <Text style={styles.Text_200_915}>12</Text>
          </View>
          <View style={styles.View_200_916}>
            <Text style={styles.Text_200_916}>New Appointments</Text>
          </View>
        </View>
        <View style={styles.View_200_917}>
          <View style={styles.View_200_918} />
          <View style={styles.View_200_919}>
            <Text style={styles.Text_200_919}>Wallet Balance</Text>
          </View>
          <View style={styles.View_200_920}>
            <Text style={styles.Text_200_920}>N350,000:89</Text>
          </View>
          <View style={styles.View_200_921} />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/cbc1/621a/61f3cbc1bd5ad9361be4287ff5644821"
            }}
            style={styles.ImageBackground_200_922}
          />
        </View>
        <View style={styles.View_200_923}>
          <View style={styles.View_200_924} />
          <View style={styles.View_200_925} />
          <View style={styles.View_200_926}>
            <Text style={styles.Text_200_926}>12</Text>
          </View>
          <View style={styles.View_200_927}>
            <Text style={styles.Text_200_927}>Total Patients</Text>
          </View>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/ceb8/3de2/43f7c8aa714aaa374d2a66d30b0bab62"
          }}
          style={styles.ImageBackground_200_928}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/b8cf/b0e4/399ef3896f388c335a50a1a95d1ae74f"
          }}
          style={styles.ImageBackground_200_930}
        />
      </View>
      <View style={styles.View_200_937}>
        <View style={styles.View_200_938} />
        <View style={styles.View_200_939}>
          <Text style={styles.Text_200_939}>Dr. Yemi Osinbajo</Text>
        </View>
        <View style={styles.View_200_940}>
          <Text style={styles.Text_200_940}>Welcome to your Page</Text>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/0ad8/b987/23d22bd2e778701dc9c2a7578bf781b0"
          }}
          style={styles.ImageBackground_200_941}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/7db2/25b5/37acbf3ab08751e3e5fd5f43ea251ce2"
          }}
          style={styles.ImageBackground_200_942}
        />
      </View>
      <View style={styles.View_200_943}>
        <View style={styles.View_200_944} />
        <View style={styles.View_200_945} />
        <View style={styles.View_200_946}>
          <Text style={styles.Text_200_946}>Notifications</Text>
        </View>
        <View style={styles.View_200_947}>
          <Text style={styles.Text_200_947}>
            Someone has booked an appointment
          </Text>
        </View>
        <View style={styles.View_200_948}>
          <Text style={styles.Text_200_948}>20/08/2020 8:04pm</Text>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/4b66/b78d/0c2cfb26dab15445bd743bdcb87aad3c"
          }}
          style={styles.ImageBackground_200_949}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a8f9/ebd1/a841a6d46cf894de5a68510317cdc506"
          }}
          style={styles.ImageBackground_200_950}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2698/ad1b/30a9109cb63d875efc7b03e32817c9c5"
          }}
          style={styles.ImageBackground_200_951}
        />
      </View>
      <View style={styles.View_200_954}>
        <View style={styles.View_200_955} />
        <View style={styles.View_200_956} />
        <View style={styles.View_200_957}>
          <Text style={styles.Text_200_957}>Your Stats</Text>
        </View>
        <View style={styles.View_200_958}>
          <Text style={styles.Text_200_958}>No. of attended to</Text>
        </View>
        <View style={styles.View_200_959}>
          <Text style={styles.Text_200_959}>118</Text>
        </View>
        <View style={styles.View_200_960}>
          <Text style={styles.Text_200_960}>Wallet Balance</Text>
        </View>
        <View style={styles.View_200_961}>
          <Text style={styles.Text_200_961}>Customers</Text>
        </View>
        <View style={styles.View_200_962}>
          <Text style={styles.Text_200_962}>N450,610:97</Text>
        </View>
        <View style={styles.View_200_963}>
          <Text style={styles.Text_200_963}>1800</Text>
        </View>
        <View style={styles.View_200_964}>
          <Text style={styles.Text_200_964}>Rating</Text>
        </View>
        <View style={styles.View_200_965}>
          <Text style={styles.Text_200_965}>2005</Text>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3d5f/a1f6/7a52bf26ba701ce120ac54430acf1b21"
          }}
          style={styles.ImageBackground_200_966}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/0a50/fae0/34d7729257447aef845ca6c73e369a85"
          }}
          style={styles.ImageBackground_200_967}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/0a50/fae0/34d7729257447aef845ca6c73e369a85"
          }}
          style={styles.ImageBackground_200_968}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/0a50/fae0/34d7729257447aef845ca6c73e369a85"
          }}
          style={styles.ImageBackground_200_969}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/61db/fc61/67658cc9504e06fc6a4743a8573b9189"
          }}
          style={styles.ImageBackground_200_970}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/4ec3/0544/e9da0edda46274e721b0c022cadf4a4c"
          }}
          style={styles.ImageBackground_200_973}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/0ec2/345c/d439935c2ede06876c1ece2fdafb1a54"
          }}
          style={styles.ImageBackground_200_976}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/5af2/28cf/c625ed86eaa3e3e74bbbc3a88cb44929"
          }}
          style={styles.ImageBackground_200_977}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3c0b/088a/983d7f189244e11eb814f9f574c6d081"
          }}
          style={styles.ImageBackground_200_981}
        />
      </View>
      <View style={styles.View_200_987}>
        <View style={styles.View_200_988} />
        <View style={styles.View_200_989} />
        <View style={styles.View_200_990}>
          <Text style={styles.Text_200_990}>Customer Reviews</Text>
        </View>
        <View style={styles.View_200_991} />
        <View style={styles.View_200_992}>
          <Text style={styles.Text_200_992}>Ibrahim Mohammed</Text>
        </View>
        <View style={styles.View_200_993}>
          <Text style={styles.Text_200_993}>Adewale Bala</Text>
        </View>
        <View style={styles.View_200_994}>
          <Text style={styles.Text_200_994}>Great Experience.</Text>
        </View>
        <View style={styles.View_200_995}>
          <Text style={styles.Text_200_995}>
            A very nice and friendly doctor
          </Text>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/07fe/c3f4/4c2c13388a5e5d82469adc85fddb63a9"
          }}
          style={styles.ImageBackground_200_996}
        />
        <View style={styles.View_200_997} />
        <View style={styles.View_200_998} />
        <View style={styles.View_200_999}>
          <Text style={styles.Text_200_999}>Customer Name</Text>
        </View>
        <View style={styles.View_200_1000}>
          <Text style={styles.Text_200_1000}>Comment</Text>
        </View>
        <View style={styles.View_200_1001}>
          <Text style={styles.Text_200_1001}>Star &amp; Date</Text>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3c0b/088a/983d7f189244e11eb814f9f574c6d081"
          }}
          style={styles.ImageBackground_200_1002}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/28d8/6273/739301bc18545d01033bafd56fb16747"
          }}
          style={styles.ImageBackground_200_1008}
        />
        <View style={styles.View_200_1014}>
          <Text style={styles.Text_200_1014}>20/10/2020</Text>
        </View>
        <View style={styles.View_200_1015}>
          <Text style={styles.Text_200_1015}>20/10/2020</Text>
        </View>
        <View style={styles.View_200_1016}>
          <View style={styles.View_200_1017}>
            <Text style={styles.Text_200_1017}>View All</Text>
          </View>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/be36/e6bd/5ee746915266b0bd45fc78dac5789ba6"
          }}
          style={styles.ImageBackground_200_1018}
        />
      </View>
      <View style={styles.View_200_1022}>
        <View style={styles.View_200_1023} />
        <View style={styles.View_200_1024} />
        <View style={styles.View_200_1025}>
          <Text style={styles.Text_200_1025}>New Appointments</Text>
        </View>
        <View style={styles.View_200_1026}>
          <View style={styles.View_200_1027}>
            <Text style={styles.Text_200_1027}>View All</Text>
          </View>
        </View>
        <View style={styles.View_200_1028} />
        <View style={styles.View_200_1029} />
        <View style={styles.View_200_1030} />
        <View style={styles.View_200_1031}>
          <Text style={styles.Text_200_1031}>Time</Text>
        </View>
        <View style={styles.View_200_1032}>
          <Text style={styles.Text_200_1032}>Tue, 22/082020 10PM - 11PM</Text>
        </View>
        <View style={styles.View_200_1033}>
          <Text style={styles.Text_200_1033}>22/08/2020 12PM-1PM</Text>
        </View>
        <View style={styles.View_200_1034}>
          <Text style={styles.Text_200_1034}>22/08/2020 10:08PM</Text>
        </View>
        <View style={styles.View_200_1035}>
          <Text style={styles.Text_200_1035}>Customer Name</Text>
        </View>
        <View style={styles.View_200_1036}>
          <Text style={styles.Text_200_1036}>Ibrahim Mohammed</Text>
        </View>
        <View style={styles.View_200_1037}>
          <Text style={styles.Text_200_1037}>Adewale Basmus</Text>
        </View>
        <View style={styles.View_200_1038}>
          <Text style={styles.Text_200_1038}>Adewale Basmus</Text>
        </View>
        <View style={styles.View_200_1039}>
          <View style={styles.View_200_1040}>
            <Text style={styles.Text_200_1040}>View</Text>
          </View>
        </View>
        <View style={styles.View_200_1041}>
          <View style={styles.View_200_1042}>
            <Text style={styles.Text_200_1042}>View</Text>
          </View>
        </View>
        <View style={styles.View_200_1043}>
          <View style={styles.View_200_1044}>
            <Text style={styles.Text_200_1044}>View</Text>
          </View>
        </View>
        <View style={styles.View_200_1045}>
          <Text style={styles.Text_200_1045}>Action</Text>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/9949/7fef/c89287b9288d9a527460a17160e207d3"
          }}
          style={styles.ImageBackground_200_1046}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/9949/7fef/c89287b9288d9a527460a17160e207d3"
          }}
          style={styles.ImageBackground_200_1047}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/b642/8918/5c6d72432e4f12e9df8e67ea96683e23"
          }}
          style={styles.ImageBackground_200_1048}
        />
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: { backgroundColor: "rgba(252, 252, 252, 1)" },
  View_2: { height: hp("182%") },
  View_200_896: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("8%"),
    minHeight: hp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("8%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_200_897: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("8%"),
    minHeight: hp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(48, 157, 143, 1)"
  },
  View_200_898: {
    width: wp("16%"),
    minWidth: wp("16%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("80%"),
    top: hp("2%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_200_899: {
    width: wp("3%"),
    height: hp("2%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9%")
  },
  ImageBackground_200_901: {
    width: wp("4%"),
    height: hp("2%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_200_904: {
    width: wp("3%"),
    minWidth: wp("3%"),
    height: hp("1%"),
    minHeight: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    top: hp("0%")
  },
  ImageBackground_200_905: {
    width: wp("3%"),
    minWidth: wp("3%"),
    height: hp("1%"),
    minHeight: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_200_906: {
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
  Text_200_906: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 4.285236358642578,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_200_907: {
    width: wp("3%"),
    minWidth: wp("3%"),
    height: hp("1%"),
    minHeight: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("13%"),
    top: hp("0%")
  },
  ImageBackground_200_908: {
    width: wp("3%"),
    minWidth: wp("3%"),
    height: hp("1%"),
    minHeight: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_200_909: {
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
  Text_200_909: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 4.285236358642578,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_200_910: {
    width: wp("5%"),
    height: hp("2%"),
    top: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%")
  },
  View_200_911: {
    width: wp("86%"),
    minWidth: wp("86%"),
    height: hp("19%"),
    minHeight: hp("19%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7%"),
    top: hp("30%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_200_912: {
    width: wp("44%"),
    minWidth: wp("44%"),
    height: hp("8%"),
    minHeight: hp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("12%")
  },
  View_200_913: {
    width: wp("44%"),
    minWidth: wp("44%"),
    height: hp("8%"),
    minHeight: hp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_200_914: {
    width: wp("9%"),
    minWidth: wp("9%"),
    height: hp("8%"),
    minHeight: hp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 185, 185, 1)"
  },
  View_200_915: {
    width: wp("4%"),
    minWidth: wp("4%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("22%"),
    top: hp("1%"),
    justifyContent: "flex-start"
  },
  Text_200_915: {
    color: "rgba(48, 157, 143, 1)",
    fontSize: 11.856117248535156,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_200_916: {
    width: wp("29%"),
    minWidth: wp("29%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("13%"),
    top: hp("5%"),
    justifyContent: "flex-start"
  },
  Text_200_916: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 9.389691352844238,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_200_917: {
    width: wp("40%"),
    minWidth: wp("40%"),
    height: hp("8%"),
    minHeight: hp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_200_918: {
    width: wp("40%"),
    minWidth: wp("40%"),
    height: hp("8%"),
    minHeight: hp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_200_919: {
    width: wp("23%"),
    minWidth: wp("23%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("12%"),
    top: hp("5%"),
    justifyContent: "flex-start"
  },
  Text_200_919: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 9.389691352844238,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_200_920: {
    width: wp("25%"),
    minWidth: wp("25%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("11%"),
    top: hp("1%"),
    justifyContent: "flex-start"
  },
  Text_200_920: {
    color: "rgba(48, 157, 143, 1)",
    fontSize: 11.856117248535156,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_200_921: {
    width: wp("9%"),
    minWidth: wp("9%"),
    height: hp("8%"),
    minHeight: hp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 201, 94, 1)"
  },
  ImageBackground_200_922: {
    width: wp("4%"),
    height: hp("2%"),
    top: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%")
  },
  View_200_923: {
    width: wp("40%"),
    minWidth: wp("40%"),
    height: hp("8%"),
    minHeight: hp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("46%"),
    top: hp("0%")
  },
  View_200_924: {
    width: wp("40%"),
    minWidth: wp("40%"),
    height: hp("8%"),
    minHeight: hp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_200_925: {
    width: wp("9%"),
    minWidth: wp("9%"),
    height: hp("8%"),
    minHeight: hp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(198, 248, 153, 1)"
  },
  View_200_926: {
    width: wp("4%"),
    minWidth: wp("4%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("20%"),
    top: hp("1%"),
    justifyContent: "flex-start"
  },
  Text_200_926: {
    color: "rgba(48, 157, 143, 1)",
    fontSize: 11.856117248535156,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_200_927: {
    width: wp("21%"),
    minWidth: wp("21%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("11%"),
    top: hp("5%"),
    justifyContent: "flex-start"
  },
  Text_200_927: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 9.389691352844238,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_200_928: {
    width: wp("3%"),
    height: hp("2%"),
    top: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("50%")
  },
  ImageBackground_200_930: {
    width: wp("4%"),
    height: hp("2%"),
    top: hp("15%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%")
  },
  View_200_937: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("11%"),
    minHeight: hp("11%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("17%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_200_938: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("11%"),
    minHeight: hp("11%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_200_939: {
    width: wp("30%"),
    minWidth: wp("30%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("25%"),
    top: hp("3%"),
    justifyContent: "flex-start"
  },
  Text_200_939: {
    color: "rgba(48, 157, 143, 1)",
    fontSize: 10.490567207336426,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_200_940: {
    width: wp("38%"),
    minWidth: wp("38%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("26%"),
    top: hp("6%"),
    justifyContent: "flex-start"
  },
  Text_200_940: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 10.490567207336426,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_200_941: {
    width: wp("14%"),
    minWidth: wp("14%"),
    height: hp("7%"),
    minHeight: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8%"),
    top: hp("2%")
  },
  ImageBackground_200_942: {
    width: wp("12%"),
    minWidth: wp("12%"),
    height: hp("6%"),
    minHeight: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9%"),
    top: hp("3%")
  },
  View_200_943: {
    width: wp("86%"),
    minWidth: wp("86%"),
    height: hp("30%"),
    minHeight: hp("30%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7%"),
    top: hp("84%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_200_944: {
    width: wp("85%"),
    minWidth: wp("85%"),
    height: hp("30%"),
    minHeight: hp("30%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_200_945: {
    width: wp("85%"),
    minWidth: wp("85%"),
    height: hp("6%"),
    minHeight: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(48, 157, 143, 1)",
    borderTopLeftRadius: 10.065255165100098,
    borderTopRightRadius: 10.065255165100098,
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0
  },
  View_200_946: {
    width: wp("25%"),
    minWidth: wp("25%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("10%"),
    top: hp("1%"),
    justifyContent: "flex-start"
  },
  Text_200_946: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 12.097882270812988,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_200_947: {
    width: wp("39%"),
    minWidth: wp("39%"),
    minHeight: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("12%"),
    top: hp("8%"),
    justifyContent: "flex-start"
  },
  Text_200_947: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 5.548941135406494,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_200_948: {
    width: wp("21%"),
    minWidth: wp("21%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("62%"),
    top: hp("8%"),
    justifyContent: "flex-start"
  },
  Text_200_948: {
    color: "rgba(48, 157, 143, 1)",
    fontSize: 5.548941135406494,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_200_949: {
    width: wp("86%"),
    minWidth: wp("86%"),
    height: hp("0%"),
    minHeight: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("11%")
  },
  ImageBackground_200_950: {
    width: wp("2%"),
    height: hp("1%"),
    top: hp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8%")
  },
  ImageBackground_200_951: {
    width: wp("3%"),
    height: hp("2%"),
    top: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%")
  },
  View_200_954: {
    width: wp("85%"),
    minWidth: wp("85%"),
    height: hp("30%"),
    minHeight: hp("30%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7%"),
    top: hp("118%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_200_955: {
    width: wp("85%"),
    minWidth: wp("85%"),
    height: hp("30%"),
    minHeight: hp("30%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_200_956: {
    width: wp("85%"),
    minWidth: wp("85%"),
    height: hp("5%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(48, 157, 143, 1)",
    borderTopLeftRadius: 9.988943099975586,
    borderTopRightRadius: 9.988943099975586,
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0
  },
  View_200_957: {
    width: wp("22%"),
    minWidth: wp("22%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("10%"),
    top: hp("1%"),
    justifyContent: "flex-start"
  },
  Text_200_957: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 11.983414649963379,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_200_958: {
    width: wp("32%"),
    minWidth: wp("32%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("14%"),
    top: hp("7%"),
    justifyContent: "flex-start"
  },
  Text_200_958: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 10.277118682861328,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_200_959: {
    width: wp("5%"),
    minWidth: wp("5%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("77%"),
    top: hp("7%"),
    justifyContent: "flex-start"
  },
  Text_200_959: {
    color: "rgba(48, 157, 143, 1)",
    fontSize: 10.277118682861328,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_200_960: {
    width: wp("27%"),
    minWidth: wp("27%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("14%"),
    top: hp("18%"),
    justifyContent: "flex-start"
  },
  Text_200_960: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 10.26876163482666,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_200_961: {
    width: wp("20%"),
    minWidth: wp("20%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("14%"),
    top: hp("25%"),
    justifyContent: "flex-start"
  },
  Text_200_961: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 10.26876163482666,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_200_962: {
    width: wp("21%"),
    minWidth: wp("21%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("61%"),
    top: hp("18%"),
    justifyContent: "flex-start"
  },
  Text_200_962: {
    color: "rgba(48, 157, 143, 1)",
    fontSize: 10.26876163482666,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_200_963: {
    width: wp("8%"),
    minWidth: wp("8%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("73%"),
    top: hp("25%"),
    justifyContent: "flex-start"
  },
  Text_200_963: {
    color: "rgba(48, 157, 143, 1)",
    fontSize: 10.26876163482666,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_200_964: {
    width: wp("12%"),
    minWidth: wp("12%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("14%"),
    top: hp("13%"),
    justifyContent: "flex-start"
  },
  Text_200_964: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 10.26876163482666,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_200_965: {
    width: wp("9%"),
    minWidth: wp("9%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("73%"),
    top: hp("14%"),
    justifyContent: "flex-start"
  },
  Text_200_965: {
    color: "rgba(48, 157, 143, 1)",
    fontSize: 10.26876163482666,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_200_966: {
    width: wp("4%"),
    height: hp("2%"),
    top: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%")
  },
  ImageBackground_200_967: {
    width: wp("85%"),
    minWidth: wp("85%"),
    height: hp("0%"),
    minHeight: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("11%")
  },
  ImageBackground_200_968: {
    width: wp("85%"),
    minWidth: wp("85%"),
    height: hp("0%"),
    minHeight: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("17%")
  },
  ImageBackground_200_969: {
    width: wp("85%"),
    minWidth: wp("85%"),
    height: hp("0%"),
    minHeight: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("23%")
  },
  ImageBackground_200_970: {
    width: wp("4%"),
    height: hp("2%"),
    top: hp("19%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8%")
  },
  ImageBackground_200_973: {
    width: wp("3%"),
    height: hp("2%"),
    top: hp("13%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8%")
  },
  ImageBackground_200_976: {
    width: wp("3%"),
    height: hp("2%"),
    top: hp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9%")
  },
  ImageBackground_200_977: {
    width: wp("5%"),
    height: hp("2%"),
    top: hp("25%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8%")
  },
  ImageBackground_200_981: {
    width: wp("12%"),
    height: hp("1%"),
    top: hp("13%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("70%")
  },
  View_200_987: {
    width: wp("85%"),
    minWidth: wp("85%"),
    height: hp("28%"),
    minHeight: hp("28%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8%"),
    top: hp("152%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_200_988: {
    width: wp("85%"),
    minWidth: wp("85%"),
    height: hp("26%"),
    minHeight: hp("26%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_200_989: {
    width: wp("85%"),
    minWidth: wp("85%"),
    height: hp("5%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(48, 157, 143, 1)",
    borderTopLeftRadius: 4.820018291473389,
    borderTopRightRadius: 4.820018291473389,
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0
  },
  View_200_990: {
    width: wp("37%"),
    minWidth: wp("37%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("10%"),
    top: hp("1%"),
    justifyContent: "flex-start"
  },
  Text_200_990: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 11.979952812194824,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_200_991: {
    width: wp("78%"),
    minWidth: wp("78%"),
    height: hp("13%"),
    minHeight: hp("13%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    top: hp("12%"),
    borderColor: "rgba(189, 189, 189, 1)",
    borderWidth: 0.2410009205341339
  },
  View_200_992: {
    width: wp("20%"),
    minWidth: wp("20%"),
    minHeight: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7%"),
    top: hp("14%"),
    justifyContent: "flex-start"
  },
  Text_200_992: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 6.230027675628662,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_200_993: {
    width: wp("13%"),
    minWidth: wp("13%"),
    minHeight: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7%"),
    top: hp("20%"),
    justifyContent: "flex-start"
  },
  Text_200_993: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 6.230027675628662,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_200_994: {
    width: wp("17%"),
    minWidth: wp("17%"),
    minHeight: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("34%"),
    top: hp("14%"),
    justifyContent: "flex-start"
  },
  Text_200_994: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 6.230027675628662,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_200_995: {
    width: wp("24%"),
    minWidth: wp("24%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("34%"),
    top: hp("19%"),
    justifyContent: "flex-start"
  },
  Text_200_995: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 6.230027675628662,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_200_996: {
    width: wp("78%"),
    minWidth: wp("78%"),
    height: hp("0%"),
    minHeight: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    top: hp("18%")
  },
  View_200_997: {
    width: wp("76%"),
    minWidth: wp("76%"),
    height: hp("1%"),
    minHeight: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    top: hp("9%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderColor: "rgba(0, 0, 0, 1)",
    borderWidth: 0.2410009205341339
  },
  View_200_998: {
    width: wp("78%"),
    minWidth: wp("78%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    top: hp("8%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderColor: "rgba(196, 196, 196, 1)",
    borderWidth: 0.2410009205341339
  },
  View_200_999: {
    width: wp("16%"),
    minWidth: wp("16%"),
    minHeight: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%"),
    top: hp("8%"),
    justifyContent: "flex-start"
  },
  Text_200_999: {
    color: "rgba(48, 157, 143, 1)",
    fontSize: 6.230027675628662,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_200_1000: {
    width: wp("10%"),
    minWidth: wp("10%"),
    minHeight: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("34%"),
    top: hp("8%"),
    justifyContent: "flex-start"
  },
  Text_200_1000: {
    color: "rgba(48, 157, 143, 1)",
    fontSize: 6.230027675628662,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_200_1001: {
    width: wp("11%"),
    minWidth: wp("11%"),
    minHeight: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("66%"),
    top: hp("8%"),
    justifyContent: "flex-start"
  },
  Text_200_1001: {
    color: "rgba(48, 157, 143, 1)",
    fontSize: 6.230027675628662,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_200_1002: {
    width: wp("12%"),
    height: hp("1%"),
    top: hp("20%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("66%")
  },
  ImageBackground_200_1008: {
    width: wp("12%"),
    height: hp("1%"),
    top: hp("13%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("66%")
  },
  View_200_1014: {
    width: wp("7%"),
    minWidth: wp("7%"),
    minHeight: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("67%"),
    top: hp("15%"),
    justifyContent: "flex-start"
  },
  Text_200_1014: {
    color: "rgba(48, 157, 143, 1)",
    fontSize: 3.8200182914733887,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_200_1015: {
    width: wp("7%"),
    minWidth: wp("7%"),
    minHeight: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("67%"),
    top: hp("22%"),
    justifyContent: "flex-start"
  },
  Text_200_1015: {
    color: "rgba(48, 157, 143, 1)",
    fontSize: 3.8200182914733887,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_200_1016: {
    width: wp("12%"),
    minWidth: wp("12%"),
    height: hp("2%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("37%"),
    top: hp("26%"),
    backgroundColor: "rgba(48, 157, 143, 1)"
  },
  View_200_1017: {
    width: wp("6%"),
    minWidth: wp("6%"),
    minHeight: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_200_1017: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 4.276017189025879,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_200_1018: {
    width: wp("4%"),
    height: hp("2%"),
    top: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%")
  },
  View_200_1022: {
    width: wp("86%"),
    minWidth: wp("86%"),
    height: hp("27%"),
    minHeight: hp("27%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7%"),
    top: hp("53%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_200_1023: {
    width: wp("86%"),
    minWidth: wp("86%"),
    height: hp("27%"),
    minHeight: hp("27%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_200_1024: {
    width: wp("86%"),
    minWidth: wp("86%"),
    height: hp("5%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(48, 157, 143, 1)",
    borderTopLeftRadius: 4.851893424987793,
    borderTopRightRadius: 4.851893424987793,
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0
  },
  View_200_1025: {
    width: wp("39%"),
    minWidth: wp("39%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("10%"),
    top: hp("1%"),
    justifyContent: "flex-start"
  },
  Text_200_1025: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 11.960002899169922,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_200_1026: {
    width: wp("12%"),
    minWidth: wp("12%"),
    height: hp("2%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("37%"),
    top: hp("25%"),
    backgroundColor: "rgba(48, 157, 143, 1)"
  },
  View_200_1027: {
    width: wp("6%"),
    minWidth: wp("6%"),
    minHeight: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_200_1027: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 4.310905933380127,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_200_1028: {
    width: wp("77%"),
    minWidth: wp("77%"),
    height: hp("1%"),
    minHeight: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    top: hp("8%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderColor: "rgba(0, 0, 0, 1)",
    borderWidth: 0.2425946593284607
  },
  View_200_1029: {
    width: wp("79%"),
    minWidth: wp("79%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    top: hp("6%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderColor: "rgba(196, 196, 196, 1)",
    borderWidth: 0.2425946593284607
  },
  View_200_1030: {
    width: wp("79%"),
    minWidth: wp("79%"),
    height: hp("13%"),
    minHeight: hp("13%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    top: hp("10%"),
    borderColor: "rgba(189, 189, 189, 1)",
    borderWidth: 0.2425946593284607
  },
  View_200_1031: {
    width: wp("5%"),
    minWidth: wp("5%"),
    minHeight: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("41%"),
    top: hp("7%"),
    justifyContent: "flex-start"
  },
  Text_200_1031: {
    color: "rgba(48, 157, 143, 1)",
    fontSize: 5.981335163116455,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_200_1032: {
    width: wp("12%"),
    minWidth: wp("12%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("41%"),
    top: hp("11%"),
    justifyContent: "flex-start"
  },
  Text_200_1032: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 5.064866065979004,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_200_1033: {
    width: wp("10%"),
    minWidth: wp("10%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("41%"),
    top: hp("15%"),
    justifyContent: "flex-start"
  },
  Text_200_1033: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 5.064866065979004,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_200_1034: {
    width: wp("10%"),
    minWidth: wp("10%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("41%"),
    top: hp("20%"),
    justifyContent: "flex-start"
  },
  Text_200_1034: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 5.064866065979004,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_200_1035: {
    width: wp("16%"),
    minWidth: wp("16%"),
    minHeight: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9%"),
    top: hp("7%"),
    justifyContent: "flex-start"
  },
  Text_200_1035: {
    color: "rgba(48, 157, 143, 1)",
    fontSize: 5.981335163116455,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_200_1036: {
    width: wp("17%"),
    minWidth: wp("17%"),
    minHeight: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9%"),
    top: hp("11%"),
    justifyContent: "flex-start"
  },
  Text_200_1036: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 5.064866065979004,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_200_1037: {
    width: wp("14%"),
    minWidth: wp("14%"),
    minHeight: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9%"),
    top: hp("15%"),
    justifyContent: "flex-start"
  },
  Text_200_1037: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 5.064866065979004,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_200_1038: {
    width: wp("14%"),
    minWidth: wp("14%"),
    minHeight: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9%"),
    top: hp("20%"),
    justifyContent: "flex-start"
  },
  Text_200_1038: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 5.064866065979004,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_200_1039: {
    width: wp("5%"),
    minWidth: wp("5%"),
    height: hp("1%"),
    minHeight: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("72%"),
    top: hp("12%"),
    backgroundColor: "rgba(48, 157, 143, 1)"
  },
  View_200_1040: {
    width: wp("2%"),
    minWidth: wp("2%"),
    minHeight: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_200_1040: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 2.3014702796936035,
    fontWeight: "600",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_200_1041: {
    width: wp("5%"),
    minWidth: wp("5%"),
    height: hp("1%"),
    minHeight: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("72%"),
    top: hp("16%"),
    backgroundColor: "rgba(48, 157, 143, 1)"
  },
  View_200_1042: {
    width: wp("2%"),
    minWidth: wp("2%"),
    minHeight: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_200_1042: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 2.3014702796936035,
    fontWeight: "600",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_200_1043: {
    width: wp("5%"),
    minWidth: wp("5%"),
    height: hp("1%"),
    minHeight: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("72%"),
    top: hp("20%"),
    backgroundColor: "rgba(48, 157, 143, 1)"
  },
  View_200_1044: {
    width: wp("2%"),
    minWidth: wp("2%"),
    minHeight: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_200_1044: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 2.3014702796936035,
    fontWeight: "600",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_200_1045: {
    width: wp("6%"),
    minWidth: wp("6%"),
    minHeight: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("72%"),
    top: hp("7%"),
    justifyContent: "flex-start"
  },
  Text_200_1045: {
    color: "rgba(48, 157, 143, 1)",
    fontSize: 5.981335163116455,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_200_1046: {
    width: wp("79%"),
    minWidth: wp("79%"),
    height: hp("0%"),
    minHeight: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    top: hp("15%")
  },
  ImageBackground_200_1047: {
    width: wp("79%"),
    minWidth: wp("79%"),
    height: hp("0%"),
    minHeight: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    top: hp("19%")
  },
  ImageBackground_200_1048: {
    width: wp("5%"),
    height: hp("2%"),
    top: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%")
  }
})

const mapStateToProps = state => {
  return {}
}
const mapDispatchToProps = () => {
  return {}
}
export default connect(mapStateToProps, mapDispatchToProps)(Blank)
