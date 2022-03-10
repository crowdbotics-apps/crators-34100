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
      <View style={styles.View_113_744}>
        <View style={styles.View_113_745} />
        <View style={styles.View_113_746}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/c78a/5bdf/8df1323d87ff79c5a7d36f96b0228975"
            }}
            style={styles.ImageBackground_113_747}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/187f/69fa/dfa98a845627d36d65cc73e4b3f304b8"
            }}
            style={styles.ImageBackground_113_749}
          />
          <View style={styles.View_113_752}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a930/9c43/f8be4578e6cc748227b7f11f9761136a"
              }}
              style={styles.ImageBackground_113_753}
            />
            <View style={styles.View_113_754}>
              <Text style={styles.Text_113_754}>5</Text>
            </View>
          </View>
          <View style={styles.View_113_755}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/7623/4d95/23fbe9ab8b5cc002ef4d04d2f4cee898"
              }}
              style={styles.ImageBackground_113_756}
            />
            <View style={styles.View_113_757}>
              <Text style={styles.Text_113_757}>5</Text>
            </View>
          </View>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/6ed1/720a/e7be4e5c1a49285104ba35a4b2e3fa1d"
          }}
          style={styles.ImageBackground_113_758}
        />
      </View>
      <View style={styles.View_113_759}>
        <View style={styles.View_113_760}>
          <View style={styles.View_113_761} />
          <View style={styles.View_113_762} />
          <View style={styles.View_113_763}>
            <Text style={styles.Text_113_763}>12</Text>
          </View>
          <View style={styles.View_113_764}>
            <Text style={styles.Text_113_764}>New Orders</Text>
          </View>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1fb9/164a/e56ba3044cf3ca445b00e36555283d9e"
            }}
            style={styles.ImageBackground_113_765}
          />
        </View>
        <View style={styles.View_113_768}>
          <View style={styles.View_113_769} />
          <View style={styles.View_113_770} />
          <View style={styles.View_113_771}>
            <Text style={styles.Text_113_771}>100+</Text>
          </View>
          <View style={styles.View_113_772}>
            <Text style={styles.Text_113_772}>Products</Text>
          </View>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/6222/cae5/1b055094ca0aa4b16b80d3ddd6e964ec"
            }}
            style={styles.ImageBackground_113_773}
          />
        </View>
        <View style={styles.View_113_774}>
          <View style={styles.View_113_775} />
          <View style={styles.View_113_776}>
            <Text style={styles.Text_113_776}>Wallet Balance</Text>
          </View>
          <View style={styles.View_113_777}>
            <Text style={styles.Text_113_777}>N350,000:89</Text>
          </View>
          <View style={styles.View_113_778} />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/b9f2/d095/38fa05a312811e9c4f66c3649ce66fc9"
            }}
            style={styles.ImageBackground_113_779}
          />
        </View>
        <View style={styles.View_113_780}>
          <View style={styles.View_113_781} />
          <View style={styles.View_113_782} />
          <View style={styles.View_113_783}>
            <Text style={styles.Text_113_783}>12</Text>
          </View>
          <View style={styles.View_113_784}>
            <Text style={styles.Text_113_784}>Sales</Text>
          </View>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/ba8e/d02e/5ed8d1f68bcb6914b69e56a6e705a5d4"
            }}
            style={styles.ImageBackground_113_785}
          />
        </View>
      </View>
      <View style={styles.View_113_788}>
        <View style={styles.View_113_789} />
        <View style={styles.View_113_790}>
          <Text style={styles.Text_113_790}>Opeyemi Pharmacy</Text>
        </View>
        <View style={styles.View_113_791}>
          <Text style={styles.Text_113_791}>Welcome to your store</Text>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3fad/fe6d/3655b6e709f97980a020afebe5fb3349"
          }}
          style={styles.ImageBackground_113_792}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/8fc7/489e/d045ea5c9823ec461e919f014790cd90"
          }}
          style={styles.ImageBackground_113_793}
        />
      </View>
      <View style={styles.View_113_794}>
        <View style={styles.View_113_795} />
        <View style={styles.View_113_796} />
        <View style={styles.View_113_797}>
          <Text style={styles.Text_113_797}>Notifications</Text>
        </View>
        <View style={styles.View_113_798}>
          <Text style={styles.Text_113_798}>
            Successfully Added a new product
          </Text>
        </View>
        <View style={styles.View_113_799}>
          <Text style={styles.Text_113_799}>20/08/2020 8:04pm</Text>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1b68/8185/eb7d9a37f352971d17a8b388d16e8737"
          }}
          style={styles.ImageBackground_113_800}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/feaf/cd95/a9d973e50c33304cd495b36a61fd293d"
          }}
          style={styles.ImageBackground_113_801}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/0314/3304/13efa5c39f3270dd7eddcaf3dcfee0e8"
          }}
          style={styles.ImageBackground_113_802}
        />
      </View>
      <View style={styles.View_113_805}>
        <View style={styles.View_113_806} />
        <View style={styles.View_113_807} />
        <View style={styles.View_113_808}>
          <Text style={styles.Text_113_808}>Store Stats</Text>
        </View>
        <View style={styles.View_113_809}>
          <Text style={styles.Text_113_809}>No. of Products</Text>
        </View>
        <View style={styles.View_113_810}>
          <Text style={styles.Text_113_810}>118</Text>
        </View>
        <View style={styles.View_113_811}>
          <Text style={styles.Text_113_811}>Total Sales</Text>
        </View>
        <View style={styles.View_113_812}>
          <Text style={styles.Text_113_812}>Customers</Text>
        </View>
        <View style={styles.View_113_813}>
          <Text style={styles.Text_113_813}>N450,610:97</Text>
        </View>
        <View style={styles.View_113_814}>
          <Text style={styles.Text_113_814}>1800</Text>
        </View>
        <View style={styles.View_113_815}>
          <Text style={styles.Text_113_815}>No. of Orders</Text>
        </View>
        <View style={styles.View_113_816}>
          <Text style={styles.Text_113_816}>2005</Text>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/03b9/3675/6352dea7a3406be964b24a50b1035345"
          }}
          style={styles.ImageBackground_113_817}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/fd4d/20a1/9321bcf17f7437252f2dbfa713502e94"
          }}
          style={styles.ImageBackground_113_818}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/fd4d/20a1/9321bcf17f7437252f2dbfa713502e94"
          }}
          style={styles.ImageBackground_113_819}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/fd4d/20a1/9321bcf17f7437252f2dbfa713502e94"
          }}
          style={styles.ImageBackground_113_820}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/81e4/803e/1184b6abd240a0af0ca8d43c9ee053ff"
          }}
          style={styles.ImageBackground_113_821}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/d95c/51ee/60baee06f77d58adf8afbdd744a56176"
          }}
          style={styles.ImageBackground_113_824}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/b5c5/cf81/204d246293b33c68e21a459dd791e859"
          }}
          style={styles.ImageBackground_113_827}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/09bf/bcb9/0f5cf67767c51945868eadf1052f0666"
          }}
          style={styles.ImageBackground_113_828}
        />
      </View>
      <View style={styles.View_113_832}>
        <View style={styles.View_113_833} />
        <View style={styles.View_113_834} />
        <View style={styles.View_113_835}>
          <Text style={styles.Text_113_835}>Customer Reviews</Text>
        </View>
        <View style={styles.View_113_836} />
        <View style={styles.View_113_837}>
          <Text style={styles.Text_113_837}>Paracetamol</Text>
        </View>
        <View style={styles.View_113_838}>
          <Text style={styles.Text_113_838}>Boska</Text>
        </View>
        <View style={styles.View_113_839}>
          <Text style={styles.Text_113_839}>It was expire.</Text>
        </View>
        <View style={styles.View_113_840}>
          <Text style={styles.Text_113_840}>
            A very nice and effective drug
          </Text>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/21ce/fba4/4ad9a66d7c6f5aba379f1bc1b3f2b2be"
          }}
          style={styles.ImageBackground_113_841}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/c899/7ef7/5d8c691258cee85e364b28489ac514ff"
          }}
          style={styles.ImageBackground_113_842}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/7e2c/4f73/0d619be6b7561c3daaba09a4826735d1"
          }}
          style={styles.ImageBackground_113_843}
        />
        <View style={styles.View_113_844} />
        <View style={styles.View_113_845} />
        <View style={styles.View_113_846}>
          <Text style={styles.Text_113_846}>Image &amp; Item Name</Text>
        </View>
        <View style={styles.View_113_847}>
          <Text style={styles.Text_113_847}>Comment</Text>
        </View>
        <View style={styles.View_113_848}>
          <Text style={styles.Text_113_848}>Star &amp; Date</Text>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3aca/f6c9/3699e67665712c7326b9b92d96158855"
          }}
          style={styles.ImageBackground_113_849}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/f1e2/48c2/321e6a0ef6a70ada71671421d6aa538f"
          }}
          style={styles.ImageBackground_113_855}
        />
        <View style={styles.View_113_861}>
          <Text style={styles.Text_113_861}>20/10/2020</Text>
        </View>
        <View style={styles.View_113_862}>
          <Text style={styles.Text_113_862}>20/10/2020</Text>
        </View>
        <View style={styles.View_113_863}>
          <View style={styles.View_113_864}>
            <Text style={styles.Text_113_864}>View All</Text>
          </View>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/afee/dc68/0b7c3da0845e9b9e6204bd11f519ee6d"
          }}
          style={styles.ImageBackground_113_865}
        />
      </View>
      <View style={styles.View_113_869}>
        <View style={styles.View_113_870} />
        <View style={styles.View_113_871} />
        <View style={styles.View_113_872}>
          <Text style={styles.Text_113_872}>New Orders</Text>
        </View>
        <View style={styles.View_113_873}>
          <View style={styles.View_113_874}>
            <Text style={styles.Text_113_874}>View All</Text>
          </View>
        </View>
        <View style={styles.View_113_875} />
        <View style={styles.View_113_876} />
        <View style={styles.View_113_877} />
        <View style={styles.View_113_878}>
          <Text style={styles.Text_113_878}>Time</Text>
        </View>
        <View style={styles.View_113_879}>
          <Text style={styles.Text_113_879}>Today 10:08PM</Text>
        </View>
        <View style={styles.View_113_880}>
          <Text style={styles.Text_113_880}>22/08/2020 10:08PM</Text>
        </View>
        <View style={styles.View_113_881}>
          <Text style={styles.Text_113_881}>Items</Text>
        </View>
        <View style={styles.View_113_882}>
          <Text style={styles.Text_113_882}>Ketocona cream 4 packets</Text>
        </View>
        <View style={styles.View_113_883}>
          <Text style={styles.Text_113_883}>Paracetamol 3 bottles</Text>
        </View>
        <View style={styles.View_113_884}>
          <Text style={styles.Text_113_884}>Thermometer 2 pieces</Text>
        </View>
        <View style={styles.View_113_885}>
          <Text style={styles.Text_113_885}>Delivery Address</Text>
        </View>
        <View style={styles.View_113_886}>
          <Text style={styles.Text_113_886}>
            No 16, Belgore str Ilorin, Kwara St
          </Text>
        </View>
        <View style={styles.View_113_887}>
          <Text style={styles.Text_113_887}>
            No 16, Belgore str Ilorin, Kwara St
          </Text>
        </View>
        <View style={styles.View_113_888}>
          <View style={styles.View_113_889}>
            <Text style={styles.Text_113_889}>View</Text>
          </View>
        </View>
        <View style={styles.View_113_890}>
          <View style={styles.View_113_891}>
            <Text style={styles.Text_113_891}>View</Text>
          </View>
        </View>
        <View style={styles.View_113_892}>
          <Text style={styles.Text_113_892}>Action</Text>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/125e/7528/529543b8c11639e3c40d9fa3c483e21b"
          }}
          style={styles.ImageBackground_113_893}
        />
        <View style={styles.View_113_894}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/b9dc/7d4f/110656d70ef4c8e1981c5ef8331134d8"
            }}
            style={styles.ImageBackground_113_895}
          />
        </View>
      </View>
      <View style={styles.View_113_554}>
        <View style={styles.View_113_555} />
        <View style={styles.View_113_556} />
        <View style={styles.View_113_557}>
          <View style={styles.View_113_558}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/bc0f/be55/b2d763216f5ba393ee5c84acfe4fe09f"
              }}
              style={styles.ImageBackground_113_559}
            />
            <View style={styles.View_113_560}>
              <Text style={styles.Text_113_560}>Home</Text>
            </View>
          </View>
          <View style={styles.View_113_561}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3505/d305/8c0fdfc1ace83941105eaec631406cce"
              }}
              style={styles.ImageBackground_113_562}
            />
            <View style={styles.View_113_563}>
              <Text style={styles.Text_113_563}>Products</Text>
            </View>
          </View>
          <View style={styles.View_113_564}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1f66/3c11/db81dfc2a4900e6770b51275d7c7a4c7"
              }}
              style={styles.ImageBackground_113_565}
            />
            <View style={styles.View_113_568}>
              <Text style={styles.Text_113_568}>Orders</Text>
            </View>
          </View>
          <View style={styles.View_113_569}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/e5e2/07a9/ed43d05ab62f05570e148189c6525428"
              }}
              style={styles.ImageBackground_113_570}
            />
            <View style={styles.View_113_571}>
              <Text style={styles.Text_113_571}>Payments</Text>
            </View>
          </View>
          <View style={styles.View_113_576}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/fef3/5405/15b19c84abc6558fef74272adbfea264"
              }}
              style={styles.ImageBackground_113_577}
            />
            <View style={styles.View_113_578}>
              <Text style={styles.Text_113_578}>Reviews</Text>
            </View>
          </View>
          <View style={styles.View_113_579}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/f56f/d45f/def52f8145ff23ab1b1117784abd26e1"
              }}
              style={styles.ImageBackground_113_580}
            />
            <View style={styles.View_113_583}>
              <Text style={styles.Text_113_583}>Settings</Text>
            </View>
          </View>
        </View>
        <View style={styles.View_113_584}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/fa63/df50/703912ac1780c9b08c0a3e7bae69bdda"
            }}
            style={styles.ImageBackground_113_585}
          />
          <View style={styles.View_113_586}>
            <Text style={styles.Text_113_586}>Logout</Text>
          </View>
        </View>
      </View>
    </ScrollView>
  )
}
const styles = StyleSheet.create({
  ScrollView_1: { backgroundColor: "rgba(252, 252, 252, 1)" },
  View_2: { height: hp("129%") },
  View_113_744: {
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
  View_113_745: {
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
  View_113_746: {
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
  ImageBackground_113_747: {
    width: wp("3%"),
    height: hp("2%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9%")
  },
  ImageBackground_113_749: {
    width: wp("4%"),
    height: hp("2%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_113_752: {
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
  ImageBackground_113_753: {
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
  View_113_754: {
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
  Text_113_754: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 4.285236358642578,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_113_755: {
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
  ImageBackground_113_756: {
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
  View_113_757: {
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
  Text_113_757: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 4.285236358642578,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_113_758: {
    width: wp("5%"),
    height: hp("2%"),
    top: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%")
  },
  View_113_759: {
    width: wp("55%"),
    minWidth: wp("55%"),
    height: hp("12%"),
    minHeight: hp("12%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("38%"),
    top: hp("26%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_113_760: {
    width: wp("25%"),
    minWidth: wp("25%"),
    height: hp("5%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("8%")
  },
  View_113_761: {
    width: wp("25%"),
    minWidth: wp("25%"),
    height: hp("5%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_113_762: {
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
  View_113_763: {
    width: wp("2%"),
    minWidth: wp("2%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("14%"),
    top: hp("1%"),
    justifyContent: "flex-start"
  },
  Text_113_763: {
    color: "rgba(48, 157, 143, 1)",
    fontSize: 7.511253356933594,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_113_764: {
    width: wp("11%"),
    minWidth: wp("11%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("10%"),
    top: hp("3%"),
    justifyContent: "flex-start"
  },
  Text_113_764: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 6.291959762573242,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_113_765: {
    width: wp("2%"),
    height: hp("1%"),
    top: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%")
  },
  View_113_768: {
    width: wp("25%"),
    minWidth: wp("25%"),
    height: hp("5%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("30%"),
    top: hp("8%")
  },
  View_113_769: {
    width: wp("25%"),
    minWidth: wp("25%"),
    height: hp("5%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_113_770: {
    width: wp("6%"),
    minWidth: wp("6%"),
    height: hp("5%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(53, 76, 201, 1)"
  },
  View_113_771: {
    width: wp("6%"),
    minWidth: wp("6%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("12%"),
    top: hp("1%"),
    justifyContent: "flex-start"
  },
  Text_113_771: {
    color: "rgba(48, 157, 143, 1)",
    fontSize: 7.511253356933594,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_113_772: {
    width: wp("9%"),
    minWidth: wp("9%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("11%"),
    top: hp("3%"),
    justifyContent: "flex-start"
  },
  Text_113_772: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 6.291959762573242,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_113_773: {
    width: wp("2%"),
    height: hp("1%"),
    top: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%")
  },
  View_113_774: {
    width: wp("25%"),
    minWidth: wp("25%"),
    height: hp("5%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_113_775: {
    width: wp("25%"),
    minWidth: wp("25%"),
    height: hp("5%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_113_776: {
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
  Text_113_776: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 6.291959762573242,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_113_777: {
    width: wp("16%"),
    minWidth: wp("16%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7%"),
    top: hp("1%"),
    justifyContent: "flex-start"
  },
  Text_113_777: {
    color: "rgba(48, 157, 143, 1)",
    fontSize: 7.511253356933594,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_113_778: {
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
  ImageBackground_113_779: {
    width: wp("3%"),
    height: hp("1%"),
    top: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%")
  },
  View_113_780: {
    width: wp("25%"),
    minWidth: wp("25%"),
    height: hp("5%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("30%"),
    top: hp("0%")
  },
  View_113_781: {
    width: wp("25%"),
    minWidth: wp("25%"),
    height: hp("5%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_113_782: {
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
  View_113_783: {
    width: wp("2%"),
    minWidth: wp("2%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("13%"),
    top: hp("1%"),
    justifyContent: "flex-start"
  },
  Text_113_783: {
    color: "rgba(48, 157, 143, 1)",
    fontSize: 7.511253356933594,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_113_784: {
    width: wp("5%"),
    minWidth: wp("5%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("12%"),
    top: hp("3%"),
    justifyContent: "flex-start"
  },
  Text_113_784: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 6.291959762573242,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_113_785: {
    width: wp("3%"),
    height: hp("1%"),
    top: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%")
  },
  View_113_788: {
    width: wp("64%"),
    minWidth: wp("64%"),
    height: hp("7%"),
    minHeight: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("33%"),
    top: hp("17%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_113_789: {
    width: wp("64%"),
    minWidth: wp("64%"),
    height: hp("7%"),
    minHeight: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_113_790: {
    width: wp("22%"),
    minWidth: wp("22%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("16%"),
    top: hp("2%"),
    justifyContent: "flex-start"
  },
  Text_113_790: {
    color: "rgba(48, 157, 143, 1)",
    fontSize: 5.996767997741699,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_113_791: {
    width: wp("24%"),
    minWidth: wp("24%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("16%"),
    top: hp("4%"),
    justifyContent: "flex-start"
  },
  Text_113_791: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 5.996767997741699,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_113_792: {
    width: wp("9%"),
    minWidth: wp("9%"),
    height: hp("5%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%"),
    top: hp("1%")
  },
  ImageBackground_113_793: {
    width: wp("8%"),
    minWidth: wp("8%"),
    height: hp("4%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6%"),
    top: hp("2%")
  },
  View_113_794: {
    width: wp("55%"),
    minWidth: wp("55%"),
    height: hp("19%"),
    minHeight: hp("19%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("38%"),
    top: hp("60%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_113_795: {
    width: wp("55%"),
    minWidth: wp("55%"),
    height: hp("19%"),
    minHeight: hp("19%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_113_796: {
    width: wp("55%"),
    minWidth: wp("55%"),
    height: hp("4%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(48, 157, 143, 1)",
    borderTopLeftRadius: 6.444024085998535,
    borderTopRightRadius: 6.444024085998535,
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0
  },
  View_113_797: {
    width: wp("16%"),
    minWidth: wp("16%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7%"),
    top: hp("1%"),
    justifyContent: "flex-start"
  },
  Text_113_797: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 7.6660356521606445,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_113_798: {
    width: wp("22%"),
    minWidth: wp("22%"),
    minHeight: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8%"),
    top: hp("5%"),
    justifyContent: "flex-start"
  },
  Text_113_798: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 3.8330178260803223,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_113_799: {
    width: wp("13%"),
    minWidth: wp("13%"),
    minHeight: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("40%"),
    top: hp("5%"),
    justifyContent: "flex-start"
  },
  Text_113_799: {
    color: "rgba(48, 157, 143, 1)",
    fontSize: 3.8330178260803223,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_113_800: {
    width: wp("55%"),
    minWidth: wp("55%"),
    height: hp("0%"),
    minHeight: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("7%")
  },
  ImageBackground_113_801: {
    width: wp("2%"),
    height: hp("1%"),
    top: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%")
  },
  ImageBackground_113_802: {
    width: wp("2%"),
    height: hp("1%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%")
  },
  View_113_805: {
    width: wp("54%"),
    minWidth: wp("54%"),
    height: hp("19%"),
    minHeight: hp("19%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("38%"),
    top: hp("82%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_113_806: {
    width: wp("54%"),
    minWidth: wp("54%"),
    height: hp("19%"),
    minHeight: hp("19%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_113_807: {
    width: wp("54%"),
    minWidth: wp("54%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(48, 157, 143, 1)",
    borderTopLeftRadius: 6.395166873931885,
    borderTopRightRadius: 6.395166873931885,
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0
  },
  View_113_808: {
    width: wp("14%"),
    minWidth: wp("14%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7%"),
    top: hp("1%"),
    justifyContent: "flex-start"
  },
  Text_113_808: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 7.592750549316406,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_113_809: {
    width: wp("17%"),
    minWidth: wp("17%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9%"),
    top: hp("5%"),
    justifyContent: "flex-start"
  },
  Text_113_809: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 6.500337600708008,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_113_810: {
    width: wp("3%"),
    minWidth: wp("3%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("49%"),
    top: hp("5%"),
    justifyContent: "flex-start"
  },
  Text_113_810: {
    color: "rgba(48, 157, 143, 1)",
    fontSize: 6.500337600708008,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_113_811: {
    width: wp("12%"),
    minWidth: wp("12%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9%"),
    top: hp("12%"),
    justifyContent: "flex-start"
  },
  Text_113_811: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 6.494988441467285,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_113_812: {
    width: wp("13%"),
    minWidth: wp("13%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9%"),
    top: hp("16%"),
    justifyContent: "flex-start"
  },
  Text_113_812: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 6.494988441467285,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_113_813: {
    width: wp("14%"),
    minWidth: wp("14%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("39%"),
    top: hp("12%"),
    justifyContent: "flex-start"
  },
  Text_113_813: {
    color: "rgba(48, 157, 143, 1)",
    fontSize: 6.494988441467285,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_113_814: {
    width: wp("5%"),
    minWidth: wp("5%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("46%"),
    top: hp("16%"),
    justifyContent: "flex-start"
  },
  Text_113_814: {
    color: "rgba(48, 157, 143, 1)",
    fontSize: 6.494988441467285,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_113_815: {
    width: wp("15%"),
    minWidth: wp("15%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9%"),
    top: hp("8%"),
    justifyContent: "flex-start"
  },
  Text_113_815: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 6.494988441467285,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_113_816: {
    width: wp("6%"),
    minWidth: wp("6%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("47%"),
    top: hp("8%"),
    justifyContent: "flex-start"
  },
  Text_113_816: {
    color: "rgba(48, 157, 143, 1)",
    fontSize: 6.494988441467285,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_113_817: {
    width: wp("3%"),
    height: hp("1%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%")
  },
  ImageBackground_113_818: {
    width: wp("54%"),
    minWidth: wp("54%"),
    height: hp("0%"),
    minHeight: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("7%")
  },
  ImageBackground_113_819: {
    width: wp("54%"),
    minWidth: wp("54%"),
    height: hp("0%"),
    minHeight: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("11%")
  },
  ImageBackground_113_820: {
    width: wp("54%"),
    minWidth: wp("54%"),
    height: hp("0%"),
    minHeight: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("15%")
  },
  ImageBackground_113_821: {
    width: wp("2%"),
    height: hp("1%"),
    top: hp("12%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%")
  },
  ImageBackground_113_824: {
    width: wp("2%"),
    height: hp("1%"),
    top: hp("9%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%")
  },
  ImageBackground_113_827: {
    width: wp("2%"),
    height: hp("1%"),
    top: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6%")
  },
  ImageBackground_113_828: {
    width: wp("3%"),
    height: hp("1%"),
    top: hp("16%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%")
  },
  View_113_832: {
    width: wp("55%"),
    minWidth: wp("55%"),
    height: hp("18%"),
    minHeight: hp("18%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("38%"),
    top: hp("103%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_113_833: {
    width: wp("55%"),
    minWidth: wp("55%"),
    height: hp("16%"),
    minHeight: hp("16%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_113_834: {
    width: wp("55%"),
    minWidth: wp("55%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(48, 157, 143, 1)",
    borderTopLeftRadius: 3.0858945846557617,
    borderTopRightRadius: 3.0858945846557617,
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0
  },
  View_113_835: {
    width: wp("24%"),
    minWidth: wp("24%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6%"),
    top: hp("1%"),
    justifyContent: "flex-start"
  },
  Text_113_835: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 7.590532302856445,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_113_836: {
    width: wp("50%"),
    minWidth: wp("50%"),
    height: hp("8%"),
    minHeight: hp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%"),
    top: hp("7%"),
    borderColor: "rgba(189, 189, 189, 1)",
    borderWidth: 0.1542947143316269
  },
  View_113_837: {
    width: wp("8%"),
    minWidth: wp("8%"),
    minHeight: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8%"),
    top: hp("9%"),
    justifyContent: "flex-start"
  },
  Text_113_837: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 3.6288414001464844,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_113_838: {
    width: wp("4%"),
    minWidth: wp("4%"),
    minHeight: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8%"),
    top: hp("13%"),
    justifyContent: "flex-start"
  },
  Text_113_838: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 3.6288414001464844,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_113_839: {
    width: wp("8%"),
    minWidth: wp("8%"),
    minHeight: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("22%"),
    top: hp("9%"),
    justifyContent: "flex-start"
  },
  Text_113_839: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 3.6288414001464844,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_113_840: {
    width: wp("16%"),
    minWidth: wp("16%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("22%"),
    top: hp("12%"),
    justifyContent: "flex-start"
  },
  Text_113_840: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 3.6288414001464844,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_113_841: {
    width: wp("50%"),
    minWidth: wp("50%"),
    height: hp("0%"),
    minHeight: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%"),
    top: hp("11%")
  },
  ImageBackground_113_842: {
    width: wp("4%"),
    minWidth: wp("4%"),
    height: hp("2%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    top: hp("8%"),
    resizeMode: "cover"
  },
  ImageBackground_113_843: {
    width: wp("4%"),
    minWidth: wp("4%"),
    height: hp("2%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    top: hp("13%"),
    resizeMode: "cover"
  },
  View_113_844: {
    width: wp("49%"),
    minWidth: wp("49%"),
    height: hp("1%"),
    minHeight: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    top: hp("6%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderColor: "rgba(0, 0, 0, 1)",
    borderWidth: 0.1542947143316269
  },
  View_113_845: {
    width: wp("50%"),
    minWidth: wp("50%"),
    height: hp("2%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%"),
    top: hp("5%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderColor: "rgba(196, 196, 196, 1)",
    borderWidth: 0.1542947143316269
  },
  View_113_846: {
    width: wp("13%"),
    minWidth: wp("13%"),
    minHeight: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    top: hp("5%"),
    justifyContent: "flex-start"
  },
  Text_113_846: {
    color: "rgba(48, 157, 143, 1)",
    fontSize: 3.6288414001464844,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_113_847: {
    width: wp("6%"),
    minWidth: wp("6%"),
    minHeight: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("22%"),
    top: hp("5%"),
    justifyContent: "flex-start"
  },
  Text_113_847: {
    color: "rgba(48, 157, 143, 1)",
    fontSize: 3.6288414001464844,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_113_848: {
    width: wp("7%"),
    minWidth: wp("7%"),
    minHeight: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("42%"),
    top: hp("5%"),
    justifyContent: "flex-start"
  },
  Text_113_848: {
    color: "rgba(48, 157, 143, 1)",
    fontSize: 3.6288414001464844,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_113_849: {
    width: wp("7%"),
    height: hp("1%"),
    top: hp("13%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("42%")
  },
  ImageBackground_113_855: {
    width: wp("7%"),
    height: hp("1%"),
    top: hp("9%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("42%")
  },
  View_113_861: {
    width: wp("5%"),
    minWidth: wp("5%"),
    minHeight: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("43%"),
    top: hp("10%"),
    justifyContent: "flex-start"
  },
  Text_113_861: {
    color: "rgba(48, 157, 143, 1)",
    fontSize: 2.0858945846557617,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_113_862: {
    width: wp("5%"),
    minWidth: wp("5%"),
    minHeight: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("43%"),
    top: hp("14%"),
    justifyContent: "flex-start"
  },
  Text_113_862: {
    color: "rgba(48, 157, 143, 1)",
    fontSize: 2.0858945846557617,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_113_863: {
    width: wp("8%"),
    minWidth: wp("8%"),
    height: hp("1%"),
    minHeight: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("23%"),
    top: hp("17%"),
    backgroundColor: "rgba(48, 157, 143, 1)"
  },
  View_113_864: {
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
  Text_113_864: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 2.377835750579834,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_113_865: {
    width: wp("3%"),
    height: hp("1%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%")
  },
  View_113_869: {
    width: wp("55%"),
    minWidth: wp("55%"),
    height: hp("17%"),
    minHeight: hp("17%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("38%"),
    top: hp("40%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_113_870: {
    width: wp("55%"),
    minWidth: wp("55%"),
    height: hp("17%"),
    minHeight: hp("17%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_113_871: {
    width: wp("55%"),
    minWidth: wp("55%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(48, 157, 143, 1)",
    borderTopLeftRadius: 3.1063013076782227,
    borderTopRightRadius: 3.1063013076782227,
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0
  },
  View_113_872: {
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
  Text_113_872: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 7.577761650085449,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_113_873: {
    width: wp("8%"),
    minWidth: wp("8%"),
    height: hp("1%"),
    minHeight: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("24%"),
    top: hp("16%"),
    backgroundColor: "rgba(48, 157, 143, 1)"
  },
  View_113_874: {
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
  Text_113_874: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 2.400172710418701,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_113_875: {
    width: wp("49%"),
    minWidth: wp("49%"),
    height: hp("1%"),
    minHeight: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    top: hp("5%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderColor: "rgba(0, 0, 0, 1)",
    borderWidth: 0.1553150713443756
  },
  View_113_876: {
    width: wp("51%"),
    minWidth: wp("51%"),
    height: hp("2%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%"),
    top: hp("4%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderColor: "rgba(196, 196, 196, 1)",
    borderWidth: 0.1553150713443756
  },
  View_113_877: {
    width: wp("51%"),
    minWidth: wp("51%"),
    height: hp("8%"),
    minHeight: hp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%"),
    top: hp("7%"),
    borderColor: "rgba(189, 189, 189, 1)",
    borderWidth: 0.1553150713443756
  },
  View_113_878: {
    width: wp("3%"),
    minWidth: wp("3%"),
    minHeight: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("18%"),
    top: hp("5%"),
    justifyContent: "flex-start"
  },
  Text_113_878: {
    color: "rgba(48, 157, 143, 1)",
    fontSize: 3.4696216583251953,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_113_879: {
    width: wp("4%"),
    minWidth: wp("4%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("18%"),
    top: hp("7%"),
    justifyContent: "flex-start"
  },
  Text_113_879: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 2.88287615776062,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_113_880: {
    width: wp("6%"),
    minWidth: wp("6%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("18%"),
    top: hp("10%"),
    justifyContent: "flex-start"
  },
  Text_113_880: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 2.88287615776062,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_113_881: {
    width: wp("4%"),
    minWidth: wp("4%"),
    minHeight: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%"),
    top: hp("5%"),
    justifyContent: "flex-start"
  },
  Text_113_881: {
    color: "rgba(48, 157, 143, 1)",
    fontSize: 3.4696216583251953,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_113_882: {
    width: wp("9%"),
    minWidth: wp("9%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%"),
    top: hp("7%"),
    justifyContent: "flex-start"
  },
  Text_113_882: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 2.88287615776062,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_113_883: {
    width: wp("7%"),
    minWidth: wp("7%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%"),
    top: hp("10%"),
    justifyContent: "flex-start"
  },
  Text_113_883: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 2.88287615776062,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_113_884: {
    width: wp("7%"),
    minWidth: wp("7%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%"),
    top: hp("13%"),
    justifyContent: "flex-start"
  },
  Text_113_884: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 2.88287615776062,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_113_885: {
    width: wp("10%"),
    minWidth: wp("10%"),
    minHeight: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("28%"),
    top: hp("5%"),
    justifyContent: "flex-start"
  },
  Text_113_885: {
    color: "rgba(48, 157, 143, 1)",
    fontSize: 3.4696216583251953,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_113_886: {
    width: wp("12%"),
    minWidth: wp("12%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("28%"),
    top: hp("7%"),
    justifyContent: "flex-start"
  },
  Text_113_886: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 2.88287615776062,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_113_887: {
    width: wp("12%"),
    minWidth: wp("12%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("28%"),
    top: hp("10%"),
    justifyContent: "flex-start"
  },
  Text_113_887: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 2.88287615776062,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_113_888: {
    width: wp("3%"),
    minWidth: wp("3%"),
    height: hp("1%"),
    minHeight: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("46%"),
    top: hp("8%"),
    backgroundColor: "rgba(48, 157, 143, 1)"
  },
  View_113_889: {
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
  Text_113_889: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 2.113682508468628,
    fontWeight: "600",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_113_890: {
    width: wp("3%"),
    minWidth: wp("3%"),
    height: hp("1%"),
    minHeight: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("46%"),
    top: hp("10%"),
    backgroundColor: "rgba(48, 157, 143, 1)"
  },
  View_113_891: {
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
  Text_113_891: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 2.113682508468628,
    fontWeight: "600",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_113_892: {
    width: wp("4%"),
    minWidth: wp("4%"),
    minHeight: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("46%"),
    top: hp("5%"),
    justifyContent: "flex-start"
  },
  Text_113_892: {
    color: "rgba(48, 157, 143, 1)",
    fontSize: 3.4696216583251953,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_113_893: {
    width: wp("51%"),
    minWidth: wp("51%"),
    height: hp("0%"),
    minHeight: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%"),
    top: hp("9%")
  },
  View_113_894: {
    width: wp("2%"),
    minWidth: wp("2%"),
    height: hp("1%"),
    minHeight: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    top: hp("1%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_113_895: {
    width: wp("2%"),
    height: hp("1%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_113_554: {
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
  View_113_555: {
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
  View_113_556: {
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
  View_113_557: {
    width: wp("21%"),
    minWidth: wp("21%"),
    height: hp("27%"),
    minHeight: hp("27%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7%"),
    top: hp("1%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_113_558: {
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
  ImageBackground_113_559: {
    width: wp("4%"),
    height: hp("2%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_113_560: {
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
  Text_113_560: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 9.361201286315918,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_113_561: {
    width: wp("19%"),
    minWidth: wp("19%"),
    height: hp("2%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("5%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_113_562: {
    width: wp("4%"),
    height: hp("2%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_113_563: {
    width: wp("13%"),
    minWidth: wp("13%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_113_563: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 9.361201286315918,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_113_564: {
    width: wp("16%"),
    minWidth: wp("16%"),
    height: hp("2%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("10%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_113_565: {
    width: wp("4%"),
    height: hp("2%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_113_568: {
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
  Text_113_568: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 9.361201286315918,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_113_569: {
    width: wp("21%"),
    minWidth: wp("21%"),
    height: hp("2%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("15%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_113_570: {
    width: wp("4%"),
    height: hp("1%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_113_571: {
    width: wp("15%"),
    minWidth: wp("15%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_113_571: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 9.361201286315918,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_113_576: {
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
  ImageBackground_113_577: {
    width: wp("4%"),
    height: hp("2%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_113_578: {
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
  Text_113_578: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 9.361201286315918,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_113_579: {
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
  ImageBackground_113_580: {
    width: wp("4%"),
    height: hp("2%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_113_583: {
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
  Text_113_583: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 9.361201286315918,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_113_584: {
    width: wp("16%"),
    minWidth: wp("16%"),
    height: hp("2%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7%"),
    top: hp("45%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_113_585: {
    width: wp("4%"),
    height: hp("2%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_113_586: {
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
  Text_113_586: {
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
