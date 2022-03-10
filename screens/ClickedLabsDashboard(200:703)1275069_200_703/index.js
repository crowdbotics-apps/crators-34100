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
      <View style={styles.View_200_704}>
        <View style={styles.View_200_705} />
        <View style={styles.View_200_706}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/fd48/97d8/9e524c67fc0d7f37687a285ae1e9cc73"
            }}
            style={styles.ImageBackground_200_707}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2f57/50f0/bb5307b43df4eff3538c7fe14a630797"
            }}
            style={styles.ImageBackground_200_709}
          />
          <View style={styles.View_200_712}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a930/9c43/f8be4578e6cc748227b7f11f9761136a"
              }}
              style={styles.ImageBackground_200_713}
            />
            <View style={styles.View_200_714}>
              <Text style={styles.Text_200_714}>5</Text>
            </View>
          </View>
          <View style={styles.View_200_715}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/7623/4d95/23fbe9ab8b5cc002ef4d04d2f4cee898"
              }}
              style={styles.ImageBackground_200_716}
            />
            <View style={styles.View_200_717}>
              <Text style={styles.Text_200_717}>5</Text>
            </View>
          </View>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/7549/914c/1b9c5fd1fb1faf161873a8a253ed3c42"
          }}
          style={styles.ImageBackground_200_718}
        />
      </View>
      <View style={styles.View_200_719}>
        <View style={styles.View_200_720}>
          <View style={styles.View_200_721} />
          <View style={styles.View_200_722} />
          <View style={styles.View_200_723}>
            <Text style={styles.Text_200_723}>12</Text>
          </View>
          <View style={styles.View_200_724}>
            <Text style={styles.Text_200_724}>New Appointments</Text>
          </View>
        </View>
        <View style={styles.View_200_725}>
          <View style={styles.View_200_726} />
          <View style={styles.View_200_727}>
            <Text style={styles.Text_200_727}>Wallet Balance</Text>
          </View>
          <View style={styles.View_200_728}>
            <Text style={styles.Text_200_728}>N350,000:89</Text>
          </View>
          <View style={styles.View_200_729} />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/6b05/d275/12fd2100e6d15118e78891b3d99f9499"
            }}
            style={styles.ImageBackground_200_730}
          />
        </View>
        <View style={styles.View_200_731}>
          <View style={styles.View_200_732} />
          <View style={styles.View_200_733} />
          <View style={styles.View_200_734}>
            <Text style={styles.Text_200_734}>12</Text>
          </View>
          <View style={styles.View_200_735}>
            <Text style={styles.Text_200_735}>Total Patients</Text>
          </View>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3375/ec7b/66d64c63622da9a8eb71f90e4bee29a4"
          }}
          style={styles.ImageBackground_200_736}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2bb4/04c3/63c70467f23957a72f06a759ff748e8b"
          }}
          style={styles.ImageBackground_200_738}
        />
      </View>
      <View style={styles.View_200_745}>
        <View style={styles.View_200_746} />
        <View style={styles.View_200_747}>
          <Text style={styles.Text_200_747}>Ope Pharmaceuticals Labs</Text>
        </View>
        <View style={styles.View_200_748}>
          <Text style={styles.Text_200_748}>Welcome to your Page</Text>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a76e/6fb3/3e5d5ddc62e4287f044d9244212df223"
          }}
          style={styles.ImageBackground_200_749}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/d4f1/a435/3b8e0ee34b65e1a6fd0bcccccac4077d"
          }}
          style={styles.ImageBackground_200_750}
        />
      </View>
      <View style={styles.View_200_751}>
        <View style={styles.View_200_752} />
        <View style={styles.View_200_753} />
        <View style={styles.View_200_754}>
          <Text style={styles.Text_200_754}>Notifications</Text>
        </View>
        <View style={styles.View_200_755}>
          <Text style={styles.Text_200_755}>
            Someone has booked an appointment
          </Text>
        </View>
        <View style={styles.View_200_756}>
          <Text style={styles.Text_200_756}>20/08/2020 8:04pm</Text>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/7540/0c07/86ed9b88f4f32d3e409fc7b792b0d62f"
          }}
          style={styles.ImageBackground_200_757}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/ba2c/6653/c4199f488a262a1331e04e6f0019002d"
          }}
          style={styles.ImageBackground_200_758}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a322/825f/05677d6fc5f736ec0a31afd4d7292b01"
          }}
          style={styles.ImageBackground_200_759}
        />
      </View>
      <View style={styles.View_200_762}>
        <View style={styles.View_200_763} />
        <View style={styles.View_200_764} />
        <View style={styles.View_200_765}>
          <Text style={styles.Text_200_765}>Your Stats</Text>
        </View>
        <View style={styles.View_200_766}>
          <Text style={styles.Text_200_766}>No. of attended to</Text>
        </View>
        <View style={styles.View_200_767}>
          <Text style={styles.Text_200_767}>118</Text>
        </View>
        <View style={styles.View_200_768}>
          <Text style={styles.Text_200_768}>Wallet Balance</Text>
        </View>
        <View style={styles.View_200_769}>
          <Text style={styles.Text_200_769}>Customers</Text>
        </View>
        <View style={styles.View_200_770}>
          <Text style={styles.Text_200_770}>N450,610:97</Text>
        </View>
        <View style={styles.View_200_771}>
          <Text style={styles.Text_200_771}>1800</Text>
        </View>
        <View style={styles.View_200_772}>
          <Text style={styles.Text_200_772}>Rating</Text>
        </View>
        <View style={styles.View_200_773}>
          <Text style={styles.Text_200_773}>2005</Text>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/34aa/5ee8/f4e0e65eeb82a291279feb7589b85136"
          }}
          style={styles.ImageBackground_200_774}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/d6a4/017e/85f9c2d546a1c610437b3d5f3a71ed1a"
          }}
          style={styles.ImageBackground_200_775}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/d6a4/017e/85f9c2d546a1c610437b3d5f3a71ed1a"
          }}
          style={styles.ImageBackground_200_776}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/d6a4/017e/85f9c2d546a1c610437b3d5f3a71ed1a"
          }}
          style={styles.ImageBackground_200_777}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/9d2b/9113/731c8b65c306c81ce0b668cdbce97bf0"
          }}
          style={styles.ImageBackground_200_778}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1fb9/164a/e56ba3044cf3ca445b00e36555283d9e"
          }}
          style={styles.ImageBackground_200_781}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/7761/aeb1/a35f24a82bbcd4194f083e5d0316a78b"
          }}
          style={styles.ImageBackground_200_784}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/d0b5/a6cd/0529dcbfcd4fcc27a2665eaec6945e9d"
          }}
          style={styles.ImageBackground_200_785}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/994a/b92e/ed149c0aeea2cea3ef0abc92e85826a1"
          }}
          style={styles.ImageBackground_200_789}
        />
      </View>
      <View style={styles.View_200_795}>
        <View style={styles.View_200_796} />
        <View style={styles.View_200_797} />
        <View style={styles.View_200_798}>
          <Text style={styles.Text_200_798}>Customer Reviews</Text>
        </View>
        <View style={styles.View_200_799} />
        <View style={styles.View_200_800}>
          <Text style={styles.Text_200_800}>Ibrahim Mohammed</Text>
        </View>
        <View style={styles.View_200_801}>
          <Text style={styles.Text_200_801}>Adewale Bala</Text>
        </View>
        <View style={styles.View_200_802}>
          <Text style={styles.Text_200_802}>Great Experience.</Text>
        </View>
        <View style={styles.View_200_803}>
          <Text style={styles.Text_200_803}>
            A very nice and friendly doctor
          </Text>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/d33f/dd34/553e443af8e0349d3bd422ff323ad1bc"
          }}
          style={styles.ImageBackground_200_804}
        />
        <View style={styles.View_200_805} />
        <View style={styles.View_200_806} />
        <View style={styles.View_200_807}>
          <Text style={styles.Text_200_807}>Customer Name</Text>
        </View>
        <View style={styles.View_200_808}>
          <Text style={styles.Text_200_808}>Comment</Text>
        </View>
        <View style={styles.View_200_809}>
          <Text style={styles.Text_200_809}>Star &amp; Date</Text>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/994a/b92e/ed149c0aeea2cea3ef0abc92e85826a1"
          }}
          style={styles.ImageBackground_200_810}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/8ad5/a6c4/432bb3cd0287aeb36664002931c7d43e"
          }}
          style={styles.ImageBackground_200_816}
        />
        <View style={styles.View_200_822}>
          <Text style={styles.Text_200_822}>20/10/2020</Text>
        </View>
        <View style={styles.View_200_823}>
          <Text style={styles.Text_200_823}>20/10/2020</Text>
        </View>
        <View style={styles.View_200_824}>
          <View style={styles.View_200_825}>
            <Text style={styles.Text_200_825}>View All</Text>
          </View>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/6aed/9b31/f08231392c161e3159aac2b0efefa2d6"
          }}
          style={styles.ImageBackground_200_826}
        />
      </View>
      <View style={styles.View_200_830}>
        <View style={styles.View_200_831} />
        <View style={styles.View_200_832} />
        <View style={styles.View_200_833}>
          <Text style={styles.Text_200_833}>New Appointments</Text>
        </View>
        <View style={styles.View_200_834}>
          <View style={styles.View_200_835}>
            <Text style={styles.Text_200_835}>View All</Text>
          </View>
        </View>
        <View style={styles.View_200_836} />
        <View style={styles.View_200_837} />
        <View style={styles.View_200_838} />
        <View style={styles.View_200_839}>
          <Text style={styles.Text_200_839}>Time</Text>
        </View>
        <View style={styles.View_200_840}>
          <Text style={styles.Text_200_840}>Tue, 22/082020 10PM - 11PM</Text>
        </View>
        <View style={styles.View_200_841}>
          <Text style={styles.Text_200_841}>22/08/2020 12PM-1PM</Text>
        </View>
        <View style={styles.View_200_842}>
          <Text style={styles.Text_200_842}>22/08/2020 10:08PM</Text>
        </View>
        <View style={styles.View_200_843}>
          <Text style={styles.Text_200_843}>Customer Name</Text>
        </View>
        <View style={styles.View_200_844}>
          <Text style={styles.Text_200_844}>Ibrahim Mohammed</Text>
        </View>
        <View style={styles.View_200_845}>
          <Text style={styles.Text_200_845}>Adewale Basmus</Text>
        </View>
        <View style={styles.View_200_846}>
          <Text style={styles.Text_200_846}>Adewale Basmus</Text>
        </View>
        <View style={styles.View_200_847}>
          <View style={styles.View_200_848}>
            <Text style={styles.Text_200_848}>View</Text>
          </View>
        </View>
        <View style={styles.View_200_849}>
          <View style={styles.View_200_850}>
            <Text style={styles.Text_200_850}>View</Text>
          </View>
        </View>
        <View style={styles.View_200_851}>
          <View style={styles.View_200_852}>
            <Text style={styles.Text_200_852}>View</Text>
          </View>
        </View>
        <View style={styles.View_200_853}>
          <Text style={styles.Text_200_853}>Action</Text>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1b25/6f18/a0971726c9a3db22748a8ce7352c5df6"
          }}
          style={styles.ImageBackground_200_854}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1b25/6f18/a0971726c9a3db22748a8ce7352c5df6"
          }}
          style={styles.ImageBackground_200_855}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/e9fd/25c4/387a9f122156dce1a43c1eb749865bfd"
          }}
          style={styles.ImageBackground_200_856}
        />
      </View>
      <View style={styles.View_200_863}>
        <View style={styles.View_200_864} />
        <View style={styles.View_200_865} />
        <View style={styles.View_200_866}>
          <View style={styles.View_200_867}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/bc0f/be55/b2d763216f5ba393ee5c84acfe4fe09f"
              }}
              style={styles.ImageBackground_200_868}
            />
            <View style={styles.View_200_869}>
              <Text style={styles.Text_200_869}>Home</Text>
            </View>
          </View>
          <View style={styles.View_200_870}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/ca99/b948/b677beec67b7e3ace2b0355898047083"
              }}
              style={styles.ImageBackground_200_1056}
            />
            <View style={styles.View_200_872}>
              <Text style={styles.Text_200_872}>Services</Text>
            </View>
          </View>
          <View style={styles.View_200_873}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/6e3c/ad37/c4a6cef565e678b35acf7f2dc792d0fb"
              }}
              style={styles.ImageBackground_200_874}
            />
            <View style={styles.View_200_875}>
              <Text style={styles.Text_200_875}>Wallet</Text>
            </View>
          </View>
          <View style={styles.View_200_876}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/d66e/846d/363916da8ef2da29f815450d771a4fc4"
              }}
              style={styles.ImageBackground_200_877}
            />
            <View style={styles.View_200_880}>
              <Text style={styles.Text_200_880}>History</Text>
            </View>
          </View>
          <View style={styles.View_200_881}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/fef3/5405/15b19c84abc6558fef74272adbfea264"
              }}
              style={styles.ImageBackground_200_882}
            />
            <View style={styles.View_200_883}>
              <Text style={styles.Text_200_883}>Reviews</Text>
            </View>
          </View>
          <View style={styles.View_200_884}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/f56f/d45f/def52f8145ff23ab1b1117784abd26e1"
              }}
              style={styles.ImageBackground_200_885}
            />
            <View style={styles.View_200_888}>
              <Text style={styles.Text_200_888}>Settings</Text>
            </View>
          </View>
        </View>
        <View style={styles.View_200_889}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/fa63/df50/703912ac1780c9b08c0a3e7bae69bdda"
            }}
            style={styles.ImageBackground_200_890}
          />
          <View style={styles.View_200_891}>
            <Text style={styles.Text_200_891}>Logout</Text>
          </View>
        </View>
        <View style={styles.View_200_892}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/974c/5adf/ec88dc0bf72dd7040172482d6bfff5e8"
            }}
            style={styles.ImageBackground_200_893}
          />
          <View style={styles.View_200_894}>
            <Text style={styles.Text_200_894}>Contact Us</Text>
          </View>
        </View>
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: { backgroundColor: "rgba(252, 252, 252, 1)" },
  View_2: { height: hp("140%") },
  View_200_704: {
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
  View_200_705: {
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
  View_200_706: {
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
  ImageBackground_200_707: {
    width: wp("3%"),
    height: hp("2%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9%")
  },
  ImageBackground_200_709: {
    width: wp("4%"),
    height: hp("2%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_200_712: {
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
  ImageBackground_200_713: {
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
  View_200_714: {
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
  Text_200_714: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 4.285236358642578,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_200_715: {
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
  ImageBackground_200_716: {
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
  View_200_717: {
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
  Text_200_717: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 4.285236358642578,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_200_718: {
    width: wp("5%"),
    height: hp("2%"),
    top: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%")
  },
  View_200_719: {
    width: wp("60%"),
    minWidth: wp("60%"),
    height: hp("14%"),
    minHeight: hp("14%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("35%"),
    top: hp("25%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_200_720: {
    width: wp("31%"),
    minWidth: wp("31%"),
    height: hp("5%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("8%")
  },
  View_200_721: {
    width: wp("31%"),
    minWidth: wp("31%"),
    height: hp("5%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_200_722: {
    width: wp("6%"),
    minWidth: wp("6%"),
    height: hp("5%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 185, 185, 1)"
  },
  View_200_723: {
    width: wp("3%"),
    minWidth: wp("3%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("16%"),
    top: hp("1%"),
    justifyContent: "flex-start"
  },
  Text_200_723: {
    color: "rgba(48, 157, 143, 1)",
    fontSize: 8.481027603149414,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_200_724: {
    width: wp("21%"),
    minWidth: wp("21%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9%"),
    top: hp("3%"),
    justifyContent: "flex-start"
  },
  Text_200_724: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 6.035454750061035,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_200_725: {
    width: wp("28%"),
    minWidth: wp("28%"),
    height: hp("5%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_200_726: {
    width: wp("28%"),
    minWidth: wp("28%"),
    height: hp("5%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_200_727: {
    width: wp("16%"),
    minWidth: wp("16%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9%"),
    top: hp("3%"),
    justifyContent: "flex-start"
  },
  Text_200_727: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 6.035454750061035,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_200_728: {
    width: wp("18%"),
    minWidth: wp("18%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8%"),
    top: hp("1%"),
    justifyContent: "flex-start"
  },
  Text_200_728: {
    color: "rgba(48, 157, 143, 1)",
    fontSize: 8.481027603149414,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_200_729: {
    width: wp("6%"),
    minWidth: wp("6%"),
    height: hp("5%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 201, 94, 1)"
  },
  ImageBackground_200_730: {
    width: wp("3%"),
    height: hp("1%"),
    top: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%")
  },
  View_200_731: {
    width: wp("28%"),
    minWidth: wp("28%"),
    height: hp("5%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("33%"),
    top: hp("0%")
  },
  View_200_732: {
    width: wp("28%"),
    minWidth: wp("28%"),
    height: hp("5%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_200_733: {
    width: wp("6%"),
    minWidth: wp("6%"),
    height: hp("5%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(198, 248, 153, 1)"
  },
  View_200_734: {
    width: wp("3%"),
    minWidth: wp("3%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("14%"),
    top: hp("1%"),
    justifyContent: "flex-start"
  },
  Text_200_734: {
    color: "rgba(48, 157, 143, 1)",
    fontSize: 8.481027603149414,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_200_735: {
    width: wp("15%"),
    minWidth: wp("15%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8%"),
    top: hp("3%"),
    justifyContent: "flex-start"
  },
  Text_200_735: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 6.035454750061035,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_200_736: {
    width: wp("2%"),
    height: hp("1%"),
    top: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("35%")
  },
  ImageBackground_200_738: {
    width: wp("3%"),
    height: hp("1%"),
    top: hp("11%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%")
  },
  View_200_745: {
    width: wp("70%"),
    minWidth: wp("70%"),
    height: hp("8%"),
    minHeight: hp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("30%"),
    top: hp("16%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_200_746: {
    width: wp("70%"),
    minWidth: wp("70%"),
    height: hp("8%"),
    minHeight: hp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_200_747: {
    width: wp("32%"),
    minWidth: wp("32%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("18%"),
    top: hp("2%"),
    justifyContent: "flex-start"
  },
  Text_200_747: {
    color: "rgba(48, 157, 143, 1)",
    fontSize: 6.812126159667969,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_200_748: {
    width: wp("27%"),
    minWidth: wp("27%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("18%"),
    top: hp("4%"),
    justifyContent: "flex-start"
  },
  Text_200_748: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 6.812126159667969,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_200_749: {
    width: wp("10%"),
    minWidth: wp("10%"),
    height: hp("5%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6%"),
    top: hp("1%")
  },
  ImageBackground_200_750: {
    width: wp("8%"),
    minWidth: wp("8%"),
    height: hp("4%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7%"),
    top: hp("2%")
  },
  View_200_751: {
    width: wp("61%"),
    minWidth: wp("61%"),
    height: hp("21%"),
    minHeight: hp("21%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("34%"),
    top: hp("63%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_200_752: {
    width: wp("60%"),
    minWidth: wp("60%"),
    height: hp("21%"),
    minHeight: hp("21%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_200_753: {
    width: wp("60%"),
    minWidth: wp("60%"),
    height: hp("4%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(48, 157, 143, 1)",
    borderTopLeftRadius: 7.101062297821045,
    borderTopRightRadius: 7.101062297821045,
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0
  },
  View_200_754: {
    width: wp("18%"),
    minWidth: wp("18%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7%"),
    top: hp("1%"),
    justifyContent: "flex-start"
  },
  Text_200_754: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 8.651593208312988,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_200_755: {
    width: wp("28%"),
    minWidth: wp("28%"),
    minHeight: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9%"),
    top: hp("5%"),
    justifyContent: "flex-start"
  },
  Text_200_755: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 4.325796604156494,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_200_756: {
    width: wp("15%"),
    minWidth: wp("15%"),
    minHeight: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("44%"),
    top: hp("5%"),
    justifyContent: "flex-start"
  },
  Text_200_756: {
    color: "rgba(48, 157, 143, 1)",
    fontSize: 4.325796604156494,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_200_757: {
    width: wp("61%"),
    minWidth: wp("61%"),
    height: hp("0%"),
    minHeight: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("8%")
  },
  ImageBackground_200_758: {
    width: wp("2%"),
    height: hp("1%"),
    top: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6%")
  },
  ImageBackground_200_759: {
    width: wp("2%"),
    height: hp("1%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%")
  },
  View_200_762: {
    width: wp("60%"),
    minWidth: wp("60%"),
    height: hp("21%"),
    minHeight: hp("21%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("35%"),
    top: hp("87%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_200_763: {
    width: wp("60%"),
    minWidth: wp("60%"),
    height: hp("21%"),
    minHeight: hp("21%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_200_764: {
    width: wp("60%"),
    minWidth: wp("60%"),
    height: hp("4%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(48, 157, 143, 1)",
    borderTopLeftRadius: 7.047224044799805,
    borderTopRightRadius: 7.047224044799805,
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0
  },
  View_200_765: {
    width: wp("15%"),
    minWidth: wp("15%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7%"),
    top: hp("1%"),
    justifyContent: "flex-start"
  },
  Text_200_765: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 8.570836067199707,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_200_766: {
    width: wp("23%"),
    minWidth: wp("23%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("10%"),
    top: hp("5%"),
    justifyContent: "flex-start"
  },
  Text_200_766: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 7.367039680480957,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_200_767: {
    width: wp("3%"),
    minWidth: wp("3%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("54%"),
    top: hp("5%"),
    justifyContent: "flex-start"
  },
  Text_200_767: {
    color: "rgba(48, 157, 143, 1)",
    fontSize: 7.367039680480957,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_200_768: {
    width: wp("19%"),
    minWidth: wp("19%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("10%"),
    top: hp("13%"),
    justifyContent: "flex-start"
  },
  Text_200_768: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 7.361144065856934,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_200_769: {
    width: wp("14%"),
    minWidth: wp("14%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("10%"),
    top: hp("17%"),
    justifyContent: "flex-start"
  },
  Text_200_769: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 7.361144065856934,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_200_770: {
    width: wp("15%"),
    minWidth: wp("15%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("43%"),
    top: hp("13%"),
    justifyContent: "flex-start"
  },
  Text_200_770: {
    color: "rgba(48, 157, 143, 1)",
    fontSize: 7.361144065856934,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_200_771: {
    width: wp("6%"),
    minWidth: wp("6%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("51%"),
    top: hp("17%"),
    justifyContent: "flex-start"
  },
  Text_200_771: {
    color: "rgba(48, 157, 143, 1)",
    fontSize: 7.361144065856934,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_200_772: {
    width: wp("8%"),
    minWidth: wp("8%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("10%"),
    top: hp("9%"),
    justifyContent: "flex-start"
  },
  Text_200_772: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 7.361144065856934,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_200_773: {
    width: wp("6%"),
    minWidth: wp("6%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("51%"),
    top: hp("10%"),
    justifyContent: "flex-start"
  },
  Text_200_773: {
    color: "rgba(48, 157, 143, 1)",
    fontSize: 7.361144065856934,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_200_774: {
    width: wp("3%"),
    height: hp("1%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%")
  },
  ImageBackground_200_775: {
    width: wp("60%"),
    minWidth: wp("60%"),
    height: hp("0%"),
    minHeight: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("8%")
  },
  ImageBackground_200_776: {
    width: wp("60%"),
    minWidth: wp("60%"),
    height: hp("0%"),
    minHeight: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("12%")
  },
  ImageBackground_200_777: {
    width: wp("60%"),
    minWidth: wp("60%"),
    height: hp("0%"),
    minHeight: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("16%")
  },
  ImageBackground_200_778: {
    width: wp("3%"),
    height: hp("1%"),
    top: hp("13%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6%")
  },
  ImageBackground_200_781: {
    width: wp("2%"),
    height: hp("1%"),
    top: hp("9%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6%")
  },
  ImageBackground_200_784: {
    width: wp("2%"),
    height: hp("1%"),
    top: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6%")
  },
  ImageBackground_200_785: {
    width: wp("3%"),
    height: hp("1%"),
    top: hp("18%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%")
  },
  ImageBackground_200_789: {
    width: wp("8%"),
    height: hp("1%"),
    top: hp("9%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("49%")
  },
  View_200_795: {
    width: wp("60%"),
    minWidth: wp("60%"),
    height: hp("20%"),
    minHeight: hp("20%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("35%"),
    top: hp("111%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_200_796: {
    width: wp("60%"),
    minWidth: wp("60%"),
    height: hp("18%"),
    minHeight: hp("18%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_200_797: {
    width: wp("60%"),
    minWidth: wp("60%"),
    height: hp("4%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(48, 157, 143, 1)",
    borderTopLeftRadius: 3.4005348682403564,
    borderTopRightRadius: 3.4005348682403564,
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0
  },
  View_200_798: {
    width: wp("26%"),
    minWidth: wp("26%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7%"),
    top: hp("1%"),
    justifyContent: "flex-start"
  },
  Text_200_798: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 8.568392753601074,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_200_799: {
    width: wp("55%"),
    minWidth: wp("55%"),
    height: hp("9%"),
    minHeight: hp("9%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%"),
    top: hp("8%"),
    borderColor: "rgba(189, 189, 189, 1)",
    borderWidth: 0.1700267493724823
  },
  View_200_800: {
    width: wp("14%"),
    minWidth: wp("14%"),
    minHeight: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%"),
    top: hp("10%"),
    justifyContent: "flex-start"
  },
  Text_200_800: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 4.100802421569824,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_200_801: {
    width: wp("9%"),
    minWidth: wp("9%"),
    minHeight: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%"),
    top: hp("14%"),
    justifyContent: "flex-start"
  },
  Text_200_801: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 4.100802421569824,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_200_802: {
    width: wp("12%"),
    minWidth: wp("12%"),
    minHeight: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("24%"),
    top: hp("10%"),
    justifyContent: "flex-start"
  },
  Text_200_802: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 4.100802421569824,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_200_803: {
    width: wp("17%"),
    minWidth: wp("17%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("24%"),
    top: hp("14%"),
    justifyContent: "flex-start"
  },
  Text_200_803: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 4.100802421569824,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_200_804: {
    width: wp("55%"),
    minWidth: wp("55%"),
    height: hp("0%"),
    minHeight: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%"),
    top: hp("12%")
  },
  View_200_805: {
    width: wp("54%"),
    minWidth: wp("54%"),
    height: hp("1%"),
    minHeight: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    top: hp("6%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderColor: "rgba(0, 0, 0, 1)",
    borderWidth: 0.1700267493724823
  },
  View_200_806: {
    width: wp("55%"),
    minWidth: wp("55%"),
    height: hp("2%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%"),
    top: hp("5%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderColor: "rgba(196, 196, 196, 1)",
    borderWidth: 0.1700267493724823
  },
  View_200_807: {
    width: wp("11%"),
    minWidth: wp("11%"),
    minHeight: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    top: hp("6%"),
    justifyContent: "flex-start"
  },
  Text_200_807: {
    color: "rgba(48, 157, 143, 1)",
    fontSize: 4.100802421569824,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_200_808: {
    width: wp("7%"),
    minWidth: wp("7%"),
    minHeight: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("24%"),
    top: hp("6%"),
    justifyContent: "flex-start"
  },
  Text_200_808: {
    color: "rgba(48, 157, 143, 1)",
    fontSize: 4.100802421569824,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_200_809: {
    width: wp("8%"),
    minWidth: wp("8%"),
    minHeight: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("47%"),
    top: hp("6%"),
    justifyContent: "flex-start"
  },
  Text_200_809: {
    color: "rgba(48, 157, 143, 1)",
    fontSize: 4.100802421569824,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_200_810: {
    width: wp("8%"),
    height: hp("1%"),
    top: hp("14%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("47%")
  },
  ImageBackground_200_816: {
    width: wp("8%"),
    height: hp("1%"),
    top: hp("9%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("47%")
  },
  View_200_822: {
    width: wp("5%"),
    minWidth: wp("5%"),
    minHeight: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("47%"),
    top: hp("11%"),
    justifyContent: "flex-start"
  },
  Text_200_822: {
    color: "rgba(48, 157, 143, 1)",
    fontSize: 2.4005348682403564,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_200_823: {
    width: wp("5%"),
    minWidth: wp("5%"),
    minHeight: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("47%"),
    top: hp("16%"),
    justifyContent: "flex-start"
  },
  Text_200_823: {
    color: "rgba(48, 157, 143, 1)",
    fontSize: 2.4005348682403564,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_200_824: {
    width: wp("9%"),
    minWidth: wp("9%"),
    height: hp("1%"),
    minHeight: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("26%"),
    top: hp("19%"),
    backgroundColor: "rgba(48, 157, 143, 1)"
  },
  View_200_825: {
    width: wp("4%"),
    minWidth: wp("4%"),
    minHeight: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_200_825: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 2.722243070602417,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_200_826: {
    width: wp("3%"),
    height: hp("1%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%")
  },
  View_200_830: {
    width: wp("61%"),
    minWidth: wp("61%"),
    height: hp("19%"),
    minHeight: hp("19%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("34%"),
    top: hp("41%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_200_831: {
    width: wp("61%"),
    minWidth: wp("61%"),
    height: hp("19%"),
    minHeight: hp("19%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_200_832: {
    width: wp("61%"),
    minWidth: wp("61%"),
    height: hp("4%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(48, 157, 143, 1)",
    borderTopLeftRadius: 3.423022508621216,
    borderTopRightRadius: 3.423022508621216,
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0
  },
  View_200_833: {
    width: wp("27%"),
    minWidth: wp("27%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7%"),
    top: hp("1%"),
    justifyContent: "flex-start"
  },
  Text_200_833: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 8.55431842803955,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_200_834: {
    width: wp("9%"),
    minWidth: wp("9%"),
    height: hp("1%"),
    minHeight: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("26%"),
    top: hp("17%"),
    backgroundColor: "rgba(48, 157, 143, 1)"
  },
  View_200_835: {
    width: wp("4%"),
    minWidth: wp("4%"),
    minHeight: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_200_835: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 2.7468574047088623,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_200_836: {
    width: wp("54%"),
    minWidth: wp("54%"),
    height: hp("1%"),
    minHeight: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    top: hp("6%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderColor: "rgba(0, 0, 0, 1)",
    borderWidth: 0.17115113139152527
  },
  View_200_837: {
    width: wp("56%"),
    minWidth: wp("56%"),
    height: hp("2%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%"),
    top: hp("5%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderColor: "rgba(196, 196, 196, 1)",
    borderWidth: 0.17115113139152527
  },
  View_200_838: {
    width: wp("56%"),
    minWidth: wp("56%"),
    height: hp("9%"),
    minHeight: hp("9%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%"),
    top: hp("7%"),
    borderColor: "rgba(189, 189, 189, 1)",
    borderWidth: 0.17115113139152527
  },
  View_200_839: {
    width: wp("3%"),
    minWidth: wp("3%"),
    minHeight: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("29%"),
    top: hp("5%"),
    justifyContent: "flex-start"
  },
  Text_200_839: {
    color: "rgba(48, 157, 143, 1)",
    fontSize: 3.925349235534668,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_200_840: {
    width: wp("9%"),
    minWidth: wp("9%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("29%"),
    top: hp("8%"),
    justifyContent: "flex-start"
  },
  Text_200_840: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 3.278778076171875,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_200_841: {
    width: wp("7%"),
    minWidth: wp("7%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("29%"),
    top: hp("11%"),
    justifyContent: "flex-start"
  },
  Text_200_841: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 3.278778076171875,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_200_842: {
    width: wp("7%"),
    minWidth: wp("7%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("29%"),
    top: hp("14%"),
    justifyContent: "flex-start"
  },
  Text_200_842: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 3.278778076171875,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_200_843: {
    width: wp("11%"),
    minWidth: wp("11%"),
    minHeight: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6%"),
    top: hp("5%"),
    justifyContent: "flex-start"
  },
  Text_200_843: {
    color: "rgba(48, 157, 143, 1)",
    fontSize: 3.925349235534668,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_200_844: {
    width: wp("12%"),
    minWidth: wp("12%"),
    minHeight: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6%"),
    top: hp("8%"),
    justifyContent: "flex-start"
  },
  Text_200_844: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 3.278778076171875,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_200_845: {
    width: wp("10%"),
    minWidth: wp("10%"),
    minHeight: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6%"),
    top: hp("11%"),
    justifyContent: "flex-start"
  },
  Text_200_845: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 3.278778076171875,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_200_846: {
    width: wp("10%"),
    minWidth: wp("10%"),
    minHeight: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6%"),
    top: hp("14%"),
    justifyContent: "flex-start"
  },
  Text_200_846: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 3.278778076171875,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_200_847: {
    width: wp("4%"),
    minWidth: wp("4%"),
    height: hp("1%"),
    minHeight: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("51%"),
    top: hp("8%"),
    backgroundColor: "rgba(48, 157, 143, 1)"
  },
  View_200_848: {
    width: wp("2%"),
    minWidth: wp("2%"),
    minHeight: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_200_848: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 2.329195261001587,
    fontWeight: "600",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_200_849: {
    width: wp("4%"),
    minWidth: wp("4%"),
    height: hp("1%"),
    minHeight: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("51%"),
    top: hp("11%"),
    backgroundColor: "rgba(48, 157, 143, 1)"
  },
  View_200_850: {
    width: wp("2%"),
    minWidth: wp("2%"),
    minHeight: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_200_850: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 2.329195261001587,
    fontWeight: "600",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_200_851: {
    width: wp("4%"),
    minWidth: wp("4%"),
    height: hp("1%"),
    minHeight: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("51%"),
    top: hp("14%"),
    backgroundColor: "rgba(48, 157, 143, 1)"
  },
  View_200_852: {
    width: wp("2%"),
    minWidth: wp("2%"),
    minHeight: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_200_852: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 2.329195261001587,
    fontWeight: "600",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_200_853: {
    width: wp("4%"),
    minWidth: wp("4%"),
    minHeight: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("51%"),
    top: hp("5%"),
    justifyContent: "flex-start"
  },
  Text_200_853: {
    color: "rgba(48, 157, 143, 1)",
    fontSize: 3.925349235534668,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_200_854: {
    width: wp("56%"),
    minWidth: wp("56%"),
    height: hp("0%"),
    minHeight: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%"),
    top: hp("10%")
  },
  ImageBackground_200_855: {
    width: wp("56%"),
    minWidth: wp("56%"),
    height: hp("0%"),
    minHeight: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%"),
    top: hp("13%")
  },
  ImageBackground_200_856: {
    width: wp("3%"),
    height: hp("2%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%")
  },
  View_200_863: {
    width: wp("32%"),
    minWidth: wp("32%"),
    height: hp("114%"),
    minHeight: hp("114%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("16%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_200_864: {
    width: wp("32%"),
    minWidth: wp("32%"),
    height: hp("114%"),
    minHeight: hp("114%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(48, 157, 143, 1)",
    borderTopLeftRadius: 0,
    borderTopRightRadius: 0,
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 30
  },
  View_200_865: {
    width: wp("32%"),
    minWidth: wp("32%"),
    height: hp("5%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(249, 168, 38, 1)"
  },
  View_200_866: {
    width: wp("18%"),
    minWidth: wp("18%"),
    height: hp("27%"),
    minHeight: hp("27%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7%"),
    top: hp("1%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_200_867: {
    width: wp("15%"),
    minWidth: wp("15%"),
    height: hp("2%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_200_868: {
    width: wp("4%"),
    height: hp("2%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_200_869: {
    width: wp("9%"),
    minWidth: wp("9%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_200_869: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 9.361201286315918,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_200_870: {
    width: wp("18%"),
    minWidth: wp("18%"),
    height: hp("2%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("5%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_200_1056: {
    width: wp("3%"),
    height: hp("2%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_200_872: {
    width: wp("13%"),
    minWidth: wp("13%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_200_872: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 9.361201286315918,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_200_873: {
    width: wp("15%"),
    minWidth: wp("15%"),
    height: hp("2%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("10%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_200_874: {
    width: wp("4%"),
    height: hp("2%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_200_875: {
    width: wp("10%"),
    minWidth: wp("10%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_200_875: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 9.361201286315918,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_200_876: {
    width: wp("16%"),
    minWidth: wp("16%"),
    height: hp("2%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("15%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_200_877: {
    width: wp("4%"),
    height: hp("2%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_200_880: {
    width: wp("11%"),
    minWidth: wp("11%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_200_880: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 9.361201286315918,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_200_881: {
    width: wp("18%"),
    minWidth: wp("18%"),
    height: hp("2%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("20%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_200_882: {
    width: wp("4%"),
    height: hp("2%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_200_883: {
    width: wp("12%"),
    minWidth: wp("12%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_200_883: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 9.361201286315918,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_200_884: {
    width: wp("18%"),
    minWidth: wp("18%"),
    height: hp("2%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("25%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_200_885: {
    width: wp("4%"),
    height: hp("2%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_200_888: {
    width: wp("12%"),
    minWidth: wp("12%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_200_888: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 9.361201286315918,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_200_889: {
    width: wp("16%"),
    minWidth: wp("16%"),
    height: hp("2%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7%"),
    top: hp("30%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_200_890: {
    width: wp("4%"),
    height: hp("2%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_200_891: {
    width: wp("10%"),
    minWidth: wp("10%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_200_891: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 9.361201286315918,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_200_892: {
    width: wp("23%"),
    minWidth: wp("23%"),
    height: hp("2%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7%"),
    top: hp("53%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_200_893: {
    width: wp("4%"),
    height: hp("2%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_200_894: {
    width: wp("17%"),
    minWidth: wp("17%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_200_894: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 9.361201286315918,
    fontWeight: "500",
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
