import React from 'react';
import { View, Text, Image } from 'react-native';
import PropTypes from 'prop-types';

import styles from './styles';

function HeaderTitle({ title }) {
  return (
    <View style={styles.container}>
      <Image
        style={{ width: 50, height: 50 }}
        source={require('../../assets/logo192.png')}
      />
      <Text style={styles.text}>{title}</Text>
    </View>
  );
}

HeaderTitle.propTypes = {
  title: PropTypes.string,
};

HeaderTitle.defaultProps = {
  title: 'Template',
};

export default HeaderTitle;
