import React, {useState} from 'react';
import {
  Text,
  View,
  StyleSheet,
  ScrollView,
  TextInput,
  SafeAreaView,
  TouchableOpacity,
  Image,
} from 'react-native';
import {constant} from '../../utils/Constant';
import {Fonts} from '../../utils/Fonts';
import {ASButton} from '../../components/ASButton';
import {colors} from '../../utils/Colors';
import {useNavigation} from '@react-navigation/native';
import {RootStackNavigationProp} from '../../../App';
import {images} from '../../utils/Images';

const categories = [
  {label: constant.canon},
  {label: constant.nikon},
  {label: constant.sony},
  {label: constant.fujiFlim},
  {label: constant.panasonic},
  {label: constant.olympus},
  {label: constant.gopro},
  {label: constant.leica},
  {label: constant.kodak},
  {label: constant.other},
];

const OtherInputs = () => (
  <>
    <Text style={styles.otherLabel}>{constant.brandName}</Text>
    <TextInput
      style={styles.otherInput}
      placeholder={constant.enterModelOfCompany}
      placeholderTextColor={colors.textPrimary2}
    />
    <Text style={styles.otherLabel}>{constant.model}</Text>
    <TextInput
      style={styles.otherInput}
      placeholder={constant.enterModelOfCamera}
      placeholderTextColor={colors.textPrimary2}
    />
  </>
);

const BrandInputs = () => (
  <>
    <View style={styles.expandedContent}>
      <TextInput
        style={styles.input}
        placeholder={constant.nameTheModel}
        placeholderTextColor={colors.textPrimary2}
      />
      <Text style={styles.label}>{constant.model}</Text>
    </View>
    <View style={{marginLeft: 16, marginTop: 5}}>
      <Text style={styles.nonHighlight}>
        {constant.give}
        <Text style={styles.highlight}>
          {constant.modelName}
          <Text style={styles.nonHighlight}>{constant.nameOfTheCamera}</Text>
        </Text>
      </Text>
    </View>
  </>
);

const CameraGearsScreen: React.FC = () => {
  const navigation = useNavigation<RootStackNavigationProp<'gearAndSoftware'>>();
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);
const [quantities, setQuantities] = useState<{ [index: number]: number }>({});

const updateQuantity = (index: number, delta: number) => {
  setQuantities(prev => ({
    ...prev,
    [index]: Math.max((prev[index] || 1) + delta, 1), // prevent < 1
  }));
};
  const handleCategory = (index: number) => {
    setExpandedIndex(prev => (prev === index ? null : index));
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContent}>
        <Text style={styles.title}>{constant.videoCameraGears}</Text>
        <Text style={styles.subtitle}>{constant.allTheDevies}</Text>

        {categories.map((item, index) => {
          const isExpanded = expandedIndex === index;
          const isOther = item.label === constant.other;

          return (
            <View key={index}>
             <TouchableOpacity style={styles.card} onPress={() => handleCategory(index)}>
  <View style={styles.cardContent}>
    <Text style={styles.cardText}>{item.label}</Text>

    {isExpanded ? (
      <View style={styles.quantityControls}>
        <TouchableOpacity onPress={() => updateQuantity(index, -1)} style={styles.qtyButton}>
          <Text style={styles.qtyText}>-</Text>
        </TouchableOpacity>
       <Text style={styles.qtyValue}>{quantities[index] || 1}</Text>
        <TouchableOpacity onPress={() => updateQuantity(index, 1)} style={styles.qtyButton}>
         <Text style={styles.qtyText}>+</Text>
        </TouchableOpacity>
      </View>
    ) : (
      <Image
        source={isOther ? images.addIcon : images.downIcon}
        style={[
          styles.nextIcon,
          { transform: [{ rotate: isExpanded ? '180deg' : '0deg' }] },
        ]}
        resizeMethod="resize"
      />
    )}
  </View>
</TouchableOpacity>

              {isExpanded && (
                <View style={styles.expandedWrapper}>
                  {isOther ? <OtherInputs /> : <BrandInputs />}
                </View>
              )}
            </View>
          );
        })}
      </ScrollView>

      <View style={styles.footer}>
        <ASButton
          title={constant.continue}
          onPress={() => navigation.navigate('deliverablePackage')}
        />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: colors.white },
  scrollContent: { paddingBottom: 16 },
  title: {
    fontSize: 16,
    fontFamily: Fonts.medium,
    color: colors.appColor,
    marginBottom: 4,
    marginHorizontal: 10,
    marginTop: 8,
  },
  subtitle: {
    fontSize: 14,
    color: colors.textPrimary2,
    marginBottom: 16,
    fontFamily: Fonts.regular,
    marginHorizontal: 10,
  },
  card: {
    backgroundColor: colors.white,
    padding: 12,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: colors.borderColors,
    marginBottom: 12,
    shadowColor: '#000',
    shadowOpacity: 0.05,
    shadowRadius: 4,
    elevation: 2,
    marginHorizontal: 10,
  },
  cardContent: { flexDirection: 'row', alignItems: 'center' },
  cardText: { flex: 1, fontSize: 14, fontFamily: Fonts.medium },
  nextIcon: { width: 18, height: 18 },
  expandedWrapper: {
    marginHorizontal: 10,
    marginBottom: 12,
  },
  expandedContent: {
    backgroundColor: colors.white,
    paddingHorizontal: 12,
    borderBottomLeftRadius: 8,
    borderBottomRightRadius: 8,
    flexDirection: 'row',
  },
  label: {
    fontSize: 12,
    fontFamily: Fonts.medium,
    color: colors.appColor,
    marginTop: 8,
    marginLeft: 10,
  },
  input: {
    minHeight: 45,
    borderWidth: 1,
    borderColor: colors.borderColors,
    borderRadius: 8,
    fontFamily: Fonts.regular,
    paddingHorizontal: 8,
    marginTop: 4,
    width: 178,
  },
  highlight: {
    fontFamily: Fonts.semiBold,
    fontSize: 12,
    color: colors.textPrimary2,
  },
  nonHighlight: {
    fontFamily: Fonts.regular,
    fontSize: 12,
    color: colors.textPrimary2,
  },
  footer: {
    paddingBottom: 10,
  },
  otherInput: {
    minHeight: 45,
    borderWidth: 1,
    borderColor: colors.borderColors,
    borderRadius: 8,
    paddingHorizontal: 8,
    marginTop: 4,
    fontFamily: Fonts.regular,
  },
  otherLabel: {
    fontSize: 15,
    fontFamily: Fonts.medium,
    color: colors.appColor,
    marginTop: 8,
    marginLeft: 10,
  },
  quantityControls: {
  flexDirection: 'row',
  alignItems: 'center',
  gap: 8,
},
 qtyButton: {
    backgroundColor: colors.appColor,
    borderRadius: 10,
    // marginHorizontal: 4,
    justifyContent:'center',
    alignItems:'center',
    width: 20,
    height: 20
  },
  qtyText: {
    color: colors.white,
    fontSize: 13,
    fontWeight: 'bold',
    textAlign: 'center'
  },
  qtyValue: {
    fontSize: 14,
    width: 15,
    textAlign:'center',
    fontFamily: Fonts.medium,
    color: colors.appColor,
  },
icon: {
  width: 20,
  height: 20,
  tintColor: colors.appColor,
},
});

export default CameraGearsScreen;
