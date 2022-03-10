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
      <View style={styles.View_161_11} />
      <View style={styles.View_161_12}>
        <Text style={styles.Text_161_12}>Hi, Hydraxx</Text>
      </View>
      <View style={styles.View_161_13}>
        <View style={styles.View_161_14}>
          <View style={styles.View_161_15}>
            <Text style={styles.Text_161_15}>Order History</Text>
          </View>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/995c/39cc/9ae3a7a8c62fda978e0104b6a6acb8b0"
            }}
            style={styles.ImageBackground_161_16}
          />
        </View>
        <View style={styles.View_161_17}>
          <View style={styles.View_161_18}>
            <Text style={styles.Text_161_18}>Cards</Text>
          </View>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1fc3/2633/abbb55690ec5cb08868fa2a6608277d6"
            }}
            style={styles.ImageBackground_161_19}
          />
        </View>
        <View style={styles.View_161_22}>
          <View style={styles.View_161_23}>
            <Text style={styles.Text_161_23}>Live Chat</Text>
          </View>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/8b34/eeaf/9b2c52d2141fc56bf14759a3c607a11c"
            }}
            style={styles.ImageBackground_161_24}
          />
        </View>
        <View style={styles.View_161_26}>
          <View style={styles.View_161_27}>
            <Text style={styles.Text_161_27}>Logout</Text>
          </View>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/e5c0/5282/3ae620fff2ac8a9737b564b350ce87e4"
            }}
            style={styles.ImageBackground_161_28}
          />
        </View>
      </View>
      <View style={styles.View_161_29}>
        <View style={styles.View_161_30}>
          <Text style={styles.Text_161_30}>Home</Text>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/46df/32c1/f0b817617243a22a88272553ec89825f"
          }}
          style={styles.ImageBackground_161_31}
        />
      </View>
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/767d/8e2a/27130565029c9dd2856c49e9079901e1"
        }}
        style={styles.ImageBackground_161_33}
      />
      <View style={styles.View_161_34}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3c7f/1019/9c3ef5100a92792972d0ff3a2ac4f95b"
          }}
          style={styles.ImageBackground_161_35}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/4df5/2b12/d83d24c66c1592bc8abaef2b6de3a2d5"
          }}
          style={styles.ImageBackground_161_39}
        />
        <View style={styles.View_161_40}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/52a2/7a53/7e9d9f408940e4d904628f9990f59aaf"
            }}
            style={styles.ImageBackground_161_41}
          />
          <View style={styles.View_161_42}>
            <Text style={styles.Text_161_42}>Ilorin, NGA</Text>
          </View>
        </View>
        <View style={styles.View_161_43}>
          <Text style={styles.Text_161_43}>
            Hi Hydraxx, What would you like today?
          </Text>
        </View>
        <View style={styles.View_161_44}>
          <View style={styles.View_161_45}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/6796/7491/9740699111feae85c9c022eea574b73d"
              }}
              style={styles.ImageBackground_161_46}
            />
            <View style={styles.View_161_47}>
              <Text style={styles.Text_161_47}>Products, Pharmacists...</Text>
            </View>
          </View>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/d310/3bd5/37579b64caf923721bbaeb93ebd6fbac"
            }}
            style={styles.ImageBackground_161_48}
          />
        </View>
        <View style={styles.View_161_50}>
          <View style={styles.View_161_51} />
          <View style={styles.View_161_52}>
            <View style={styles.View_161_53}>
              <Text style={styles.Text_161_53}>Sivoketoconazole</Text>
            </View>
            <View style={styles.View_161_54}>
              <Text style={styles.Text_161_54}>200 Bottles</Text>
            </View>
            <View style={styles.View_161_55}>
              <Text style={styles.Text_161_55}>N11500</Text>
            </View>
          </View>
          <View style={styles.View_161_56}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/000d/c4c6/5a332f3e89c917005823c44326e22239"
              }}
              style={styles.ImageBackground_161_57}
            />
            <View style={styles.View_161_58}>
              <Text style={styles.Text_161_58}>Tuyil Pharmacy</Text>
            </View>
          </View>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a643/5907/8f7a71b2bf234639140bb5a111ad9d3d"
            }}
            style={styles.ImageBackground_161_59}
          />
        </View>
        <View style={styles.View_161_60}>
          <View style={styles.View_161_61} />
          <View style={styles.View_161_62}>
            <View style={styles.View_161_63}>
              <Text style={styles.Text_161_63}>Sivoketoconazole</Text>
            </View>
            <View style={styles.View_161_64}>
              <Text style={styles.Text_161_64}>200 Bottles</Text>
            </View>
            <View style={styles.View_161_65}>
              <Text style={styles.Text_161_65}>N11500</Text>
            </View>
          </View>
          <View style={styles.View_161_66}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/000d/c4c6/5a332f3e89c917005823c44326e22239"
              }}
              style={styles.ImageBackground_161_67}
            />
            <View style={styles.View_161_68}>
              <Text style={styles.Text_161_68}>Tuyil Pharmacy</Text>
            </View>
          </View>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/676f/19c7/415d84eaa5498d0612735c8160727a16"
            }}
            style={styles.ImageBackground_161_69}
          />
        </View>
        <View style={styles.View_161_70}>
          <View style={styles.View_161_71} />
          <View style={styles.View_161_72}>
            <View style={styles.View_161_73}>
              <Text style={styles.Text_161_73}>Sivoketoconazole</Text>
            </View>
            <View style={styles.View_161_74}>
              <Text style={styles.Text_161_74}>200 Bottles</Text>
            </View>
            <View style={styles.View_161_75}>
              <Text style={styles.Text_161_75}>N11500</Text>
            </View>
          </View>
          <View style={styles.View_161_76}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/000d/c4c6/5a332f3e89c917005823c44326e22239"
              }}
              style={styles.ImageBackground_161_77}
            />
            <View style={styles.View_161_78}>
              <Text style={styles.Text_161_78}>Tuyil Pharmacy</Text>
            </View>
          </View>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/fa5a/9755/1529f06c96c8b884e62c7a2916399d73"
            }}
            style={styles.ImageBackground_161_79}
          />
        </View>
        <View style={styles.View_161_80}>
          <Text style={styles.Text_161_80}>Featured Products</Text>
        </View>
        <View style={styles.View_161_216}>
          <Text style={styles.Text_161_216}>Explore</Text>
        </View>
        <View style={styles.View_161_217}>
          <View style={styles.View_161_218}>
            <Text style={styles.Text_161_218}>Medical Instruments</Text>
          </View>
          <View style={styles.View_161_219}>
            <View style={styles.View_161_220} />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/384b/fc77/9eac87a845c2d3b759529d5827e9ae28"
              }}
              style={styles.ImageBackground_161_221}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/6587/6c2b/5da49f33a3b8368413183bd0e84c6b35"
              }}
              style={styles.ImageBackground_161_222}
            />
            <View style={styles.View_161_223}>
              <Text style={styles.Text_161_223}>Al- Mahruf</Text>
            </View>
            <View style={styles.View_161_224}>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/4476/313f/dc856ad5e5f4e1018ca9cf3c0bd252e7"
                }}
                style={styles.ImageBackground_161_225}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/7236/703e/f6467d5ec4a76330a5eb9e5cf8d78068"
                }}
                style={styles.ImageBackground_161_228}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/7236/703e/f6467d5ec4a76330a5eb9e5cf8d78068"
                }}
                style={styles.ImageBackground_161_229}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/7236/703e/f6467d5ec4a76330a5eb9e5cf8d78068"
                }}
                style={styles.ImageBackground_161_230}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/7236/703e/f6467d5ec4a76330a5eb9e5cf8d78068"
                }}
                style={styles.ImageBackground_161_231}
              />
            </View>
          </View>
          <View style={styles.View_161_232}>
            <View style={styles.View_161_233} />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/afcc/1d6b/4ae7d28a62a012e85acc6ba7e1dabb54"
              }}
              style={styles.ImageBackground_161_234}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/6587/6c2b/5da49f33a3b8368413183bd0e84c6b35"
              }}
              style={styles.ImageBackground_161_235}
            />
            <View style={styles.View_161_236}>
              <Text style={styles.Text_161_236}>Tuyil</Text>
            </View>
            <View style={styles.View_161_237}>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/4476/313f/dc856ad5e5f4e1018ca9cf3c0bd252e7"
                }}
                style={styles.ImageBackground_161_238}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/7236/703e/f6467d5ec4a76330a5eb9e5cf8d78068"
                }}
                style={styles.ImageBackground_161_241}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/7236/703e/f6467d5ec4a76330a5eb9e5cf8d78068"
                }}
                style={styles.ImageBackground_161_242}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/7236/703e/f6467d5ec4a76330a5eb9e5cf8d78068"
                }}
                style={styles.ImageBackground_161_243}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/7236/703e/f6467d5ec4a76330a5eb9e5cf8d78068"
                }}
                style={styles.ImageBackground_161_244}
              />
            </View>
          </View>
          <View style={styles.View_161_245}>
            <View style={styles.View_161_246} />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a1bc/00b6/f6b4371da4fc1720b5a1f30cb65069ef"
              }}
              style={styles.ImageBackground_161_247}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/6587/6c2b/5da49f33a3b8368413183bd0e84c6b35"
              }}
              style={styles.ImageBackground_161_248}
            />
            <View style={styles.View_161_249}>
              <Text style={styles.Text_161_249}>Oloyin</Text>
            </View>
            <View style={styles.View_161_250}>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/4476/313f/dc856ad5e5f4e1018ca9cf3c0bd252e7"
                }}
                style={styles.ImageBackground_161_251}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/7236/703e/f6467d5ec4a76330a5eb9e5cf8d78068"
                }}
                style={styles.ImageBackground_161_254}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/7236/703e/f6467d5ec4a76330a5eb9e5cf8d78068"
                }}
                style={styles.ImageBackground_161_255}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/7236/703e/f6467d5ec4a76330a5eb9e5cf8d78068"
                }}
                style={styles.ImageBackground_161_256}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/7236/703e/f6467d5ec4a76330a5eb9e5cf8d78068"
                }}
                style={styles.ImageBackground_161_257}
              />
            </View>
          </View>
          <View style={styles.View_161_258}>
            <View style={styles.View_161_259} />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/5443/c2fb/18acf6683dc641d9996782c5dffcfede"
              }}
              style={styles.ImageBackground_161_260}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/6587/6c2b/5da49f33a3b8368413183bd0e84c6b35"
              }}
              style={styles.ImageBackground_161_261}
            />
            <View style={styles.View_161_262}>
              <Text style={styles.Text_161_262}>Taofee</Text>
            </View>
            <View style={styles.View_161_263}>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/4476/313f/dc856ad5e5f4e1018ca9cf3c0bd252e7"
                }}
                style={styles.ImageBackground_161_264}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/7236/703e/f6467d5ec4a76330a5eb9e5cf8d78068"
                }}
                style={styles.ImageBackground_161_267}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/7236/703e/f6467d5ec4a76330a5eb9e5cf8d78068"
                }}
                style={styles.ImageBackground_161_268}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/7236/703e/f6467d5ec4a76330a5eb9e5cf8d78068"
                }}
                style={styles.ImageBackground_161_269}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/7236/703e/f6467d5ec4a76330a5eb9e5cf8d78068"
                }}
                style={styles.ImageBackground_161_270}
              />
            </View>
          </View>
          <View style={styles.View_161_271}>
            <Text style={styles.Text_161_271}>Explore</Text>
          </View>
        </View>
        <View style={styles.View_161_272}>
          <View style={styles.View_161_273}>
            <Text style={styles.Text_161_273}>Discounted Products</Text>
          </View>
          <View style={styles.View_161_274}>
            <View style={styles.View_161_275} />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/67d1/f719/5d3264b6d11a6fa458b8776519604baa"
              }}
              style={styles.ImageBackground_161_276}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3b7a/f503/9a6adb8bdd813680fc8e2e8d3c2038e8"
              }}
              style={styles.ImageBackground_161_277}
            />
            <View style={styles.View_161_278}>
              <Text style={styles.Text_161_278}>Al- Mahruf</Text>
            </View>
            <View style={styles.View_161_279}>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/4476/313f/dc856ad5e5f4e1018ca9cf3c0bd252e7"
                }}
                style={styles.ImageBackground_161_280}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/7236/703e/f6467d5ec4a76330a5eb9e5cf8d78068"
                }}
                style={styles.ImageBackground_161_283}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/7236/703e/f6467d5ec4a76330a5eb9e5cf8d78068"
                }}
                style={styles.ImageBackground_161_284}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/7236/703e/f6467d5ec4a76330a5eb9e5cf8d78068"
                }}
                style={styles.ImageBackground_161_285}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/7236/703e/f6467d5ec4a76330a5eb9e5cf8d78068"
                }}
                style={styles.ImageBackground_161_286}
              />
            </View>
          </View>
          <View style={styles.View_161_287}>
            <View style={styles.View_161_288} />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/4f36/55bc/7fca2fa9d35876d91b080e5b1b873c3e"
              }}
              style={styles.ImageBackground_161_289}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/6587/6c2b/5da49f33a3b8368413183bd0e84c6b35"
              }}
              style={styles.ImageBackground_161_290}
            />
            <View style={styles.View_161_291}>
              <Text style={styles.Text_161_291}>Tuyil</Text>
            </View>
            <View style={styles.View_161_292}>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/4476/313f/dc856ad5e5f4e1018ca9cf3c0bd252e7"
                }}
                style={styles.ImageBackground_161_293}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/7236/703e/f6467d5ec4a76330a5eb9e5cf8d78068"
                }}
                style={styles.ImageBackground_161_296}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/7236/703e/f6467d5ec4a76330a5eb9e5cf8d78068"
                }}
                style={styles.ImageBackground_161_297}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/7236/703e/f6467d5ec4a76330a5eb9e5cf8d78068"
                }}
                style={styles.ImageBackground_161_298}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/7236/703e/f6467d5ec4a76330a5eb9e5cf8d78068"
                }}
                style={styles.ImageBackground_161_299}
              />
            </View>
          </View>
          <View style={styles.View_161_300}>
            <View style={styles.View_161_301} />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/9ad8/6b56/5bc5098db45e9fdfc40c2db1ce9e5239"
              }}
              style={styles.ImageBackground_161_302}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/6587/6c2b/5da49f33a3b8368413183bd0e84c6b35"
              }}
              style={styles.ImageBackground_161_303}
            />
            <View style={styles.View_161_304}>
              <Text style={styles.Text_161_304}>Oloyin</Text>
            </View>
            <View style={styles.View_161_305}>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/4476/313f/dc856ad5e5f4e1018ca9cf3c0bd252e7"
                }}
                style={styles.ImageBackground_161_306}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/7236/703e/f6467d5ec4a76330a5eb9e5cf8d78068"
                }}
                style={styles.ImageBackground_161_309}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/7236/703e/f6467d5ec4a76330a5eb9e5cf8d78068"
                }}
                style={styles.ImageBackground_161_310}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/7236/703e/f6467d5ec4a76330a5eb9e5cf8d78068"
                }}
                style={styles.ImageBackground_161_311}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/7236/703e/f6467d5ec4a76330a5eb9e5cf8d78068"
                }}
                style={styles.ImageBackground_161_312}
              />
            </View>
          </View>
          <View style={styles.View_161_313}>
            <View style={styles.View_161_314} />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/fa53/e698/6a493449189699fe7fdc2e731b149b0c"
              }}
              style={styles.ImageBackground_161_315}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/6587/6c2b/5da49f33a3b8368413183bd0e84c6b35"
              }}
              style={styles.ImageBackground_161_316}
            />
            <View style={styles.View_161_317}>
              <Text style={styles.Text_161_317}>Taofee</Text>
            </View>
            <View style={styles.View_161_318}>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/4476/313f/dc856ad5e5f4e1018ca9cf3c0bd252e7"
                }}
                style={styles.ImageBackground_161_319}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/7236/703e/f6467d5ec4a76330a5eb9e5cf8d78068"
                }}
                style={styles.ImageBackground_161_322}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/7236/703e/f6467d5ec4a76330a5eb9e5cf8d78068"
                }}
                style={styles.ImageBackground_161_323}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/7236/703e/f6467d5ec4a76330a5eb9e5cf8d78068"
                }}
                style={styles.ImageBackground_161_324}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/7236/703e/f6467d5ec4a76330a5eb9e5cf8d78068"
                }}
                style={styles.ImageBackground_161_325}
              />
            </View>
          </View>
          <View style={styles.View_161_326}>
            <Text style={styles.Text_161_326}>Explore</Text>
          </View>
          <View style={styles.View_161_327}>
            <View style={styles.View_161_328} />
            <View style={styles.View_161_329}>
              <Text style={styles.Text_161_329}>-30%</Text>
            </View>
          </View>
          <View style={styles.View_161_330}>
            <View style={styles.View_161_331} />
            <View style={styles.View_161_332}>
              <Text style={styles.Text_161_332}>Promo</Text>
            </View>
          </View>
        </View>
      </View>
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a25c/4a7b/99373be026e7974cac147204a8c8a533"
        }}
        style={styles.ImageBackground_161_333}
      />
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: { backgroundColor: "rgba(48, 157, 143, 1)" },
  View_2: { height: hp("111%") },
  View_161_11: {
    width: wp("83%"),
    minWidth: wp("83%"),
    height: hp("7%"),
    minHeight: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    top: hp("44%")
  },
  View_161_12: {
    width: wp("48%"),
    minWidth: wp("48%"),
    minHeight: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9%"),
    top: hp("22%"),
    justifyContent: "flex-start"
  },
  Text_161_12: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 26,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_161_13: {
    width: wp("45%"),
    minWidth: wp("45%"),
    height: hp("26%"),
    minHeight: hp("26%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("11%"),
    top: hp("53%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_161_14: {
    width: wp("45%"),
    minWidth: wp("45%"),
    height: hp("4%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_161_15: {
    width: wp("38%"),
    minWidth: wp("38%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_161_15: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 17.789325714111328,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_161_16: {
    width: wp("5%"),
    height: hp("2%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_161_17: {
    width: wp("25%"),
    minWidth: wp("25%"),
    height: hp("4%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("7%")
  },
  View_161_18: {
    width: wp("18%"),
    minWidth: wp("18%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_161_18: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 17.789325714111328,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_161_19: {
    width: wp("5%"),
    height: hp("2%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_161_22: {
    width: wp("34%"),
    minWidth: wp("34%"),
    height: hp("4%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("14%")
  },
  View_161_23: {
    width: wp("27%"),
    minWidth: wp("27%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_161_23: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 17.789325714111328,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_161_24: {
    width: wp("5%"),
    height: hp("2%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_161_26: {
    width: wp("27%"),
    minWidth: wp("27%"),
    height: hp("4%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("22%")
  },
  View_161_27: {
    width: wp("20%"),
    minWidth: wp("20%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_161_27: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 17.789325714111328,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_161_28: {
    width: wp("5%"),
    height: hp("2%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_161_29: {
    width: wp("27%"),
    minWidth: wp("27%"),
    height: hp("5%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9%"),
    top: hp("45%")
  },
  View_161_30: {
    width: wp("19%"),
    minWidth: wp("19%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_161_30: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 19,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_161_31: {
    width: wp("5%"),
    height: hp("3%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_161_33: {
    width: wp("5%"),
    height: hp("3%"),
    top: hp("10%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9%")
  },
  View_161_34: {
    width: wp("120%"),
    minWidth: wp("120%"),
    height: hp("100%"),
    minHeight: hp("100%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("57%"),
    top: hp("13%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    overflow: "hidden"
  },
  ImageBackground_161_35: {
    width: wp("6%"),
    height: hp("3%"),
    top: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("40%")
  },
  ImageBackground_161_39: {
    width: wp("10%"),
    minWidth: wp("10%"),
    height: hp("5%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("105%"),
    top: hp("10%"),
    resizeMode: "cover"
  },
  View_161_40: {
    width: wp("25%"),
    minWidth: wp("25%"),
    height: hp("6%"),
    minHeight: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("64%"),
    top: hp("6%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_161_41: {
    width: wp("3%"),
    height: hp("2%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_161_42: {
    width: wp("20%"),
    minWidth: wp("20%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_161_42: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 11.257389068603516,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_161_43: {
    width: wp("57%"),
    minWidth: wp("57%"),
    minHeight: hp("12%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("36%"),
    top: hp("9%"),
    justifyContent: "flex-start"
  },
  Text_161_43: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 12.09605884552002,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_161_44: {
    width: wp("77%"),
    minWidth: wp("77%"),
    height: hp("14%"),
    minHeight: hp("14%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("33%"),
    top: hp("17%")
  },
  View_161_45: {
    width: wp("64%"),
    minWidth: wp("64%"),
    height: hp("12%"),
    minHeight: hp("12%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(70, 148, 0, 0.05000000074505806)"
  },
  ImageBackground_161_46: {
    width: wp("5%"),
    height: hp("2%"),
    top: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%")
  },
  View_161_47: {
    width: wp("43%"),
    minWidth: wp("43%"),
    minHeight: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("11%"),
    top: hp("2%"),
    justifyContent: "flex-start"
  },
  Text_161_47: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 10.348093032836914,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_161_48: {
    width: wp("13%"),
    height: hp("6%"),
    top: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("65%")
  },
  View_161_50: {
    width: wp("75%"),
    minWidth: wp("75%"),
    height: hp("23%"),
    minHeight: hp("23%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("23%"),
    top: hp("31%")
  },
  View_161_51: {
    width: wp("75%"),
    minWidth: wp("75%"),
    height: hp("23%"),
    minHeight: hp("23%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(48, 157, 143, 1)",
    borderTopLeftRadius: 8.386699676513672,
    borderTopRightRadius: 0,
    borderBottomLeftRadius: 8.386699676513672,
    borderBottomRightRadius: 0
  },
  View_161_52: {
    width: wp("36%"),
    minWidth: wp("36%"),
    height: hp("14%"),
    minHeight: hp("14%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%"),
    top: hp("2%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_161_53: {
    width: wp("33%"),
    minWidth: wp("33%"),
    minHeight: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_161_53: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 10.418719291687012,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_161_54: {
    width: wp("24%"),
    minWidth: wp("24%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%"),
    top: hp("3%"),
    justifyContent: "flex-start"
  },
  Text_161_54: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 12.09605884552002,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_161_55: {
    width: wp("20%"),
    minWidth: wp("20%"),
    minHeight: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("7%"),
    justifyContent: "flex-start"
  },
  Text_161_55: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 16.12807846069336,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_161_56: {
    width: wp("23%"),
    minWidth: wp("23%"),
    height: hp("5%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    top: hp("13%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_161_57: {
    width: wp("5%"),
    minWidth: wp("5%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_161_58: {
    width: wp("18%"),
    minWidth: wp("18%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%"),
    top: hp("1%"),
    justifyContent: "flex-start"
  },
  Text_161_58: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 6.386699676513672,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_161_59: {
    width: wp("32%"),
    minWidth: wp("32%"),
    height: hp("16%"),
    minHeight: hp("16%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("39%"),
    top: hp("5%")
  },
  View_161_60: {
    width: wp("75%"),
    minWidth: wp("75%"),
    height: hp("23%"),
    minHeight: hp("23%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("98%"),
    top: hp("39%")
  },
  View_161_61: {
    width: wp("75%"),
    minWidth: wp("75%"),
    height: hp("23%"),
    minHeight: hp("23%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(48, 157, 143, 1)",
    borderTopLeftRadius: 8.386699676513672,
    borderTopRightRadius: 0,
    borderBottomLeftRadius: 8.386699676513672,
    borderBottomRightRadius: 0
  },
  View_161_62: {
    width: wp("36%"),
    minWidth: wp("36%"),
    height: hp("14%"),
    minHeight: hp("14%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%"),
    top: hp("2%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_161_63: {
    width: wp("33%"),
    minWidth: wp("33%"),
    minHeight: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_161_63: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 10.418719291687012,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_161_64: {
    width: wp("24%"),
    minWidth: wp("24%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%"),
    top: hp("3%"),
    justifyContent: "flex-start"
  },
  Text_161_64: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 12.09605884552002,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_161_65: {
    width: wp("20%"),
    minWidth: wp("20%"),
    minHeight: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("7%"),
    justifyContent: "flex-start"
  },
  Text_161_65: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 16.12807846069336,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_161_66: {
    width: wp("23%"),
    minWidth: wp("23%"),
    height: hp("5%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    top: hp("13%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_161_67: {
    width: wp("5%"),
    minWidth: wp("5%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_161_68: {
    width: wp("18%"),
    minWidth: wp("18%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%"),
    top: hp("1%"),
    justifyContent: "flex-start"
  },
  Text_161_68: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 6.386699676513672,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_161_69: {
    width: wp("32%"),
    minWidth: wp("32%"),
    height: hp("16%"),
    minHeight: hp("16%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("39%"),
    top: hp("5%")
  },
  View_161_70: {
    width: wp("75%"),
    minWidth: wp("75%"),
    height: hp("23%"),
    minHeight: hp("23%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("172%"),
    top: hp("47%")
  },
  View_161_71: {
    width: wp("75%"),
    minWidth: wp("75%"),
    height: hp("23%"),
    minHeight: hp("23%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(48, 157, 143, 1)",
    borderTopLeftRadius: 8.386699676513672,
    borderTopRightRadius: 0,
    borderBottomLeftRadius: 8.386699676513672,
    borderBottomRightRadius: 0
  },
  View_161_72: {
    width: wp("36%"),
    minWidth: wp("36%"),
    height: hp("14%"),
    minHeight: hp("14%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%"),
    top: hp("2%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_161_73: {
    width: wp("33%"),
    minWidth: wp("33%"),
    minHeight: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_161_73: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 10.418719291687012,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_161_74: {
    width: wp("24%"),
    minWidth: wp("24%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%"),
    top: hp("3%"),
    justifyContent: "flex-start"
  },
  Text_161_74: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 12.09605884552002,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_161_75: {
    width: wp("20%"),
    minWidth: wp("20%"),
    minHeight: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("7%"),
    justifyContent: "flex-start"
  },
  Text_161_75: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 16.12807846069336,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_161_76: {
    width: wp("23%"),
    minWidth: wp("23%"),
    height: hp("5%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    top: hp("13%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_161_77: {
    width: wp("5%"),
    minWidth: wp("5%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_161_78: {
    width: wp("18%"),
    minWidth: wp("18%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%"),
    top: hp("1%"),
    justifyContent: "flex-start"
  },
  Text_161_78: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 6.386699676513672,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_161_79: {
    width: wp("32%"),
    minWidth: wp("32%"),
    height: hp("16%"),
    minHeight: hp("16%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("39%"),
    top: hp("5%")
  },
  View_161_80: {
    width: wp("38%"),
    minWidth: wp("38%"),
    minHeight: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("31%"),
    top: hp("26%"),
    justifyContent: "flex-start"
  },
  Text_161_80: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 12.09605884552002,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_161_216: {
    width: wp("10%"),
    minWidth: wp("10%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("95%"),
    top: hp("34%"),
    justifyContent: "flex-start"
  },
  Text_161_216: {
    color: "rgba(48, 157, 143, 1)",
    fontSize: 8.06403923034668,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_161_217: {
    width: wp("140%"),
    minWidth: wp("140%"),
    height: hp("35%"),
    minHeight: hp("35%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%"),
    top: hp("79%")
  },
  View_161_218: {
    width: wp("42%"),
    minWidth: wp("42%"),
    minHeight: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_161_218: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 12.09605884552002,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_161_219: {
    width: wp("37%"),
    minWidth: wp("37%"),
    height: hp("19%"),
    minHeight: hp("19%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("5%")
  },
  View_161_220: {
    width: wp("37%"),
    minWidth: wp("37%"),
    height: hp("19%"),
    minHeight: hp("19%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(246, 250, 242, 1)"
  },
  ImageBackground_161_221: {
    width: wp("35%"),
    minWidth: wp("35%"),
    height: hp("15%"),
    minHeight: hp("15%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%"),
    top: hp("0%"),
    resizeMode: "cover"
  },
  ImageBackground_161_222: {
    width: wp("6%"),
    minWidth: wp("6%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%"),
    top: hp("12%")
  },
  View_161_223: {
    width: wp("13%"),
    minWidth: wp("13%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8%"),
    top: hp("13%"),
    justifyContent: "flex-start"
  },
  Text_161_223: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 6.386699676513672,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_161_224: {
    width: wp("11%"),
    minWidth: wp("11%"),
    height: hp("2%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%"),
    top: hp("15%")
  },
  ImageBackground_161_225: {
    width: wp("2%"),
    height: hp("1%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8%")
  },
  ImageBackground_161_228: {
    width: wp("2%"),
    height: hp("1%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_161_229: {
    width: wp("2%"),
    height: hp("1%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%")
  },
  ImageBackground_161_230: {
    width: wp("2%"),
    height: hp("1%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%")
  },
  ImageBackground_161_231: {
    width: wp("2%"),
    height: hp("1%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6%")
  },
  View_161_232: {
    width: wp("37%"),
    minWidth: wp("37%"),
    height: hp("19%"),
    minHeight: hp("19%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("34%"),
    top: hp("8%")
  },
  View_161_233: {
    width: wp("37%"),
    minWidth: wp("37%"),
    height: hp("19%"),
    minHeight: hp("19%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(246, 250, 242, 1)"
  },
  ImageBackground_161_234: {
    width: wp("35%"),
    minWidth: wp("35%"),
    height: hp("15%"),
    minHeight: hp("15%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%"),
    top: hp("0%"),
    resizeMode: "cover"
  },
  ImageBackground_161_235: {
    width: wp("6%"),
    minWidth: wp("6%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%"),
    top: hp("12%")
  },
  View_161_236: {
    width: wp("6%"),
    minWidth: wp("6%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8%"),
    top: hp("13%"),
    justifyContent: "flex-start"
  },
  Text_161_236: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 6.386699676513672,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_161_237: {
    width: wp("11%"),
    minWidth: wp("11%"),
    height: hp("2%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%"),
    top: hp("15%")
  },
  ImageBackground_161_238: {
    width: wp("2%"),
    height: hp("1%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8%")
  },
  ImageBackground_161_241: {
    width: wp("2%"),
    height: hp("1%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_161_242: {
    width: wp("2%"),
    height: hp("1%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%")
  },
  ImageBackground_161_243: {
    width: wp("2%"),
    height: hp("1%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%")
  },
  ImageBackground_161_244: {
    width: wp("2%"),
    height: hp("1%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6%")
  },
  View_161_245: {
    width: wp("37%"),
    minWidth: wp("37%"),
    height: hp("19%"),
    minHeight: hp("19%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("67%"),
    top: hp("12%")
  },
  View_161_246: {
    width: wp("37%"),
    minWidth: wp("37%"),
    height: hp("19%"),
    minHeight: hp("19%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(246, 250, 242, 1)"
  },
  ImageBackground_161_247: {
    width: wp("35%"),
    minWidth: wp("35%"),
    height: hp("15%"),
    minHeight: hp("15%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%"),
    top: hp("0%"),
    resizeMode: "cover"
  },
  ImageBackground_161_248: {
    width: wp("6%"),
    minWidth: wp("6%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%"),
    top: hp("12%")
  },
  View_161_249: {
    width: wp("8%"),
    minWidth: wp("8%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8%"),
    top: hp("13%"),
    justifyContent: "flex-start"
  },
  Text_161_249: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 6.386699676513672,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_161_250: {
    width: wp("11%"),
    minWidth: wp("11%"),
    height: hp("2%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%"),
    top: hp("15%")
  },
  ImageBackground_161_251: {
    width: wp("2%"),
    height: hp("1%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8%")
  },
  ImageBackground_161_254: {
    width: wp("2%"),
    height: hp("1%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_161_255: {
    width: wp("2%"),
    height: hp("1%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%")
  },
  ImageBackground_161_256: {
    width: wp("2%"),
    height: hp("1%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%")
  },
  ImageBackground_161_257: {
    width: wp("2%"),
    height: hp("1%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6%")
  },
  View_161_258: {
    width: wp("37%"),
    minWidth: wp("37%"),
    height: hp("19%"),
    minHeight: hp("19%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("101%"),
    top: hp("16%")
  },
  View_161_259: {
    width: wp("37%"),
    minWidth: wp("37%"),
    height: hp("19%"),
    minHeight: hp("19%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(246, 250, 242, 1)"
  },
  ImageBackground_161_260: {
    width: wp("35%"),
    minWidth: wp("35%"),
    height: hp("15%"),
    minHeight: hp("15%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%"),
    top: hp("0%"),
    resizeMode: "cover"
  },
  ImageBackground_161_261: {
    width: wp("6%"),
    minWidth: wp("6%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%"),
    top: hp("12%")
  },
  View_161_262: {
    width: wp("8%"),
    minWidth: wp("8%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8%"),
    top: hp("13%"),
    justifyContent: "flex-start"
  },
  Text_161_262: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 6.386699676513672,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_161_263: {
    width: wp("11%"),
    minWidth: wp("11%"),
    height: hp("2%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%"),
    top: hp("15%")
  },
  ImageBackground_161_264: {
    width: wp("2%"),
    height: hp("1%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8%")
  },
  ImageBackground_161_267: {
    width: wp("2%"),
    height: hp("1%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_161_268: {
    width: wp("2%"),
    height: hp("1%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%")
  },
  ImageBackground_161_269: {
    width: wp("2%"),
    height: hp("1%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%")
  },
  ImageBackground_161_270: {
    width: wp("2%"),
    height: hp("1%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6%")
  },
  View_161_271: {
    width: wp("10%"),
    minWidth: wp("10%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("72%"),
    top: hp("7%"),
    justifyContent: "flex-start"
  },
  Text_161_271: {
    color: "rgba(48, 157, 143, 1)",
    fontSize: 8.06403923034668,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_161_272: {
    width: wp("140%"),
    minWidth: wp("140%"),
    height: hp("35%"),
    minHeight: hp("35%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("12%"),
    top: hp("53%")
  },
  View_161_273: {
    width: wp("42%"),
    minWidth: wp("42%"),
    minHeight: hp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_161_273: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 12.09605884552002,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_161_274: {
    width: wp("37%"),
    minWidth: wp("37%"),
    height: hp("19%"),
    minHeight: hp("19%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("5%")
  },
  View_161_275: {
    width: wp("37%"),
    minWidth: wp("37%"),
    height: hp("19%"),
    minHeight: hp("19%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(246, 250, 242, 1)"
  },
  ImageBackground_161_276: {
    width: wp("35%"),
    minWidth: wp("35%"),
    height: hp("15%"),
    minHeight: hp("15%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%"),
    top: hp("0%"),
    resizeMode: "cover"
  },
  ImageBackground_161_277: {
    width: wp("6%"),
    minWidth: wp("6%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%"),
    top: hp("12%")
  },
  View_161_278: {
    width: wp("13%"),
    minWidth: wp("13%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8%"),
    top: hp("13%"),
    justifyContent: "flex-start"
  },
  Text_161_278: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 6.386699676513672,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_161_279: {
    width: wp("11%"),
    minWidth: wp("11%"),
    height: hp("2%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%"),
    top: hp("15%")
  },
  ImageBackground_161_280: {
    width: wp("2%"),
    height: hp("1%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8%")
  },
  ImageBackground_161_283: {
    width: wp("2%"),
    height: hp("1%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_161_284: {
    width: wp("2%"),
    height: hp("1%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%")
  },
  ImageBackground_161_285: {
    width: wp("2%"),
    height: hp("1%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%")
  },
  ImageBackground_161_286: {
    width: wp("2%"),
    height: hp("1%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6%")
  },
  View_161_287: {
    width: wp("37%"),
    minWidth: wp("37%"),
    height: hp("19%"),
    minHeight: hp("19%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("34%"),
    top: hp("8%")
  },
  View_161_288: {
    width: wp("37%"),
    minWidth: wp("37%"),
    height: hp("19%"),
    minHeight: hp("19%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(246, 250, 242, 1)"
  },
  ImageBackground_161_289: {
    width: wp("35%"),
    minWidth: wp("35%"),
    height: hp("15%"),
    minHeight: hp("15%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%"),
    top: hp("0%"),
    resizeMode: "cover"
  },
  ImageBackground_161_290: {
    width: wp("6%"),
    minWidth: wp("6%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%"),
    top: hp("12%")
  },
  View_161_291: {
    width: wp("6%"),
    minWidth: wp("6%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8%"),
    top: hp("13%"),
    justifyContent: "flex-start"
  },
  Text_161_291: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 6.386699676513672,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_161_292: {
    width: wp("11%"),
    minWidth: wp("11%"),
    height: hp("2%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%"),
    top: hp("15%")
  },
  ImageBackground_161_293: {
    width: wp("2%"),
    height: hp("1%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8%")
  },
  ImageBackground_161_296: {
    width: wp("2%"),
    height: hp("1%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_161_297: {
    width: wp("2%"),
    height: hp("1%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%")
  },
  ImageBackground_161_298: {
    width: wp("2%"),
    height: hp("1%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%")
  },
  ImageBackground_161_299: {
    width: wp("2%"),
    height: hp("1%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6%")
  },
  View_161_300: {
    width: wp("37%"),
    minWidth: wp("37%"),
    height: hp("19%"),
    minHeight: hp("19%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("68%"),
    top: hp("12%")
  },
  View_161_301: {
    width: wp("37%"),
    minWidth: wp("37%"),
    height: hp("19%"),
    minHeight: hp("19%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(246, 250, 242, 1)"
  },
  ImageBackground_161_302: {
    width: wp("35%"),
    minWidth: wp("35%"),
    height: hp("15%"),
    minHeight: hp("15%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%"),
    top: hp("0%"),
    resizeMode: "cover"
  },
  ImageBackground_161_303: {
    width: wp("6%"),
    minWidth: wp("6%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%"),
    top: hp("12%")
  },
  View_161_304: {
    width: wp("8%"),
    minWidth: wp("8%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8%"),
    top: hp("13%"),
    justifyContent: "flex-start"
  },
  Text_161_304: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 6.386699676513672,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_161_305: {
    width: wp("11%"),
    minWidth: wp("11%"),
    height: hp("2%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%"),
    top: hp("15%")
  },
  ImageBackground_161_306: {
    width: wp("2%"),
    height: hp("1%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8%")
  },
  ImageBackground_161_309: {
    width: wp("2%"),
    height: hp("1%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_161_310: {
    width: wp("2%"),
    height: hp("1%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%")
  },
  ImageBackground_161_311: {
    width: wp("2%"),
    height: hp("1%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%")
  },
  ImageBackground_161_312: {
    width: wp("2%"),
    height: hp("1%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6%")
  },
  View_161_313: {
    width: wp("37%"),
    minWidth: wp("37%"),
    height: hp("19%"),
    minHeight: hp("19%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("101%"),
    top: hp("16%")
  },
  View_161_314: {
    width: wp("37%"),
    minWidth: wp("37%"),
    height: hp("19%"),
    minHeight: hp("19%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(246, 250, 242, 1)"
  },
  ImageBackground_161_315: {
    width: wp("35%"),
    minWidth: wp("35%"),
    height: hp("15%"),
    minHeight: hp("15%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%"),
    top: hp("0%"),
    resizeMode: "cover"
  },
  ImageBackground_161_316: {
    width: wp("6%"),
    minWidth: wp("6%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%"),
    top: hp("12%")
  },
  View_161_317: {
    width: wp("8%"),
    minWidth: wp("8%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8%"),
    top: hp("13%"),
    justifyContent: "flex-start"
  },
  Text_161_317: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 6.386699676513672,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_161_318: {
    width: wp("11%"),
    minWidth: wp("11%"),
    height: hp("2%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%"),
    top: hp("15%")
  },
  ImageBackground_161_319: {
    width: wp("2%"),
    height: hp("1%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8%")
  },
  ImageBackground_161_322: {
    width: wp("2%"),
    height: hp("1%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_161_323: {
    width: wp("2%"),
    height: hp("1%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%")
  },
  ImageBackground_161_324: {
    width: wp("2%"),
    height: hp("1%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%")
  },
  ImageBackground_161_325: {
    width: wp("2%"),
    height: hp("1%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6%")
  },
  View_161_326: {
    width: wp("10%"),
    minWidth: wp("10%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("72%"),
    top: hp("7%"),
    justifyContent: "flex-start"
  },
  Text_161_326: {
    color: "rgba(48, 157, 143, 1)",
    fontSize: 8.06403923034668,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_161_327: {
    width: wp("12%"),
    minWidth: wp("12%"),
    height: hp("4%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%"),
    top: hp("7%")
  },
  View_161_328: {
    width: wp("12%"),
    minWidth: wp("12%"),
    height: hp("4%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(226, 54, 34, 1)"
  },
  View_161_329: {
    width: wp("8%"),
    minWidth: wp("8%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    top: hp("1%"),
    justifyContent: "flex-start"
  },
  Text_161_329: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 10.265547752380371,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_161_330: {
    width: wp("13%"),
    minWidth: wp("13%"),
    height: hp("4%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("38%"),
    top: hp("11%")
  },
  View_161_331: {
    width: wp("13%"),
    minWidth: wp("13%"),
    height: hp("4%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(226, 54, 34, 1)"
  },
  View_161_332: {
    width: wp("10%"),
    minWidth: wp("10%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%"),
    top: hp("1%"),
    justifyContent: "flex-start"
  },
  Text_161_332: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 9.595523834228516,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_161_333: {
    width: wp("12%"),
    height: hp("6%"),
    top: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("81%")
  }
})

const mapStateToProps = state => {
  return {}
}
const mapDispatchToProps = () => {
  return {}
}
export default connect(mapStateToProps, mapDispatchToProps)(Blank)
