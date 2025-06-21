import React, {useState} from 'react';
import {
  Text,
  View,
  StyleSheet,
  ScrollView,
  TextInput,
  KeyboardAvoidingView,
  Platform,
  TouchableOpacity,
  Image,
  SafeAreaView,
} from 'react-native';
import {ASButton} from '../../components/ASButton';
import {constant} from '../../utils/Constant';
import {colors} from '../../utils/Colors';
import {Fonts} from '../../utils/Fonts';
import {useNavigation} from '@react-navigation/native';
import {RootStackNavigationProp} from '../../../App';
import { images } from '../../utils/Images';

type Deliverable = {
  id: number;
  name: string;
  type: string;
  quantity?: string;
  isSelected: boolean;
  isCustom?: boolean;
};

const DeliverableDetailScreen: React.FC = () => {
  const navigation =
    useNavigation<RootStackNavigationProp<'deliverablePackage'>>();
  const [deliverables, setDeliverables] = useState<Deliverable[]>([
    {id: 1, name: 'Raw Images', isSelected: false, type: 'image'},
    {id: 2, name: 'Edited Images', isSelected: false, type: 'image'},
    {id: 3, name: 'Raw Video', isSelected: false, type: 'video'},
    {id: 4, name: 'Edited Videos', isSelected: false, type: 'video'},
    {id: 5, name: 'Reels', isSelected: false, type: 'video'},
    // {id: 6, name: 'Video Teaser', isSelected: false, type: 'video'},
    {id: 6, name: 'Highlight Video', isSelected: false, type: 'video'},
    // {id: 8, name: 'Album', isSelected: false, type: 'image'},
    // {id: 9, name: 'Photo Frame', isSelected: false, type: 'image'},
  ]);
  const [customDeliverable, setCustomDeliverable] = useState<Deliverable>({
    id: 10,
    name: '',
    quantity: '',
    type: 'image',
    isSelected: false,
    isCustom: true,
  });

  const toggleSelection = (id: number) => {
    setDeliverables(prev =>
      prev.map(item =>
        item.id === id ? {...item, isSelected: !item.isSelected} : item,
      ),
    );
  };

  const handleQuantityChange = (id: number, value: string) => {
    setDeliverables(prev =>
      prev.map(item => (item.id === id ? {...item, quantity: value} : item)),
    );
  };

  const moveToNextScreen = () => {
    navigation.navigate('addDeliveryDetailsPackage')
  };

  return (
    <SafeAreaView style={styles.container} >
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      keyboardVerticalOffset={Platform.OS === 'ios' ? 100 : 0}>
      <ScrollView contentContainerStyle={styles.scrollContent}>
        <Text style={styles.title}>{constant.deliverable}</Text>
        <Text style={styles.subTitle}>{constant.mentionDetails}</Text>
        {deliverables.map(item => (
          <View key={item.id} style={styles.itemContainer}>
            <TouchableOpacity onPress={() => toggleSelection(item.id)} style={styles.row}>
              <Text style={styles.itemText}>{item.id}. {item.name}</Text>
              {item.isSelected ? (
              <Image source={images.selectedIcon} style={styles.selectedIcon} />
            ) : (
              <View style={styles.checkbox} />
            )}
            </TouchableOpacity>
            {item.isSelected && (
              <>
                <View style={styles.inputRow}>
                  <TextInput
                    placeholder=""
                    keyboardType="number-pad"
                    style={styles.input}
                    value={item.quantity}
                    onChangeText={value => handleQuantityChange(item.id, value)}
                  />
                  <Text style={styles.unitText}>{item.type == 'image' ? constant.images : "Video"}</Text>
                </View>
                <Text style={styles.helperText}>
                  {constant.give}
                  <Text style={styles.highlightText}>
                    {constant.minimum}
                    <Text style={styles.helperText}>{item.type == 'image' ? `${constant.numberOfImage} Image` : `${constant.numberOfImage} Video`} </Text>
                  </Text>
                </Text>
              </>
            )}
          </View>
        ))}
      </ScrollView>
      {/* <View style={styles.bottomContainer}> */}
        <ASButton
          title={constant.continue}
          customStyle={styles.btnContinue}
          onPress={moveToNextScreen}
        />
      {/* </View> */}
    </KeyboardAvoidingView>
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
    paddingBottom: 100, 
    flexGrow: 1,   
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
    marginTop: 8,
  },
  itemContainer: {
    marginTop: 16,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  itemText: {
    fontFamily: Fonts.medium,
    fontSize: 14,
    color: colors.black,
  },
  checkbox: {
    width: 20,
    height: 20,
    borderRadius: 4,
    borderWidth: 1,
    borderColor: colors.appColor,
  },
  checkedBox: {
    backgroundColor: colors.appColor,
  },
  inputRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 8,
    width: '50%',
  },
  input: {
    borderWidth: 1,
    borderColor: colors.appColor,
    borderRadius: 8,
    paddingHorizontal: 10,
    paddingVertical: 8,
    flex: 1,
    height: 41,
    color: colors.appColor,
  },
  inputOther: {
    borderWidth: 1,
    borderColor: colors.lineColor,
    borderRadius: 8,
    paddingHorizontal: 10,
    paddingVertical: 8,
    flex: 1,
    height: 41,
    color: colors.appColor,
  },
  unitText: {
    marginLeft: 8,
    fontSize: 12,
    fontFamily: Fonts.medium,
    color: colors.appColor,
  },
  helperText: {
    fontSize: 10,
    color: colors.textPrimary2,
    marginTop: 4,
    fontFamily: Fonts.regular,
  },
  highlightText: {
    fontSize: 10,
    color: colors.textPrimary2,
    fontFamily: Fonts.bold,
  },
  addButton: {
    width: 24,
    height: 24,
    borderWidth: 1,
    borderColor: colors.appColor,
    borderRadius: 12,
    alignItems: 'center',
    justifyContent: 'center',
  },
  plus: {
    fontSize: 16,
    color: colors.appColor,
  },
  bottomContainer: {
    paddingBottom: 20,
  },
  btnContinue: {
    backgroundColor: colors.appColor,
    // margin: 16,
    paddingVertical: 14,
    borderRadius: 50,
    alignItems: 'center',
    // bottom: 15,
  },
  otherText: {
    color: colors.appColor,
    fontFamily: Fonts.medium,
    fontSize: 15,
    marginTop: 11,
  },
  selectedIcon: {
    width: 20,
    height: 18,
    resizeMode: 'center',
    backgroundColor: colors.appColor,
    borderRadius: 5,
  },
  addButtonSelected: {
    backgroundColor: colors.appColor,
  },
  plusSelected: {
    color: colors.white,
  },
});

export default DeliverableDetailScreen;
