import React, {useState} from 'react';
import {
  Text,
  View,
  StyleSheet,
  FlatList,
  TouchableOpacity,
  Image,
  SafeAreaView,
  KeyboardAvoidingView,
  Platform,
  Dimensions,
} from 'react-native';

import {constant} from '../../utils/Constant';
import {colors} from '../../utils/Colors';
import {Fonts} from '../../utils/Fonts';
import {images} from '../../utils/Images';
import {ASButton} from '../../components/ASButton';
import {useNavigation} from '@react-navigation/native';
import {RootStackNavigationProp} from '../../../App';

// const screenWidth = Dimensions.get('window').width;
// const cardSize = (screenWidth - 64) / 3; // 3 columns, 16px padding on both sides + 16px spacing
const numColumns = 3;
const horizontalPadding = 32;
const spacingBetweenCards = 16;
const screenWidth = Dimensions.get('window').width;
const totalSpacing = horizontalPadding + spacingBetweenCards * (numColumns - 1);
const cardSize = (screenWidth - totalSpacing) / numColumns;

const categories = [
    {
      id: '1',
      title: 'Wedding',
      image: images.category1,
      des: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry'
    },
    {
      id: '2',
      title: 'Pre-wedding',
      image: images.category2,
       des: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry'
    },
    {
      id: '3',
      title: 'Maternity',
      image: images.category3,
       des: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry'
    },
    {
      id: '4',
      title: 'New Born',
      image: images.category4,
       des: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry'
    },
    {
      id: '6',
      title: 'Birthday',
      image: images.category5,
      des: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry'
    },
    {
      id: '7',
      title: 'Events',
      image: images.category6,
      des: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry'
    },
    {
      id: '8',
      title: 'Product',
      image: images.category7,
      des: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry'
    },
     {
      id: '9',
      title: 'Food',
      image: images.category8,
      des: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry'
    },
     {
      id: '10',
      title: 'Real Estate',
      image: images.category9,
      des: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry'
    },
     {
      id: '11',
      title: 'Reels',
      image: images.category10,
      des: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry'
    },
      {
      id: '12',
      title: 'Pet',
      image: images.category11,
      des: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry'
    },
      {
      id: '13',
      title: 'Other',
      image: images.category12,
      des: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry'
    },
  ];
  
const ChooseCategoryPackage: React.FC = () => {
  const [selectedId, setSelectedId] = useState<string | null>(null);
  const navigation =
    useNavigation<RootStackNavigationProp<'chooseCategoryCreation'>>();

  const moveToAddDetailsScreen = () => {
    navigation.navigate('addDetailsPackage');
  };

  const renderItem = ({item}: any) => {
    if (item.empty) {
    return <View style={[styles.card, styles.invisibleCard]} />;
  }

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

  const formatData = (data: any[], numColumns: number) => {
  const numberOfFullRows = Math.floor(data.length / numColumns);
  let numberOfElementsLastRow = data.length - numberOfFullRows * numColumns;

  while (
    numberOfElementsLastRow !== numColumns &&
    numberOfElementsLastRow !== 0
  ) {
    data.push({ id: `blank-${numberOfElementsLastRow}`, empty: true });
    numberOfElementsLastRow++;
  }

  return data;
};

  return (
    <SafeAreaView style={styles.container}>
    <KeyboardAvoidingView
      style={{ flex: 1 }}
      behavior={Platform.OS === 'ios' ? 'padding' : undefined}
      keyboardVerticalOffset={Platform.OS === 'ios' ? 20 : 0}
    >
      <View style={styles.innerContainer}>
        <Text style={styles.title}>{constant.chooseCategory}</Text>
        <Text style={styles.subTitle}>{constant.selectCategory}</Text>
        <FlatList
          data={formatData(categories, 3)}
          renderItem={renderItem}
          keyExtractor={item => item.id}
          numColumns={3}
          columnWrapperStyle={styles.row}
          contentContainerStyle={styles.grid}
        />
      </View>

      <ASButton
        title={constant.continue}
        customStyle={styles.continueButton}
        onPress={moveToAddDetailsScreen}
      />
    </KeyboardAvoidingView>
  </SafeAreaView>
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
    marginHorizontal: 16,
    marginTop: 20,
  },
  subTitle: {
    color: colors.textPrimary2,
    fontFamily: Fonts.light,
    fontSize: 14,
    marginHorizontal: 16,
    marginVertical: 5
  },
  innerContainer: {
  flex: 1,
  paddingBottom: 16, 
},
  invisibleCard: {
    backgroundColor: 'transparent',
    borderWidth: 0,
    elevation: 0,
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
    fontFamily: Fonts.regular,
    marginTop: 6,
    textAlign: 'center',
  },
  continueButton: {
    backgroundColor: colors.appColor,
    // margin: 16,
    paddingVertical: 14,
    borderRadius: 50,
    alignItems: 'center',
    // bottom: 15,
  },

});

export default ChooseCategoryPackage;
