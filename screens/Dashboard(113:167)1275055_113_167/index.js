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
      <View style={styles.View_113_168}>
        <View style={styles.View_113_169} />
        <View style={styles.View_113_170}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/c78a/5bdf/8df1323d87ff79c5a7d36f96b0228975"
            }}
            style={styles.ImageBackground_113_171}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/187f/69fa/dfa98a845627d36d65cc73e4b3f304b8"
            }}
            style={styles.ImageBackground_113_173}
          />
          <View style={styles.View_113_176}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a930/9c43/f8be4578e6cc748227b7f11f9761136a"
              }}
              style={styles.ImageBackground_113_177}
            />
            <View style={styles.View_113_178}>
              <Text style={styles.Text_113_178}>5</Text>
            </View>
          </View>
          <View style={styles.View_113_179}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/7623/4d95/23fbe9ab8b5cc002ef4d04d2f4cee898"
              }}
              style={styles.ImageBackground_113_180}
            />
            <View style={styles.View_113_181}>
              <Text style={styles.Text_113_181}>5</Text>
            </View>
          </View>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/7549/914c/1b9c5fd1fb1faf161873a8a253ed3c42"
          }}
          style={styles.ImageBackground_113_182}
        />
      </View>
      <View style={styles.View_113_183}>
        <View style={styles.View_113_184}>
          <View style={styles.View_113_185} />
          <View style={styles.View_113_186} />
          <View style={styles.View_113_187}>
            <Text style={styles.Text_113_187}>12</Text>
          </View>
          <View style={styles.View_113_188}>
            <Text style={styles.Text_113_188}>New Orders</Text>
          </View>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a60f/df01/9e3e9a086492c36bba33abe4afdde5ea"
            }}
            style={styles.ImageBackground_113_189}
          />
        </View>
        <View style={styles.View_113_192}>
          <View style={styles.View_113_193} />
          <View style={styles.View_113_194} />
          <View style={styles.View_113_195}>
            <Text style={styles.Text_113_195}>100+</Text>
          </View>
          <View style={styles.View_113_196}>
            <Text style={styles.Text_113_196}>Products</Text>
          </View>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/05dd/2d79/438665a4ed8f7bfe84b2d56b5d0ea34d"
            }}
            style={styles.ImageBackground_113_197}
          />
        </View>
        <View style={styles.View_113_198}>
          <View style={styles.View_113_199} />
          <View style={styles.View_113_200}>
            <Text style={styles.Text_113_200}>Wallet Balance</Text>
          </View>
          <View style={styles.View_113_201}>
            <Text style={styles.Text_113_201}>N350,000:89</Text>
          </View>
          <View style={styles.View_113_202} />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/cbc1/621a/61f3cbc1bd5ad9361be4287ff5644821"
            }}
            style={styles.ImageBackground_113_203}
          />
        </View>
        <View style={styles.View_113_204}>
          <View style={styles.View_113_205} />
          <View style={styles.View_113_206} />
          <View style={styles.View_113_207}>
            <Text style={styles.Text_113_207}>12</Text>
          </View>
          <View style={styles.View_113_208}>
            <Text style={styles.Text_113_208}>Sales</Text>
          </View>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3289/116f/0ef08f1b14964735363c9d6f41a9850b"
            }}
            style={styles.ImageBackground_113_209}
          />
        </View>
      </View>
      <View style={styles.View_113_393}>
        <View style={styles.View_113_212} />
        <View style={styles.View_113_213}>
          <Text style={styles.Text_113_213}>Opeyemi Pharmacy</Text>
        </View>
        <View style={styles.View_113_214}>
          <Text style={styles.Text_113_214}>Welcome to your store</Text>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/0ad8/b987/23d22bd2e778701dc9c2a7578bf781b0"
          }}
          style={styles.ImageBackground_113_215}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/7db2/25b5/37acbf3ab08751e3e5fd5f43ea251ce2"
          }}
          style={styles.ImageBackground_113_378}
        />
      </View>
      <View style={styles.View_113_216}>
        <View style={styles.View_113_217} />
        <View style={styles.View_113_218} />
        <View style={styles.View_113_219}>
          <Text style={styles.Text_113_219}>Notifications</Text>
        </View>
        <View style={styles.View_113_220}>
          <Text style={styles.Text_113_220}>
            Successfully Added a new product
          </Text>
        </View>
        <View style={styles.View_113_221}>
          <Text style={styles.Text_113_221}>20/08/2020 8:04pm</Text>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/56c6/49ad/fc2c604e8f1982af2a91c260eff958ed"
          }}
          style={styles.ImageBackground_113_222}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/f1f8/fcb8/b78f70100bc62411969a5798cf6bda4d"
          }}
          style={styles.ImageBackground_113_223}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2698/ad1b/30a9109cb63d875efc7b03e32817c9c5"
          }}
          style={styles.ImageBackground_113_224}
        />
      </View>
      <View style={styles.View_113_227}>
        <View style={styles.View_113_228} />
        <View style={styles.View_113_229} />
        <View style={styles.View_113_230}>
          <Text style={styles.Text_113_230}>Store Stats</Text>
        </View>
        <View style={styles.View_113_231}>
          <Text style={styles.Text_113_231}>No. of Products</Text>
        </View>
        <View style={styles.View_113_232}>
          <Text style={styles.Text_113_232}>118</Text>
        </View>
        <View style={styles.View_113_233}>
          <Text style={styles.Text_113_233}>Total Sales</Text>
        </View>
        <View style={styles.View_113_234}>
          <Text style={styles.Text_113_234}>Customers</Text>
        </View>
        <View style={styles.View_113_235}>
          <Text style={styles.Text_113_235}>N450,610:97</Text>
        </View>
        <View style={styles.View_113_236}>
          <Text style={styles.Text_113_236}>1800</Text>
        </View>
        <View style={styles.View_113_237}>
          <Text style={styles.Text_113_237}>No. of Orders</Text>
        </View>
        <View style={styles.View_113_238}>
          <Text style={styles.Text_113_238}>2005</Text>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/ad6d/fefe/57ddbaed99b4ebd9ad48ea6f4ec86ecb"
          }}
          style={styles.ImageBackground_113_239}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/c13b/68d5/cac88a2f410b17007ca784fde4e3903f"
          }}
          style={styles.ImageBackground_113_240}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/c13b/68d5/cac88a2f410b17007ca784fde4e3903f"
          }}
          style={styles.ImageBackground_113_241}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/c13b/68d5/cac88a2f410b17007ca784fde4e3903f"
          }}
          style={styles.ImageBackground_113_242}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/61db/fc61/67658cc9504e06fc6a4743a8573b9189"
          }}
          style={styles.ImageBackground_113_243}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/4ec3/0544/e9da0edda46274e721b0c022cadf4a4c"
          }}
          style={styles.ImageBackground_113_246}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/0ec2/345c/d439935c2ede06876c1ece2fdafb1a54"
          }}
          style={styles.ImageBackground_113_249}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/5af2/28cf/c625ed86eaa3e3e74bbbc3a88cb44929"
          }}
          style={styles.ImageBackground_113_250}
        />
      </View>
      <View style={styles.View_113_391}>
        <View style={styles.View_113_255} />
        <View style={styles.View_113_256} />
        <View style={styles.View_113_257}>
          <Text style={styles.Text_113_257}>Customer Reviews</Text>
        </View>
        <View style={styles.View_113_258} />
        <View style={styles.View_113_259}>
          <Text style={styles.Text_113_259}>Paracetamol</Text>
        </View>
        <View style={styles.View_113_260}>
          <Text style={styles.Text_113_260}>Boska</Text>
        </View>
        <View style={styles.View_113_261}>
          <Text style={styles.Text_113_261}>It was expire.</Text>
        </View>
        <View style={styles.View_113_262}>
          <Text style={styles.Text_113_262}>
            A very nice and effective drug
          </Text>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/07fe/c3f4/4c2c13388a5e5d82469adc85fddb63a9"
          }}
          style={styles.ImageBackground_113_263}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/59c9/d12e/f8acac9aa264dd74b87763d0274ac4e6"
          }}
          style={styles.ImageBackground_113_264}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/8ddb/0cd0/93ea92320543c3632479d08301afa34f"
          }}
          style={styles.ImageBackground_113_265}
        />
        <View style={styles.View_113_266} />
        <View style={styles.View_113_267} />
        <View style={styles.View_113_268}>
          <Text style={styles.Text_113_268}>Image &amp; Item Name</Text>
        </View>
        <View style={styles.View_113_269}>
          <Text style={styles.Text_113_269}>Comment</Text>
        </View>
        <View style={styles.View_113_270}>
          <Text style={styles.Text_113_270}>Star &amp; Date</Text>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3c0b/088a/983d7f189244e11eb814f9f574c6d081"
          }}
          style={styles.ImageBackground_113_271}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/28d8/6273/739301bc18545d01033bafd56fb16747"
          }}
          style={styles.ImageBackground_113_277}
        />
        <View style={styles.View_113_283}>
          <Text style={styles.Text_113_283}>20/10/2020</Text>
        </View>
        <View style={styles.View_113_284}>
          <Text style={styles.Text_113_284}>20/10/2020</Text>
        </View>
        <View style={styles.View_113_285}>
          <View style={styles.View_113_286}>
            <Text style={styles.Text_113_286}>View All</Text>
          </View>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/760a/36a1/2f01d4ed072a8ae6744e7f54df0ac142"
          }}
          style={styles.ImageBackground_113_383}
        />
      </View>
      <View style={styles.View_113_392}>
        <View style={styles.View_113_288} />
        <View style={styles.View_113_289} />
        <View style={styles.View_113_290}>
          <Text style={styles.Text_113_290}>New Orders</Text>
        </View>
        <View style={styles.View_113_291}>
          <View style={styles.View_113_292}>
            <Text style={styles.Text_113_292}>View All</Text>
          </View>
        </View>
        <View style={styles.View_113_293} />
        <View style={styles.View_113_294} />
        <View style={styles.View_113_295} />
        <View style={styles.View_113_297}>
          <Text style={styles.Text_113_297}>Time</Text>
        </View>
        <View style={styles.View_113_298}>
          <Text style={styles.Text_113_298}>Today 10:08PM</Text>
        </View>
        <View style={styles.View_113_299}>
          <Text style={styles.Text_113_299}>22/08/2020 10:08PM</Text>
        </View>
        <View style={styles.View_113_301}>
          <Text style={styles.Text_113_301}>Items</Text>
        </View>
        <View style={styles.View_113_302}>
          <Text style={styles.Text_113_302}>Ketocona cream 4 packets</Text>
        </View>
        <View style={styles.View_113_303}>
          <Text style={styles.Text_113_303}>Paracetamol 3 bottles</Text>
        </View>
        <View style={styles.View_113_304}>
          <Text style={styles.Text_113_304}>Thermometer 2 pieces</Text>
        </View>
        <View style={styles.View_113_306}>
          <Text style={styles.Text_113_306}>Delivery Address</Text>
        </View>
        <View style={styles.View_113_307}>
          <Text style={styles.Text_113_307}>
            No 16, Belgore str Ilorin, Kwara St
          </Text>
        </View>
        <View style={styles.View_113_308}>
          <Text style={styles.Text_113_308}>
            No 16, Belgore str Ilorin, Kwara St
          </Text>
        </View>
        <View style={styles.View_113_310}>
          <View style={styles.View_113_311}>
            <Text style={styles.Text_113_311}>View</Text>
          </View>
        </View>
        <View style={styles.View_113_387}>
          <View style={styles.View_113_388}>
            <Text style={styles.Text_113_388}>View</Text>
          </View>
        </View>
        <View style={styles.View_113_314}>
          <Text style={styles.Text_113_314}>Action</Text>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/9949/7fef/c89287b9288d9a527460a17160e207d3"
          }}
          style={styles.ImageBackground_113_315}
        />
        <View style={styles.View_113_390}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/50a1/4c05/aa3b243ef5db7af569fe18fe62c5fa07"
            }}
            style={styles.ImageBackground_113_384}
          />
        </View>
      </View>
    </ScrollView>
  )
}
const styles = StyleSheet.create({
  ScrollView_1: { backgroundColor: "rgba(252, 252, 252, 1)" },
  View_2: { height: hp("187%") },
  View_113_168: {
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
  View_113_169: {
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
  View_113_170: {
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
  ImageBackground_113_171: {
    width: wp("3%"),
    height: hp("2%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9%")
  },
  ImageBackground_113_173: {
    width: wp("4%"),
    height: hp("2%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_113_176: {
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
  ImageBackground_113_177: {
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
  View_113_178: {
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
  Text_113_178: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 4.285236358642578,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_113_179: {
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
  ImageBackground_113_180: {
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
  View_113_181: {
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
  Text_113_181: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 4.285236358642578,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_113_182: {
    width: wp("5%"),
    height: hp("2%"),
    top: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%")
  },
  View_113_183: {
    width: wp("86%"),
    minWidth: wp("86%"),
    height: hp("19%"),
    minHeight: hp("19%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7%"),
    top: hp("29%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_113_184: {
    width: wp("40%"),
    minWidth: wp("40%"),
    height: hp("8%"),
    minHeight: hp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("12%")
  },
  View_113_185: {
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
  View_113_186: {
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
  View_113_187: {
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
  Text_113_187: {
    color: "rgba(48, 157, 143, 1)",
    fontSize: 11.895837783813477,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_113_188: {
    width: wp("18%"),
    minWidth: wp("18%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("16%"),
    top: hp("5%"),
    justifyContent: "flex-start"
  },
  Text_113_188: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 9.42014217376709,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_113_189: {
    width: wp("4%"),
    height: hp("2%"),
    top: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%")
  },
  View_113_192: {
    width: wp("40%"),
    minWidth: wp("40%"),
    height: hp("8%"),
    minHeight: hp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("46%"),
    top: hp("12%")
  },
  View_113_193: {
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
  View_113_194: {
    width: wp("9%"),
    minWidth: wp("9%"),
    height: hp("8%"),
    minHeight: hp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(53, 76, 201, 1)"
  },
  View_113_195: {
    width: wp("9%"),
    minWidth: wp("9%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("19%"),
    top: hp("1%"),
    justifyContent: "flex-start"
  },
  Text_113_195: {
    color: "rgba(48, 157, 143, 1)",
    fontSize: 11.895837783813477,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_113_196: {
    width: wp("14%"),
    minWidth: wp("14%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("17%"),
    top: hp("5%"),
    justifyContent: "flex-start"
  },
  Text_113_196: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 9.42014217376709,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_113_197: {
    width: wp("4%"),
    height: hp("2%"),
    top: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%")
  },
  View_113_198: {
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
  View_113_199: {
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
  View_113_200: {
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
  Text_113_200: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 9.42014217376709,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_113_201: {
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
  Text_113_201: {
    color: "rgba(48, 157, 143, 1)",
    fontSize: 11.895837783813477,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_113_202: {
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
  ImageBackground_113_203: {
    width: wp("4%"),
    height: hp("2%"),
    top: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%")
  },
  View_113_204: {
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
  View_113_205: {
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
  View_113_206: {
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
  View_113_207: {
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
  Text_113_207: {
    color: "rgba(48, 157, 143, 1)",
    fontSize: 11.895837783813477,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_113_208: {
    width: wp("8%"),
    minWidth: wp("8%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("18%"),
    top: hp("5%"),
    justifyContent: "flex-start"
  },
  Text_113_208: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 9.42014217376709,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_113_209: {
    width: wp("4%"),
    height: hp("2%"),
    top: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%")
  },
  View_113_393: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("11%"),
    minHeight: hp("11%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("16%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_113_212: {
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
  View_113_213: {
    width: wp("34%"),
    minWidth: wp("34%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("26%"),
    top: hp("3%"),
    justifyContent: "flex-start"
  },
  Text_113_213: {
    color: "rgba(48, 157, 143, 1)",
    fontSize: 9.523962020874023,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_113_214: {
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
  Text_113_214: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 9.523962020874023,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_113_215: {
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
  ImageBackground_113_378: {
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
  View_113_216: {
    width: wp("86%"),
    minWidth: wp("86%"),
    height: hp("30%"),
    minHeight: hp("30%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7%"),
    top: hp("83%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_113_217: {
    width: wp("86%"),
    minWidth: wp("86%"),
    height: hp("30%"),
    minHeight: hp("30%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_113_218: {
    width: wp("86%"),
    minWidth: wp("86%"),
    height: hp("6%"),
    minHeight: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(48, 157, 143, 1)",
    borderTopLeftRadius: 10.09216594696045,
    borderTopRightRadius: 10.09216594696045,
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0
  },
  View_113_219: {
    width: wp("26%"),
    minWidth: wp("26%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("10%"),
    top: hp("1%"),
    justifyContent: "flex-start"
  },
  Text_113_219: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 12.138248443603516,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_113_220: {
    width: wp("35%"),
    minWidth: wp("35%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("12%"),
    top: hp("8%"),
    justifyContent: "flex-start"
  },
  Text_113_220: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 5.569124221801758,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_113_221: {
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
  Text_113_221: {
    color: "rgba(48, 157, 143, 1)",
    fontSize: 5.569124221801758,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_113_222: {
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
  ImageBackground_113_223: {
    width: wp("2%"),
    height: hp("1%"),
    top: hp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8%")
  },
  ImageBackground_113_224: {
    width: wp("3%"),
    height: hp("2%"),
    top: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%")
  },
  View_113_227: {
    width: wp("85%"),
    minWidth: wp("85%"),
    height: hp("30%"),
    minHeight: hp("30%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7%"),
    top: hp("117%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_113_228: {
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
  View_113_229: {
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
    borderTopLeftRadius: 10.015649795532227,
    borderTopRightRadius: 10.015649795532227,
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0
  },
  View_113_230: {
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
  Text_113_230: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 12.02347469329834,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_113_231: {
    width: wp("27%"),
    minWidth: wp("27%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("14%"),
    top: hp("7%"),
    justifyContent: "flex-start"
  },
  Text_113_231: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 10.312616348266602,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_113_232: {
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
  Text_113_232: {
    color: "rgba(48, 157, 143, 1)",
    fontSize: 10.312616348266602,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_113_233: {
    width: wp("20%"),
    minWidth: wp("20%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("15%"),
    top: hp("18%"),
    justifyContent: "flex-start"
  },
  Text_113_233: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 10.304238319396973,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_113_234: {
    width: wp("20%"),
    minWidth: wp("20%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("15%"),
    top: hp("25%"),
    justifyContent: "flex-start"
  },
  Text_113_234: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 10.304238319396973,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_113_235: {
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
  Text_113_235: {
    color: "rgba(48, 157, 143, 1)",
    fontSize: 10.304238319396973,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_113_236: {
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
  Text_113_236: {
    color: "rgba(48, 157, 143, 1)",
    fontSize: 10.304238319396973,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_113_237: {
    width: wp("23%"),
    minWidth: wp("23%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("14%"),
    top: hp("13%"),
    justifyContent: "flex-start"
  },
  Text_113_237: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 10.304238319396973,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_113_238: {
    width: wp("9%"),
    minWidth: wp("9%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("73%"),
    top: hp("13%"),
    justifyContent: "flex-start"
  },
  Text_113_238: {
    color: "rgba(48, 157, 143, 1)",
    fontSize: 10.304238319396973,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_113_239: {
    width: wp("4%"),
    height: hp("2%"),
    top: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%")
  },
  ImageBackground_113_240: {
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
  ImageBackground_113_241: {
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
  ImageBackground_113_242: {
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
  ImageBackground_113_243: {
    width: wp("4%"),
    height: hp("2%"),
    top: hp("19%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8%")
  },
  ImageBackground_113_246: {
    width: wp("3%"),
    height: hp("2%"),
    top: hp("13%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8%")
  },
  ImageBackground_113_249: {
    width: wp("3%"),
    height: hp("2%"),
    top: hp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9%")
  },
  ImageBackground_113_250: {
    width: wp("5%"),
    height: hp("2%"),
    top: hp("25%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8%")
  },
  View_113_391: {
    width: wp("86%"),
    minWidth: wp("86%"),
    height: hp("28%"),
    minHeight: hp("28%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8%"),
    top: hp("151%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_113_255: {
    width: wp("86%"),
    minWidth: wp("86%"),
    height: hp("26%"),
    minHeight: hp("26%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_113_256: {
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
    borderTopLeftRadius: 4.832905292510986,
    borderTopRightRadius: 4.832905292510986,
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0
  },
  View_113_257: {
    width: wp("38%"),
    minWidth: wp("38%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("10%"),
    top: hp("1%"),
    justifyContent: "flex-start"
  },
  Text_113_257: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 12.020000457763672,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_113_258: {
    width: wp("79%"),
    minWidth: wp("79%"),
    height: hp("13%"),
    minHeight: hp("13%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    top: hp("12%"),
    borderColor: "rgba(189, 189, 189, 1)",
    borderWidth: 0.24164526164531708
  },
  View_113_259: {
    width: wp("13%"),
    minWidth: wp("13%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("12%"),
    top: hp("14%"),
    justifyContent: "flex-start"
  },
  Text_113_259: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 6.249358177185059,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_113_260: {
    width: wp("6%"),
    minWidth: wp("6%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("12%"),
    top: hp("20%"),
    justifyContent: "flex-start"
  },
  Text_113_260: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 6.249358177185059,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_113_261: {
    width: wp("13%"),
    minWidth: wp("13%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("34%"),
    top: hp("14%"),
    justifyContent: "flex-start"
  },
  Text_113_261: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 6.249358177185059,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_113_262: {
    width: wp("24%"),
    minWidth: wp("24%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("34%"),
    top: hp("20%"),
    justifyContent: "flex-start"
  },
  Text_113_262: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 6.249358177185059,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_113_263: {
    width: wp("79%"),
    minWidth: wp("79%"),
    height: hp("0%"),
    minHeight: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    top: hp("18%")
  },
  ImageBackground_113_264: {
    width: wp("6%"),
    minWidth: wp("6%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%"),
    top: hp("13%"),
    resizeMode: "cover"
  },
  ImageBackground_113_265: {
    width: wp("6%"),
    minWidth: wp("6%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%"),
    top: hp("20%"),
    resizeMode: "cover"
  },
  View_113_266: {
    width: wp("77%"),
    minWidth: wp("77%"),
    height: hp("1%"),
    minHeight: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    top: hp("9%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderColor: "rgba(0, 0, 0, 1)",
    borderWidth: 0.24164526164531708
  },
  View_113_267: {
    width: wp("79%"),
    minWidth: wp("79%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    top: hp("8%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderColor: "rgba(196, 196, 196, 1)",
    borderWidth: 0.24164526164531708
  },
  View_113_268: {
    width: wp("20%"),
    minWidth: wp("20%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%"),
    top: hp("8%"),
    justifyContent: "flex-start"
  },
  Text_113_268: {
    color: "rgba(48, 157, 143, 1)",
    fontSize: 6.249358177185059,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_113_269: {
    width: wp("10%"),
    minWidth: wp("10%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("34%"),
    top: hp("8%"),
    justifyContent: "flex-start"
  },
  Text_113_269: {
    color: "rgba(48, 157, 143, 1)",
    fontSize: 6.249358177185059,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_113_270: {
    width: wp("11%"),
    minWidth: wp("11%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("66%"),
    top: hp("8%"),
    justifyContent: "flex-start"
  },
  Text_113_270: {
    color: "rgba(48, 157, 143, 1)",
    fontSize: 6.249358177185059,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_113_271: {
    width: wp("12%"),
    height: hp("1%"),
    top: hp("20%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("66%")
  },
  ImageBackground_113_277: {
    width: wp("12%"),
    height: hp("1%"),
    top: hp("13%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("66%")
  },
  View_113_283: {
    width: wp("7%"),
    minWidth: wp("7%"),
    minHeight: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("67%"),
    top: hp("16%"),
    justifyContent: "flex-start"
  },
  Text_113_283: {
    color: "rgba(48, 157, 143, 1)",
    fontSize: 3.8329052925109863,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_113_284: {
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
  Text_113_284: {
    color: "rgba(48, 157, 143, 1)",
    fontSize: 3.8329052925109863,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_113_285: {
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
  View_113_286: {
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
  Text_113_286: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 4.2901225090026855,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_113_383: {
    width: wp("4%"),
    height: hp("2%"),
    top: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%")
  },
  View_113_392: {
    width: wp("86%"),
    minWidth: wp("86%"),
    height: hp("27%"),
    minHeight: hp("27%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7%"),
    top: hp("51%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_113_288: {
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
  View_113_289: {
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
    borderTopLeftRadius: 4.864865303039551,
    borderTopRightRadius: 4.864865303039551,
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0
  },
  View_113_290: {
    width: wp("23%"),
    minWidth: wp("23%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("10%"),
    top: hp("1%"),
    justifyContent: "flex-start"
  },
  Text_113_290: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 12,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_113_291: {
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
  View_113_292: {
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
  Text_113_292: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 4.325105667114258,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_113_293: {
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
    borderWidth: 0.2432432621717453
  },
  View_113_294: {
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
    borderWidth: 0.2432432621717453
  },
  View_113_295: {
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
    borderWidth: 0.2432432621717453
  },
  View_113_297: {
    width: wp("5%"),
    minWidth: wp("5%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("28%"),
    top: hp("7%"),
    justifyContent: "flex-start"
  },
  Text_113_297: {
    color: "rgba(48, 157, 143, 1)",
    fontSize: 6,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_113_298: {
    width: wp("6%"),
    minWidth: wp("6%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("28%"),
    top: hp("11%"),
    justifyContent: "flex-start"
  },
  Text_113_298: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 5.081080913543701,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_113_299: {
    width: wp("10%"),
    minWidth: wp("10%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("28%"),
    top: hp("15%"),
    justifyContent: "flex-start"
  },
  Text_113_299: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 5.081080913543701,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_113_301: {
    width: wp("6%"),
    minWidth: wp("6%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9%"),
    top: hp("7%"),
    justifyContent: "flex-start"
  },
  Text_113_301: {
    color: "rgba(48, 157, 143, 1)",
    fontSize: 6,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_113_302: {
    width: wp("14%"),
    minWidth: wp("14%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9%"),
    top: hp("11%"),
    justifyContent: "flex-start"
  },
  Text_113_302: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 5.081080913543701,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_113_303: {
    width: wp("11%"),
    minWidth: wp("11%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9%"),
    top: hp("15%"),
    justifyContent: "flex-start"
  },
  Text_113_303: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 5.081080913543701,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_113_304: {
    width: wp("11%"),
    minWidth: wp("11%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9%"),
    top: hp("20%"),
    justifyContent: "flex-start"
  },
  Text_113_304: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 5.081080913543701,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_113_306: {
    width: wp("16%"),
    minWidth: wp("16%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("44%"),
    top: hp("7%"),
    justifyContent: "flex-start"
  },
  Text_113_306: {
    color: "rgba(48, 157, 143, 1)",
    fontSize: 6,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_113_307: {
    width: wp("19%"),
    minWidth: wp("19%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("44%"),
    top: hp("11%"),
    justifyContent: "flex-start"
  },
  Text_113_307: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 5.081080913543701,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_113_308: {
    width: wp("19%"),
    minWidth: wp("19%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("44%"),
    top: hp("15%"),
    justifyContent: "flex-start"
  },
  Text_113_308: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 5.081080913543701,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_113_310: {
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
  View_113_311: {
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
  Text_113_311: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 2.3102970123291016,
    fontWeight: "600",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_113_387: {
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
  View_113_388: {
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
  Text_113_388: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 2.3102970123291016,
    fontWeight: "600",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_113_314: {
    width: wp("6%"),
    minWidth: wp("6%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("72%"),
    top: hp("7%"),
    justifyContent: "flex-start"
  },
  Text_113_314: {
    color: "rgba(48, 157, 143, 1)",
    fontSize: 6,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_113_315: {
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
  View_113_390: {
    width: wp("4%"),
    minWidth: wp("4%"),
    height: hp("2%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    top: hp("2%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_113_384: {
    width: wp("4%"),
    height: hp("2%"),
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
