import React from 'react';
import { Pressable, SafeAreaView, View, StyleSheet, Text, ViewStyle } from 'react-native';
import Animated, {
  interpolate,
  useAnimatedStyle,
  useSharedValue,
  withTiming,
  SharedValue,
} from 'react-native-reanimated';
import { useThemeColor } from '@/hooks/useThemeColor';

interface FlipCardProps {
  isFlipped: SharedValue<boolean>;
  cardStyle?: ViewStyle;
  direction?: 'x' | 'y';
  duration?: number;
  RegularContent: React.ReactNode;
  FlippedContent: React.ReactNode;
  isImposter?: boolean;
}

const RegularContentCard = (content: string | React.ReactNode) => {
  const cardBackground = useThemeColor({}, 'cardBackground');
  const cardText = useThemeColor({}, 'cardText');
  
  return (
    <View style={[regularContentStyles.card, { backgroundColor: cardBackground }]}>
      <Text style={[regularContentStyles.text, { color: cardText }]}>{content}</Text>
    </View>
  );
};

const regularContentStyles = StyleSheet.create({
  card: {
    flex: 1,
    borderRadius: 16,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    // Color will be set dynamically
  },
});


const FlippedContentCard = (content: string | React.ReactNode, isImposter: boolean) => {
  const flippedCardBackground = useThemeColor({}, 'flippedCardBackground');
  const imposterBackground = useThemeColor({}, 'imposterBackground');
  const cardText = useThemeColor({}, 'cardText');
  const imposterText = useThemeColor({}, 'imposterText');
  
  return (
    <View style={[
      flippedContentStyles.card, 
      { backgroundColor: isImposter ? imposterBackground : flippedCardBackground }
    ]}>
      <Text style={[
        flippedContentStyles.text, 
        { color: isImposter ? imposterText : cardText }
      ]}>{content}</Text>
    </View>
  );
};

const flippedContentStyles = StyleSheet.create({
  card: {
    flex: 1,
    borderRadius: 16,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    // Color will be set dynamically
  },
});

export const FlipCard = ({
  isFlipped,
  cardStyle=styles.flipCard,
  direction = 'y',
  duration = 500,
  RegularContent,
  FlippedContent,
  isImposter = false,
}: FlipCardProps) => {
  const isDirectionX = direction === 'x';

  const regularCardAnimatedStyle = useAnimatedStyle(() => {
    const spinValue = interpolate(Number(isFlipped.value), [0, 1], [0, 180]);
    const rotateValue = withTiming(`${spinValue}deg`, { duration });

    return {
      transform: [
        isDirectionX ? { rotateX: rotateValue } : { rotateY: rotateValue },
      ],
    };
  });

  const flippedCardAnimatedStyle = useAnimatedStyle(() => {
    const spinValue = interpolate(Number(isFlipped.value), [0, 1], [180, 360]);
    const rotateValue = withTiming(`${spinValue}deg`, { duration });

    return {
      transform: [
        isDirectionX ? { rotateX: rotateValue } : { rotateY: rotateValue },
      ],
    };
  });

  return (
    <View>
      <Animated.View
        style={[
          flipCardStyles.regularCard,
          cardStyle,
          regularCardAnimatedStyle,
        ]}>
        {RegularContentCard(RegularContent)}
      </Animated.View>
      <Animated.View
        style={[
          flipCardStyles.flippedCard,
          cardStyle,
          flippedCardAnimatedStyle,
        ]}>
        {FlippedContentCard(FlippedContent, isImposter)}
      </Animated.View>
    </View>
  );
};

const flipCardStyles = StyleSheet.create({
  regularCard: {
    position: 'absolute',
    zIndex: 1,
  },
  flippedCard: {
    zIndex: 2,
  },
});

const styles = StyleSheet.create({
  flipCard: {
    width: "100%",
    marginVertical: 10,
    height: 200,
    backfaceVisibility: 'hidden',
  },
});