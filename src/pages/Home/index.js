import React from 'react';
import { View } from 'react-native';

import Content from '../../components/Content';

import styles from './styles';

function Home() {
  return (
    <View style={styles.container}>
      <Content
        title="Chegue a lua com o MoonOS"
        text="O MoonOS é uma distribuição Linux independente e não é baseada em nenhuma distribuição,
        tem como principal característica a navegação entre janelas similar ao famoso editor
        de texto Vim e é gratuito e open-source"
      />
    </View>
  );
}

export default Home;
