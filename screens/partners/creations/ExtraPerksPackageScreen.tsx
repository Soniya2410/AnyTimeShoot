import React, {useState} from 'react';
import {
  Text,
  View,
  StyleSheet,
  ScrollView,
  KeyboardAvoidingView,
  Platform,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import {constant} from '../../utils/Constant';
import {Fonts} from '../../utils/Fonts';
import {colors} from '../../utils/Colors';
import {ASButton} from '../../components/ASButton';
import { useNavigation } from '@react-navigation/native';
import { RootStackNavigationProp } from '../../../App';

const defaultPerks = [
  'Fast Post Production',
  'Wardrobes',
  'Door Step Shoot',
  'Posing Tips',
  'Scripting',
  'Props',
  'Online Sharing',
  'Free E-Invites',
];

const ExtraPerksPackageScreen: React.FC = () => {
    const navigation = useNavigation<RootStackNavigationProp<'extraPerksPackage'>>();
  const [selectedPerks, setSelectedPerks] = useState<string[]>([]);
  const [showCustomInput, setShowCustomInput] = useState(false);
  const [customPerk, setCustomPerk] = useState('');

  const moveToNextScreen = () => {
  navigation.navigate('additionalInformationPackage');
  };

  const togglePerk = (perk: string) => {
    if (selectedPerks.includes(perk)) {
      setSelectedPerks(selectedPerks.filter(p => p !== perk));
    } else {
      setSelectedPerks([...selectedPerks, perk]);
    }
  };

  const handleOtherClick = () => {
    if (!selectedPerks.includes('Other')) {
      setSelectedPerks([...selectedPerks, 'Other']);
    }
    setShowCustomInput(true);
  };

  const handleAddCustomPerk = () => {
    if (customPerk.trim() !== '') {
      setSelectedPerks(prev =>
        prev.filter(p => p !== 'Other').concat(customPerk.trim()),
      );
      setCustomPerk('');
      setShowCustomInput(false);
    }
  };

  return (
    <View style={styles.container}>
      <View style={{ height: '90%'}}>
      <KeyboardAvoidingView
        style={{flex: 1}}
        behavior={Platform.OS === 'ios' ? 'padding' : undefined}>
        <ScrollView contentContainerStyle={styles.scrollContent}>
          <View style={styles.paddingView}>
            <Text style={styles.title}>{constant.extraPerks}</Text>
            <Text style={styles.subTitle}>{constant.deliverSomethingExtra}</Text>
            {/* Selected Perks */}
            <Text style={styles.sectionTitle}>{constant.yourPackageWillBe}</Text>
            <View style={styles.selectedContainer}>
              {selectedPerks.map((perk, index) => {
                if (perk === 'Other' && showCustomInput) {
                  return (
                    <View key={'other-input'} style={{width: '100%'}}>
                      <View style={styles.inputContainer}>
                        <TextInput
                          style={styles.input}
                          placeholder="Write here"
                          value={customPerk}
                          onChangeText={setCustomPerk}
                          placeholderTextColor={colors.textPrimary2}
                        />
                        <TouchableOpacity onPress={handleAddCustomPerk}>
                          <Text style={styles.addText}>Add</Text>
                        </TouchableOpacity>
                      </View>
                      <View style={styles.selectedPerk}>
                        <Text style={styles.selectedText}>Other</Text>
                        <TouchableOpacity
                          onPress={() => {
                            togglePerk('Other');
                            setShowCustomInput(false);
                            setCustomPerk('');
                          }}>
                          <Text style={styles.removeIcon}>✕</Text>
                        </TouchableOpacity>
                      </View>
                    </View>
                  );
                } else {
                  return (
                    <View key={perk} style={styles.selectedPerk}>
                      <Text style={styles.selectedText}>{perk}</Text>
                      <TouchableOpacity onPress={() => togglePerk(perk)}>
                        <Text style={styles.removeIcon}>✕</Text>
                      </TouchableOpacity>
                    </View>
                  );
                }
              })}
            </View>

            {/* Available Perks */}
            <Text style={styles.sectionTitle}>Add extra  perks which you are giving in package:</Text>
            <View style={styles.perksContainer}>
              {defaultPerks.map((perk, index) => (
                <TouchableOpacity
                  key={index}
                  style={[
                    styles.perkChip,
                    selectedPerks.includes(perk) && styles.perkChipSelected,
                  ]}
                  onPress={() => togglePerk(perk)}>
                  <Text
                    style={[
                      styles.perkText,
                      selectedPerks.includes(perk) && styles.perkTextSelected,
                    ]}>
                    {perk}
                  </Text>
                  {!selectedPerks.includes(perk) && (
                    <Text style={styles.plusIcon}>＋</Text>
                  )}
                </TouchableOpacity>
              ))}

              {!selectedPerks.includes('Other') && (
                <TouchableOpacity
                  style={styles.otherChip}
                  onPress={handleOtherClick}>
                  <Text style={styles.otherText}>Other</Text>
                  <Text style={styles.otherPlus}>＋</Text>
                </TouchableOpacity>
              )}
            </View>
          </View>
        </ScrollView>

        {/* <View style={styles.bottomContainer}> */}
         
        {/* </View> */}
      </KeyboardAvoidingView>
      </View>
      <ASButton
            title={constant.continue}
            customStyle={styles.btnContinue}
            onPress={moveToNextScreen}
          />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1, 
    backgroundColor: colors.white
},
  scrollContent: {
    paddingBottom: 100
},
  paddingView: {
    marginHorizontal: 16, 
    marginTop: 20
},
  title: {
    fontFamily: Fonts.medium,
    fontSize: 16,
    color: colors.appColor,
  },
  subTitle: {
    fontFamily: Fonts.regular,
    fontSize: 14,
    color: colors.textPrimary2,
    marginTop: 6,
  },
  sectionTitle: {
    marginTop: 20,
    fontSize: 14,
    fontFamily: Fonts.medium,
    color: colors.black,
  },
  perksContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginTop: 10,
    gap: 8,
  },
  perkChip: {
    borderWidth: 1,
    borderColor: colors.appColor,
    borderRadius: 20,
    paddingHorizontal: 12,
    paddingVertical: 6,
    flexDirection: 'row',
    alignItems: 'center',
  },
  perkChipSelected: {
    backgroundColor: colors.white,
  },
  perkText: {
    color: colors.appColor,
    fontFamily: Fonts.regular,
  },
  perkTextSelected: {
    color: colors.appColor,
  },
  plusIcon: {
    marginLeft: 6,
    color: colors.appColor,
    fontSize: 14,
  },
  removeIcon: {
    color: colors.white,
    marginLeft: 8,
  },
  selectedContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 8,
    marginTop: 16,
  },
  selectedPerk: {
    backgroundColor: colors.appColor,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 20,
    marginTop: 8,
  },
  selectedText: {
    color: colors.white,
    fontFamily: Fonts.regular,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: colors.appColor,
    borderRadius: 20,
    marginTop: 8,
    paddingHorizontal: 12,
    paddingVertical: 6,
  },
  input: {
    flex: 1,
    color: colors.black,
    fontFamily: Fonts.regular,
    paddingVertical: 4,
  },
  addText: {
    color: colors.appColor,
    fontFamily: Fonts.medium,
    paddingHorizontal: 8,
  },
  bottomContainer: {
    backgroundColor: colors.white,
    padding: 16,
    marginBottom: 30,
  },
  btnContinue: {
    backgroundColor: colors.appColor,
    borderRadius: 50,
    paddingVertical: 14,
    alignItems: 'center',
  },
  otherChip: {
    borderWidth: 1,
    borderColor: colors.black,
    borderRadius: 20,
    paddingHorizontal: 12,
    paddingVertical: 6,
    flexDirection: 'row',
    alignItems: 'center',
  },
  otherText: {
    color: colors.black,
    fontFamily: Fonts.regular,
  },
  otherPlus: {
    color: colors.black,
    marginLeft: 6,
    fontSize: 14,
  },
});

export default ExtraPerksPackageScreen;
