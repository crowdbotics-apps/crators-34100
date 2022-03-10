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
      <View style={styles.View_200_512}>
        <View style={styles.View_200_513} />
        <View style={styles.View_200_514}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/c78a/5bdf/8df1323d87ff79c5a7d36f96b0228975"
            }}
            style={styles.ImageBackground_200_515}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/187f/69fa/dfa98a845627d36d65cc73e4b3f304b8"
            }}
            style={styles.ImageBackground_200_517}
          />
          <View style={styles.View_200_520}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a930/9c43/f8be4578e6cc748227b7f11f9761136a"
              }}
              style={styles.ImageBackground_200_521}
            />
            <View style={styles.View_200_522}>
              <Text style={styles.Text_200_522}>5</Text>
            </View>
          </View>
          <View style={styles.View_200_523}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/7623/4d95/23fbe9ab8b5cc002ef4d04d2f4cee898"
              }}
              style={styles.ImageBackground_200_524}
            />
            <View style={styles.View_200_525}>
              <Text style={styles.Text_200_525}>5</Text>
            </View>
          </View>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/7549/914c/1b9c5fd1fb1faf161873a8a253ed3c42"
          }}
          style={styles.ImageBackground_200_526}
        />
      </View>
      <View style={styles.View_200_527}>
        <View style={styles.View_200_528}>
          <View style={styles.View_200_529} />
          <View style={styles.View_200_530} />
          <View style={styles.View_200_531}>
            <Text style={styles.Text_200_531}>12</Text>
          </View>
          <View style={styles.View_200_532}>
            <Text style={styles.Text_200_532}>New Appointments</Text>
          </View>
        </View>
        <View style={styles.View_200_533}>
          <View style={styles.View_200_534} />
          <View style={styles.View_200_535}>
            <Text style={styles.Text_200_535}>Wallet Balance</Text>
          </View>
          <View style={styles.View_200_536}>
            <Text style={styles.Text_200_536}>N350,000:89</Text>
          </View>
          <View style={styles.View_200_537} />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/cbc1/621a/61f3cbc1bd5ad9361be4287ff5644821"
            }}
            style={styles.ImageBackground_200_538}
          />
        </View>
        <View style={styles.View_200_539}>
          <View style={styles.View_200_540} />
          <View style={styles.View_200_541} />
          <View style={styles.View_200_542}>
            <Text style={styles.Text_200_542}>12</Text>
          </View>
          <View style={styles.View_200_543}>
            <Text style={styles.Text_200_543}>Total Patients</Text>
          </View>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/ceb8/3de2/43f7c8aa714aaa374d2a66d30b0bab62"
          }}
          style={styles.ImageBackground_200_544}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/b8cf/b0e4/399ef3896f388c335a50a1a95d1ae74f"
          }}
          style={styles.ImageBackground_200_546}
        />
      </View>
      <View style={styles.View_200_553}>
        <View style={styles.View_200_554} />
        <View style={styles.View_200_555}>
          <Text style={styles.Text_200_555}>Dr. Yemi Osinbajo</Text>
        </View>
        <View style={styles.View_200_556}>
          <Text style={styles.Text_200_556}>Welcome to your Page</Text>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/0ad8/b987/23d22bd2e778701dc9c2a7578bf781b0"
          }}
          style={styles.ImageBackground_200_557}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/7db2/25b5/37acbf3ab08751e3e5fd5f43ea251ce2"
          }}
          style={styles.ImageBackground_200_558}
        />
      </View>
      <View style={styles.View_200_559}>
        <View style={styles.View_200_560} />
        <View style={styles.View_200_561} />
        <View style={styles.View_200_562}>
          <Text style={styles.Text_200_562}>Notifications</Text>
        </View>
        <View style={styles.View_200_563}>
          <Text style={styles.Text_200_563}>
            Someone has booked an appointment
          </Text>
        </View>
        <View style={styles.View_200_564}>
          <Text style={styles.Text_200_564}>20/08/2020 8:04pm</Text>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/4b66/b78d/0c2cfb26dab15445bd743bdcb87aad3c"
          }}
          style={styles.ImageBackground_200_565}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a8f9/ebd1/a841a6d46cf894de5a68510317cdc506"
          }}
          style={styles.ImageBackground_200_566}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2698/ad1b/30a9109cb63d875efc7b03e32817c9c5"
          }}
          style={styles.ImageBackground_200_567}
        />
      </View>
      <View style={styles.View_200_570}>
        <View style={styles.View_200_571} />
        <View style={styles.View_200_572} />
        <View style={styles.View_200_573}>
          <Text style={styles.Text_200_573}>Your Stats</Text>
        </View>
        <View style={styles.View_200_574}>
          <Text style={styles.Text_200_574}>No. of attended to</Text>
        </View>
        <View style={styles.View_200_575}>
          <Text style={styles.Text_200_575}>118</Text>
        </View>
        <View style={styles.View_200_576}>
          <Text style={styles.Text_200_576}>Wallet Balance</Text>
        </View>
        <View style={styles.View_200_577}>
          <Text style={styles.Text_200_577}>Customers</Text>
        </View>
        <View style={styles.View_200_578}>
          <Text style={styles.Text_200_578}>N450,610:97</Text>
        </View>
        <View style={styles.View_200_579}>
          <Text style={styles.Text_200_579}>1800</Text>
        </View>
        <View style={styles.View_200_580}>
          <Text style={styles.Text_200_580}>Rating</Text>
        </View>
        <View style={styles.View_200_581}>
          <Text style={styles.Text_200_581}>2005</Text>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3d5f/a1f6/7a52bf26ba701ce120ac54430acf1b21"
          }}
          style={styles.ImageBackground_200_582}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/0a50/fae0/34d7729257447aef845ca6c73e369a85"
          }}
          style={styles.ImageBackground_200_583}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/0a50/fae0/34d7729257447aef845ca6c73e369a85"
          }}
          style={styles.ImageBackground_200_584}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/0a50/fae0/34d7729257447aef845ca6c73e369a85"
          }}
          style={styles.ImageBackground_200_585}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/61db/fc61/67658cc9504e06fc6a4743a8573b9189"
          }}
          style={styles.ImageBackground_200_586}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/4ec3/0544/e9da0edda46274e721b0c022cadf4a4c"
          }}
          style={styles.ImageBackground_200_589}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/0ec2/345c/d439935c2ede06876c1ece2fdafb1a54"
          }}
          style={styles.ImageBackground_200_592}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/5af2/28cf/c625ed86eaa3e3e74bbbc3a88cb44929"
          }}
          style={styles.ImageBackground_200_593}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3c0b/088a/983d7f189244e11eb814f9f574c6d081"
          }}
          style={styles.ImageBackground_200_597}
        />
      </View>
      <View style={styles.View_200_603}>
        <View style={styles.View_200_604} />
        <View style={styles.View_200_605} />
        <View style={styles.View_200_606}>
          <Text style={styles.Text_200_606}>Customer Reviews</Text>
        </View>
        <View style={styles.View_200_607} />
        <View style={styles.View_200_608}>
          <Text style={styles.Text_200_608}>Ibrahim Mohammed</Text>
        </View>
        <View style={styles.View_200_609}>
          <Text style={styles.Text_200_609}>Adewale Bala</Text>
        </View>
        <View style={styles.View_200_610}>
          <Text style={styles.Text_200_610}>Great Experience.</Text>
        </View>
        <View style={styles.View_200_611}>
          <Text style={styles.Text_200_611}>
            A very nice and friendly doctor
          </Text>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/07fe/c3f4/4c2c13388a5e5d82469adc85fddb63a9"
          }}
          style={styles.ImageBackground_200_612}
        />
        <View style={styles.View_200_613} />
        <View style={styles.View_200_614} />
        <View style={styles.View_200_615}>
          <Text style={styles.Text_200_615}>Customer Name</Text>
        </View>
        <View style={styles.View_200_616}>
          <Text style={styles.Text_200_616}>Comment</Text>
        </View>
        <View style={styles.View_200_617}>
          <Text style={styles.Text_200_617}>Star &amp; Date</Text>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3c0b/088a/983d7f189244e11eb814f9f574c6d081"
          }}
          style={styles.ImageBackground_200_618}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/28d8/6273/739301bc18545d01033bafd56fb16747"
          }}
          style={styles.ImageBackground_200_624}
        />
        <View style={styles.View_200_630}>
          <Text style={styles.Text_200_630}>20/10/2020</Text>
        </View>
        <View style={styles.View_200_631}>
          <Text style={styles.Text_200_631}>20/10/2020</Text>
        </View>
        <View style={styles.View_200_632}>
          <View style={styles.View_200_633}>
            <Text style={styles.Text_200_633}>View All</Text>
          </View>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/760a/36a1/2f01d4ed072a8ae6744e7f54df0ac142"
          }}
          style={styles.ImageBackground_200_634}
        />
      </View>
      <View style={styles.View_200_638}>
        <View style={styles.View_200_639} />
        <View style={styles.View_200_640} />
        <View style={styles.View_200_641}>
          <Text style={styles.Text_200_641}>New Appointments</Text>
        </View>
        <View style={styles.View_200_642}>
          <View style={styles.View_200_643}>
            <Text style={styles.Text_200_643}>View All</Text>
          </View>
        </View>
        <View style={styles.View_200_644} />
        <View style={styles.View_200_645} />
        <View style={styles.View_200_646} />
        <View style={styles.View_200_647}>
          <Text style={styles.Text_200_647}>Time</Text>
        </View>
        <View style={styles.View_200_648}>
          <Text style={styles.Text_200_648}>Tue, 22/082020 10PM - 11PM</Text>
        </View>
        <View style={styles.View_200_649}>
          <Text style={styles.Text_200_649}>22/08/2020 12PM-1PM</Text>
        </View>
        <View style={styles.View_200_650}>
          <Text style={styles.Text_200_650}>22/08/2020 10:08PM</Text>
        </View>
        <View style={styles.View_200_651}>
          <Text style={styles.Text_200_651}>Customer Name</Text>
        </View>
        <View style={styles.View_200_652}>
          <Text style={styles.Text_200_652}>Ibrahim Mohammed</Text>
        </View>
        <View style={styles.View_200_653}>
          <Text style={styles.Text_200_653}>Adewale Basmus</Text>
        </View>
        <View style={styles.View_200_654}>
          <Text style={styles.Text_200_654}>Adewale Basmus</Text>
        </View>
        <View style={styles.View_200_655}>
          <View style={styles.View_200_656}>
            <Text style={styles.Text_200_656}>View</Text>
          </View>
        </View>
        <View style={styles.View_200_657}>
          <View style={styles.View_200_658}>
            <Text style={styles.Text_200_658}>View</Text>
          </View>
        </View>
        <View style={styles.View_200_659}>
          <View style={styles.View_200_660}>
            <Text style={styles.Text_200_660}>View</Text>
          </View>
        </View>
        <View style={styles.View_200_661}>
          <Text style={styles.Text_200_661}>Action</Text>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/9949/7fef/c89287b9288d9a527460a17160e207d3"
          }}
          style={styles.ImageBackground_200_662}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/9949/7fef/c89287b9288d9a527460a17160e207d3"
          }}
          style={styles.ImageBackground_200_663}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/c670/1eb7/fb790321452781cba0361ebbc642899e"
          }}
          style={styles.ImageBackground_200_664}
        />
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: { backgroundColor: "rgba(252, 252, 252, 1)" },
  View_2: { height: hp("182%") },
  View_200_512: {
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
  View_200_513: {
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
  View_200_514: {
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
  ImageBackground_200_515: {
    width: wp("3%"),
    height: hp("2%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9%")
  },
  ImageBackground_200_517: {
    width: wp("4%"),
    height: hp("2%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_200_520: {
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
  ImageBackground_200_521: {
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
  View_200_522: {
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
  Text_200_522: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 4.285236358642578,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_200_523: {
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
  ImageBackground_200_524: {
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
  View_200_525: {
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
  Text_200_525: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 4.285236358642578,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_200_526: {
    width: wp("5%"),
    height: hp("2%"),
    top: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%")
  },
  View_200_527: {
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
  View_200_528: {
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
  View_200_529: {
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
  View_200_530: {
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
  View_200_531: {
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
  Text_200_531: {
    color: "rgba(48, 157, 143, 1)",
    fontSize: 11.856117248535156,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_200_532: {
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
  Text_200_532: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 9.389691352844238,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_200_533: {
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
  View_200_534: {
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
  View_200_535: {
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
  Text_200_535: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 9.389691352844238,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_200_536: {
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
  Text_200_536: {
    color: "rgba(48, 157, 143, 1)",
    fontSize: 11.856117248535156,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_200_537: {
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
  ImageBackground_200_538: {
    width: wp("4%"),
    height: hp("2%"),
    top: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%")
  },
  View_200_539: {
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
  View_200_540: {
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
  View_200_541: {
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
  View_200_542: {
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
  Text_200_542: {
    color: "rgba(48, 157, 143, 1)",
    fontSize: 11.856117248535156,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_200_543: {
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
  Text_200_543: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 9.389691352844238,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_200_544: {
    width: wp("3%"),
    height: hp("2%"),
    top: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("50%")
  },
  ImageBackground_200_546: {
    width: wp("4%"),
    height: hp("2%"),
    top: hp("15%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%")
  },
  View_200_553: {
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
  View_200_554: {
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
  View_200_555: {
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
  Text_200_555: {
    color: "rgba(48, 157, 143, 1)",
    fontSize: 10.490567207336426,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_200_556: {
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
  Text_200_556: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 10.490567207336426,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_200_557: {
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
  ImageBackground_200_558: {
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
  View_200_559: {
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
  View_200_560: {
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
  View_200_561: {
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
  View_200_562: {
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
  Text_200_562: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 12.097882270812988,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_200_563: {
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
  Text_200_563: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 5.548941135406494,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_200_564: {
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
  Text_200_564: {
    color: "rgba(48, 157, 143, 1)",
    fontSize: 5.548941135406494,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_200_565: {
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
  ImageBackground_200_566: {
    width: wp("2%"),
    height: hp("1%"),
    top: hp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8%")
  },
  ImageBackground_200_567: {
    width: wp("3%"),
    height: hp("2%"),
    top: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%")
  },
  View_200_570: {
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
  View_200_571: {
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
  View_200_572: {
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
  View_200_573: {
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
  Text_200_573: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 11.983414649963379,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_200_574: {
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
  Text_200_574: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 10.277118682861328,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_200_575: {
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
  Text_200_575: {
    color: "rgba(48, 157, 143, 1)",
    fontSize: 10.277118682861328,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_200_576: {
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
  Text_200_576: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 10.26876163482666,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_200_577: {
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
  Text_200_577: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 10.26876163482666,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_200_578: {
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
  Text_200_578: {
    color: "rgba(48, 157, 143, 1)",
    fontSize: 10.26876163482666,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_200_579: {
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
  Text_200_579: {
    color: "rgba(48, 157, 143, 1)",
    fontSize: 10.26876163482666,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_200_580: {
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
  Text_200_580: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 10.26876163482666,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_200_581: {
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
  Text_200_581: {
    color: "rgba(48, 157, 143, 1)",
    fontSize: 10.26876163482666,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_200_582: {
    width: wp("4%"),
    height: hp("2%"),
    top: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%")
  },
  ImageBackground_200_583: {
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
  ImageBackground_200_584: {
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
  ImageBackground_200_585: {
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
  ImageBackground_200_586: {
    width: wp("4%"),
    height: hp("2%"),
    top: hp("19%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8%")
  },
  ImageBackground_200_589: {
    width: wp("3%"),
    height: hp("2%"),
    top: hp("13%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8%")
  },
  ImageBackground_200_592: {
    width: wp("3%"),
    height: hp("2%"),
    top: hp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9%")
  },
  ImageBackground_200_593: {
    width: wp("5%"),
    height: hp("2%"),
    top: hp("25%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8%")
  },
  ImageBackground_200_597: {
    width: wp("12%"),
    height: hp("1%"),
    top: hp("13%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("70%")
  },
  View_200_603: {
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
  View_200_604: {
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
  View_200_605: {
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
  View_200_606: {
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
  Text_200_606: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 11.979952812194824,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_200_607: {
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
  View_200_608: {
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
  Text_200_608: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 6.230027675628662,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_200_609: {
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
  Text_200_609: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 6.230027675628662,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_200_610: {
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
  Text_200_610: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 6.230027675628662,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_200_611: {
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
  Text_200_611: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 6.230027675628662,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_200_612: {
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
  View_200_613: {
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
  View_200_614: {
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
  View_200_615: {
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
  Text_200_615: {
    color: "rgba(48, 157, 143, 1)",
    fontSize: 6.230027675628662,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_200_616: {
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
  Text_200_616: {
    color: "rgba(48, 157, 143, 1)",
    fontSize: 6.230027675628662,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_200_617: {
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
  Text_200_617: {
    color: "rgba(48, 157, 143, 1)",
    fontSize: 6.230027675628662,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_200_618: {
    width: wp("12%"),
    height: hp("1%"),
    top: hp("20%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("66%")
  },
  ImageBackground_200_624: {
    width: wp("12%"),
    height: hp("1%"),
    top: hp("13%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("66%")
  },
  View_200_630: {
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
  Text_200_630: {
    color: "rgba(48, 157, 143, 1)",
    fontSize: 3.8200182914733887,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_200_631: {
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
  Text_200_631: {
    color: "rgba(48, 157, 143, 1)",
    fontSize: 3.8200182914733887,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_200_632: {
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
  View_200_633: {
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
  Text_200_633: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 4.276017189025879,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_200_634: {
    width: wp("4%"),
    height: hp("2%"),
    top: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%")
  },
  View_200_638: {
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
  View_200_639: {
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
  View_200_640: {
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
  View_200_641: {
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
  Text_200_641: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 11.960002899169922,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_200_642: {
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
  View_200_643: {
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
  Text_200_643: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 4.310905933380127,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_200_644: {
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
  View_200_645: {
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
  View_200_646: {
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
  View_200_647: {
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
  Text_200_647: {
    color: "rgba(48, 157, 143, 1)",
    fontSize: 5.981335163116455,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_200_648: {
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
  Text_200_648: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 5.064866065979004,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_200_649: {
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
  Text_200_649: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 5.064866065979004,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_200_650: {
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
  Text_200_650: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 5.064866065979004,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_200_651: {
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
  Text_200_651: {
    color: "rgba(48, 157, 143, 1)",
    fontSize: 5.981335163116455,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_200_652: {
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
  Text_200_652: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 5.064866065979004,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_200_653: {
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
  Text_200_653: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 5.064866065979004,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_200_654: {
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
  Text_200_654: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 5.064866065979004,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_200_655: {
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
  View_200_656: {
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
  Text_200_656: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 2.3014702796936035,
    fontWeight: "600",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_200_657: {
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
  View_200_658: {
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
  Text_200_658: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 2.3014702796936035,
    fontWeight: "600",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_200_659: {
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
  View_200_660: {
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
  Text_200_660: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 2.3014702796936035,
    fontWeight: "600",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_200_661: {
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
  Text_200_661: {
    color: "rgba(48, 157, 143, 1)",
    fontSize: 5.981335163116455,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_200_662: {
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
  ImageBackground_200_663: {
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
  ImageBackground_200_664: {
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
