import React from 'react';
import { View, Text } from 'react-native';
import PropTypes from 'prop-types';

import styles from './styles';

function Content(props) {
  const { title, text } = props;

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.text}>{text}</Text>
    </View>
  );
}

Content.propTypes = {
  title: PropTypes.string,
  text: PropTypes.string,
};

Content.defaultProps = {
  title: 'Template',
  text: 'Template',
};

export default Content;
