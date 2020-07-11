import React, {Component} from 'react';
import PropTypes from "prop-types";
import {StyleSheet, Text, View, TextInput, FlatList, Picker, ScrollView, TouchableHighlight} from 'react-native';
import {Image as ReactImage} from 'react-native';
import Svg, {Defs, Pattern} from 'react-native-svg';
import {Path as SvgPath} from 'react-native-svg';
import {Text as SvgText} from 'react-native-svg';
import {Image as SvgImage} from 'react-native-svg';

export default class Web19201 extends Component {

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
    <ScrollView data-layer="4cdc7ce2-ea72-4830-88fa-f15dd188fec9" style={styles.web19201}>
        <Svg data-layer="963cbfc2-8b77-47c3-a2cb-e2948e323c36" style={styles.web19201_backgroundStylestyle2} preserveAspectRatio="none" viewBox="0 0 1602.880859375 900" fill="rgba(16, 20, 37, 1)"><SvgPath d="M 0 0 L 1602.880981445313 0 L 1602.880981445313 900 L 112.72314453125 900 L 0 900 L 0 0 Z"  /></Svg>
        <View data-layer="ad91197c-0f42-442d-83e8-b0dfc22efc24" style={styles.web19201_signIn}>
            <View data-layer="22ec47b9-9d50-4991-b7c0-ee73b998cf5c" style={styles.web19201_signIn_card}>
                <View data-layer="46b42dcc-0073-414f-afb0-0ca8fcc762fa" style={styles.web19201_signIn_card_area26f4524c}></View></View>
            <View data-layer="cc6b0c79-8a2d-4e21-bb1a-def38c6043d2" style={styles.web19201_signIn_button}>
                <ReactImage data-layer="db117c4d-94df-4f6a-9695-2225d90b9792" source={require('./assets/area4ae28826.png')} style={styles.web19201_signIn_button_area4ae28826} />
                <Text data-layer="c14d5fc4-2984-4d1d-a1ef-07273eac761a" style={styles.web19201_signIn_button_label47749905}>No</Text></View>
            <Text data-layer="f487a751-8ad3-4e2e-b9de-a57b892ae6a0" style={styles.web19201_signIn_titlePlatformdesktopstylestyle1tagh4}>In the last 14 days, have you been in close physical contact
with someone who tested positive for COVID-19?</Text>
        </View>
        <Text data-layer="fa6e857c-f8ab-4601-b355-37d799d91db3" style={styles.web19201_newUserPlatformdesktopstylestyle1tagh6}>Close physical contact means:

 - being less than 2 metres away in the same room, workspace, or area
 - living in the same home
</Text>
        <Svg data-layer="265b2d68-6369-4820-a952-a91fc43e315a" style={styles.web19201_area} preserveAspectRatio="none" viewBox="0 0 247 77" fill="transparent"><Defs><Pattern id="img-area" patternContentUnits="userSpaceOnUse" width="100%" height="100%"><SvgImage xlinkHref={require('./assets/area.png')} x="0" y="0" width="247.00px" height="77.00px" /></Pattern></Defs><SvgPath d="M 24 0 L 223 0 C 236.2548370361328 0 247 10.74516487121582 247 24 L 247 53 C 247 66.25483703613281 236.2548370361328 77 223 77 L 24 77 C 10.74516487121582 77 0 66.25483703613281 0 53 L 0 24 C 0 10.74516487121582 10.74516487121582 0 24 0 Z" fill="url(#img-area)" /></Svg>
        <Text data-layer="f5b48cff-9f98-4643-bb32-365ba5cc3d72" style={styles.web19201_label}>Yes</Text>
    </ScrollView>
    );
  }
}

Web19201.propTypes = {

}

Web19201.defaultProps = {

}


const styles = StyleSheet.create({
  "web19201": {
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
  "web19201_backgroundStylestyle2": {
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
    "width": 1602.88,
    "height": 900,
    "left": -3,
    "top": -2
  },
  "web19201_signIn": {
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
    "width": 1127,
    "height": 643,
    "left": 237,
    "top": 112
  },
  "web19201_signIn_card": {
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
    "width": 1127,
    "height": 643,
    "left": 0,
    "top": 0
  },
  "web19201_signIn_card_area26f4524c": {
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
    "width": 1127,
    "height": 643,
    "left": 0,
    "top": 0
  },
  "web19201_signIn_card_metadatac6cd520f": {
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
    "left": 292.3,
    "top": 0
  },
  "web19201_signIn_button": {
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
    "width": 277,
    "height": 76,
    "left": 227,
    "top": 470
  },
  "web19201_signIn_button_area4ae28826": {
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
    "width": 277,
    "height": 76,
    "left": 0,
    "top": 0
  },
  "web19201_signIn_button_label47749905": {
    "opacity": 1,
    "position": "absolute",
    "backgroundColor": "rgba(255, 255, 255, 0)",
    "color": "rgba(255, 255, 255, 1)",
    "fontSize": 20,
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
    "width": 28,
    "height": 27,
    "left": 125,
    "top": 25
  },
  "web19201_signIn_button_icondad3cd7a": {
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
    "left": 315,
    "top": 43
  },
  "web19201_signIn_button_icondad3cd7a_area621f9119": {
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
  "web19201_signIn_button_icondad3cd7a_icon": {
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
    "left": 1,
    "top": 4.1
  },
  "web19201_signIn_button_icondad3cd7a_icon_path": {
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
  "web19201_signIn_button_icondad3cd7a_metadata371f973f": {
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
  "web19201_signIn_button_metadata": {
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
    "left": 74,
    "top": 16
  },
  "web19201_signIn_titlePlatformdesktopstylestyle1tagh4": {
    "opacity": 1,
    "position": "absolute",
    "backgroundColor": "rgba(255, 255, 255, 0)",
    "color": "rgba(255, 255, 255, 1)",
    "fontSize": 35,
    "fontWeight": "700",
    "fontStyle": "normal",
    "fontFamily": "Noto Sans",
    "textAlign": "left",
    "lineHeight": 50,
    "marginTop": 0,
    "marginRight": 0,
    "marginBottom": 0,
    "marginLeft": 0,
    "paddingTop": 0,
    "paddingRight": 0,
    "paddingBottom": 0,
    "paddingLeft": 0,
    "width": 1024,
    "height": 112,
    "left": 36,
    "top": 23.5
  },
  "web19201_newUserPlatformdesktopstylestyle1tagh6": {
    "opacity": 1,
    "position": "absolute",
    "backgroundColor": "rgba(255, 255, 255, 0)",
    "color": "rgba(255, 255, 255, 1)",
    "fontSize": 20,
    "fontWeight": "700",
    "fontStyle": "normal",
    "fontFamily": "Noto Sans",
    "textAlign": "left",
    "lineHeight": 26,
    "marginTop": 0,
    "marginRight": 0,
    "marginBottom": 0,
    "marginLeft": 0,
    "paddingTop": 0,
    "paddingRight": 0,
    "paddingBottom": 0,
    "paddingLeft": 0,
    "width": 700,
    "height": 145,
    "left": 291,
    "top": 316.5
  },
  "web19201_area": {
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
    "width": 247,
    "height": 77,
    "left": 832,
    "top": 579
  },
  "web19201_label": {
    "opacity": 1,
    "position": "absolute",
    "backgroundColor": "rgba(255, 255, 255, 0)",
    "color": "rgba(255, 255, 255, 1)",
    "fontSize": 20,
    "fontWeight": "700",
    "fontStyle": "normal",
    "fontFamily": "Noto Sans",
    "textAlign": "left",
    "marginTop": 0,
    "marginRight": 0,
    "marginBottom": 0,
    "marginLeft": 0,
    "paddingTop": 0,
    "paddingRight": 0,
    "paddingBottom": 0,
    "paddingLeft": 0,
    "width": 32,
    "height": 27,
    "left": 940,
    "top": 604
  }
});