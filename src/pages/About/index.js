import React from 'react';
import { View } from 'react-native';

import Content from '../../components/Content';

import styles from './styles';

function About() {
  return (
    <View style={styles.container}>
      <Content
        title="Sobre"
        text="O MoonOS está sendo desenvolvido por um estudante de programação e apaixonado pelo
        ecossistema Linux, Gustavo"
      />
    </View>
  );
}

export default About;
