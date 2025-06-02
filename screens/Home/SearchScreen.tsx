import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  FlatList,
  Image,
} from 'react-native';
import { images } from '../utils/Images';
import { icons } from '../utils/Icons';
import { colors } from '../utils/Colors';
import { Fonts } from '../utils/Fonts';
import { FilterBottomSheet } from '../partners/creations/FilterBottomSheet';

const recents = [
  'wedding packages',
  'wedding packages under 15K',
  'maternity shoot',
  'pre wedding booking offers',
  'studio in delhi for shoot',
  'new born shoot',
];

const packages = [
  {id: '1', image: images.wedding},
  {id: '2', image: images.preWedding},
  {id: '3', image: images.baby1},
];

const SearchScreen = () => {
  const [searchValue, setSearchValue] = useState("");
  const [isFilterVisible, setIsFilterVisible] = useState(false);

  const openFilterModal = () => {
    setIsFilterVisible(true);
  };

  const applyFilters = () => {
    setIsFilterVisible(false);
  };
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.header}>Search</Text>

      <View style={styles.searchRow}>
        <View style={styles.searchBox}>
          <TextInput
            placeholder="Search"
            placeholderTextColor="#999"
            style={styles.input}
            value={searchValue}
            onChangeText={(text) => setSearchValue(text)}
          />
          {searchValue && (
          <TouchableOpacity onPress={() => {setSearchValue('')}}>
            <Image source={icons.closeIcon} style={styles.icons}/>
          </TouchableOpacity>
          )}
        </View>

        <TouchableOpacity style={styles.filterButton} onPress={openFilterModal}>
          <Text style={styles.filterText}>Filter</Text>
          <Image source={icons.filterIcon} style={styles.filterIcons} />
        </TouchableOpacity>
      </View>

      <Text style={styles.recentsLabel}>Recents</Text>
      <View style={styles.recentsContainer}>
        {recents.map((item, index) => (
          <View key={index} style={styles.recentChip}>
            <Text style={styles.recentText}>{item}</Text>
          </View>
        ))}
      </View>

      <View style={styles.sectionRow}>
        <Text style={styles.sectionTitle}>Packages for you</Text>
        <TouchableOpacity>
          <Text style={styles.viewAll}>View all</Text>
        </TouchableOpacity>
      </View>

      <FlatList
        data={packages}
        horizontal
        keyExtractor={item => item.id}
        renderItem={({item}) => (
          <View style={styles.card}>
            <Image source={item.image} style={styles.cardImage} />
          </View>
        )}
        showsHorizontalScrollIndicator={false}
      />
       <FilterBottomSheet  
          visible={isFilterVisible}
          onClose={() => setIsFilterVisible(false)}
          onApply={applyFilters}/>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    paddingHorizontal: 16,
    paddingTop: 16,
  },
  header: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#333',
    fontFamily: Fonts.medium,
    marginBottom: 16,
  },
  searchRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
  },
  searchBox: {
    flex: 1,
    borderWidth: 1,
    borderColor: colors.appColor,
    borderRadius: 10,
    paddingHorizontal: 16,
    paddingVertical: 8,
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: 8,
  },
  input: {
    flex: 1,
    fontSize: 16,
    fontFamily: Fonts.regular
  },
  filterButton: {
    borderWidth: 1,
    borderColor: colors.filterBorder,
    borderRadius: 20,
    paddingHorizontal: 12,
    paddingVertical: 8,
    flexDirection: 'row',
    alignItems: 'center',
    // gap: 4,
  },
  filterText: {
    fontSize: 14,
    color: colors.textPrimary2,
    marginRight: 4,
    fontFamily: Fonts.regular
  },
  recentsLabel: {
    color: colors.appColor,
    fontSize: 14,
    marginBottom: 8,
    fontFamily: Fonts.medium
  },
  recentsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 8,
    marginBottom: 24,
  },
  recentChip: {
    backgroundColor: '#eee',
    borderRadius: 16,
    paddingVertical: 6,
    paddingHorizontal: 12,
  },
  recentText: {
    fontSize: 12,
    color: '#444',
    fontFamily: Fonts.regular
  },
  sectionRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 12,
  },
  sectionTitle: {
    fontSize: 18,
    color: colors.appColor,
    fontFamily: Fonts.medium
  },
  viewAll: {
    fontSize: 14,
    color: colors.appColor,
    fontFamily: Fonts.regular,
    textDecorationLine: 'underline',
  },
  card: {
    width: 120,
    height: 140,
    borderRadius: 12,
    overflow: 'hidden',
    marginRight: 12,
    backgroundColor: '#eee',
  },
  cardImage: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },
  icons: {
    width: 20,
    height: 20
  },
   filterIcons: {
    width: 18,
    height: 18
  }
});

export default SearchScreen;
