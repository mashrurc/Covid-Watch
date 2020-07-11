import React, {Component} from 'react';
import PropTypes from "prop-types";
import {StyleSheet, Text, View, TextInput, FlatList, Picker, ScrollView, TouchableHighlight} from 'react-native';
import {Image as ReactImage} from 'react-native';
import Svg, {Defs, Pattern} from 'react-native-svg';
import {Path as SvgPath} from 'react-native-svg';
import {Text as SvgText} from 'react-native-svg';
import {Image as SvgImage} from 'react-native-svg';

export default class Web19204 extends Component {

  constructor(props) {
      super(props);
      this.state = {
          
      };
  }


  handlePress(target, owner) {
    if (this.props.onPress) {
        let name;
        let id;
        let index = -1;
        if (target.search("::") > -1) {
            const varCount = target.split("::").length;
            if (varCount === 2) {
                name = target.split("::")[0];
                id = target.split("::")[1];
            } else if (varCount === 3) {
                name = target.split("::")[0];
                index = parseInt(target.split("::")[1]);
                id = target.split("::")[2];
            }
        } else {
            name = target;
        }
        this.props.onPress({ type: 'button', name: name, index: index, id: id, owner: owner });
    }
  }

  handleChangeTextinput(name, value) {
      let id;
      let index = -1;
      if (name.search('::') > -1) {
          const varCount = name.split("::").length;
          if (varCount === 2) {
              name = name.split("::")[0];
              id = name.split("::")[1];
          } else if (varCount === 3) {
              name = name.split("::")[0];
              index = name.split("::")[1];
              id = name.split("::")[2];
          }
      } else {
          name = name;
      }
      let state = this.state;
      state[name.split('::').join('')] = value;
      this.setState(state, () => {
          if (this.props.onChange) {
              this.props.onChange({ type: 'textinput', name: name, value: value, index: index, id: id });
          }
      });
  }

  render() {
    
    return (
    <ScrollView data-layer="0a5c3fbc-3d93-4200-b345-e514eac07680" style={styles.web19204}>
        <View data-layer="822551f9-7984-49f1-917f-bcbad6ef301e" style={styles.web19204_backgroundStylestyle2}></View>
        <View data-layer="0da73685-f763-48bb-b8f2-398d0c08660e" style={styles.web19204_signIn}>
            <View data-layer="de3fbf62-d308-41fd-8935-95cd0bb97381" style={styles.web19204_signIn_card}>
                <View data-layer="2a554dba-e4a7-4984-8e63-2ffd348ff8b5" style={styles.web19204_signIn_card_area5a4bc62e}></View></View>
            <View data-layer="5538d0fb-3577-4160-8486-c907b4cd9a18" style={styles.web19204_signIn_button}>
                <ReactImage data-layer="77a70415-f77b-4e27-990a-d8df542eb8fa" source={require('./assets/area731232ad.png')} style={styles.web19204_signIn_button_area731232ad} />
                <Text data-layer="1d93d1d5-6444-47e3-9d60-2180599814f8" style={styles.web19204_signIn_button_label}>End Assessment</Text></View>
            <View data-layer="e81290f5-ca7a-48d7-ada8-f16082b7cb36" style={styles.web19204_signIn_circleButton}>
                <View data-layer="3aaf3895-bf8d-47b5-ac9b-785a5dd2d908" style={styles.web19204_signIn_circleButton_areac0eb85fc}></View>
                <View data-layer="dc6937bd-242d-46b6-9061-926c95c368e5" style={styles.web19204_signIn_circleButton_iconbb704623}>
                    <View data-layer="118993bd-8ece-4d58-a00c-d384ad4288b4" style={styles.web19204_signIn_circleButton_iconbb704623_area}></View>
                    <View data-layer="bb619f90-10f2-42ff-bda9-93b337e63ba6" style={styles.web19204_signIn_circleButton_iconbb704623_icon}>
                        <Svg data-layer="d18b32fa-503e-43d7-bf26-57b635eced41" style={styles.web19204_signIn_circleButton_iconbb704623_icon_pathd964cfdd} preserveAspectRatio="none" viewBox="2.102389842271805 2.1031797230243683 22.480468690395355 22.48147577047348" fill="transparent"><SvgPath d="M 23.13899993896484 11.375 L 22.33300018310547 11.375 L 22.33300018310547 11.33300018310547 L 13.33300018310547 11.33300018310547 L 13.33300018310547 15.33300018310547 L 18.98500061035156 15.33300018310547 C 18.10700035095215 17.82600021362305 15.70199966430664 19.45100021362305 13.0620002746582 19.33699989318848 C 10.42099952697754 19.22299957275391 8.166000366210938 17.39599990844727 7.50600004196167 14.83699989318848 C 6.847000122070313 12.27799987792969 7.938000202178955 9.588000297546387 10.19400024414063 8.211999893188477 C 12.44999980926514 6.835000038146973 15.34000015258789 7.09499979019165 17.31399917602539 8.852999687194824 L 20.14299964904785 6.02400016784668 C 16.67499923706055 2.802999973297119 11.42399978637695 2.457000017166138 7.564000129699707 5.195000171661377 C 3.703999996185303 7.933000087738037 2.293999910354614 13.00300025939941 4.188000202178955 17.34000015258789 C 6.080999851226807 21.67700004577637 10.75800037384033 24.09099960327148 15.39000034332275 23.12199974060059 C 20.02199935913086 22.15200042724609 23.33799934387207 18.06599998474121 23.33300018310547 13.33300018310547 C 23.33300018310547 12.67599964141846 23.26799964904785 12.02000045776367 23.13899993896484 11.375 Z"  /></Svg>
                        <Svg data-layer="ed1aa0f1-856d-4ae0-8cbb-d44397d373e2" style={styles.web19204_signIn_circleButton_iconbb704623_icon_path530f255c} preserveAspectRatio="none" viewBox="4.00500014424324 2.0847285091876984 18.211914002895355 10.279296815395355" fill="transparent"><SvgPath d="M 5.255000114440918 8.697999954223633 L 8.553000450134277 11.11400032043457 C 9.282999992370605 9.298000335693359 10.85200023651123 7.951000213623047 12.75800037384033 7.504000186920166 C 14.66300010681152 7.058000087738037 16.66799926757813 7.567999839782715 18.12800025939941 8.871000289916992 L 20.96699905395508 6.033999919891357 C 18.6830005645752 3.898999929428101 15.53299999237061 2.953000068664551 12.44999980926514 3.476000070571899 C 9.368000030517578 3.999000072479248 6.705999851226807 5.932000160217285 5.255000114440918 8.701000213623047 Z"  /></Svg>
                        <Svg data-layer="60ec7838-3ecb-413a-89a1-9c1ef4645e2c" style={styles.web19204_signIn_circleButton_iconbb704623_icon_pathe4883f6b} preserveAspectRatio="none" viewBox="3.9169998466968536 22.128000289201736 18.159179627895355 10.50100702047348" fill="transparent"><SvgPath d="M 14.09700012207031 31.37899971008301 C 16.58699989318848 31.37899971008301 18.98600006103516 30.45000076293945 20.82600021362305 28.77300071716309 L 17.7189998626709 26.14599990844727 C 16.19400024414063 27.30100059509277 14.21000003814697 27.6609992980957 12.37600040435791 27.11499977111816 C 10.54300022125244 26.56800079345703 9.079000473022461 25.18000030517578 8.435999870300293 23.37800025939941 L 5.166999816894531 25.89999961853027 C 6.876999855041504 29.26000022888184 10.32699966430664 31.37700080871582 14.09700012207031 31.37899971008301 Z"  /></Svg>
                        <Svg data-layer="70697a1e-f248-4727-9ce5-2c7e9cf4466f" style={styles.web19204_signIn_circleButton_iconbb704623_icon_path} preserveAspectRatio="none" viewBox="18.750000029802322 15.416999846696854 12.534667909145355 11.937011659145355" fill="transparent"><SvgPath d="M 29.84000015258789 16.70800018310547 L 29.0319995880127 16.70800018310547 L 29.0319995880127 16.66699981689453 L 20 16.66699981689453 L 20 20.68099975585938 L 25.67200088500977 20.68099975585938 C 25.27599906921387 21.79299926757813 24.5629997253418 22.76499938964844 23.62100028991699 23.47599983215332 L 23.62100028991699 23.47599983215332 L 26.72699928283691 26.10400009155273 C 28.86400032043457 24.23100090026855 30.07200050354004 21.51600074768066 30.03400039672852 18.67399978637695 C 30.03400039672852 18.01399993896484 29.9689998626709 17.35600090026855 29.84000015258789 16.70800018310547 Z"  /></Svg>
                    </View></View></View>
            <View data-layer="7ad39f14-642f-4f80-b851-791d536f3cc0" style={styles.web19204_signIn_xSignInWith}>
                <Svg data-layer="7c87b5a5-247b-4727-844f-ad3f90dd2a17" style={styles.web19204_signIn_xSignInWith_lineStylestyle123ac1432} preserveAspectRatio="none" viewBox="0 -1 72 2" fill="transparent"><SvgPath d="M 0 0 L 72 0"  /></Svg>
                <Svg data-layer="e0534cf8-ea1b-450a-a2e9-1925ea83197b" style={styles.web19204_signIn_xSignInWith_lineStylestyle1} preserveAspectRatio="none" viewBox="0 -1 72 2" fill="transparent"><SvgPath d="M 0 0 L 72 0"  /></Svg>
                <View style={styles.web19204_signIn_xSignInWith_typographyPlatformdesktopstylestyle1taguis}><Text data-layer="7c7d4233-635c-4f15-bb61-2cd752f79bfe" style={{"marginTop":-0.5,"color":"rgba(255, 255, 255, 1)","fontSize":20,"fontWeight":"700","fontStyle":"normal","fontFamily":"Noto Sans","textAlign":"center","lineHeight":22}}>Closest Testing Centre According To Your Postal Code</Text></View>
            </View>
            <Text data-layer="b36b6305-3bee-40cf-9323-b6f3329d0da5" style={styles.web19204_signIn_titlePlatformdesktopstylestyle1tagh4}>You may have COVID-19 please get tested</Text>
            <ReactImage data-layer="4d78802d-d6a9-41ad-ba1c-e4a9628c5de9" source={require('./assets/image1.png')} style={styles.web19204_signIn_image1} />
        </View>
    </ScrollView>
    );
  }
}

Web19204.propTypes = {

}

Web19204.defaultProps = {

}


const styles = StyleSheet.create({
  "web19204": {
    "opacity": 1,
    "position": "relative",
    "backgroundColor": "rgba(255, 255, 255, 1)",
    "marginTop": 0,
    "marginRight": 0,
    "marginBottom": 0,
    "marginLeft": 0,
    "paddingTop": 0,
    "paddingRight": 0,
    "paddingBottom": 0,
    "paddingLeft": 0,
    "width": 1600,
    "height": 900,
    "left": 0,
    "top": 0
  },
  "web19204_backgroundStylestyle2": {
    "opacity": 1,
    "position": "absolute",
    "backgroundColor": "rgba(16, 20, 37, 1)",
    "marginTop": 0,
    "marginRight": 0,
    "marginBottom": 0,
    "marginLeft": 0,
    "paddingTop": 0,
    "paddingRight": 0,
    "paddingBottom": 0,
    "paddingLeft": 0,
    "borderTopLeftRadius": 0,
    "borderTopRightRadius": 0,
    "borderBottomLeftRadius": 0,
    "borderBottomRightRadius": 0,
    "width": 1600,
    "height": 900,
    "left": 0,
    "top": 0
  },
  "web19204_signIn": {
    "opacity": 1,
    "position": "absolute",
    "backgroundColor": "transparent",
    "marginTop": 0,
    "marginRight": 0,
    "marginBottom": 0,
    "marginLeft": 0,
    "paddingTop": 0,
    "paddingRight": 0,
    "paddingBottom": 0,
    "paddingLeft": 0,
    "width": 895,
    "height": 735,
    "left": 350,
    "top": 83
  },
  "web19204_signIn_card": {
    "opacity": 1,
    "position": "absolute",
    "backgroundColor": "transparent",
    "marginTop": 0,
    "marginRight": 0,
    "marginBottom": 0,
    "marginLeft": 0,
    "paddingTop": 0,
    "paddingRight": 0,
    "paddingBottom": 0,
    "paddingLeft": 0,
    "width": 895,
    "height": 735,
    "left": 0,
    "top": 0
  },
  "web19204_signIn_card_area5a4bc62e": {
    "opacity": 0.999970018863678,
    "position": "absolute",
    "backgroundColor": "rgba(255, 255, 255, 0.10196078431372549)",
    "marginTop": 0,
    "marginRight": 0,
    "marginBottom": 0,
    "marginLeft": 0,
    "paddingTop": 0,
    "paddingRight": 0,
    "paddingBottom": 0,
    "paddingLeft": 0,
    "borderTopLeftRadius": 0,
    "borderTopRightRadius": 0,
    "borderBottomLeftRadius": 0,
    "borderBottomRightRadius": 0,
    "shadowColor": "rgb(0,  0,  0)",
    "shadowOpacity": 0.10196078431372549,
    "shadowOffset": {
      "width": 5,
      "height": 5
    },
    "shadowRadius": 15,
    "width": 895,
    "height": 735,
    "left": 0,
    "top": 0
  },
  "web19204_signIn_card_metadatacb23f44f": {
    "opacity": 1,
    "position": "absolute",
    "backgroundColor": "rgba(255, 255, 255, 0)",
    "color": "transparent",
    "fontSize": 3,
    "fontWeight": "400",
    "fontStyle": "normal",
    "fontFamily": "Arial",
    "textAlign": "left",
    "marginTop": 0,
    "marginRight": 0,
    "marginBottom": 0,
    "marginLeft": 0,
    "paddingTop": 0,
    "paddingRight": 0,
    "paddingBottom": 0,
    "paddingLeft": 0,
    "width": 10,
    "height": 10,
    "left": 184.7,
    "top": 0
  },
  "web19204_signIn_button": {
    "opacity": 1,
    "position": "absolute",
    "backgroundColor": "transparent",
    "marginTop": 0,
    "marginRight": 0,
    "marginBottom": 0,
    "marginLeft": 0,
    "paddingTop": 0,
    "paddingRight": 0,
    "paddingBottom": 0,
    "paddingLeft": 0,
    "width": 280,
    "height": 48,
    "left": 283,
    "top": 632
  },
  "web19204_signIn_button_area731232ad": {
    "opacity": 1,
    "position": "absolute",
    "marginTop": 0,
    "marginRight": 0,
    "marginBottom": 0,
    "marginLeft": 0,
    "borderTopLeftRadius": 24,
    "borderTopRightRadius": 24,
    "borderBottomLeftRadius": 24,
    "borderBottomRightRadius": 24,
    "width": 280,
    "height": 48,
    "left": 0,
    "top": 0
  },
  "web19204_signIn_button_label": {
    "opacity": 1,
    "position": "absolute",
    "backgroundColor": "rgba(255, 255, 255, 0)",
    "color": "rgba(255, 255, 255, 1)",
    "fontSize": 16,
    "fontWeight": "700",
    "fontStyle": "normal",
    "fontFamily": "Noto Sans",
    "textAlign": "center",
    "marginTop": 0,
    "marginRight": 0,
    "marginBottom": 0,
    "marginLeft": 0,
    "paddingTop": 0,
    "paddingRight": 0,
    "paddingBottom": 0,
    "paddingLeft": 0,
    "width": 126,
    "height": 22,
    "left": 77,
    "top": 13
  },
  "web19204_signIn_button_icon0f04c0df": {
    "opacity": 1,
    "position": "absolute",
    "backgroundColor": "transparent",
    "marginTop": 0,
    "marginRight": 0,
    "marginBottom": 0,
    "marginLeft": 0,
    "paddingTop": 0,
    "paddingRight": 0,
    "paddingBottom": 0,
    "paddingLeft": 0,
    "width": 20,
    "height": 20,
    "left": 271,
    "top": -69
  },
  "web19204_signIn_button_icon0f04c0df_area9bc35000": {
    "position": "absolute",
    "backgroundColor": "rgba(252, 252, 252, 1)",
    "marginTop": 0,
    "marginRight": 0,
    "marginBottom": 0,
    "marginLeft": 0,
    "paddingTop": 0,
    "paddingRight": 0,
    "paddingBottom": 0,
    "paddingLeft": 0,
    "borderTopLeftRadius": 0,
    "borderTopRightRadius": 0,
    "borderBottomLeftRadius": 0,
    "borderBottomRightRadius": 0,
    "width": 20,
    "height": 20,
    "left": 0,
    "top": 0
  },
  "web19204_signIn_button_icon0f04c0df_icon53612734": {
    "opacity": 1,
    "position": "absolute",
    "backgroundColor": "transparent",
    "marginTop": 0,
    "marginRight": 0,
    "marginBottom": 0,
    "marginLeft": 0,
    "paddingTop": 0,
    "paddingRight": 0,
    "paddingBottom": 0,
    "paddingLeft": 0,
    "width": 17.42,
    "height": 15.19,
    "left": 1.55,
    "top": 2.31
  },
  "web19204_signIn_button_icon0f04c0df_icon53612734_path06bcd7ce": {
    "opacity": 1,
    "position": "absolute",
    "marginTop": 0,
    "marginRight": 0,
    "marginBottom": 0,
    "marginLeft": 0,
    "paddingTop": 0,
    "paddingRight": 0,
    "paddingBottom": 0,
    "paddingLeft": 0,
    "width": 20.75,
    "height": 18.53,
    "left": -1.67,
    "top": -1.67
  },
  "web19204_signIn_button_icon0f04c0df_metadatac5f3f127": {
    "opacity": 1,
    "position": "absolute",
    "backgroundColor": "rgba(255, 255, 255, 0)",
    "color": "transparent",
    "fontSize": 3,
    "fontWeight": "400",
    "fontStyle": "normal",
    "fontFamily": "Arial",
    "textAlign": "left",
    "marginTop": 0,
    "marginRight": 0,
    "marginBottom": 0,
    "marginLeft": 0,
    "paddingTop": 0,
    "paddingRight": 0,
    "paddingBottom": 0,
    "paddingLeft": 0,
    "width": 10,
    "height": 10,
    "left": 0,
    "top": 0
  },
  "web19204_signIn_button_metadata12af0c93": {
    "opacity": 1,
    "position": "absolute",
    "backgroundColor": "rgba(255, 255, 255, 0)",
    "color": "transparent",
    "fontSize": 3,
    "fontWeight": "400",
    "fontStyle": "normal",
    "fontFamily": "Arial",
    "textAlign": "left",
    "marginTop": 0,
    "marginRight": 0,
    "marginBottom": 0,
    "marginLeft": 0,
    "paddingTop": 0,
    "paddingRight": 0,
    "paddingBottom": 0,
    "paddingLeft": 0,
    "width": 10,
    "height": 10,
    "left": 27,
    "top": -83
  },
  "web19204_signIn_circleButton": {
    "opacity": 1,
    "position": "absolute",
    "backgroundColor": "transparent",
    "marginTop": 0,
    "marginRight": 0,
    "marginBottom": 0,
    "marginLeft": 0,
    "paddingTop": 0,
    "paddingRight": 0,
    "paddingBottom": 0,
    "paddingLeft": 0,
    "width": 48,
    "height": 48,
    "left": 402,
    "top": 367
  },
  "web19204_signIn_circleButton_areac0eb85fc": {
    "opacity": 1,
    "position": "absolute",
    "backgroundColor": "rgba(255, 255, 255, 0.14901960784313725)",
    "marginTop": 0,
    "marginRight": 0,
    "marginBottom": 0,
    "marginLeft": 0,
    "paddingTop": 0,
    "paddingRight": 0,
    "paddingBottom": 0,
    "paddingLeft": 0,
    "borderTopLeftRadius": 1000,
    "borderTopRightRadius": 1000,
    "borderBottomLeftRadius": 1000,
    "borderBottomRightRadius": 1000,
    "width": 48,
    "height": 48,
    "left": 0,
    "top": 0
  },
  "web19204_signIn_circleButton_iconbb704623": {
    "opacity": 1,
    "position": "absolute",
    "backgroundColor": "transparent",
    "marginTop": 0,
    "marginRight": 0,
    "marginBottom": 0,
    "marginLeft": 0,
    "paddingTop": 0,
    "paddingRight": 0,
    "paddingBottom": 0,
    "paddingLeft": 0,
    "width": 20.25,
    "height": 20,
    "left": 14,
    "top": 14
  },
  "web19204_signIn_circleButton_iconbb704623_area": {
    "position": "absolute",
    "backgroundColor": "rgba(253, 73, 198, 0.34901960784313724)",
    "marginTop": 0,
    "marginRight": 0,
    "marginBottom": 0,
    "marginLeft": 0,
    "paddingTop": 0,
    "paddingRight": 0,
    "paddingBottom": 0,
    "paddingLeft": 0,
    "borderTopLeftRadius": 0,
    "borderTopRightRadius": 0,
    "borderBottomLeftRadius": 0,
    "borderBottomRightRadius": 0,
    "width": 20,
    "height": 20,
    "left": 0,
    "top": 0
  },
  "web19204_signIn_circleButton_iconbb704623_icon": {
    "opacity": 1,
    "position": "absolute",
    "backgroundColor": "transparent",
    "marginTop": 0,
    "marginRight": 0,
    "marginBottom": 0,
    "marginLeft": 0,
    "paddingTop": 0,
    "paddingRight": 0,
    "paddingBottom": 0,
    "paddingLeft": 0,
    "width": 19.98,
    "height": 20,
    "left": 0.27,
    "top": 0
  },
  "web19204_signIn_circleButton_iconbb704623_icon_pathd964cfdd": {
    "opacity": 1,
    "position": "absolute",
    "marginTop": 0,
    "marginRight": 0,
    "marginBottom": 0,
    "marginLeft": 0,
    "paddingTop": 0,
    "paddingRight": 0,
    "paddingBottom": 0,
    "paddingLeft": 0,
    "width": 23.31,
    "height": 23.31,
    "left": -1.67,
    "top": -1.65
  },
  "web19204_signIn_circleButton_iconbb704623_icon_path530f255c": {
    "opacity": 1,
    "position": "absolute",
    "marginTop": 0,
    "marginRight": 0,
    "marginBottom": 0,
    "marginLeft": 0,
    "paddingTop": 0,
    "paddingRight": 0,
    "paddingBottom": 0,
    "paddingLeft": 0,
    "width": 19.05,
    "height": 11.11,
    "left": -0.53,
    "top": -1.67
  },
  "web19204_signIn_circleButton_iconbb704623_icon_pathe4883f6b": {
    "opacity": 1,
    "position": "absolute",
    "marginTop": 0,
    "marginRight": 0,
    "marginBottom": 0,
    "marginLeft": 0,
    "paddingTop": 0,
    "paddingRight": 0,
    "paddingBottom": 0,
    "paddingLeft": 0,
    "width": 18.99,
    "height": 11.33,
    "left": -0.58,
    "top": 10.33
  },
  "web19204_signIn_circleButton_iconbb704623_icon_path": {
    "opacity": 1,
    "position": "absolute",
    "marginTop": 0,
    "marginRight": 0,
    "marginBottom": 0,
    "marginLeft": 0,
    "paddingTop": 0,
    "paddingRight": 0,
    "paddingBottom": 0,
    "paddingLeft": 0,
    "width": 13.37,
    "height": 12.77,
    "left": 8.28,
    "top": 6.29
  },
  "web19204_signIn_circleButton_iconbb704623_metadatab7b949c7": {
    "opacity": 1,
    "position": "absolute",
    "backgroundColor": "rgba(255, 255, 255, 0)",
    "color": "transparent",
    "fontSize": 3,
    "fontWeight": "400",
    "fontStyle": "normal",
    "fontFamily": "Arial",
    "textAlign": "left",
    "marginTop": 0,
    "marginRight": 0,
    "marginBottom": 0,
    "marginLeft": 0,
    "paddingTop": 0,
    "paddingRight": 0,
    "paddingBottom": 0,
    "paddingLeft": 0,
    "width": 10,
    "height": 10,
    "left": 0,
    "top": 0
  },
  "web19204_signIn_circleButton_metadata": {
    "opacity": 1,
    "position": "absolute",
    "backgroundColor": "rgba(255, 255, 255, 0)",
    "color": "transparent",
    "fontSize": 3,
    "fontWeight": "400",
    "fontStyle": "normal",
    "fontFamily": "Arial",
    "textAlign": "left",
    "marginTop": 0,
    "marginRight": 0,
    "marginBottom": 0,
    "marginLeft": 0,
    "paddingTop": 0,
    "paddingRight": 0,
    "paddingBottom": 0,
    "paddingLeft": 0,
    "width": 10,
    "height": 10,
    "left": 0,
    "top": 0
  },
  "web19204_signIn_xSignInWith": {
    "opacity": 1,
    "position": "absolute",
    "backgroundColor": "transparent",
    "marginTop": 0,
    "marginRight": 0,
    "marginBottom": 0,
    "marginLeft": 0,
    "paddingTop": 0,
    "paddingRight": 0,
    "paddingBottom": 0,
    "paddingLeft": 0,
    "width": 568,
    "height": 27,
    "left": 138.75,
    "top": 194.41
  },
  "web19204_signIn_xSignInWith_lineStylestyle123ac1432": {
    "opacity": 1,
    "position": "absolute",
    "marginTop": 0,
    "marginRight": 0,
    "marginBottom": 0,
    "marginLeft": 0,
    "paddingTop": 0,
    "paddingRight": 0,
    "paddingBottom": 0,
    "paddingLeft": 0,
    "width": 72,
    "height": 2,
    "left": 144.5,
    "top": 15.5
  },
  "web19204_signIn_xSignInWith_lineStylestyle1": {
    "opacity": 1,
    "position": "absolute",
    "marginTop": 0,
    "marginRight": 0,
    "marginBottom": 0,
    "marginLeft": 0,
    "paddingTop": 0,
    "paddingRight": 0,
    "paddingBottom": 0,
    "paddingLeft": 0,
    "width": 72,
    "height": 2,
    "left": 344.5,
    "top": 15.5
  },
  "web19204_signIn_xSignInWith_typographyPlatformdesktopstylestyle1taguis": {
    "opacity": 1,
    "position": "absolute",
    "backgroundColor": "rgba(255, 255, 255, 0)",
    "color": "rgba(255, 255, 255, 1)",
    "fontSize": 20,
    "fontWeight": "700",
    "fontStyle": "normal",
    "fontFamily": "Noto Sans",
    "textAlign": "center",
    "lineHeight": 22,
    "marginTop": 0,
    "marginRight": 0,
    "marginBottom": 0,
    "marginLeft": 0,
    "paddingTop": 0,
    "paddingRight": 0,
    "paddingBottom": 0,
    "paddingLeft": 0,
    "width": 568,
    "height": 27,
    "left": 0,
    "top": 4
  },
  "web19204_signIn_titlePlatformdesktopstylestyle1tagh4": {
    "opacity": 1,
    "position": "absolute",
    "backgroundColor": "rgba(255, 255, 255, 0)",
    "color": "rgba(255, 255, 255, 1)",
    "fontSize": 32,
    "fontWeight": "700",
    "fontStyle": "normal",
    "fontFamily": "Noto Sans",
    "textAlign": "left",
    "lineHeight": 42,
    "marginTop": 0,
    "marginRight": 0,
    "marginBottom": 0,
    "marginLeft": 0,
    "paddingTop": 0,
    "paddingRight": 0,
    "paddingBottom": 0,
    "paddingLeft": 0,
    "width": 662,
    "height": 53,
    "left": 92,
    "top": 60.5
  },
  "web19204_signIn_image1": {
    "opacity": 1,
    "position": "absolute",
    "marginTop": 0,
    "marginRight": 0,
    "marginBottom": 0,
    "marginLeft": 0,
    "borderTopLeftRadius": 0,
    "borderTopRightRadius": 0,
    "borderBottomLeftRadius": 0,
    "borderBottomRightRadius": 0,
    "width": 548,
    "height": 312,
    "left": 159,
    "top": 259
  }
});