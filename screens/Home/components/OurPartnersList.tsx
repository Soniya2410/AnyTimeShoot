import React from 'react';
import { View, Text, FlatList, Image, StyleSheet } from 'react-native';
import { images } from '../../utils/Images';
import { colors } from '../../utils/Colors';

const OurPartnersList = () => {
const partners = [
  { id: '1', image: images.partner1 },
  { id: '2', image: images.partner2 },
  { id: '3', image: images.partner3 }, 
   { id: '4', image: images.partner4 }, 
    { id: '5', image: images.partner5 }, 
     { id: '6', image: images.partner6 }, 
     
];
  
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

  return(
    <View style={{ flex: 1, backgroundColor: colors.white}}>
       <FlatList
          data={formatData(partners, 3)}
          numColumns={3}
          keyExtractor={item => item.id}
            showsHorizontalScrollIndicator={false}
             columnWrapperStyle={{ justifyContent: 'space-between' }}
          contentContainerStyle={styles.gridContainer}
            renderItem={({ item, index }) => (
              <View style={styles.partnerCard}>
                <Image source={item.image} style={styles.partnerImage} />
              </View>
            )}
          />
    </View>
  )
}
const styles = StyleSheet.create({
  partnerCard: {
    marginRight: 15,
    borderRadius: 10,
    overflow: 'hidden',
    position: 'relative',
     borderColor: colors.appColor,
        borderWidth:1
  },
  partnerImage: {
    width: 120,
    height: 160,
    borderRadius: 10,
  },
  gridContainer: {
    gap: 15,
    paddingBottom: 20,
    marginHorizontal: 10
  },
})

export default OurPartnersList;