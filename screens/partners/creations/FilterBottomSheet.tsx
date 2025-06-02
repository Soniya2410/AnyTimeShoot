import React, {useState} from 'react';
import {
  View,
  Text,
  Modal,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
  Dimensions,
  Image,
} from 'react-native';
import {colors} from '../../utils/Colors';
import {Fonts} from '../../utils/Fonts';
import {icons} from '../../utils/Icons';
import {constant} from '../../utils/Constant';
import Slider from '@react-native-community/slider';

const {width} = Dimensions.get('window');
const TAB_HEIGHT = 600;

type Tab = 'Pricing' | 'Rating' | 'Category';

interface Props {
  visible: boolean;
  onClose: () => void;
  onApply: (filters: any) => void;
}

const FilterBottomSheet: React.FC<Props> = ({visible, onClose, onApply}) => {
  const [activeTab, setActiveTab] = useState<Tab>('Pricing');
  const [priceRange, setPriceRange] = useState<[number, number]>([100, 100000]);
  const [selectedRating, setSelectedRating] = useState<number>(0);
  const [selectedCategory, setSelectedCategory] = useState<string>('');
  const [price, setPrice] = useState(100000);

  const categories = [
    'Wedding',
    'Pre-Wedding',
    'Maternity',
    'New born',
    'Birthday',
    'Small events',
    'Portfolio shoot',
    'Product',
    'Food',
    'Real estate/Property',
    'Reels/shorts',
    'Content creators',
    'Pet',
  ];

  const renderContent = () => {
    switch (activeTab) {
      case 'Pricing':
  return (
    <View style={styles.contentRight}>
      <Text style={styles.sectionTitle}>{constant.pricing}</Text>
      <View style={styles.priceContainer}>
        <View style={{marginLeft: 0}}>
          <Slider
            style={{width: '100%', height: 30}}
            minimumValue={500}
            maximumValue={100000}
            step={500}
            value={price}
            minimumTrackTintColor={colors.appColor}
            maximumTrackTintColor={colors.black}
            thumbTintColor={colors.appColor}
            onValueChange={setPrice}
          />
        </View>
        <Text style={styles.priceText}>
          Rs {priceRange[0]} - Rs {priceRange[1]}
        </Text>
      </View>
    </View>
  );
      case 'Rating':
        return (
          <View style={styles.contentRight}>
            <Text style={styles.sectionTitle}>{constant.rating}</Text>
            {[
              {value: 5, label: '5'},
              {value: 4, label: constant.above4},
              {value: 3, label: constant.above3},
            ].map(item => (
              <TouchableOpacity
                key={item.value}
                style={styles.radioRow}
                onPress={() => setSelectedRating(item.value)}>
                <View style={styles.radioCircle}>
                  {selectedRating === item.value && (
                    <View style={styles.radioDot} />
                  )}
                </View>
                <Text style={styles.radioLabel}>
                  {item.label.split(' ')[0]}
                  <Text style={styles.starRating}> ★</Text>{' '}
                  {item.label.includes(constant.above) ? ' & above' : ''}{' '}
                </Text>
              </TouchableOpacity>
            ))}
          </View>
        );

      case 'Category':
        return (
          <ScrollView
            style={styles.contentRight}
            contentContainerStyle={styles.scrollContent}>
            <Text style={styles.sectionTitle}>{constant.category}</Text>
            {categories.map(cat => (
              <TouchableOpacity
                key={cat}
                style={styles.radioRow}
                onPress={() => setSelectedCategory(cat)}>
                <View style={styles.radioCircle}>
                  {selectedCategory === cat && <View style={styles.radioDot} />}
                </View>
                <Text style={styles.radioLabel}>{cat}</Text>
              </TouchableOpacity>
            ))}
          </ScrollView>
        );

      default:
        return null;
    }
  };

  const handleApply = () => {
    onApply({
      priceRange,
      rating: selectedRating,
      category: selectedCategory,
    });
    onClose();
  };

  const handleClear = () => {
    setPriceRange([100, 100000]);
    setSelectedRating(0);
    setSelectedCategory('');
  };

  return (
    <Modal visible={visible} animationType="slide" transparent>
      <View style={styles.sheetContainer}>
        <View style={[styles.sheet, {height: TAB_HEIGHT + 120}]}>
          <View style={styles.header}>
            <View style={styles.headerStyle}>
              <Text style={styles.headerText}>{constant.filters}</Text>
              <TouchableOpacity onPress={onClose}>
                <Image
                  source={icons.closeFilterIcon}
                  style={styles.closeIcon}
                />
              </TouchableOpacity>
            </View>
            <Text style={styles.subHeader}>{constant.filterDes}</Text>
          </View>

          <View style={styles.mainContent}>
            {/* Left Side - Filter Options */}
            <View style={styles.filterOptions}>
              <TouchableOpacity
                style={[
                  styles.filterOption,
                  activeTab === 'Pricing' && styles.activeFilterOption,
                ]}
                onPress={() => setActiveTab('Pricing')}>
                <View style={styles.filterOptionContent}>
                  {activeTab === 'Pricing' && (
                    <View style={styles.activeIndicator} />
                  )}
                  <Text
                    style={[
                      styles.filterOptionText,
                      activeTab === 'Pricing' && styles.activeFilterOptionText,
                    ]}>
                    Pricing
                  </Text>
                </View>
              </TouchableOpacity>

              <TouchableOpacity
                style={[
                  styles.filterOption,
                  activeTab === 'Rating' && styles.activeFilterOption,
                ]}
                onPress={() => setActiveTab('Rating')}>
                <View style={styles.filterOptionContent}>
                  {activeTab === 'Rating' && (
                    <View style={styles.activeIndicator} />
                  )}
                  <Text
                    style={[
                      styles.filterOptionText,
                      activeTab === 'Rating' && styles.activeFilterOptionText,
                    ]}>
                    Rating
                  </Text>
                </View>
              </TouchableOpacity>

              <TouchableOpacity
                style={[
                  styles.filterOption,
                  activeTab === 'Category' && styles.activeFilterOption,
                ]}
                onPress={() => setActiveTab('Category')}>
                <View style={styles.filterOptionContent}>
                  {activeTab === 'Category' && (
                    <View style={styles.activeIndicator} />
                  )}
                  <Text
                    style={[
                      styles.filterOptionText,
                      activeTab === 'Category' && styles.activeFilterOptionText,
                    ]}>
                    Category
                  </Text>
                </View>
              </TouchableOpacity>
            </View>

            {/* Right Side - Content */}
            {renderContent()}
          </View>

          {/* Footer with buttons */}
          <View style={styles.footer}>
            <TouchableOpacity style={styles.clearButton} onPress={handleClear}>
              <Text style={styles.clearText}>{constant.clearFilters}</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.applyButton} onPress={handleApply}>
              <Text style={styles.applyText}>{constant.apply}</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </Modal>
  );
};

export {FilterBottomSheet};

const styles = StyleSheet.create({
  sheetContainer: {
    flex: 1,
    justifyContent: 'flex-end',
    backgroundColor: 'rgba(0,0,0,0.5)',
  },
  sheet: {
    backgroundColor: colors.white,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    padding: 20,
    width: '100%',
  },
  header: {
    marginBottom: 20,
  },
  headerText: {
    fontSize: 16,
    fontFamily: Fonts.bold,
    marginBottom: 4,
  },
  subHeader: {
    fontSize: 14,
    color: colors.textPrimary2,
    fontFamily: Fonts.regular,
  },
  mainContent: {
    flexDirection: 'row',
    flex: 1,
    height: TAB_HEIGHT,
  },
  filterOptions: {
    width: 120,
    borderRightWidth: 1,
    borderRightColor: colors.borderColor,
    paddingRight: 10,
    marginRight: 10,
  },
  filterOption: {
    paddingVertical: 15,
    paddingHorizontal: 10,
    borderRadius: 6,
    marginBottom: 5,
  },
  filterOptionContent: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  activeIndicator: {
    width: 4,
    height: 20,
    backgroundColor: colors.appColor,
    marginRight: 8,
    borderRadius: 2,
  },
  activeFilterOption: {
    backgroundColor: 'clear',
  },
  filterOptionText: {
    fontSize: 14,
    color: colors.textPrimary2,
    fontFamily: Fonts.medium,
  },
  activeFilterOptionText: {
    color: colors.black,
    fontFamily: Fonts.semiBold,
  },
  contentRight: {
    flex: 1,
    paddingLeft: 10,
  },
  scrollContent: {
    paddingBottom: 20,
  },
  sectionTitle: {
    fontSize: 14,
    fontFamily: Fonts.regular,
    marginBottom: 16,
    color: colors.textPrimary2,
    textTransform: 'uppercase',
  },
  priceContainer: {
    backgroundColor: 'clear',
    padding: 16,
    borderRadius: 8,
    marginBottom: 16,
  },
    estimateBox: {
    padding: 15,
    borderRadius: 10,
    marginVertical: 15,
    marginHorizontal: 10,
    width: '100%',
  },
  priceText: {
    fontSize: 14,
    color: colors.black,
    fontFamily: Fonts.medium,
  },
  radioRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 8,
  },
  radioCircle: {
    width: 20,
    height: 20,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: colors.borderColor,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 12,
  },
  radioDot: {
    width: 12,
    height: 12,
    borderRadius: 6,
    backgroundColor: colors.appColor,
  },
  radioLabel: {
    fontSize: 14,
    color: colors.black,
    fontFamily: Fonts.regular,
  },
  starRating: {
    color: colors.starColor,
    fontSize: 16,
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 20,
    paddingTop: 20,
    borderTopWidth: 1,
    borderTopColor: colors.borderColor,
  },
  clearButton: {
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 8,
  },
  clearText: {
    color: colors.appColor,
    fontSize: 14,
    fontFamily: Fonts.semiBold,
  },
  applyButton: {
    backgroundColor: colors.appColor,
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 8,
  },
  applyText: {
    color: colors.white,
    fontSize: 14,
    fontFamily: Fonts.semiBold,
  },
  closeIcon: {
    width: 20,
    height: 20,
    tintColor: colors.borderColor,
  },
  headerStyle: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  slider: {
    width: '100%',
    height: '40%',
  },
});
