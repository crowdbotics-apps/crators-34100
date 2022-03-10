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
      <View style={styles.View_199_291}>
        <View style={styles.View_199_292} />
        <View style={styles.View_199_293}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/c78a/5bdf/8df1323d87ff79c5a7d36f96b0228975"
            }}
            style={styles.ImageBackground_199_294}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/187f/69fa/dfa98a845627d36d65cc73e4b3f304b8"
            }}
            style={styles.ImageBackground_199_296}
          />
          <View style={styles.View_199_299}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a930/9c43/f8be4578e6cc748227b7f11f9761136a"
              }}
              style={styles.ImageBackground_199_300}
            />
            <View style={styles.View_199_301}>
              <Text style={styles.Text_199_301}>5</Text>
            </View>
          </View>
          <View style={styles.View_199_302}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/7623/4d95/23fbe9ab8b5cc002ef4d04d2f4cee898"
              }}
              style={styles.ImageBackground_199_303}
            />
            <View style={styles.View_199_304}>
              <Text style={styles.Text_199_304}>5</Text>
            </View>
          </View>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/7549/914c/1b9c5fd1fb1faf161873a8a253ed3c42"
          }}
          style={styles.ImageBackground_199_305}
        />
      </View>
      <View style={styles.View_199_306}>
        <View style={styles.View_199_307}>
          <View style={styles.View_199_308} />
          <View style={styles.View_199_309} />
          <View style={styles.View_199_310}>
            <Text style={styles.Text_199_310}>12</Text>
          </View>
          <View style={styles.View_199_311}>
            <Text style={styles.Text_199_311}>New Appointments</Text>
          </View>
        </View>
        <View style={styles.View_199_315}>
          <View style={styles.View_199_316} />
          <View style={styles.View_199_317}>
            <Text style={styles.Text_199_317}>Wallet Balance</Text>
          </View>
          <View style={styles.View_199_318}>
            <Text style={styles.Text_199_318}>N350,000:89</Text>
          </View>
          <View style={styles.View_199_319} />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/6b05/d275/12fd2100e6d15118e78891b3d99f9499"
            }}
            style={styles.ImageBackground_199_320}
          />
        </View>
        <View style={styles.View_199_321}>
          <View style={styles.View_199_322} />
          <View style={styles.View_199_323} />
          <View style={styles.View_199_324}>
            <Text style={styles.Text_199_324}>12</Text>
          </View>
          <View style={styles.View_199_325}>
            <Text style={styles.Text_199_325}>Total Patients</Text>
          </View>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3375/ec7b/66d64c63622da9a8eb71f90e4bee29a4"
          }}
          style={styles.ImageBackground_200_494}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/f1bc/1604/75947c0f5f2cdf2f7d1ea92f51be19ea"
          }}
          style={styles.ImageBackground_200_497}
        />
      </View>
      <View style={styles.View_199_329}>
        <View style={styles.View_199_330} />
        <View style={styles.View_199_331}>
          <Text style={styles.Text_199_331}>Dr. Yemi Osinbajo</Text>
        </View>
        <View style={styles.View_199_332}>
          <Text style={styles.Text_199_332}>Welcome to your Page</Text>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a76e/6fb3/3e5d5ddc62e4287f044d9244212df223"
          }}
          style={styles.ImageBackground_199_333}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/d4f1/a435/3b8e0ee34b65e1a6fd0bcccccac4077d"
          }}
          style={styles.ImageBackground_199_334}
        />
      </View>
      <View style={styles.View_199_335}>
        <View style={styles.View_199_336} />
        <View style={styles.View_199_337} />
        <View style={styles.View_199_338}>
          <Text style={styles.Text_199_338}>Notifications</Text>
        </View>
        <View style={styles.View_199_339}>
          <Text style={styles.Text_199_339}>
            Someone has booked an appointment
          </Text>
        </View>
        <View style={styles.View_199_340}>
          <Text style={styles.Text_199_340}>20/08/2020 8:04pm</Text>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/7540/0c07/86ed9b88f4f32d3e409fc7b792b0d62f"
          }}
          style={styles.ImageBackground_199_341}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/ba2c/6653/c4199f488a262a1331e04e6f0019002d"
          }}
          style={styles.ImageBackground_199_342}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a679/c7b1/d9ab80716f15b915c459bc33fbcb0440"
          }}
          style={styles.ImageBackground_199_343}
        />
      </View>
      <View style={styles.View_199_346}>
        <View style={styles.View_199_347} />
        <View style={styles.View_199_348} />
        <View style={styles.View_199_349}>
          <Text style={styles.Text_199_349}>Your Stats</Text>
        </View>
        <View style={styles.View_199_350}>
          <Text style={styles.Text_199_350}>No. of attended to</Text>
        </View>
        <View style={styles.View_199_351}>
          <Text style={styles.Text_199_351}>118</Text>
        </View>
        <View style={styles.View_199_352}>
          <Text style={styles.Text_199_352}>Wallet Balance</Text>
        </View>
        <View style={styles.View_199_353}>
          <Text style={styles.Text_199_353}>Customers</Text>
        </View>
        <View style={styles.View_199_354}>
          <Text style={styles.Text_199_354}>N450,610:97</Text>
        </View>
        <View style={styles.View_199_355}>
          <Text style={styles.Text_199_355}>1800</Text>
        </View>
        <View style={styles.View_199_356}>
          <Text style={styles.Text_199_356}>Rating</Text>
        </View>
        <View style={styles.View_199_357}>
          <Text style={styles.Text_199_357}>2005</Text>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/34aa/5ee8/f4e0e65eeb82a291279feb7589b85136"
          }}
          style={styles.ImageBackground_199_358}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/d6a4/017e/85f9c2d546a1c610437b3d5f3a71ed1a"
          }}
          style={styles.ImageBackground_199_359}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/d6a4/017e/85f9c2d546a1c610437b3d5f3a71ed1a"
          }}
          style={styles.ImageBackground_199_360}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/d6a4/017e/85f9c2d546a1c610437b3d5f3a71ed1a"
          }}
          style={styles.ImageBackground_199_361}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3e8c/257b/b4ab21653bf610b33a2c735e40e3edce"
          }}
          style={styles.ImageBackground_199_362}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1fb9/164a/e56ba3044cf3ca445b00e36555283d9e"
          }}
          style={styles.ImageBackground_199_365}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/8597/6dd9/c9df4e86e06d65119c004cec6d3ce88d"
          }}
          style={styles.ImageBackground_199_368}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/d0b5/a6cd/0529dcbfcd4fcc27a2665eaec6945e9d"
          }}
          style={styles.ImageBackground_199_369}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/994a/b92e/ed149c0aeea2cea3ef0abc92e85826a1"
          }}
          style={styles.ImageBackground_199_373}
        />
      </View>
      <View style={styles.View_199_379}>
        <View style={styles.View_199_380} />
        <View style={styles.View_199_381} />
        <View style={styles.View_199_382}>
          <Text style={styles.Text_199_382}>Customer Reviews</Text>
        </View>
        <View style={styles.View_199_383} />
        <View style={styles.View_199_384}>
          <Text style={styles.Text_199_384}>Ibrahim Mohammed</Text>
        </View>
        <View style={styles.View_199_385}>
          <Text style={styles.Text_199_385}>Adewale Bala</Text>
        </View>
        <View style={styles.View_199_386}>
          <Text style={styles.Text_199_386}>Great Experience.</Text>
        </View>
        <View style={styles.View_199_387}>
          <Text style={styles.Text_199_387}>
            A very nice and friendly doctor
          </Text>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/d33f/dd34/553e443af8e0349d3bd422ff323ad1bc"
          }}
          style={styles.ImageBackground_199_388}
        />
        <View style={styles.View_199_389} />
        <View style={styles.View_199_390} />
        <View style={styles.View_199_391}>
          <Text style={styles.Text_199_391}>Customer Name</Text>
        </View>
        <View style={styles.View_199_392}>
          <Text style={styles.Text_199_392}>Comment</Text>
        </View>
        <View style={styles.View_199_393}>
          <Text style={styles.Text_199_393}>Star &amp; Date</Text>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/994a/b92e/ed149c0aeea2cea3ef0abc92e85826a1"
          }}
          style={styles.ImageBackground_199_394}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/8ad5/a6c4/432bb3cd0287aeb36664002931c7d43e"
          }}
          style={styles.ImageBackground_199_400}
        />
        <View style={styles.View_199_406}>
          <Text style={styles.Text_199_406}>20/10/2020</Text>
        </View>
        <View style={styles.View_199_407}>
          <Text style={styles.Text_199_407}>20/10/2020</Text>
        </View>
        <View style={styles.View_199_408}>
          <View style={styles.View_199_409}>
            <Text style={styles.Text_199_409}>View All</Text>
          </View>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/6aed/9b31/f08231392c161e3159aac2b0efefa2d6"
          }}
          style={styles.ImageBackground_199_410}
        />
      </View>
      <View style={styles.View_199_414}>
        <View style={styles.View_199_415} />
        <View style={styles.View_199_416} />
        <View style={styles.View_199_417}>
          <Text style={styles.Text_199_417}>New Appointments</Text>
        </View>
        <View style={styles.View_199_418}>
          <View style={styles.View_199_419}>
            <Text style={styles.Text_199_419}>View All</Text>
          </View>
        </View>
        <View style={styles.View_199_420} />
        <View style={styles.View_199_421} />
        <View style={styles.View_199_422} />
        <View style={styles.View_199_423}>
          <Text style={styles.Text_199_423}>Time</Text>
        </View>
        <View style={styles.View_199_424}>
          <Text style={styles.Text_199_424}>Tue, 22/082020 10PM - 11PM</Text>
        </View>
        <View style={styles.View_199_425}>
          <Text style={styles.Text_199_425}>22/08/2020 12PM-1PM</Text>
        </View>
        <View style={styles.View_199_426}>
          <Text style={styles.Text_199_426}>22/08/2020 10:08PM</Text>
        </View>
        <View style={styles.View_199_427}>
          <Text style={styles.Text_199_427}>Customer Name</Text>
        </View>
        <View style={styles.View_199_428}>
          <Text style={styles.Text_199_428}>Ibrahim Mohammed</Text>
        </View>
        <View style={styles.View_199_429}>
          <Text style={styles.Text_199_429}>Adewale Basmus</Text>
        </View>
        <View style={styles.View_199_430}>
          <Text style={styles.Text_199_430}>Adewale Basmus</Text>
        </View>
        <View style={styles.View_199_431}>
          <View style={styles.View_199_432}>
            <Text style={styles.Text_199_432}>View</Text>
          </View>
        </View>
        <View style={styles.View_199_433}>
          <View style={styles.View_199_434}>
            <Text style={styles.Text_199_434}>View</Text>
          </View>
        </View>
        <View style={styles.View_199_435}>
          <View style={styles.View_199_436}>
            <Text style={styles.Text_199_436}>View</Text>
          </View>
        </View>
        <View style={styles.View_199_437}>
          <Text style={styles.Text_199_437}>Action</Text>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1b25/6f18/a0971726c9a3db22748a8ce7352c5df6"
          }}
          style={styles.ImageBackground_199_438}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1b25/6f18/a0971726c9a3db22748a8ce7352c5df6"
          }}
          style={styles.ImageBackground_199_439}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/e9fd/25c4/387a9f122156dce1a43c1eb749865bfd"
          }}
          style={styles.ImageBackground_200_504}
        />
      </View>
      <View style={styles.View_199_444}>
        <View style={styles.View_199_445} />
        <View style={styles.View_199_446} />
        <View style={styles.View_199_447}>
          <View style={styles.View_199_448}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/bc0f/be55/b2d763216f5ba393ee5c84acfe4fe09f"
              }}
              style={styles.ImageBackground_199_449}
            />
            <View style={styles.View_199_450}>
              <Text style={styles.Text_199_450}>Home</Text>
            </View>
          </View>
          <View style={styles.View_199_451}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/83b8/8593/e72e3d853bc022c61e6e5607520be1ef"
              }}
              style={styles.ImageBackground_200_474}
            />
            <View style={styles.View_199_453}>
              <Text style={styles.Text_199_453}>Cards</Text>
            </View>
          </View>
          <View style={styles.View_200_484}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/6e3c/ad37/c4a6cef565e678b35acf7f2dc792d0fb"
              }}
              style={styles.ImageBackground_200_485}
            />
            <View style={styles.View_200_486}>
              <Text style={styles.Text_200_486}>Wallet</Text>
            </View>
          </View>
          <View style={styles.View_200_487}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/d66e/846d/363916da8ef2da29f815450d771a4fc4"
              }}
              style={styles.ImageBackground_200_483}
            />
            <View style={styles.View_200_489}>
              <Text style={styles.Text_200_489}>History</Text>
            </View>
          </View>
          <View style={styles.View_199_462}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/fef3/5405/15b19c84abc6558fef74272adbfea264"
              }}
              style={styles.ImageBackground_199_463}
            />
            <View style={styles.View_199_464}>
              <Text style={styles.Text_199_464}>Reviews</Text>
            </View>
          </View>
          <View style={styles.View_199_465}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/f56f/d45f/def52f8145ff23ab1b1117784abd26e1"
              }}
              style={styles.ImageBackground_199_466}
            />
            <View style={styles.View_199_469}>
              <Text style={styles.Text_199_469}>Settings</Text>
            </View>
          </View>
        </View>
        <View style={styles.View_199_470}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/fa63/df50/703912ac1780c9b08c0a3e7bae69bdda"
            }}
            style={styles.ImageBackground_199_471}
          />
          <View style={styles.View_199_472}>
            <Text style={styles.Text_199_472}>Logout</Text>
          </View>
        </View>
        <View style={styles.View_200_490}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/974c/5adf/ec88dc0bf72dd7040172482d6bfff5e8"
            }}
            style={styles.ImageBackground_200_482}
          />
          <View style={styles.View_200_492}>
            <Text style={styles.Text_200_492}>Contact Us</Text>
          </View>
        </View>
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: { backgroundColor: "rgba(252, 252, 252, 1)" },
  View_2: { height: hp("140%") },
  View_199_291: {
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
  View_199_292: {
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
  View_199_293: {
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
  ImageBackground_199_294: {
    width: wp("3%"),
    height: hp("2%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9%")
  },
  ImageBackground_199_296: {
    width: wp("4%"),
    height: hp("2%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_199_299: {
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
  ImageBackground_199_300: {
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
  View_199_301: {
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
  Text_199_301: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 4.285236358642578,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_199_302: {
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
  ImageBackground_199_303: {
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
  View_199_304: {
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
  Text_199_304: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 4.285236358642578,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_199_305: {
    width: wp("5%"),
    height: hp("2%"),
    top: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%")
  },
  View_199_306: {
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
  View_199_307: {
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
  View_199_308: {
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
  View_199_309: {
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
  View_199_310: {
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
  Text_199_310: {
    color: "rgba(48, 157, 143, 1)",
    fontSize: 8.481027603149414,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_199_311: {
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
  Text_199_311: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 6.035454750061035,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_199_315: {
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
  View_199_316: {
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
  View_199_317: {
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
  Text_199_317: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 6.035454750061035,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_199_318: {
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
  Text_199_318: {
    color: "rgba(48, 157, 143, 1)",
    fontSize: 8.481027603149414,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_199_319: {
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
  ImageBackground_199_320: {
    width: wp("3%"),
    height: hp("1%"),
    top: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%")
  },
  View_199_321: {
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
  View_199_322: {
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
  View_199_323: {
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
  View_199_324: {
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
  Text_199_324: {
    color: "rgba(48, 157, 143, 1)",
    fontSize: 8.481027603149414,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_199_325: {
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
  Text_199_325: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 6.035454750061035,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_200_494: {
    width: wp("2%"),
    height: hp("1%"),
    top: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("35%")
  },
  ImageBackground_200_497: {
    width: wp("3%"),
    height: hp("1%"),
    top: hp("11%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%")
  },
  View_199_329: {
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
  View_199_330: {
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
  View_199_331: {
    width: wp("21%"),
    minWidth: wp("21%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("18%"),
    top: hp("2%"),
    justifyContent: "flex-start"
  },
  Text_199_331: {
    color: "rgba(48, 157, 143, 1)",
    fontSize: 6.812126159667969,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_199_332: {
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
  Text_199_332: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 6.812126159667969,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_199_333: {
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
  ImageBackground_199_334: {
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
  View_199_335: {
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
  View_199_336: {
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
  View_199_337: {
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
  View_199_338: {
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
  Text_199_338: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 8.651593208312988,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_199_339: {
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
  Text_199_339: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 4.325796604156494,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_199_340: {
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
  Text_199_340: {
    color: "rgba(48, 157, 143, 1)",
    fontSize: 4.325796604156494,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_199_341: {
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
  ImageBackground_199_342: {
    width: wp("2%"),
    height: hp("1%"),
    top: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6%")
  },
  ImageBackground_199_343: {
    width: wp("2%"),
    height: hp("1%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%")
  },
  View_199_346: {
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
  View_199_347: {
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
  View_199_348: {
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
  View_199_349: {
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
  Text_199_349: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 8.570836067199707,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_199_350: {
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
  Text_199_350: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 7.367039680480957,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_199_351: {
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
  Text_199_351: {
    color: "rgba(48, 157, 143, 1)",
    fontSize: 7.367039680480957,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_199_352: {
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
  Text_199_352: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 7.361144065856934,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_199_353: {
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
  Text_199_353: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 7.361144065856934,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_199_354: {
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
  Text_199_354: {
    color: "rgba(48, 157, 143, 1)",
    fontSize: 7.361144065856934,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_199_355: {
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
  Text_199_355: {
    color: "rgba(48, 157, 143, 1)",
    fontSize: 7.361144065856934,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_199_356: {
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
  Text_199_356: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 7.361144065856934,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_199_357: {
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
  Text_199_357: {
    color: "rgba(48, 157, 143, 1)",
    fontSize: 7.361144065856934,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_199_358: {
    width: wp("3%"),
    height: hp("1%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%")
  },
  ImageBackground_199_359: {
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
  ImageBackground_199_360: {
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
  ImageBackground_199_361: {
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
  ImageBackground_199_362: {
    width: wp("3%"),
    height: hp("1%"),
    top: hp("13%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6%")
  },
  ImageBackground_199_365: {
    width: wp("2%"),
    height: hp("1%"),
    top: hp("9%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6%")
  },
  ImageBackground_199_368: {
    width: wp("2%"),
    height: hp("1%"),
    top: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6%")
  },
  ImageBackground_199_369: {
    width: wp("3%"),
    height: hp("1%"),
    top: hp("18%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%")
  },
  ImageBackground_199_373: {
    width: wp("8%"),
    height: hp("1%"),
    top: hp("9%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("49%")
  },
  View_199_379: {
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
  View_199_380: {
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
  View_199_381: {
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
  View_199_382: {
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
  Text_199_382: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 8.568392753601074,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_199_383: {
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
  View_199_384: {
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
  Text_199_384: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 4.100802421569824,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_199_385: {
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
  Text_199_385: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 4.100802421569824,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_199_386: {
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
  Text_199_386: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 4.100802421569824,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_199_387: {
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
  Text_199_387: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 4.100802421569824,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_199_388: {
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
  View_199_389: {
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
  View_199_390: {
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
  View_199_391: {
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
  Text_199_391: {
    color: "rgba(48, 157, 143, 1)",
    fontSize: 4.100802421569824,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_199_392: {
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
  Text_199_392: {
    color: "rgba(48, 157, 143, 1)",
    fontSize: 4.100802421569824,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_199_393: {
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
  Text_199_393: {
    color: "rgba(48, 157, 143, 1)",
    fontSize: 4.100802421569824,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_199_394: {
    width: wp("8%"),
    height: hp("1%"),
    top: hp("14%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("47%")
  },
  ImageBackground_199_400: {
    width: wp("8%"),
    height: hp("1%"),
    top: hp("9%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("47%")
  },
  View_199_406: {
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
  Text_199_406: {
    color: "rgba(48, 157, 143, 1)",
    fontSize: 2.4005348682403564,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_199_407: {
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
  Text_199_407: {
    color: "rgba(48, 157, 143, 1)",
    fontSize: 2.4005348682403564,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_199_408: {
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
  View_199_409: {
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
  Text_199_409: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 2.722243070602417,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_199_410: {
    width: wp("3%"),
    height: hp("1%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%")
  },
  View_199_414: {
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
  View_199_415: {
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
  View_199_416: {
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
  View_199_417: {
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
  Text_199_417: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 8.55431842803955,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_199_418: {
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
  View_199_419: {
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
  Text_199_419: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 2.7468574047088623,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_199_420: {
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
  View_199_421: {
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
  View_199_422: {
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
  View_199_423: {
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
  Text_199_423: {
    color: "rgba(48, 157, 143, 1)",
    fontSize: 3.925349235534668,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_199_424: {
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
  Text_199_424: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 3.278778076171875,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_199_425: {
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
  Text_199_425: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 3.278778076171875,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_199_426: {
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
  Text_199_426: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 3.278778076171875,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_199_427: {
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
  Text_199_427: {
    color: "rgba(48, 157, 143, 1)",
    fontSize: 3.925349235534668,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_199_428: {
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
  Text_199_428: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 3.278778076171875,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_199_429: {
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
  Text_199_429: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 3.278778076171875,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_199_430: {
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
  Text_199_430: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 3.278778076171875,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_199_431: {
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
  View_199_432: {
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
  Text_199_432: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 2.329195261001587,
    fontWeight: "600",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_199_433: {
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
  View_199_434: {
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
  Text_199_434: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 2.329195261001587,
    fontWeight: "600",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_199_435: {
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
  View_199_436: {
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
  Text_199_436: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 2.329195261001587,
    fontWeight: "600",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_199_437: {
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
  Text_199_437: {
    color: "rgba(48, 157, 143, 1)",
    fontSize: 3.925349235534668,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_199_438: {
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
  ImageBackground_199_439: {
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
  ImageBackground_200_504: {
    width: wp("3%"),
    height: hp("2%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%")
  },
  View_199_444: {
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
  View_199_445: {
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
  View_199_446: {
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
  View_199_447: {
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
  View_199_448: {
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
  ImageBackground_199_449: {
    width: wp("4%"),
    height: hp("2%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_199_450: {
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
  Text_199_450: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 9.361201286315918,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_199_451: {
    width: wp("15%"),
    minWidth: wp("15%"),
    height: hp("2%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("5%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_200_474: {
    width: wp("4%"),
    height: hp("2%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_199_453: {
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
  Text_199_453: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 9.361201286315918,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_200_484: {
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
  ImageBackground_200_485: {
    width: wp("4%"),
    height: hp("2%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_200_486: {
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
  Text_200_486: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 9.361201286315918,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_200_487: {
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
  ImageBackground_200_483: {
    width: wp("4%"),
    height: hp("2%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_200_489: {
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
  Text_200_489: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 9.361201286315918,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_199_462: {
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
  ImageBackground_199_463: {
    width: wp("4%"),
    height: hp("2%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_199_464: {
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
  Text_199_464: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 9.361201286315918,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_199_465: {
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
  ImageBackground_199_466: {
    width: wp("4%"),
    height: hp("2%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_199_469: {
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
  Text_199_469: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 9.361201286315918,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_199_470: {
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
  ImageBackground_199_471: {
    width: wp("4%"),
    height: hp("2%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_199_472: {
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
  Text_199_472: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 9.361201286315918,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_200_490: {
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
  ImageBackground_200_482: {
    width: wp("4%"),
    height: hp("2%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_200_492: {
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
  Text_200_492: {
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
