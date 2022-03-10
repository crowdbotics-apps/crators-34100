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
      <View style={styles.View_31_62} />
      <View style={styles.View_31_63}>
        <Text style={styles.Text_31_63}>Hi, Hydraxx</Text>
      </View>
      <View style={styles.View_31_64}>
        <View style={styles.View_184_2773}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2bca/ab00/b82700080329ee46d55c4122a91490c0"
            }}
            style={styles.ImageBackground_164_689}
          />
          <View style={styles.View_31_68}>
            <View style={styles.View_31_69}>
              <Text style={styles.Text_31_69}>Favourites</Text>
            </View>
          </View>
        </View>
        <View style={styles.View_31_65}>
          <View style={styles.View_31_66}>
            <Text style={styles.Text_31_66}>Order History</Text>
          </View>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/995c/39cc/9ae3a7a8c62fda978e0104b6a6acb8b0"
            }}
            style={styles.ImageBackground_31_67}
          />
        </View>
        <View style={styles.View_184_2767}>
          <View style={styles.View_184_2768}>
            <Text style={styles.Text_184_2768}>Cards</Text>
          </View>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1fc3/2633/abbb55690ec5cb08868fa2a6608277d6"
            }}
            style={styles.ImageBackground_184_2769}
          />
        </View>
        <View style={styles.View_31_78}>
          <View style={styles.View_31_79}>
            <Text style={styles.Text_31_79}>Live Chat</Text>
          </View>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/8b34/eeaf/9b2c52d2141fc56bf14759a3c607a11c"
            }}
            style={styles.ImageBackground_31_80}
          />
        </View>
        <View style={styles.View_31_82}>
          <View style={styles.View_31_83}>
            <Text style={styles.Text_31_83}>Logout</Text>
          </View>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/e5c0/5282/3ae620fff2ac8a9737b564b350ce87e4"
            }}
            style={styles.ImageBackground_31_84}
          />
        </View>
      </View>
      <View style={styles.View_31_85}>
        <View style={styles.View_31_86}>
          <Text style={styles.Text_31_86}>Home</Text>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/46df/32c1/f0b817617243a22a88272553ec89825f"
          }}
          style={styles.ImageBackground_31_87}
        />
      </View>
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/767d/8e2a/27130565029c9dd2856c49e9079901e1"
        }}
        style={styles.ImageBackground_31_89}
      />
      <View style={styles.View_60_302}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3c7f/1019/9c3ef5100a92792972d0ff3a2ac4f95b"
          }}
          style={styles.ImageBackground_60_303}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/4df5/2b12/d83d24c66c1592bc8abaef2b6de3a2d5"
          }}
          style={styles.ImageBackground_60_307}
        />
        <View style={styles.View_60_308}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/52a2/7a53/7e9d9f408940e4d904628f9990f59aaf"
            }}
            style={styles.ImageBackground_60_309}
          />
          <View style={styles.View_60_310}>
            <Text style={styles.Text_60_310}>Ilorin, NGA</Text>
          </View>
        </View>
        <View style={styles.View_60_311}>
          <Text style={styles.Text_60_311}>
            Hi Hydraxx, What would you like today?
          </Text>
        </View>
        <View style={styles.View_60_312}>
          <View style={styles.View_60_313}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/6796/7491/9740699111feae85c9c022eea574b73d"
              }}
              style={styles.ImageBackground_60_314}
            />
            <View style={styles.View_60_315}>
              <Text style={styles.Text_60_315}>Products, Pharmacists...</Text>
            </View>
          </View>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/82ba/c2a6/520f3ddc4f127e1e250e1514b8cfba3d"
            }}
            style={styles.ImageBackground_60_316}
          />
        </View>
        <View style={styles.View_60_318}>
          <View style={styles.View_60_319} />
          <View style={styles.View_60_320}>
            <View style={styles.View_60_321}>
              <Text style={styles.Text_60_321}>Sivoketoconazole</Text>
            </View>
            <View style={styles.View_60_322}>
              <Text style={styles.Text_60_322}>200 Bottles</Text>
            </View>
            <View style={styles.View_60_323}>
              <Text style={styles.Text_60_323}>N11500</Text>
            </View>
          </View>
          <View style={styles.View_60_324}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/000d/c4c6/5a332f3e89c917005823c44326e22239"
              }}
              style={styles.ImageBackground_60_325}
            />
            <View style={styles.View_60_326}>
              <Text style={styles.Text_60_326}>Tuyil Pharmacy</Text>
            </View>
          </View>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/dd70/ef49/6d58ec810900c6b99ed6dda562e55626"
            }}
            style={styles.ImageBackground_60_327}
          />
        </View>
        <View style={styles.View_60_328}>
          <View style={styles.View_60_329} />
          <View style={styles.View_60_330}>
            <View style={styles.View_60_331}>
              <Text style={styles.Text_60_331}>Sivoketoconazole</Text>
            </View>
            <View style={styles.View_60_332}>
              <Text style={styles.Text_60_332}>200 Bottles</Text>
            </View>
            <View style={styles.View_60_333}>
              <Text style={styles.Text_60_333}>N11500</Text>
            </View>
          </View>
          <View style={styles.View_60_334}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/000d/c4c6/5a332f3e89c917005823c44326e22239"
              }}
              style={styles.ImageBackground_60_335}
            />
            <View style={styles.View_60_336}>
              <Text style={styles.Text_60_336}>Tuyil Pharmacy</Text>
            </View>
          </View>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2ac6/b4ac/57b5e10f886cbc3a66d311135dacef1d"
            }}
            style={styles.ImageBackground_60_337}
          />
        </View>
        <View style={styles.View_60_338}>
          <View style={styles.View_60_339} />
          <View style={styles.View_60_340}>
            <View style={styles.View_60_341}>
              <Text style={styles.Text_60_341}>Sivoketoconazole</Text>
            </View>
            <View style={styles.View_60_342}>
              <Text style={styles.Text_60_342}>200 Bottles</Text>
            </View>
            <View style={styles.View_60_343}>
              <Text style={styles.Text_60_343}>N11500</Text>
            </View>
          </View>
          <View style={styles.View_60_344}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/000d/c4c6/5a332f3e89c917005823c44326e22239"
              }}
              style={styles.ImageBackground_60_345}
            />
            <View style={styles.View_60_346}>
              <Text style={styles.Text_60_346}>Tuyil Pharmacy</Text>
            </View>
          </View>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/fa5a/9755/1529f06c96c8b884e62c7a2916399d73"
            }}
            style={styles.ImageBackground_60_347}
          />
        </View>
        <View style={styles.View_60_348}>
          <Text style={styles.Text_60_348}>Featured Products</Text>
        </View>
        <View style={styles.View_60_484}>
          <Text style={styles.Text_60_484}>Explore</Text>
        </View>
        <View style={styles.View_60_485}>
          <View style={styles.View_60_486}>
            <Text style={styles.Text_60_486}>Medical Instruments</Text>
          </View>
          <View style={styles.View_60_487}>
            <View style={styles.View_60_488} />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/384b/fc77/9eac87a845c2d3b759529d5827e9ae28"
              }}
              style={styles.ImageBackground_60_489}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/f5ae/b801/94071d4c202a4657cce88543aade8fc4"
              }}
              style={styles.ImageBackground_60_490}
            />
            <View style={styles.View_60_491}>
              <Text style={styles.Text_60_491}>Al- Mahruf</Text>
            </View>
            <View style={styles.View_60_492}>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/4476/313f/dc856ad5e5f4e1018ca9cf3c0bd252e7"
                }}
                style={styles.ImageBackground_60_493}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/7236/703e/f6467d5ec4a76330a5eb9e5cf8d78068"
                }}
                style={styles.ImageBackground_60_496}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/7236/703e/f6467d5ec4a76330a5eb9e5cf8d78068"
                }}
                style={styles.ImageBackground_60_497}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/7236/703e/f6467d5ec4a76330a5eb9e5cf8d78068"
                }}
                style={styles.ImageBackground_60_498}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/7236/703e/f6467d5ec4a76330a5eb9e5cf8d78068"
                }}
                style={styles.ImageBackground_60_499}
              />
            </View>
          </View>
          <View style={styles.View_60_500}>
            <View style={styles.View_60_501} />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/afcc/1d6b/4ae7d28a62a012e85acc6ba7e1dabb54"
              }}
              style={styles.ImageBackground_60_502}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/f5ae/b801/94071d4c202a4657cce88543aade8fc4"
              }}
              style={styles.ImageBackground_60_503}
            />
            <View style={styles.View_60_504}>
              <Text style={styles.Text_60_504}>Tuyil</Text>
            </View>
            <View style={styles.View_60_505}>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/4476/313f/dc856ad5e5f4e1018ca9cf3c0bd252e7"
                }}
                style={styles.ImageBackground_60_506}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/7236/703e/f6467d5ec4a76330a5eb9e5cf8d78068"
                }}
                style={styles.ImageBackground_60_509}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/7236/703e/f6467d5ec4a76330a5eb9e5cf8d78068"
                }}
                style={styles.ImageBackground_60_510}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/7236/703e/f6467d5ec4a76330a5eb9e5cf8d78068"
                }}
                style={styles.ImageBackground_60_511}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/7236/703e/f6467d5ec4a76330a5eb9e5cf8d78068"
                }}
                style={styles.ImageBackground_60_512}
              />
            </View>
          </View>
          <View style={styles.View_60_513}>
            <View style={styles.View_60_514} />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a1bc/00b6/f6b4371da4fc1720b5a1f30cb65069ef"
              }}
              style={styles.ImageBackground_60_515}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/6587/6c2b/5da49f33a3b8368413183bd0e84c6b35"
              }}
              style={styles.ImageBackground_60_516}
            />
            <View style={styles.View_60_517}>
              <Text style={styles.Text_60_517}>Oloyin</Text>
            </View>
            <View style={styles.View_60_518}>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/4476/313f/dc856ad5e5f4e1018ca9cf3c0bd252e7"
                }}
                style={styles.ImageBackground_60_519}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/7236/703e/f6467d5ec4a76330a5eb9e5cf8d78068"
                }}
                style={styles.ImageBackground_60_522}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/7236/703e/f6467d5ec4a76330a5eb9e5cf8d78068"
                }}
                style={styles.ImageBackground_60_523}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/7236/703e/f6467d5ec4a76330a5eb9e5cf8d78068"
                }}
                style={styles.ImageBackground_60_524}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/7236/703e/f6467d5ec4a76330a5eb9e5cf8d78068"
                }}
                style={styles.ImageBackground_60_525}
              />
            </View>
          </View>
          <View style={styles.View_60_526}>
            <View style={styles.View_60_527} />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/5443/c2fb/18acf6683dc641d9996782c5dffcfede"
              }}
              style={styles.ImageBackground_60_528}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/6587/6c2b/5da49f33a3b8368413183bd0e84c6b35"
              }}
              style={styles.ImageBackground_60_529}
            />
            <View style={styles.View_60_530}>
              <Text style={styles.Text_60_530}>Taofee</Text>
            </View>
            <View style={styles.View_60_531}>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/4476/313f/dc856ad5e5f4e1018ca9cf3c0bd252e7"
                }}
                style={styles.ImageBackground_60_532}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/7236/703e/f6467d5ec4a76330a5eb9e5cf8d78068"
                }}
                style={styles.ImageBackground_60_535}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/7236/703e/f6467d5ec4a76330a5eb9e5cf8d78068"
                }}
                style={styles.ImageBackground_60_536}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/7236/703e/f6467d5ec4a76330a5eb9e5cf8d78068"
                }}
                style={styles.ImageBackground_60_537}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/7236/703e/f6467d5ec4a76330a5eb9e5cf8d78068"
                }}
                style={styles.ImageBackground_60_538}
              />
            </View>
          </View>
          <View style={styles.View_60_539}>
            <Text style={styles.Text_60_539}>Explore</Text>
          </View>
        </View>
        <View style={styles.View_60_540}>
          <View style={styles.View_60_541}>
            <Text style={styles.Text_60_541}>Discounted Products</Text>
          </View>
          <View style={styles.View_60_542}>
            <View style={styles.View_60_543} />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/0e44/87e0/bb2432e29da543d5dce798006d518bfe"
              }}
              style={styles.ImageBackground_60_544}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3b7a/f503/9a6adb8bdd813680fc8e2e8d3c2038e8"
              }}
              style={styles.ImageBackground_60_545}
            />
            <View style={styles.View_60_546}>
              <Text style={styles.Text_60_546}>Al- Mahruf</Text>
            </View>
            <View style={styles.View_60_547}>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/4476/313f/dc856ad5e5f4e1018ca9cf3c0bd252e7"
                }}
                style={styles.ImageBackground_60_548}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/7236/703e/f6467d5ec4a76330a5eb9e5cf8d78068"
                }}
                style={styles.ImageBackground_60_551}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/7236/703e/f6467d5ec4a76330a5eb9e5cf8d78068"
                }}
                style={styles.ImageBackground_60_552}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/7236/703e/f6467d5ec4a76330a5eb9e5cf8d78068"
                }}
                style={styles.ImageBackground_60_553}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/7236/703e/f6467d5ec4a76330a5eb9e5cf8d78068"
                }}
                style={styles.ImageBackground_60_554}
              />
            </View>
          </View>
          <View style={styles.View_60_555}>
            <View style={styles.View_60_556} />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/e616/04a3/f10b80cd151fb1f777147c70515c308b"
              }}
              style={styles.ImageBackground_60_557}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3b7a/f503/9a6adb8bdd813680fc8e2e8d3c2038e8"
              }}
              style={styles.ImageBackground_60_558}
            />
            <View style={styles.View_60_559}>
              <Text style={styles.Text_60_559}>Tuyil</Text>
            </View>
            <View style={styles.View_60_560}>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/4476/313f/dc856ad5e5f4e1018ca9cf3c0bd252e7"
                }}
                style={styles.ImageBackground_60_561}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/7236/703e/f6467d5ec4a76330a5eb9e5cf8d78068"
                }}
                style={styles.ImageBackground_60_564}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/7236/703e/f6467d5ec4a76330a5eb9e5cf8d78068"
                }}
                style={styles.ImageBackground_60_565}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/7236/703e/f6467d5ec4a76330a5eb9e5cf8d78068"
                }}
                style={styles.ImageBackground_60_566}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/7236/703e/f6467d5ec4a76330a5eb9e5cf8d78068"
                }}
                style={styles.ImageBackground_60_567}
              />
            </View>
          </View>
          <View style={styles.View_60_568}>
            <View style={styles.View_60_569} />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/7f04/8cd5/d70629a203e8fbe2c4beeeb36c3a355d"
              }}
              style={styles.ImageBackground_60_570}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3b7a/f503/9a6adb8bdd813680fc8e2e8d3c2038e8"
              }}
              style={styles.ImageBackground_60_571}
            />
            <View style={styles.View_60_572}>
              <Text style={styles.Text_60_572}>Oloyin</Text>
            </View>
            <View style={styles.View_60_573}>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/4476/313f/dc856ad5e5f4e1018ca9cf3c0bd252e7"
                }}
                style={styles.ImageBackground_60_574}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/7236/703e/f6467d5ec4a76330a5eb9e5cf8d78068"
                }}
                style={styles.ImageBackground_60_577}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/7236/703e/f6467d5ec4a76330a5eb9e5cf8d78068"
                }}
                style={styles.ImageBackground_60_578}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/7236/703e/f6467d5ec4a76330a5eb9e5cf8d78068"
                }}
                style={styles.ImageBackground_60_579}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/7236/703e/f6467d5ec4a76330a5eb9e5cf8d78068"
                }}
                style={styles.ImageBackground_60_580}
              />
            </View>
          </View>
          <View style={styles.View_60_581}>
            <View style={styles.View_60_582} />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/7a33/91f9/a92db64a3e343a36346dd9176cda7fb5"
              }}
              style={styles.ImageBackground_60_583}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/31fa/c1fc/4005d3ea3cc8946619af197ffbe9d51a"
              }}
              style={styles.ImageBackground_60_584}
            />
            <View style={styles.View_60_585}>
              <Text style={styles.Text_60_585}>Taofee</Text>
            </View>
            <View style={styles.View_60_586}>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/4476/313f/dc856ad5e5f4e1018ca9cf3c0bd252e7"
                }}
                style={styles.ImageBackground_60_587}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/7236/703e/f6467d5ec4a76330a5eb9e5cf8d78068"
                }}
                style={styles.ImageBackground_60_590}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/7236/703e/f6467d5ec4a76330a5eb9e5cf8d78068"
                }}
                style={styles.ImageBackground_60_591}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/7236/703e/f6467d5ec4a76330a5eb9e5cf8d78068"
                }}
                style={styles.ImageBackground_60_592}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/7236/703e/f6467d5ec4a76330a5eb9e5cf8d78068"
                }}
                style={styles.ImageBackground_60_593}
              />
            </View>
          </View>
          <View style={styles.View_60_594}>
            <Text style={styles.Text_60_594}>Explore</Text>
          </View>
          <View style={styles.View_60_595}>
            <View style={styles.View_60_596} />
            <View style={styles.View_60_597}>
              <Text style={styles.Text_60_597}>-30%</Text>
            </View>
          </View>
          <View style={styles.View_60_598}>
            <View style={styles.View_60_599} />
            <View style={styles.View_60_600}>
              <Text style={styles.Text_60_600}>Promo</Text>
            </View>
          </View>
        </View>
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: { backgroundColor: "rgba(48, 157, 143, 1)" },
  View_2: { height: hp("111%") },
  View_31_62: {
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
  View_31_63: {
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
  Text_31_63: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 26,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_31_64: {
    width: wp("45%"),
    minWidth: wp("45%"),
    height: hp("33%"),
    minHeight: hp("33%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("11%"),
    top: hp("53%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_184_2773: {
    width: wp("38%"),
    minWidth: wp("38%"),
    height: hp("5%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_164_689: {
    width: wp("5%"),
    height: hp("2%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_31_68: {
    width: wp("30%"),
    minWidth: wp("30%"),
    height: hp("5%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8%"),
    top: hp("0%")
  },
  View_31_69: {
    width: wp("30%"),
    minWidth: wp("30%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_31_69: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 17.789325714111328,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_31_65: {
    width: wp("45%"),
    minWidth: wp("45%"),
    height: hp("4%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("7%")
  },
  View_31_66: {
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
  Text_31_66: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 17.789325714111328,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_31_67: {
    width: wp("5%"),
    height: hp("2%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_184_2767: {
    width: wp("25%"),
    minWidth: wp("25%"),
    height: hp("4%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("14%")
  },
  View_184_2768: {
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
  Text_184_2768: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 17.789325714111328,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_184_2769: {
    width: wp("5%"),
    height: hp("2%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_31_78: {
    width: wp("34%"),
    minWidth: wp("34%"),
    height: hp("4%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("22%")
  },
  View_31_79: {
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
  Text_31_79: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 17.789325714111328,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_31_80: {
    width: wp("5%"),
    height: hp("2%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_31_82: {
    width: wp("27%"),
    minWidth: wp("27%"),
    height: hp("4%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("29%")
  },
  View_31_83: {
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
  Text_31_83: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 17.789325714111328,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_31_84: {
    width: wp("5%"),
    height: hp("2%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_31_85: {
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
  View_31_86: {
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
  Text_31_86: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 19,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_31_87: {
    width: wp("5%"),
    height: hp("3%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_31_89: {
    width: wp("5%"),
    height: hp("3%"),
    top: hp("10%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9%")
  },
  View_60_302: {
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
  ImageBackground_60_303: {
    width: wp("6%"),
    height: hp("3%"),
    top: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("40%")
  },
  ImageBackground_60_307: {
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
  View_60_308: {
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
  ImageBackground_60_309: {
    width: wp("3%"),
    height: hp("2%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_60_310: {
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
  Text_60_310: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 11.257389068603516,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_60_311: {
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
  Text_60_311: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 12.09605884552002,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_60_312: {
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
  View_60_313: {
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
  ImageBackground_60_314: {
    width: wp("5%"),
    height: hp("2%"),
    top: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%")
  },
  View_60_315: {
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
  Text_60_315: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 10.348093032836914,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_60_316: {
    width: wp("13%"),
    height: hp("6%"),
    top: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("65%")
  },
  View_60_318: {
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
  View_60_319: {
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
  View_60_320: {
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
  View_60_321: {
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
  Text_60_321: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 10.418719291687012,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_60_322: {
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
  Text_60_322: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 12.09605884552002,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_60_323: {
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
  Text_60_323: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 16.12807846069336,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_60_324: {
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
  ImageBackground_60_325: {
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
  View_60_326: {
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
  Text_60_326: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 6.386699676513672,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_60_327: {
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
  View_60_328: {
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
  View_60_329: {
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
  View_60_330: {
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
  View_60_331: {
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
  Text_60_331: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 10.418719291687012,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_60_332: {
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
  Text_60_332: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 12.09605884552002,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_60_333: {
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
  Text_60_333: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 16.12807846069336,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_60_334: {
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
  ImageBackground_60_335: {
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
  View_60_336: {
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
  Text_60_336: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 6.386699676513672,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_60_337: {
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
  View_60_338: {
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
  View_60_339: {
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
  View_60_340: {
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
  View_60_341: {
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
  Text_60_341: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 10.418719291687012,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_60_342: {
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
  Text_60_342: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 12.09605884552002,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_60_343: {
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
  Text_60_343: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 16.12807846069336,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_60_344: {
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
  ImageBackground_60_345: {
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
  View_60_346: {
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
  Text_60_346: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 6.386699676513672,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_60_347: {
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
  View_60_348: {
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
  Text_60_348: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 12.09605884552002,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_60_484: {
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
  Text_60_484: {
    color: "rgba(48, 157, 143, 1)",
    fontSize: 8.06403923034668,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_60_485: {
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
  View_60_486: {
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
  Text_60_486: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 12.09605884552002,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_60_487: {
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
  View_60_488: {
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
  ImageBackground_60_489: {
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
  ImageBackground_60_490: {
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
  View_60_491: {
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
  Text_60_491: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 6.386699676513672,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_60_492: {
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
  ImageBackground_60_493: {
    width: wp("2%"),
    height: hp("1%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8%")
  },
  ImageBackground_60_496: {
    width: wp("2%"),
    height: hp("1%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_60_497: {
    width: wp("2%"),
    height: hp("1%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%")
  },
  ImageBackground_60_498: {
    width: wp("2%"),
    height: hp("1%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%")
  },
  ImageBackground_60_499: {
    width: wp("2%"),
    height: hp("1%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6%")
  },
  View_60_500: {
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
  View_60_501: {
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
  ImageBackground_60_502: {
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
  ImageBackground_60_503: {
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
  View_60_504: {
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
  Text_60_504: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 6.386699676513672,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_60_505: {
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
  ImageBackground_60_506: {
    width: wp("2%"),
    height: hp("1%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8%")
  },
  ImageBackground_60_509: {
    width: wp("2%"),
    height: hp("1%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_60_510: {
    width: wp("2%"),
    height: hp("1%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%")
  },
  ImageBackground_60_511: {
    width: wp("2%"),
    height: hp("1%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%")
  },
  ImageBackground_60_512: {
    width: wp("2%"),
    height: hp("1%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6%")
  },
  View_60_513: {
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
  View_60_514: {
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
  ImageBackground_60_515: {
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
  ImageBackground_60_516: {
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
  View_60_517: {
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
  Text_60_517: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 6.386699676513672,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_60_518: {
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
  ImageBackground_60_519: {
    width: wp("2%"),
    height: hp("1%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8%")
  },
  ImageBackground_60_522: {
    width: wp("2%"),
    height: hp("1%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_60_523: {
    width: wp("2%"),
    height: hp("1%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%")
  },
  ImageBackground_60_524: {
    width: wp("2%"),
    height: hp("1%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%")
  },
  ImageBackground_60_525: {
    width: wp("2%"),
    height: hp("1%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6%")
  },
  View_60_526: {
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
  View_60_527: {
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
  ImageBackground_60_528: {
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
  ImageBackground_60_529: {
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
  View_60_530: {
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
  Text_60_530: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 6.386699676513672,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_60_531: {
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
  ImageBackground_60_532: {
    width: wp("2%"),
    height: hp("1%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8%")
  },
  ImageBackground_60_535: {
    width: wp("2%"),
    height: hp("1%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_60_536: {
    width: wp("2%"),
    height: hp("1%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%")
  },
  ImageBackground_60_537: {
    width: wp("2%"),
    height: hp("1%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%")
  },
  ImageBackground_60_538: {
    width: wp("2%"),
    height: hp("1%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6%")
  },
  View_60_539: {
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
  Text_60_539: {
    color: "rgba(48, 157, 143, 1)",
    fontSize: 8.06403923034668,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_60_540: {
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
  View_60_541: {
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
  Text_60_541: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 12.09605884552002,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_60_542: {
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
  View_60_543: {
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
  ImageBackground_60_544: {
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
  ImageBackground_60_545: {
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
  View_60_546: {
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
  Text_60_546: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 6.386699676513672,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_60_547: {
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
  ImageBackground_60_548: {
    width: wp("2%"),
    height: hp("1%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8%")
  },
  ImageBackground_60_551: {
    width: wp("2%"),
    height: hp("1%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_60_552: {
    width: wp("2%"),
    height: hp("1%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%")
  },
  ImageBackground_60_553: {
    width: wp("2%"),
    height: hp("1%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%")
  },
  ImageBackground_60_554: {
    width: wp("2%"),
    height: hp("1%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6%")
  },
  View_60_555: {
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
  View_60_556: {
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
  ImageBackground_60_557: {
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
  ImageBackground_60_558: {
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
  View_60_559: {
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
  Text_60_559: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 6.386699676513672,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_60_560: {
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
  ImageBackground_60_561: {
    width: wp("2%"),
    height: hp("1%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8%")
  },
  ImageBackground_60_564: {
    width: wp("2%"),
    height: hp("1%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_60_565: {
    width: wp("2%"),
    height: hp("1%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%")
  },
  ImageBackground_60_566: {
    width: wp("2%"),
    height: hp("1%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%")
  },
  ImageBackground_60_567: {
    width: wp("2%"),
    height: hp("1%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6%")
  },
  View_60_568: {
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
  View_60_569: {
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
  ImageBackground_60_570: {
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
  ImageBackground_60_571: {
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
  View_60_572: {
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
  Text_60_572: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 6.386699676513672,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_60_573: {
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
  ImageBackground_60_574: {
    width: wp("2%"),
    height: hp("1%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8%")
  },
  ImageBackground_60_577: {
    width: wp("2%"),
    height: hp("1%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_60_578: {
    width: wp("2%"),
    height: hp("1%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%")
  },
  ImageBackground_60_579: {
    width: wp("2%"),
    height: hp("1%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%")
  },
  ImageBackground_60_580: {
    width: wp("2%"),
    height: hp("1%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6%")
  },
  View_60_581: {
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
  View_60_582: {
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
  ImageBackground_60_583: {
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
  ImageBackground_60_584: {
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
  View_60_585: {
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
  Text_60_585: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 6.386699676513672,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_60_586: {
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
  ImageBackground_60_587: {
    width: wp("2%"),
    height: hp("1%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8%")
  },
  ImageBackground_60_590: {
    width: wp("2%"),
    height: hp("1%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_60_591: {
    width: wp("2%"),
    height: hp("1%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%")
  },
  ImageBackground_60_592: {
    width: wp("2%"),
    height: hp("1%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%")
  },
  ImageBackground_60_593: {
    width: wp("2%"),
    height: hp("1%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6%")
  },
  View_60_594: {
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
  Text_60_594: {
    color: "rgba(48, 157, 143, 1)",
    fontSize: 8.06403923034668,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_60_595: {
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
  View_60_596: {
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
  View_60_597: {
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
  Text_60_597: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 10.265547752380371,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_60_598: {
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
  View_60_599: {
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
  View_60_600: {
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
  Text_60_600: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 9.595523834228516,
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
