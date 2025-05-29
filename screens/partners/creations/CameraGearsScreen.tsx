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

const CameraGearsScreen: React.FC = () => {
  const navigation =
    useNavigation<RootStackNavigationProp<'gearAndSoftware'>>();

  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  const handleCategory = (index: number) => {
    setExpandedIndex(prev => (prev === index ? null : index));
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContent}>
        <Text style={styles.title}>{constant.videoCameraGears}</Text>
        <Text style={styles.subtitle}>{constant.allTheDevies}</Text>

        {categories.map((item, index) => (
          <View key={index}>
            <TouchableOpacity
              style={styles.card}
              onPress={() => handleCategory(index)}>
              <View style={styles.cardContent}>
                <Text style={styles.cardText}>{item.label}</Text>

                <Image
                  source={
                    item.label === constant.other
                      ? images.addIcon
                      : images.downIcon
                  }
                  resizeMethod="resize"
                  style={[
                    styles.nextIcon,
                    {
                      transform: [
                        {rotate: expandedIndex === index ? '180deg' : '0deg'},
                      ],
                    },
                  ]}
                />
              </View>
            </TouchableOpacity>

            {expandedIndex === index && (
              <View style={styles.expandedWrapper}>
                {item.label === constant.other ? (
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
                ) : (
                  <>
                    <View style={styles.expandedContent}>
                      <TextInput
                        style={styles.input}
                        placeholder={constant.nameTheModel}
                        placeholderTextColor={colors.textPrimary2}
                      />
                      <Text style={styles.label}>{constant.model}</Text>
                    </View>

                    <View style={{marginLeft: 16}}>
                      <Text style={styles.nonHighlight}>
                        {constant.give}
                        <Text style={styles.highlight}>
                          {constant.modelName}
                          <Text style={styles.nonHighlight}>
                            {constant.nameOfTheCamera}
                          </Text>
                        </Text>
                      </Text>
                    </View>
                  </>
                )}
              </View>
            )}
          </View>
        ))}
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
    paddingBottom: 16,
  },
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
  cardContent: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  cardText: {
    flex: 1,
    fontSize: 14,
    fontFamily: Fonts.medium,
  },
  nextIcon: {
    width: 12,
    height: 12,
  },
  expandedWrapper: {
    marginHorizontal: 10,
    marginBottom: 12,
  },
  expandedContent: {
    backgroundColor: colors.white,
    padding: 12,
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
    height: 28,
    borderWidth: 1,
    borderColor: colors.borderColors,
    borderRadius: 8,
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
    padding: 16,
    borderTopWidth: 1,
    borderTopColor: colors.lightGray,
    backgroundColor: colors.white,
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

export default CameraGearsScreen;
