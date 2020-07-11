import React, {Component} from 'react';
import PropTypes from "prop-types";
import {StyleSheet, Text, View, TextInput, FlatList, Picker, ScrollView, TouchableHighlight} from 'react-native';
import {Image as ReactImage} from 'react-native';
import Svg, {Defs, Pattern} from 'react-native-svg';
import {Path as SvgPath} from 'react-native-svg';
import {Text as SvgText} from 'react-native-svg';
import {Image as SvgImage} from 'react-native-svg';

export default class Web19206 extends Component {

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
    <ScrollView data-layer="b3112a95-1893-4d9f-9b0c-3d263c46df6d" style={styles.web19206}>
        <Svg data-layer="3aabb689-6f3b-419f-b957-f631882872c9" style={styles.web19206_backgroundStylestyle2} preserveAspectRatio="none" viewBox="0 0 1600 900" fill="rgba(16, 20, 37, 1)"><SvgPath d="M 0 0 L 1600 0 L 1600 900 L 0 900 L 0 0 Z"  /></Svg>
        <View data-layer="1407222e-ca7f-4e84-ae9b-3f61fe43113a" style={styles.web19206_signIn}>
            <View data-layer="d46d5ac2-9d55-40fd-a583-dd5dc8caf743" style={styles.web19206_signIn_card}>
                <View data-layer="b55745d0-6e5c-452f-a3fb-7abc7f5d6fa5" style={styles.web19206_signIn_card_area55ccea19}></View></View>
            <View data-layer="6935f0aa-d3c9-4590-86f2-ee5da90d6ad9" style={styles.web19206_signIn_button}>
                <ReactImage data-layer="e78034dd-a0c4-43ea-88a7-a48a97a6e1d6" source={require('./assets/aread15a44c7.png')} style={styles.web19206_signIn_button_aread15a44c7} />
                <Text data-layer="d69d4c7c-c846-49c3-b55c-a9c5ae4432e9" style={styles.web19206_signIn_button_label}>End Assessment</Text></View>
            <View data-layer="1838cd43-424e-41da-b0ac-a2664dd8f44a" style={styles.web19206_signIn_xSignInWith}>
                <Svg data-layer="40020267-ef26-4dcf-849b-3d51ca8c415f" style={styles.web19206_signIn_xSignInWith_lineStylestyle1f9c6594f} preserveAspectRatio="none" viewBox="0 -1 72 2" fill="transparent"><SvgPath d="M 0 0 L 72 0"  /></Svg>
                <Svg data-layer="18fa4011-a496-44aa-9531-f2a8635ee432" style={styles.web19206_signIn_xSignInWith_lineStylestyle1} preserveAspectRatio="none" viewBox="0 -1 72 2" fill="transparent"><SvgPath d="M 0 0 L 72 0"  /></Svg>
                <Text data-layer="a2a00512-82ee-41ee-aec8-676cbd3b3750" style={styles.web19206_signIn_xSignInWith_typographyPlatformdesktopstylestyle1taguis}>Please continue practicing social distancing and 
retake the test if any symptoms arise or if you come
into contact with someone who has been tested 
positive for Covid-19</Text>
            </View>
            <Text data-layer="66626783-b33b-4ada-979d-629a06bcd3a2" style={styles.web19206_signIn_titlePlatformdesktopstylestyle1tagh4}>You are most likely not a carrier of Covid</Text>
        </View>
    </ScrollView>
    );
  }
}

Web19206.propTypes = {

}

Web19206.defaultProps = {

}


const styles = StyleSheet.create({
  "web19206": {
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
  "web19206_backgroundStylestyle2": {
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
    "width": 1600,
    "height": 900,
    "left": 0,
    "top": 0
  },
  "web19206_signIn": {
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
  "web19206_signIn_card": {
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
  "web19206_signIn_card_area55ccea19": {
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
  "web19206_signIn_card_metadata7d5793e0": {
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
  "web19206_signIn_button": {
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
  "web19206_signIn_button_aread15a44c7": {
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
  "web19206_signIn_button_label": {
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
  "web19206_signIn_button_iconb40152a4": {
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
  "web19206_signIn_button_iconb40152a4_area": {
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
  "web19206_signIn_button_iconb40152a4_icon": {
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
    "left": 1.54,
    "top": 2.31
  },
  "web19206_signIn_button_iconb40152a4_icon_path": {
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
  "web19206_signIn_button_iconb40152a4_metadata275d38e8": {
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
  "web19206_signIn_button_metadata": {
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
  "web19206_signIn_xSignInWith": {
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
    "width": 562,
    "height": 117,
    "left": 141.75,
    "top": 308.41
  },
  "web19206_signIn_xSignInWith_lineStylestyle1f9c6594f": {
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
    "left": 141.5,
    "top": 15.5
  },
  "web19206_signIn_xSignInWith_lineStylestyle1": {
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
    "left": 341.5,
    "top": 15.5
  },
  "web19206_signIn_xSignInWith_typographyPlatformdesktopstylestyle1taguis": {
    "opacity": 1,
    "position": "absolute",
    "backgroundColor": "rgba(255, 255, 255, 0)",
    "color": "rgba(255, 255, 255, 1)",
    "fontSize": 20,
    "fontWeight": "700",
    "fontStyle": "normal",
    "fontFamily": "Noto Sans",
    "textAlign": "center",
    "lineHeight": 30,
    "marginTop": 0,
    "marginRight": 0,
    "marginBottom": 0,
    "marginLeft": 0,
    "paddingTop": 0,
    "paddingRight": 0,
    "paddingBottom": 0,
    "paddingLeft": 0,
    "width": 562,
    "height": 127,
    "left": 0,
    "top": -1.5
  },
  "web19206_signIn_titlePlatformdesktopstylestyle1tagh4": {
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
    "width": 647,
    "height": 53,
    "left": 100,
    "top": 136.5
  }
});