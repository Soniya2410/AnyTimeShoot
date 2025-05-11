import React, {useState} from 'react';
import {
  Text,
  View,
  StyleSheet,
  FlatList,
  TouchableOpacity,
  Image,
  Dimensions,
} from 'react-native';

import {constant} from '../../utils/Constant';
import {colors} from '../../utils/Colors';
import {Fonts} from '../../utils/Fonts';
import {images} from '../../utils/Images';
import {ASButton} from '../../components/ASButton';
import {useNavigation} from '@react-navigation/native';
import {RootStackNavigationProp} from '../../../App';

const screenWidth = Dimensions.get('window').width;
const cardSize = (screenWidth - 64) / 3; // 3 columns, 16px padding on both sides + 16px spacing

const categories = [
  {id: '1', title: 'Wedding', image: images.wedding},
  {id: '2', title: 'Pre -Wedding', image: images.preWedding},
  {id: '3', title: 'Maternity', image: images.wedding},
  {id: '4', title: 'New born', image: images.preWedding},
  {id: '5', title: 'Birthday party', image: images.wedding},
  {id: '6', title: 'Small event', image: images.preWedding},
  {id: '7', title: 'Portfolio', image: images.wedding},
  {id: '8', title: 'Product', image: images.preWedding},
  {id: '9', title: 'Food', image: images.wedding},
  {id: '10', title: 'Property', image: images.preWedding},
  {id: '11', title: 'Reels/shorts', image: images.wedding},
  {id: '12', title: 'Content', image: images.wedding},
  {id: '13', title: 'Pet', image: images.wedding},
  {id: '14', title: 'Other', image: images.wedding},
  {id: '15', title: 'Other', image: images.wedding},
];

const ChooseCategoryPackage: React.FC = () => {
  const [selectedId, setSelectedId] = useState<string | null>(null);
  const navigation =
    useNavigation<RootStackNavigationProp<'chooseCategoryCreation'>>();

  const moveToAddDetailsScreen = () => {
    navigation.navigate('addDetailsPackage');
  };

  const renderItem = ({item}: any) => {
    const isSelected = selectedId === item.id;

    return (
      <TouchableOpacity
        onPress={() => setSelectedId(item.id)}
        style={[styles.card, isSelected && styles.selectedCard]}>
        <Image source={item.image} style={styles.image} />
        <Text
          style={[
            styles.label,
            {color: isSelected ? colors.white : colors.appColor},
          ]}>
          {item.title}
        </Text>
      </TouchableOpacity>
    );
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{constant.chooseCategory}</Text>
      <Text style={styles.subTitle}>{constant.selectCategory}</Text>
      <FlatList
        data={categories}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        numColumns={3}
        columnWrapperStyle={styles.row}
        contentContainerStyle={styles.grid}
      />
      <View style={styles.bottomButtonContainer}>
      <ASButton
        title={constant.continue}
        customStyle={styles.continueButton}
        onPress={moveToAddDetailsScreen}
      />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
  },
  title: {
    color: colors.appColor,
    fontFamily: Fonts.medium,
    fontSize: 16,
    marginLeft: 16,
    marginTop: 20,
    marginBottom: 5,
  },
  subTitle: {
    color: colors.textPrimary2,
    fontFamily: Fonts.regular,
    fontSize: 14,
    marginLeft: 16,
  },
  grid: {
    paddingHorizontal: 16,
    paddingTop: 10,
  },
  row: {
    justifyContent: 'space-between',
    marginBottom: 16,
  },
  card: {
    width: cardSize,
    height: cardSize,
    borderRadius: 12,
    backgroundColor: colors.white,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
    alignItems: 'center',
    justifyContent: 'center',
    overflow: 'hidden',
    borderWidth: 1,
    borderColor: '#ddd',
  },
  selectedCard: {
    borderColor: colors.appColor,
    backgroundColor: colors.appColor,
  },
  image: {
    width: '100%',
    height: '75%',
    resizeMode: 'cover',
  },
  label: {
    fontSize: 13,
    color: colors.white,
    fontFamily: Fonts.medium,
    marginTop: 6,
    textAlign: 'center',
  },
  continueButton: {
    backgroundColor: colors.appColor,
    margin: 16,
    paddingVertical: 14,
    borderRadius: 50,
    alignItems: 'center',
    bottom: 15,
  },
  bottomButtonContainer: {
    position: 'absolute',
    bottom: 0,
    width: '100%',
    backgroundColor: colors.white,
    paddingHorizontal: 16,
    paddingVertical: 14,
  },
});

export default ChooseCategoryPackage;
