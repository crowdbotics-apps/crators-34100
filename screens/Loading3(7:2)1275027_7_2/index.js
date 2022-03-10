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
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a8c2/064a/d427f1ce88994dfe8e2b05a7fd5089d4"
        }}
        style={styles.ImageBackground_7_3}
      />
      <View style={styles.View_7_9}>
        <Text style={styles.Text_7_9}>Next</Text>
      </View>
      <View style={styles.View_7_10}>
        <Text style={styles.Text_7_10}>Skip</Text>
      </View>
      <View style={styles.View_7_11}>
        <Text style={styles.Text_7_11}>Request to see a Doctor</Text>
      </View>
      <View style={styles.View_8_304}>
        <View style={styles.View_8_305} />
        <View style={styles.View_8_306}>
          <Text style={styles.Text_8_306}>Next</Text>
        </View>
      </View>
      <View style={styles.View_8_310}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/52d4/cd52/180644f1f8ea192b35bf65f5e7013ce2"
          }}
          style={styles.ImageBackground_8_311}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/b111/3a8e/fc6967b512684ab1061df9174541cf5e"
          }}
          style={styles.ImageBackground_8_312}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/e724/5f90/84c73b6b4513b768ac5f26223dd934b7"
          }}
          style={styles.ImageBackground_8_313}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/615c/4e64/c6509daf72ff1ccd4f1426312196fe6a"
          }}
          style={styles.ImageBackground_8_314}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/cf4c/4633/0cbc25be1440c4e138a16b8def1540f8"
          }}
          style={styles.ImageBackground_8_315}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/de11/d1b7/ecbbb11f48c6e0a0fbad1c2f67d87ca1"
          }}
          style={styles.ImageBackground_8_316}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/ce9a/11f0/3f7fab4fafb8270fd325c60009e61ab2"
          }}
          style={styles.ImageBackground_8_317}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/e724/5f90/84c73b6b4513b768ac5f26223dd934b7"
          }}
          style={styles.ImageBackground_8_318}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/affa/6693/c1b456c5c2273c018f724c34fb36bb93"
          }}
          style={styles.ImageBackground_8_319}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/4b6a/380a/e638fa42fbd41a57e2fb48a5934b5bc2"
          }}
          style={styles.ImageBackground_8_320}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/8d63/90dc/b9519d8afd5518f2dd83fddee4b0aea2"
          }}
          style={styles.ImageBackground_8_321}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a814/cc74/f859e7b632419a32bb77388775d7d00f"
          }}
          style={styles.ImageBackground_8_322}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a20d/7496/a1bb0ee89225712829093dea3276976a"
          }}
          style={styles.ImageBackground_8_323}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/05a0/2398/9921f7fe00f774fb9559621e7f7209d3"
          }}
          style={styles.ImageBackground_8_324}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a51e/3768/980816d7c73f60609d73aea6efe3d490"
          }}
          style={styles.ImageBackground_8_325}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/93b3/6dbd/81e878a1c0f3ed91308f423fd2518e80"
          }}
          style={styles.ImageBackground_8_326}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/cbe7/bbcc/1fd83ba09562f0de920ab2c341010785"
          }}
          style={styles.ImageBackground_8_327}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/ac04/e9eb/4aaf7309927113a90436fda50357df54"
          }}
          style={styles.ImageBackground_8_328}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/c8e2/c11d/ee9d7a5e76fa5ea061cebbc325564270"
          }}
          style={styles.ImageBackground_8_329}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2d1a/78c1/2a42d0e4f1f612668478b4f4d6051c33"
          }}
          style={styles.ImageBackground_8_330}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/d795/0d26/3c525cbfa81552fa4eacbe636e175755"
          }}
          style={styles.ImageBackground_8_331}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/520e/a60a/73c2074a9c2b4147f782e822d23db441"
          }}
          style={styles.ImageBackground_8_332}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2d1a/78c1/2a42d0e4f1f612668478b4f4d6051c33"
          }}
          style={styles.ImageBackground_8_333}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2d1a/78c1/2a42d0e4f1f612668478b4f4d6051c33"
          }}
          style={styles.ImageBackground_8_334}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/733c/90e4/3e4167c4cf8039ced166ccaeb7879895"
          }}
          style={styles.ImageBackground_8_335}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/5334/a2da/c7d9405cda442790dfd80649d7afadc9"
          }}
          style={styles.ImageBackground_8_336}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/94eb/2b98/2359b767e1e00cab57bbd823bb17d341"
          }}
          style={styles.ImageBackground_8_337}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/ba4d/dc25/e4b67200195d633e552b934d327513a5"
          }}
          style={styles.ImageBackground_8_338}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/e10b/9a79/39d598a653269c29fcf50c2d6f13c410"
          }}
          style={styles.ImageBackground_8_339}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/affc/652f/ead82cf46acb3c4eb3c8628e750c636c"
          }}
          style={styles.ImageBackground_8_340}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/f61f/42f7/c585b138ee1bb1c1814fb35f2fdfcbcd"
          }}
          style={styles.ImageBackground_8_341}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/999e/b5a2/8e8788eee663137d1a4a608564c8d600"
          }}
          style={styles.ImageBackground_8_342}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/999e/b5a2/8e8788eee663137d1a4a608564c8d600"
          }}
          style={styles.ImageBackground_8_343}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/999e/b5a2/8e8788eee663137d1a4a608564c8d600"
          }}
          style={styles.ImageBackground_8_344}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/999e/b5a2/8e8788eee663137d1a4a608564c8d600"
          }}
          style={styles.ImageBackground_8_345}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/999e/b5a2/8e8788eee663137d1a4a608564c8d600"
          }}
          style={styles.ImageBackground_8_346}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/999e/b5a2/8e8788eee663137d1a4a608564c8d600"
          }}
          style={styles.ImageBackground_8_347}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/999e/b5a2/8e8788eee663137d1a4a608564c8d600"
          }}
          style={styles.ImageBackground_8_348}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/999e/b5a2/8e8788eee663137d1a4a608564c8d600"
          }}
          style={styles.ImageBackground_8_349}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/999e/b5a2/8e8788eee663137d1a4a608564c8d600"
          }}
          style={styles.ImageBackground_8_350}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/999e/b5a2/8e8788eee663137d1a4a608564c8d600"
          }}
          style={styles.ImageBackground_8_351}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/999e/b5a2/8e8788eee663137d1a4a608564c8d600"
          }}
          style={styles.ImageBackground_8_352}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/999e/b5a2/8e8788eee663137d1a4a608564c8d600"
          }}
          style={styles.ImageBackground_8_353}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/999e/b5a2/8e8788eee663137d1a4a608564c8d600"
          }}
          style={styles.ImageBackground_8_354}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/999e/b5a2/8e8788eee663137d1a4a608564c8d600"
          }}
          style={styles.ImageBackground_8_355}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/999e/b5a2/8e8788eee663137d1a4a608564c8d600"
          }}
          style={styles.ImageBackground_8_356}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/999e/b5a2/8e8788eee663137d1a4a608564c8d600"
          }}
          style={styles.ImageBackground_8_357}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/8599/318c/0a0d88752b84cbe1276300fd39a9da66"
          }}
          style={styles.ImageBackground_8_358}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/9ad6/6faf/ac0668657f601cfaa3b94328a4bec2d5"
          }}
          style={styles.ImageBackground_8_359}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/9ad6/6faf/ac0668657f601cfaa3b94328a4bec2d5"
          }}
          style={styles.ImageBackground_8_360}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/9ad6/6faf/ac0668657f601cfaa3b94328a4bec2d5"
          }}
          style={styles.ImageBackground_8_361}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/9ad6/6faf/ac0668657f601cfaa3b94328a4bec2d5"
          }}
          style={styles.ImageBackground_8_362}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/45b6/41b2/286a82b75c47c6a4c4a6b980cdd6289c"
          }}
          style={styles.ImageBackground_8_363}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3c55/c635/802036535abd7c56be912d771667a602"
          }}
          style={styles.ImageBackground_8_364}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/af35/2592/15c524e30b393c5d5eaa96282b098e39"
          }}
          style={styles.ImageBackground_8_365}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a770/a9c9/c7e2ab2154988bd07ba8fb89afa10af7"
          }}
          style={styles.ImageBackground_8_366}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/dc0d/c369/0440f6e8d85f2ebb747247c3f1f273a6"
          }}
          style={styles.ImageBackground_8_367}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/4f47/5b3d/f5afb68eab215f727304b85edbcb68b3"
          }}
          style={styles.ImageBackground_8_368}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/d9fb/6154/dd381ce8fa1502f1778e1dd7cf9924e7"
          }}
          style={styles.ImageBackground_8_369}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1503/460a/d5d95b5983568c4d0af4907a9e2f8f0b"
          }}
          style={styles.ImageBackground_8_370}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3108/818d/4abdb9a67df8f0c460739cb49ee089f4"
          }}
          style={styles.ImageBackground_8_371}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2d35/d63e/0f97587353393eaa55f475a87d42a551"
          }}
          style={styles.ImageBackground_8_372}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/cfec/f24a/90fd2cc12e84a3dd048b140d41c1555a"
          }}
          style={styles.ImageBackground_8_373}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/28bc/6cac/6cf97881734f743752ef29d2baf42d4e"
          }}
          style={styles.ImageBackground_8_374}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/dda2/5ffb/eb2a82a7a245f5faee6ff6692869eab6"
          }}
          style={styles.ImageBackground_8_375}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/e95a/d7e3/0f34fa34f41b71b7c708c74dc8f16e9a"
          }}
          style={styles.ImageBackground_8_376}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/6102/1ecd/dd24015fbc7fd8c4d268cf62bea2a8b8"
          }}
          style={styles.ImageBackground_8_377}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/b9ed/c4fb/068b3a7f9141b0f02957467e3161102e"
          }}
          style={styles.ImageBackground_8_378}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/44c0/49b6/04fed8fe030baa41a936616d1818d311"
          }}
          style={styles.ImageBackground_8_379}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/e180/0a5a/6ee0c6bb51226defff6f0e8b9987bd73"
          }}
          style={styles.ImageBackground_8_380}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/7944/3dda/8c54f0dd70db1ad0d7150db2f5b4e543"
          }}
          style={styles.ImageBackground_8_381}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/f4c9/34d9/fb4f4ccbc3e1983ac0430c0cb40f4015"
          }}
          style={styles.ImageBackground_8_382}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/e17f/f770/5272f7d3c183a8d395561076b485e374"
          }}
          style={styles.ImageBackground_8_383}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/d387/6dea/36b2cc8634af02e32d629f9ca575cd78"
          }}
          style={styles.ImageBackground_8_384}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/7b22/dfcd/5bd36d479bf02f32e1bddb82ead8e843"
          }}
          style={styles.ImageBackground_8_385}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/9b48/8bdc/1f4e2672a277754c6e317d676651ee10"
          }}
          style={styles.ImageBackground_8_386}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/dd04/2729/6fd738343c01dc00fcf4e8f7e7cb6066"
          }}
          style={styles.ImageBackground_8_387}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/0402/0bfe/d5b9da11d28da9c893d2523e0b5f2132"
          }}
          style={styles.ImageBackground_8_388}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/ebb2/9854/2d24ab6406b8fc98487ecce12ea24b5e"
          }}
          style={styles.ImageBackground_8_389}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/5701/c207/610b1df163b84b560411871ca3daf64f"
          }}
          style={styles.ImageBackground_8_390}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/295b/7177/68f96afc9ad035eb6b148710dc5188c8"
          }}
          style={styles.ImageBackground_8_391}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/19bc/a3f0/2ab6b16e8c1244c0124ad3084c7b9feb"
          }}
          style={styles.ImageBackground_8_392}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/fca0/e26c/3a9aacbd52ba22b16c20422045b19994"
          }}
          style={styles.ImageBackground_8_393}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/88fa/caab/ad5e55b0d98ddbef6d387fdd40351ae3"
          }}
          style={styles.ImageBackground_8_394}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/fca0/e26c/3a9aacbd52ba22b16c20422045b19994"
          }}
          style={styles.ImageBackground_8_395}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/88fa/caab/ad5e55b0d98ddbef6d387fdd40351ae3"
          }}
          style={styles.ImageBackground_8_396}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/fca0/e26c/3a9aacbd52ba22b16c20422045b19994"
          }}
          style={styles.ImageBackground_8_397}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/88fa/caab/ad5e55b0d98ddbef6d387fdd40351ae3"
          }}
          style={styles.ImageBackground_8_398}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/9668/3395/ff3d32233f79d9055e746d7e9285730f"
          }}
          style={styles.ImageBackground_8_399}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/aead/96b4/dd72d789bb7640a317fe308db11451e5"
          }}
          style={styles.ImageBackground_8_400}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/d840/82a0/fbe2610e16d18ea0753b394bb22fd26a"
          }}
          style={styles.ImageBackground_8_401}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/d43f/7c2e/66e07ce44d81029012efd366cde410bd"
          }}
          style={styles.ImageBackground_8_402}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a44b/5796/01296352303f895a65721c6a352b96dc"
          }}
          style={styles.ImageBackground_8_403}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/778d/50b9/e4337a29c051e525a6879593f35f0bf4"
          }}
          style={styles.ImageBackground_8_404}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/16d0/9c1a/252bd907ec1cf98bf790523ef33453b9"
          }}
          style={styles.ImageBackground_8_405}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a233/6148/30aabb906668f5ea4882e1dbcde3b952"
          }}
          style={styles.ImageBackground_8_406}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/d24e/86a7/abba28556e2eb90b177e8f23b257bdc8"
          }}
          style={styles.ImageBackground_8_407}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2055/1493/c74bf5b6136347240434b1c93ae0f216"
          }}
          style={styles.ImageBackground_8_408}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/52d1/abe8/919c48df221726d8ab67901fce1eeb7c"
          }}
          style={styles.ImageBackground_8_409}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/34e5/a5ba/eb2e7e138189488628ec2a3741ad34e7"
          }}
          style={styles.ImageBackground_8_410}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/fe02/bf10/2b96ac21cc6923ae93a6cfbc0d11f54a"
          }}
          style={styles.ImageBackground_8_411}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/89d3/d2ac/f35d35df76fb3c94029edbcfe56d1df7"
          }}
          style={styles.ImageBackground_8_412}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2a30/8670/126d3e1593e2c3271742bae3b52f2ef9"
          }}
          style={styles.ImageBackground_8_413}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/b23a/bf90/a08e563cc5b78e65126ecb6399d6f0f1"
          }}
          style={styles.ImageBackground_8_414}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/52d4/cd52/180644f1f8ea192b35bf65f5e7013ce2"
          }}
          style={styles.ImageBackground_8_418}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/281e/857c/a079e80c215770d12b2e04fedff9d79c"
          }}
          style={styles.ImageBackground_8_419}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/79a3/0b2e/4f5920f09426910a69fd40c6c877b34c"
          }}
          style={styles.ImageBackground_8_420}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/0dc5/239d/75bb97a3fa4b20218103138d5f401470"
          }}
          style={styles.ImageBackground_8_421}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/0dc5/239d/75bb97a3fa4b20218103138d5f401470"
          }}
          style={styles.ImageBackground_8_422}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/deba/d81f/2b6e57d8451ab6cea52d91ebcdb6e4c0"
          }}
          style={styles.ImageBackground_8_423}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3e37/72a1/d9d530d6d2e208c0c64cecd135ad41d4"
          }}
          style={styles.ImageBackground_8_424}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/9ea3/a66a/6497d7dd097e86ed7039a68fd9aea15f"
          }}
          style={styles.ImageBackground_8_425}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3865/3fdb/f62c168e2c95c5092d2faa2d8026f4ce"
          }}
          style={styles.ImageBackground_8_426}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/b9c2/b4c7/604077787a10a4caf8e3230b6218f29f"
          }}
          style={styles.ImageBackground_8_427}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1a17/1272/58cf3ad4470b1c0ff45f478c3cc9dc12"
          }}
          style={styles.ImageBackground_8_428}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/8037/31b8/8701ab27e3962b1b0dfe9a1688e37dc7"
          }}
          style={styles.ImageBackground_8_429}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/be6d/505b/f488a66b9f3aeeb6ada65b4782c37381"
          }}
          style={styles.ImageBackground_8_430}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/dddc/a34d/f77adabc5ab4a0daf5ec83d8fc12c2a4"
          }}
          style={styles.ImageBackground_8_431}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/5ce6/1973/2631fa774fe3fc3b4bb5df1125d156cf"
          }}
          style={styles.ImageBackground_8_432}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/e4a7/8313/0cf54968e4cece12aa543f64925f69d5"
          }}
          style={styles.ImageBackground_8_433}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3e1f/4a81/d493e72b44456ce462802b86aa3ab302"
          }}
          style={styles.ImageBackground_8_434}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3b12/7e2f/684555862ff386e92d0275eb7060aef3"
          }}
          style={styles.ImageBackground_8_435}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/79b4/6565/2ec4a003e7a09f9caf8040573c5f0606"
          }}
          style={styles.ImageBackground_8_436}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/b917/1ece/ddce76a5e3b6f0b1668638d447ee0de7"
          }}
          style={styles.ImageBackground_8_437}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/22e0/49c6/01c9a63edc7d11f57c8d0553ae827bff"
          }}
          style={styles.ImageBackground_8_438}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/48b4/b8d9/8ac2e2f7093d749355c88b1ad69c48e1"
          }}
          style={styles.ImageBackground_8_439}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/add9/c792/52ec440a196e74625306cc38385f7724"
          }}
          style={styles.ImageBackground_8_440}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3ae0/8d3b/7db643b564c59e6a86035d07ba0b25fc"
          }}
          style={styles.ImageBackground_8_441}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/d0ce/5101/9b37bfdfa7039cccd713f6a5970a5172"
          }}
          style={styles.ImageBackground_8_442}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/6b08/1dac/076b1bb8736f35eaa9ffe35db337ffb9"
          }}
          style={styles.ImageBackground_8_443}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/5a39/b386/c0b30f0123ce7e921441c5010f3106ad"
          }}
          style={styles.ImageBackground_8_444}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/d9a2/d829/6a8e9236490974718f3741c8f1f03a9f"
          }}
          style={styles.ImageBackground_8_445}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/9d8c/c4d0/6214517e690d24833d781afb575ecf09"
          }}
          style={styles.ImageBackground_8_446}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a359/2482/529588e9c95cb69b1022392b5d4986ba"
          }}
          style={styles.ImageBackground_8_447}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/930f/b87f/f23d3e56d2f83ff80ec11b4d7570fc6b"
          }}
          style={styles.ImageBackground_8_448}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/d9aa/4671/7f9e29705beb479696be54677faaf787"
          }}
          style={styles.ImageBackground_8_449}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/66f9/f040/963bbc4e49ce36002076ce001f3367bc"
          }}
          style={styles.ImageBackground_8_450}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/fc0e/b556/a1e972aff17ddd1d93c3656fd3158e59"
          }}
          style={styles.ImageBackground_8_451}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/fddd/75de/b9ca83e770285491c9041a804337a1ab"
          }}
          style={styles.ImageBackground_8_452}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/98d8/9e30/c0143ffcc50dce289595dab277cbe5d4"
          }}
          style={styles.ImageBackground_8_453}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1729/0012/761908bcd4df9c2ff78140080c267d2f"
          }}
          style={styles.ImageBackground_8_454}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/39ca/da14/66ed2a558673ff149b36ecefc97406c2"
          }}
          style={styles.ImageBackground_8_455}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/393d/bb3f/aba7be06002675c6ff54a1e6d8fa450a"
          }}
          style={styles.ImageBackground_8_456}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/6fbf/1644/58510a37fbe0e39d2281621c2935dd48"
          }}
          style={styles.ImageBackground_8_457}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/4194/4e3f/fa2ca72f0143d14aca9aa9c6837b54af"
          }}
          style={styles.ImageBackground_8_458}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/067d/0c22/8b3cf777f920e59754cbd3d79427f7cc"
          }}
          style={styles.ImageBackground_8_459}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/4f1a/ed3b/744ff5c46d4a26ca4f3ce211701c1860"
          }}
          style={styles.ImageBackground_8_460}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/ad33/659c/33381eac40061641b81f19d65a13ad9f"
          }}
          style={styles.ImageBackground_8_461}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/46c5/dad5/0c59df7f038d0cdd72baab9e3fcdd29c"
          }}
          style={styles.ImageBackground_8_462}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/eb58/79cf/21f76aaaa0284fe4f6dc52e401be5928"
          }}
          style={styles.ImageBackground_8_463}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/bbe9/ffa9/e8300c9a4d538685ca48dc31e1910ff9"
          }}
          style={styles.ImageBackground_8_464}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/447d/e397/0ea515dd262d422749c3ecfbdec87902"
          }}
          style={styles.ImageBackground_8_465}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3ab3/34ab/d28d4b12d45924df2f86b9fbc1e86dbd"
          }}
          style={styles.ImageBackground_8_466}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/ea91/2765/91e71b191ad919ceca727012da9c22dc"
          }}
          style={styles.ImageBackground_8_467}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/e2c2/2b35/70bfdd54823167c4479511a6bcba6798"
          }}
          style={styles.ImageBackground_8_468}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1e70/eecc/85bce5a577a5dc7db644352676e0cde6"
          }}
          style={styles.ImageBackground_8_469}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/4b0b/4ff6/a75fc974cfe7e0e39cf5e5e2fdc65e34"
          }}
          style={styles.ImageBackground_8_470}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2718/1e17/218985876e50a3637f4447c0566e2b4c"
          }}
          style={styles.ImageBackground_8_471}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a609/d3e4/1e15d28e962516a31e612e02ddd6c2b0"
          }}
          style={styles.ImageBackground_8_472}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2ae7/e573/08757d5bb5dcad5983439da4194de8de"
          }}
          style={styles.ImageBackground_8_473}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/9666/7859/f6c2de038fafac0833f913ff8dc9ec3a"
          }}
          style={styles.ImageBackground_8_474}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/d2dc/e31c/7e3d1335f023d69774c3d858779b59f1"
          }}
          style={styles.ImageBackground_8_475}
        />
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: { backgroundColor: "rgba(252, 252, 252, 1)" },
  View_2: { height: hp("111%") },
  ImageBackground_7_3: {
    width: wp("35%"),
    height: hp("1%"),
    top: hp("73%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("33%")
  },
  View_7_9: {
    width: wp("9%"),
    minWidth: wp("9%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("45%"),
    top: hp("83%"),
    justifyContent: "flex-start"
  },
  Text_7_9: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 12,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_7_10: {
    width: wp("9%"),
    minWidth: wp("9%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("45%"),
    top: hp("92%"),
    justifyContent: "flex-start"
  },
  Text_7_10: {
    color: "rgba(149, 149, 149, 1)",
    fontSize: 12,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_7_11: {
    width: wp("77%"),
    minWidth: wp("77%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("12%"),
    top: hp("63%"),
    justifyContent: "flex-start"
  },
  Text_7_11: {
    color: "rgba(74, 74, 74, 1)",
    fontSize: 19,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_8_304: {
    width: wp("82%"),
    minWidth: wp("82%"),
    height: hp("7%"),
    minHeight: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9%"),
    top: hp("82%")
  },
  View_8_305: {
    width: wp("82%"),
    minWidth: wp("82%"),
    height: hp("7%"),
    minHeight: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(48, 157, 143, 1)"
  },
  View_8_306: {
    width: wp("12%"),
    minWidth: wp("12%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("35%"),
    top: hp("1%"),
    justifyContent: "flex-start"
  },
  Text_8_306: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 16,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_8_310: {
    width: wp("68%"),
    minWidth: wp("68%"),
    height: hp("25%"),
    minHeight: hp("25%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("13%"),
    top: hp("30%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  ImageBackground_8_311: {
    width: wp("12%"),
    height: hp("1%"),
    top: hp("24%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("17%")
  },
  ImageBackground_8_312: {
    width: wp("15%"),
    height: hp("1%"),
    top: hp("24%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("48%")
  },
  ImageBackground_8_313: {
    width: wp("6%"),
    height: hp("8%"),
    top: hp("11%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%")
  },
  ImageBackground_8_314: {
    width: wp("3%"),
    height: hp("2%"),
    top: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%")
  },
  ImageBackground_8_315: {
    width: wp("6%"),
    height: hp("5%"),
    top: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%")
  },
  ImageBackground_8_316: {
    width: wp("60%"),
    height: hp("23%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9%")
  },
  ImageBackground_8_317: {
    width: wp("6%"),
    height: hp("2%"),
    top: hp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%")
  },
  ImageBackground_8_318: {
    width: wp("6%"),
    height: hp("8%"),
    top: hp("11%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%")
  },
  ImageBackground_8_319: {
    width: wp("5%"),
    height: hp("5%"),
    top: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9%")
  },
  ImageBackground_8_320: {
    width: wp("5%"),
    height: hp("4%"),
    top: hp("11%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9%")
  },
  ImageBackground_8_321: {
    width: wp("5%"),
    height: hp("4%"),
    top: hp("15%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9%")
  },
  ImageBackground_8_322: {
    width: wp("4%"),
    height: hp("4%"),
    top: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("39%")
  },
  ImageBackground_8_323: {
    width: wp("19%"),
    height: hp("4%"),
    top: hp("11%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("23%")
  },
  ImageBackground_8_324: {
    width: wp("19%"),
    height: hp("8%"),
    top: hp("15%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("23%")
  },
  ImageBackground_8_325: {
    width: wp("3%"),
    height: hp("2%"),
    top: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("50%")
  },
  ImageBackground_8_326: {
    width: wp("15%"),
    height: hp("5%"),
    top: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("44%")
  },
  ImageBackground_8_327: {
    width: wp("19%"),
    height: hp("12%"),
    top: hp("11%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("44%")
  },
  ImageBackground_8_328: {
    width: wp("4%"),
    height: hp("4%"),
    top: hp("15%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("64%")
  },
  ImageBackground_8_329: {
    width: wp("3%"),
    height: hp("4%"),
    top: hp("11%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("65%")
  },
  ImageBackground_8_330: {
    width: wp("2%"),
    height: hp("1%"),
    top: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("41%")
  },
  ImageBackground_8_331: {
    width: wp("2%"),
    height: hp("0%"),
    top: hp("10%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("41%")
  },
  ImageBackground_8_332: {
    width: wp("2%"),
    height: hp("1%"),
    top: hp("11%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("41%")
  },
  ImageBackground_8_333: {
    width: wp("2%"),
    height: hp("1%"),
    top: hp("13%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("41%")
  },
  ImageBackground_8_334: {
    width: wp("2%"),
    height: hp("1%"),
    top: hp("16%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("41%")
  },
  ImageBackground_8_335: {
    width: wp("2%"),
    height: hp("1%"),
    top: hp("19%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("41%")
  },
  ImageBackground_8_336: {
    width: wp("2%"),
    height: hp("1%"),
    top: hp("22%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("41%")
  },
  ImageBackground_8_337: {
    width: wp("9%"),
    height: hp("0%"),
    top: hp("15%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("23%")
  },
  ImageBackground_8_338: {
    width: wp("9%"),
    height: hp("0%"),
    top: hp("15%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("23%")
  },
  ImageBackground_8_339: {
    width: wp("9%"),
    height: hp("1%"),
    top: hp("17%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("23%")
  },
  ImageBackground_8_340: {
    width: wp("8%"),
    height: hp("1%"),
    top: hp("19%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("24%")
  },
  ImageBackground_8_341: {
    width: wp("3%"),
    height: hp("1%"),
    top: hp("21%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("29%")
  },
  ImageBackground_8_342: {
    width: wp("2%"),
    height: hp("1%"),
    top: hp("11%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("48%")
  },
  ImageBackground_8_343: {
    width: wp("2%"),
    height: hp("1%"),
    top: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("10%")
  },
  ImageBackground_8_344: {
    width: wp("2%"),
    height: hp("1%"),
    top: hp("9%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("10%")
  },
  ImageBackground_8_345: {
    width: wp("2%"),
    height: hp("1%"),
    top: hp("11%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("10%")
  },
  ImageBackground_8_346: {
    width: wp("2%"),
    height: hp("1%"),
    top: hp("13%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("10%")
  },
  ImageBackground_8_347: {
    width: wp("2%"),
    height: hp("1%"),
    top: hp("15%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("10%")
  },
  ImageBackground_8_348: {
    width: wp("2%"),
    height: hp("1%"),
    top: hp("17%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("10%")
  },
  ImageBackground_8_349: {
    width: wp("2%"),
    height: hp("1%"),
    top: hp("11%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("55%")
  },
  ImageBackground_8_350: {
    width: wp("2%"),
    height: hp("1%"),
    top: hp("13%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("48%")
  },
  ImageBackground_8_351: {
    width: wp("2%"),
    height: hp("1%"),
    top: hp("13%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("55%")
  },
  ImageBackground_8_352: {
    width: wp("2%"),
    height: hp("1%"),
    top: hp("16%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("48%")
  },
  ImageBackground_8_353: {
    width: wp("2%"),
    height: hp("1%"),
    top: hp("16%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("55%")
  },
  ImageBackground_8_354: {
    width: wp("2%"),
    height: hp("1%"),
    top: hp("18%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("48%")
  },
  ImageBackground_8_355: {
    width: wp("2%"),
    height: hp("1%"),
    top: hp("18%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("55%")
  },
  ImageBackground_8_356: {
    width: wp("2%"),
    height: hp("1%"),
    top: hp("20%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("48%")
  },
  ImageBackground_8_357: {
    width: wp("2%"),
    height: hp("1%"),
    top: hp("20%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("55%")
  },
  ImageBackground_8_358: {
    width: wp("2%"),
    height: hp("1%"),
    top: hp("22%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("48%")
  },
  ImageBackground_8_359: {
    width: wp("6%"),
    height: hp("1%"),
    top: hp("9%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%")
  },
  ImageBackground_8_360: {
    width: wp("6%"),
    height: hp("1%"),
    top: hp("11%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%")
  },
  ImageBackground_8_361: {
    width: wp("6%"),
    height: hp("1%"),
    top: hp("12%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%")
  },
  ImageBackground_8_362: {
    width: wp("6%"),
    height: hp("1%"),
    top: hp("14%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%")
  },
  ImageBackground_8_363: {
    width: wp("6%"),
    height: hp("1%"),
    top: hp("15%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%")
  },
  ImageBackground_8_364: {
    width: wp("5%"),
    height: hp("1%"),
    top: hp("17%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%")
  },
  ImageBackground_8_365: {
    width: wp("1%"),
    height: hp("0%"),
    top: hp("18%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6%")
  },
  ImageBackground_8_366: {
    width: wp("37%"),
    height: hp("14%"),
    top: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9%")
  },
  ImageBackground_8_367: {
    width: wp("13%"),
    height: hp("19%"),
    top: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("15%")
  },
  ImageBackground_8_368: {
    width: wp("1%"),
    height: hp("1%"),
    top: hp("14%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("26%")
  },
  ImageBackground_8_369: {
    width: wp("1%"),
    height: hp("1%"),
    top: hp("14%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("26%")
  },
  ImageBackground_8_370: {
    width: wp("2%"),
    height: hp("1%"),
    top: hp("23%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("19%")
  },
  ImageBackground_8_371: {
    width: wp("4%"),
    height: hp("1%"),
    top: hp("23%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("23%")
  },
  ImageBackground_8_372: {
    width: wp("4%"),
    height: hp("1%"),
    top: hp("24%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("23%")
  },
  ImageBackground_8_373: {
    width: wp("2%"),
    height: hp("0%"),
    top: hp("24%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("19%")
  },
  ImageBackground_8_374: {
    width: wp("3%"),
    height: hp("2%"),
    top: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("21%")
  },
  ImageBackground_8_375: {
    width: wp("2%"),
    height: hp("0%"),
    top: hp("23%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("19%")
  },
  ImageBackground_8_376: {
    width: wp("3%"),
    height: hp("0%"),
    top: hp("23%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("24%")
  },
  ImageBackground_8_377: {
    width: wp("3%"),
    height: hp("5%"),
    top: hp("19%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("18%")
  },
  ImageBackground_8_378: {
    width: wp("3%"),
    height: hp("4%"),
    top: hp("19%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("23%")
  },
  ImageBackground_8_379: {
    width: wp("2%"),
    height: hp("1%"),
    top: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("21%")
  },
  ImageBackground_8_380: {
    width: wp("4%"),
    height: hp("2%"),
    top: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("20%")
  },
  ImageBackground_8_381: {
    width: wp("3%"),
    height: hp("1%"),
    top: hp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("21%")
  },
  ImageBackground_8_382: {
    width: wp("5%"),
    height: hp("11%"),
    top: hp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("20%")
  },
  ImageBackground_8_383: {
    width: wp("3%"),
    height: hp("1%"),
    top: hp("19%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("19%")
  },
  ImageBackground_8_384: {
    width: wp("1%"),
    height: hp("0%"),
    top: hp("19%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("23%")
  },
  ImageBackground_8_385: {
    width: wp("2%"),
    height: hp("0%"),
    top: hp("19%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("24%")
  },
  ImageBackground_8_386: {
    width: wp("8%"),
    height: hp("11%"),
    top: hp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("16%")
  },
  ImageBackground_8_387: {
    width: wp("8%"),
    height: hp("11%"),
    top: hp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("16%")
  },
  ImageBackground_8_388: {
    width: wp("2%"),
    height: hp("2%"),
    top: hp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("21%")
  },
  ImageBackground_8_389: {
    width: wp("2%"),
    height: hp("2%"),
    top: hp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("21%")
  },
  ImageBackground_8_390: {
    width: wp("3%"),
    height: hp("2%"),
    top: hp("14%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("19%")
  },
  ImageBackground_8_391: {
    width: wp("3%"),
    height: hp("2%"),
    top: hp("14%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("19%")
  },
  ImageBackground_8_392: {
    width: wp("3%"),
    height: hp("1%"),
    top: hp("14%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("19%")
  },
  ImageBackground_8_393: {
    width: wp("0%"),
    height: hp("0%"),
    top: hp("10%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("22%")
  },
  ImageBackground_8_394: {
    width: wp("0%"),
    height: hp("0%"),
    top: hp("10%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("22%")
  },
  ImageBackground_8_395: {
    width: wp("0%"),
    height: hp("0%"),
    top: hp("14%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("23%")
  },
  ImageBackground_8_396: {
    width: wp("0%"),
    height: hp("0%"),
    top: hp("14%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("23%")
  },
  ImageBackground_8_397: {
    width: wp("0%"),
    height: hp("0%"),
    top: hp("12%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("23%")
  },
  ImageBackground_8_398: {
    width: wp("0%"),
    height: hp("0%"),
    top: hp("12%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("23%")
  },
  ImageBackground_8_399: {
    width: wp("4%"),
    height: hp("11%"),
    top: hp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("23%")
  },
  ImageBackground_8_400: {
    width: wp("5%"),
    height: hp("11%"),
    top: hp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("23%")
  },
  ImageBackground_8_401: {
    width: wp("1%"),
    height: hp("2%"),
    top: hp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("23%")
  },
  ImageBackground_8_402: {
    width: wp("1%"),
    height: hp("2%"),
    top: hp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("23%")
  },
  ImageBackground_8_403: {
    width: wp("4%"),
    height: hp("1%"),
    top: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("20%")
  },
  ImageBackground_8_404: {
    width: wp("6%"),
    height: hp("2%"),
    top: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("19%")
  },
  ImageBackground_8_405: {
    width: wp("5%"),
    height: hp("4%"),
    top: hp("11%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("16%")
  },
  ImageBackground_8_406: {
    width: wp("5%"),
    height: hp("4%"),
    top: hp("11%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("15%")
  },
  ImageBackground_8_407: {
    width: wp("1%"),
    height: hp("2%"),
    top: hp("14%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("25%")
  },
  ImageBackground_8_408: {
    width: wp("1%"),
    height: hp("2%"),
    top: hp("14%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("25%")
  },
  ImageBackground_8_409: {
    width: wp("1%"),
    height: hp("1%"),
    top: hp("14%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("26%")
  },
  ImageBackground_8_410: {
    width: wp("3%"),
    height: hp("3%"),
    top: hp("11%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("26%")
  },
  ImageBackground_8_411: {
    width: wp("3%"),
    height: hp("3%"),
    top: hp("11%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("26%")
  },
  ImageBackground_8_412: {
    width: wp("1%"),
    height: hp("0%"),
    top: hp("23%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("19%")
  },
  ImageBackground_8_413: {
    width: wp("1%"),
    height: hp("0%"),
    top: hp("22%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("24%")
  },
  ImageBackground_8_414: {
    width: wp("6%"),
    height: hp("1%"),
    top: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("19%")
  },
  ImageBackground_8_418: {
    width: wp("12%"),
    height: hp("1%"),
    top: hp("23%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%")
  },
  ImageBackground_8_419: {
    width: wp("0%"),
    height: hp("4%"),
    top: hp("14%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8%")
  },
  ImageBackground_8_420: {
    width: wp("5%"),
    height: hp("5%"),
    top: hp("18%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6%")
  },
  ImageBackground_8_421: {
    width: wp("5%"),
    height: hp("0%"),
    top: hp("19%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6%")
  },
  ImageBackground_8_422: {
    width: wp("5%"),
    height: hp("0%"),
    top: hp("19%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6%")
  },
  ImageBackground_8_423: {
    width: wp("5%"),
    height: hp("0%"),
    top: hp("20%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6%")
  },
  ImageBackground_8_424: {
    width: wp("8%"),
    height: hp("3%"),
    top: hp("15%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_8_425: {
    width: wp("8%"),
    height: hp("3%"),
    top: hp("15%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_8_426: {
    width: wp("4%"),
    height: hp("2%"),
    top: hp("14%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%")
  },
  ImageBackground_8_427: {
    width: wp("4%"),
    height: hp("2%"),
    top: hp("14%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%")
  },
  ImageBackground_8_428: {
    width: wp("5%"),
    height: hp("3%"),
    top: hp("14%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8%")
  },
  ImageBackground_8_429: {
    width: wp("5%"),
    height: hp("3%"),
    top: hp("14%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8%")
  },
  ImageBackground_8_430: {
    width: wp("15%"),
    height: hp("18%"),
    top: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("48%")
  },
  ImageBackground_8_431: {
    width: wp("0%"),
    height: hp("1%"),
    top: hp("23%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("60%")
  },
  ImageBackground_8_432: {
    width: wp("4%"),
    height: hp("5%"),
    top: hp("19%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("51%")
  },
  ImageBackground_8_433: {
    width: wp("3%"),
    height: hp("1%"),
    top: hp("23%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("51%")
  },
  ImageBackground_8_434: {
    width: wp("5%"),
    height: hp("2%"),
    top: hp("23%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("49%")
  },
  ImageBackground_8_435: {
    width: wp("3%"),
    height: hp("5%"),
    top: hp("19%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("58%")
  },
  ImageBackground_8_436: {
    width: wp("3%"),
    height: hp("1%"),
    top: hp("23%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("58%")
  },
  ImageBackground_8_437: {
    width: wp("4%"),
    height: hp("2%"),
    top: hp("23%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("57%")
  },
  ImageBackground_8_438: {
    width: wp("2%"),
    height: hp("0%"),
    top: hp("19%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("53%")
  },
  ImageBackground_8_439: {
    width: wp("2%"),
    height: hp("0%"),
    top: hp("19%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("58%")
  },
  ImageBackground_8_440: {
    width: wp("9%"),
    height: hp("6%"),
    top: hp("13%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("52%")
  },
  ImageBackground_8_441: {
    width: wp("1%"),
    height: hp("1%"),
    top: hp("12%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("51%")
  },
  ImageBackground_8_442: {
    width: wp("1%"),
    height: hp("1%"),
    top: hp("12%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("51%")
  },
  ImageBackground_8_443: {
    width: wp("2%"),
    height: hp("2%"),
    top: hp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("56%")
  },
  ImageBackground_8_444: {
    width: wp("1%"),
    height: hp("1%"),
    top: hp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("56%")
  },
  ImageBackground_8_445: {
    width: wp("3%"),
    height: hp("4%"),
    top: hp("9%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("54%")
  },
  ImageBackground_8_446: {
    width: wp("3%"),
    height: hp("4%"),
    top: hp("9%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("54%")
  },
  ImageBackground_8_447: {
    width: wp("4%"),
    height: hp("2%"),
    top: hp("11%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("51%")
  },
  ImageBackground_8_448: {
    width: wp("4%"),
    height: hp("2%"),
    top: hp("11%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("51%")
  },
  ImageBackground_8_449: {
    width: wp("5%"),
    height: hp("1%"),
    top: hp("12%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("48%")
  },
  ImageBackground_8_450: {
    width: wp("4%"),
    height: hp("8%"),
    top: hp("9%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("53%")
  },
  ImageBackground_8_451: {
    width: wp("2%"),
    height: hp("1%"),
    top: hp("13%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("52%")
  },
  ImageBackground_8_452: {
    width: wp("5%"),
    height: hp("10%"),
    top: hp("9%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("55%")
  },
  ImageBackground_8_453: {
    width: wp("7%"),
    height: hp("10%"),
    top: hp("9%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("55%")
  },
  ImageBackground_8_454: {
    width: wp("7%"),
    height: hp("4%"),
    top: hp("10%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("54%")
  },
  ImageBackground_8_455: {
    width: wp("7%"),
    height: hp("4%"),
    top: hp("10%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("53%")
  },
  ImageBackground_8_456: {
    width: wp("7%"),
    height: hp("4%"),
    top: hp("10%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("54%")
  },
  ImageBackground_8_457: {
    width: wp("1%"),
    height: hp("0%"),
    top: hp("13%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("58%")
  },
  ImageBackground_8_458: {
    width: wp("1%"),
    height: hp("1%"),
    top: hp("16%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("60%")
  },
  ImageBackground_8_459: {
    width: wp("1%"),
    height: hp("1%"),
    top: hp("17%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("59%")
  },
  ImageBackground_8_460: {
    width: wp("2%"),
    height: hp("1%"),
    top: hp("12%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("50%")
  },
  ImageBackground_8_461: {
    width: wp("0%"),
    height: hp("0%"),
    top: hp("12%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("51%")
  },
  ImageBackground_8_462: {
    width: wp("3%"),
    height: hp("2%"),
    top: hp("9%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("56%")
  },
  ImageBackground_8_463: {
    width: wp("3%"),
    height: hp("2%"),
    top: hp("9%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("56%")
  },
  ImageBackground_8_464: {
    width: wp("4%"),
    height: hp("2%"),
    top: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("54%")
  },
  ImageBackground_8_465: {
    width: wp("7%"),
    height: hp("4%"),
    top: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("54%")
  },
  ImageBackground_8_466: {
    width: wp("8%"),
    height: hp("5%"),
    top: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("54%")
  },
  ImageBackground_8_467: {
    width: wp("8%"),
    height: hp("5%"),
    top: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("54%")
  },
  ImageBackground_8_468: {
    width: wp("1%"),
    height: hp("1%"),
    top: hp("9%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("55%")
  },
  ImageBackground_8_469: {
    width: wp("1%"),
    height: hp("1%"),
    top: hp("9%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("55%")
  },
  ImageBackground_8_470: {
    width: wp("1%"),
    height: hp("1%"),
    top: hp("12%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("50%")
  },
  ImageBackground_8_471: {
    width: wp("1%"),
    height: hp("1%"),
    top: hp("12%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("50%")
  },
  ImageBackground_8_472: {
    width: wp("0%"),
    height: hp("0%"),
    top: hp("13%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("51%")
  },
  ImageBackground_8_473: {
    width: wp("0%"),
    height: hp("0%"),
    top: hp("13%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("51%")
  },
  ImageBackground_8_474: {
    width: wp("1%"),
    height: hp("0%"),
    top: hp("12%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("50%")
  },
  ImageBackground_8_475: {
    width: wp("19%"),
    height: hp("9%"),
    top: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("29%")
  }
})

const mapStateToProps = state => {
  return {}
}
const mapDispatchToProps = () => {
  return {}
}
export default connect(mapStateToProps, mapDispatchToProps)(Blank)
