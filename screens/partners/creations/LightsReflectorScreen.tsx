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
  {label: constant.ledLights, icon: images.ledIcon},
  {label: constant.umberllaLights, icon: images.umberllaLightIcon},
  {label: constant.flashes, icon: images.flashIcon},
  {label: constant.filters, icon: images.filterIcon},
  {label: constant.reflectors, icon: images.reflectorIcon},
  {label: constant.diffusers, icon: images.diffuserIcon},
  {label: constant.other, icon: ''},
];

const LightsReflectorScreen: React.FC = () => {
  const navigation = useNavigation<RootStackNavigationProp<'lightReflector'>>();
  const [counts, setCounts] = useState<{[key: string]: number}>({});
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  const handleIncrement = (label: string) => {
  setCounts(prev => {
    const current = prev[label] || 0;
    const newCount = Math.min(current + 1, 5); 
    return { ...prev, [label]: newCount };
  });
};

const handleDecrement = (label: string) => {
  setCounts(prev => {
    const current = prev[label] || 0;
    const newCount = Math.max(current - 1, 0);
    return { ...prev, [label]: newCount };
  });
};

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContent}>
        <Text style={styles.title}>{constant.lightsReflectors}</Text>
        <Text style={styles.subtitle}>{constant.lightsReflectorDetail}</Text>

        {categories.map((item, index) => {
          const count = counts[item.label] || 0;
          const isOther = item.label === constant.other;
          const isExpanded = expandedIndex === index;

          const handleToggleExpand = () => {
            setExpandedIndex(prev => (prev === index ? null : index));
          };

          return (
            <View key={index} style={styles.card}>
              <TouchableOpacity
                activeOpacity={0.8}
                style={styles.cardContent}
                onPress={isOther ? handleToggleExpand : undefined}>
                {!isOther && <Image source={item.icon} style={styles.icon} />}
                <Text style={styles.cardText}>{item.label}</Text>

                {/* Show down arrow for "Other" */}
                {isOther ? (
                  <Image source={images.addIcon} style={styles.icon} />
                ) : (
                  <View style={styles.qtyControl}>
                    <TouchableOpacity
                      style={[
                        styles.qtyButton,
                        {
                          backgroundColor:
                            count > 0 ? colors.appColor : colors.textPrimary2,
                        },
                      ]}
                      onPress={() => handleDecrement(item.label)}>
                      <Text style={styles.qtyText}>−</Text>
                    </TouchableOpacity>

                    <Text style={styles.qtyValue}>{count}</Text>

                    <TouchableOpacity
                      style={[
                        styles.qtyButton,
                        {
                          backgroundColor:
                            count > 0 ? colors.appColor : colors.textPrimary2,
                        },
                      ]}
                      onPress={() => handleIncrement(item.label)}>
                      <Text style={styles.qtyText}>+</Text>
                    </TouchableOpacity>
                  </View>
                )}
              </TouchableOpacity>

              {/* Expanded section for "Other" only when expanded */}
              {isOther && isExpanded && (
                <View style={styles.expandedWrapper}>
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
                </View>
              )}
            </View>
          );
        })}
      </ScrollView>
      <View style={styles.footer}>
        <ASButton
          title={constant.continue}
          onPress={() => console.log('Continue pressed')}
        />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
  },
  scrollContent: {
    padding: 16,
  },
  title: {
    fontSize: 16,
    fontFamily: Fonts.medium,
    color: colors.appColor,
    marginBottom: 4,
  },
  subtitle: {
    fontSize: 14,
    color: colors.textPrimary2,
    marginBottom: 16,
    fontFamily: Fonts.regular
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
  },
  cardContent: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  icon: {
    width: 20,
    height: 20,
    resizeMode: 'contain',
    marginRight: 8,
  },
  cardText: {
    flex: 1,
    fontSize: 14,
    fontFamily: Fonts.medium,
  },
  qtyControl: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  qtyButton: {
    borderRadius: 10,
    width: 20,
    height: 20,
    marginHorizontal: 4,
    justifyContent:'center',
    alignItems:'center'
  },
  qtyText: {
    color: colors.white,
    fontSize: 14,
    textAlign:'center',
    fontWeight: 'bold',
  },
  qtyValue: {
    fontSize: 14,
    width: 15,
    textAlign:'center',
    fontFamily: Fonts.medium,
    color: colors.appColor,
  },
  expandedContent: {
    marginTop: 10,
  },
  input: {
    height: 41,
    borderWidth: 1,
    borderColor: colors.borderColors,
    borderRadius: 10,
    paddingHorizontal: 8,
    color: colors.appColor,
    fontFamily: Fonts.medium,
    fontSize: 12,
  },
  label: {
    fontFamily: Fonts.medium,
    fontSize: 13,
    color: colors.textPrimary2,
    marginTop: 6,
  },
  footer: {
    paddingBottom: 10,
    
  },
  expandedWrapper: {
    marginHorizontal: 10,
    marginBottom: 12,
  },
  otherInput: {
    height: 41,
    borderWidth: 1,
    borderColor: colors.borderColors,
    borderRadius: 8,
    paddingHorizontal: 8,
    marginTop: 4,
  },
  otherLabel: {
    fontSize: 15,
    fontFamily: Fonts.medium,
    color: colors.appColor,
    marginTop: 8,
    marginLeft: 10,
  },
});

export default LightsReflectorScreen;
