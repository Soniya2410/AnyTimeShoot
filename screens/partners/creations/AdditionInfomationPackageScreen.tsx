import React, {useState} from 'react';
import {
  Text,
  View,
  StyleSheet,
  ScrollView,
  KeyboardAvoidingView,
  Platform,
  TouchableOpacity,
  Image,
  FlatList,
  TextInput,
  SafeAreaView,
} from 'react-native';
import {constant} from '../../utils/Constant';
import {Fonts} from '../../utils/Fonts';
import {colors} from '../../utils/Colors';
import {useNavigation} from '@react-navigation/native';
import {RootStackNavigationProp} from '../../../App';
import {images} from '../../utils/Images';
import {ASButton} from '../../components/ASButton';
import {icons} from '../../utils/Icons';
import RNPickerSelect from 'react-native-picker-select';

const AdditionalInformationPackageScreen: React.FC = () => {
  const navigation = useNavigation<RootStackNavigationProp<'additionalInformationPackage'>>();
  const [locations, setLocations] = useState(['']);
  const [editedDataDeliveryMode, setEditedDataDeliveryMode] = useState<
    string | null
  >(null);

  const moveToNextScreen = () => {
    navigation.navigate('addRulesPackage');
  };

  const handleAddField = () => {
    setLocations([...locations, '']);
  };

  const handleTextChange = (text: string, index: number) => {
    const updated = [...locations];
    updated[index] = text;
    setLocations(updated);
  };

  return (
    <SafeAreaView style={styles.container}>
    <KeyboardAvoidingView
          style={{flex: 1, marginHorizontal: 16}}
          behavior={Platform.OS === 'ios' ? 'padding' : undefined}>
            <ScrollView showsVerticalScrollIndicator={false}>
          <Text style={styles.title}>{constant.additionInformation}</Text>
          <Text style={styles.subTitle}>{constant.giveSomeMoreDetails}</Text>

          <Text style={styles.deliveryMode}>
            {constant.chooseCancellationPolicy}
          </Text>
          <View style={{zIndex: 10}}>
            <RNPickerSelect
              onValueChange={value => setEditedDataDeliveryMode(value)}
              value={editedDataDeliveryMode}
              placeholder={{label: constant.selectMode, value: null}}
              items={[
                {label: constant.policy1, value: constant.policy1},
                {label: constant.policy2, value: constant.policy2},
                {label: constant.policy3, value: constant.policy3},
                {label: constant.policy4, value: constant.policy4},
                {label: constant.policy5, value: constant.policy5},
              ]}
              useNativeAndroidPickerStyle={false}
              style={{
                inputIOS: styles.input,
                inputAndroid: styles.input,
                iconContainer: {
                  top: 25,
                  right: 10,
                },
                placeholder: {
                  color: colors.lineColor,
                },
              }}
              Icon={() => {
                return (
                  <View
                    style={{
                      borderTopWidth: 6,
                      borderTopColor: colors.appColor,
                      borderRightWidth: 6,
                      borderRightColor: 'transparent',
                      borderLeftWidth: 6,
                      borderLeftColor: 'transparent',
                      width: 0,
                      height: 0,
                    }}
                  />
                );
              }}
            />
          </View>

          <Text style={styles.deliveryMode}>
            {constant.locationWhereYouAccepting}
          </Text>
          {locations.map((location, index) => (
        <View style={styles.inputRow} key={index}>
          <TextInput
            // style={styles.input}
            value={location}
            onChangeText={text => handleTextChange(text, index)}
            placeholder="Enter location"
            placeholderTextColor={colors.lineColor}
          />
          {index === locations.length - 1 && (
            <TouchableOpacity onPress={handleAddField} style={styles.addButton}>
              <Image source={images.addIcon} style={styles.icon} />
              {/* <Icon name="add" size={20} color={colors.appColor} /> */}
            </TouchableOpacity>
          )}
        </View>
      ))}
          {/* <TextInput
            style={styles.input}
            placeholder={constant.numberOfDays}
            placeholderTextColor={colors.lineColor} /> */}
            </ScrollView>
        </KeyboardAvoidingView>
        <View style={styles.bottomContainer}>
          <ASButton
            title={constant.continue}
            onPress={moveToNextScreen}    
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
  paddingView: {
    marginHorizontal: 16,
    marginTop: 20,
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
  inputRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent:'space-between',
    height: 52,
    borderWidth: 1,
    borderColor: colors.lineColor,
    borderRadius: 8,
    paddingHorizontal: 10,
    marginBottom: 10,
  },
  bottomContainer: {
  
    paddingBottom: 10
  },
  input: {
    borderWidth: 1,
    borderColor: colors.lineColor,
    borderRadius: 8,
    paddingHorizontal: 10,
    paddingVertical: 10,
    fontSize: 14,
    fontFamily: Fonts.regular,
    color: colors.appColor,
    // marginRight: 10,
    minHeight: 52,
    marginTop: 3,
  },
  deliveryMode: {
    fontSize: 15,
    color: colors.textPrimary2,
    fontFamily: Fonts.medium,
    marginVertical: 10,
    marginTop: 20,
  },
  rawData: {
    fontFamily: Fonts.medium,
    fontSize: 16,
    color: colors.appColor,
    marginTop: 32,
  },
  placeholder: {
    fontSize: 12,
    color: colors.lineColor,
    fontFamily: Fonts.medium,
  },
  addButton: {
    marginLeft: 10,
  },
  icon : {
    height: 20,
    width: 20
  }
});

export default AdditionalInformationPackageScreen;
