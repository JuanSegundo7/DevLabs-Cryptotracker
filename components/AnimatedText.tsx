import {useEffect, useRef, useState} from 'react';
import {Animated, Easing, StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Colors from './Colors';

function AnimatedText({
  text,
  page,
  type,
}: {
  text: string;
  page?: string;
  type?: string;
}) {
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
      <Animated.Text
        style={[
          type == 'Positive'
            ? [styles.subTitle, styles.green]
            : [styles.subTitle, styles.red],
          {opacity: animation.current},
        ]}>
        {type == 'Positive' ? (
          <>
            <Icon name="north-east" size={15} color="#0A8150" />
            {innerText}%
          </>
        ) : (
          <>
            <Icon name="south-west" size={15} color="#DE3617" />
            {innerText}%
          </>
        )}
      </Animated.Text>
    );
  }

  return (
    <Animated.Text
      style={[
        page == 'Home' ? styles.home : styles.detail,
        {opacity: animation.current},
      ]}>
      ${innerText}
    </Animated.Text>
  );
}

const styles = StyleSheet.create({
  home: {
    fontSize: 20,
    fontWeight: '600',
    lineHeight: 24,
    color: Colors.blackTitle.color,
  },
  detail: {
    marginTop: 20,
    fontSize: 30,
    fontWeight: '600',
    lineHeight: 30,
    color: Colors.blackTitle.color,
  },
  subTitle: {
    fontSize: 14,
    fontWeight: '400',
    lineHeight: 20,
  },
  green: {
    color: Colors.green.color,
  },
  red: {
    color: Colors.red.color,
  },
  logo: {
    marginRight: 35,
  },
});

export default AnimatedText;
