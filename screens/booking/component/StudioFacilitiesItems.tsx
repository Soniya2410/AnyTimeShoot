import React, {useState} from 'react';
import {
  Dimensions,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
} from 'react-native';
import {colors} from '../../utils/Colors';
import {Fonts} from '../../utils/Fonts';
const numColumns = 3;
const horizontalPadding = 32;
const spacingBetweenCards = 16;
const screenWidth = Dimensions.get('window').width;
const totalSpacing = horizontalPadding + spacingBetweenCards * (numColumns - 1);
const cardSize = (screenWidth - totalSpacing) / numColumns;
// const screenWidth = Dimensions.get('window').width;
// const cardSize = (screenWidth) / 4;

const StudioFacilitiesItems = ({item}: any) => {
  const [selectedId, setSelectedId] = useState<string | null>(null);

  const isSelected = selectedId === item.id;
  return (
    <TouchableOpacity
      onPress={() => setSelectedId(item.id)}
      style={[styles.card, isSelected && styles.selectedCard]}>
      <Image
        source={item.image}
        style={[
          styles.gridImage,
          {tintColor: isSelected ? colors.white : colors.appColor},
        ]}
      />
      <Text
        style={[
          styles.titleText,
          {color: isSelected ? colors.white : colors.black},
        ]}>
        {item.title}
      </Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  descText: {
    fontSize: 12,
    fontFamily: Fonts.medium,
    color: colors.lineColor,
    textAlign: 'left',
  },
  titleText: {
    fontSize: 13,
    color: colors.black,
    fontFamily: Fonts.medium,
    textAlign: 'left',
    marginBottom: 5,
  },
  selectedCard: {
    borderColor: colors.appColor,
    backgroundColor: colors.appColor,
  },
  gridImage: {
    width: 24,
    height: 24,
    marginRight: 8,
    marginBottom: 10,
  },
  card: {
    width: cardSize,
    minHeight: cardSize - 100,
    borderRadius: 12,
    backgroundColor: colors.white,
    elevation: 2,
    borderWidth: 1,
    borderColor: colors.lineColor,
    padding: 10,
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
  },
});

export {StudioFacilitiesItems};
