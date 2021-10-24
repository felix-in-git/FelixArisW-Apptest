import React, {useState} from 'react';
import {ActivityIndicator, Image, Text, View, Dimensions, Modal} from 'react-native';
import PropTypes from 'prop-types';
import {consoleDev} from '../function/api/api';
import {GREEN, INPUT_TEXT_GREY, RED} from '../constant/colors';
import {TextInputSimple} from './textInputSimple';

const size = Dimensions.get('window').width;

let loading = false;
export class LoadingScreen extends React.Component {
  static defaultProps = {
    loadingVisible: false,
    loadingClose: () => {
      // modalStore.loadingScreen = false;
    },
  };

  static propTypes = {
    loadingVisible: PropTypes.any,
    loadingClose: PropTypes.any,
  };

  static toggleLoading(loadingStatus) {
    loading = loadingStatus;
  }

  constructor(props) {
    super();
    this.state = {
      ModalVisible: props.loadingVisible,
    };
  }

  render() {
    return (
      <Modal visible={loading} animationType={'fade'}>
        <View
          style={{
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Text>LOADING</Text>
        </View>
      </Modal>
    );
  }
}
