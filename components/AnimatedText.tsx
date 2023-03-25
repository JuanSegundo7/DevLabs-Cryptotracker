import {useEffect, useRef, useState} from 'react';
import {Animated, Easing, StyleSheet} from 'react-native';

function AnimatedText({text, page}: {text: string; page: string}) {
  const animation = useRef(new Animated.Value(1));
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
    }, 101);
  }, [text, innerText]);
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
    color: '#212B36',
  },
  detail: {
    marginTop: 20,
    fontSize: 30,
    fontWeight: '600',
    lineHeight: 30,
    color: '#212B36',
  },
});

export default AnimatedText;
