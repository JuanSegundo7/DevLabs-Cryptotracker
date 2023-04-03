import {useEffect, useRef, useState} from 'react';
import {Animated, Easing, StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

import {
  AnimatedTextPrincipalNumber,
  AnimatedTextPercentageNumber,
} from './styles';
import {theme} from '../../utils/theme';

const AnimatedText = ({
  text,
  page,
  type,
}: {
  text: string;
  page?: string;
  type?: string;
}) => {
  const animation = useRef(new Animated.Value(0));
  const [innerText, setText] = useState(text);

  useEffect(() => {
    Animated.timing(animation.current, {
      toValue: 0,
      useNativeDriver: true,
      duration: 300,
      easing: Easing.linear,
    }).start();

    setTimeout(() => {
      setText(text);
      Animated.timing(animation.current, {
        toValue: 1,
        useNativeDriver: true,
        duration: 300,
        easing: Easing.linear,
      }).start();
    }, 301);
  }, [text]);

  if (type) {
    return (
      <AnimatedTextPercentageNumber
        type={type}
        style={{opacity: animation.current}}>
        {type == 'Positive' ? (
          <>
            <Icon name="north-east" size={15} color={theme.colors.green} />
            {innerText}%
          </>
        ) : (
          <>
            <Icon name="south-west" size={15} color={theme.colors.red} />
            {innerText}%
          </>
        )}
      </AnimatedTextPercentageNumber>
    );
  }

  return (
    <AnimatedTextPrincipalNumber
      page={page}
      style={{opacity: animation.current}}>
      ${innerText}
    </AnimatedTextPrincipalNumber>
  );
};

export default AnimatedText;
