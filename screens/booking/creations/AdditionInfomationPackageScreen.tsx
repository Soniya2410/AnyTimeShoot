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
  const navigation =
    useNavigation<RootStackNavigationProp<'additionalInformationPackage'>>();
const [rawDataDeliveryMode, setRawDataDeliveryMode] = useState<string | null>(
    null,
  );
   const [editedDataDeliveryMode, setEditedDataDeliveryMode] = useState<
      string | null
    >(null);

  const moveToNextScreen = () => {
    navigation.navigate('extraPerksPackage');
  };
  return (
    <View style={styles.container}>
      <KeyboardAvoidingView
        style={{flex: 1}}
        behavior={Platform.OS === 'ios' ? 'padding' : undefined}>
        <ScrollView contentContainerStyle={styles.scrollContent}>
          <View style={styles.paddingView}>
            <Text style={styles.title}>{constant.addRules}</Text>
            <Text style={styles.subTitle}>{constant.addAnyExtra}</Text>
          </View>
          <View style={styles.paddingView}>
            <View style={{marginTop: 5}}>
              <Text style={styles.deliveryMode}>{constant.chooseCancellationPolicy}</Text>
              {/* <TextInput
                style={styles.input}
                placeholder={constant.selectMode}
                placeholderTextColor={colors.lineColor}></TextInput> */}
              <RNPickerSelect
                onValueChange={value => setEditedDataDeliveryMode(value)}
                value={editedDataDeliveryMode} 
                placeholder={{label: constant.selectMode, value: null}}
                items={[
                  {label: constant.offline, value: constant.offline},
                  {label: constant.cloudSharing, value: constant.cloudSharing},
                ]}
                useNativeAndroidPickerStyle={false}
                style={{
                  inputIOS: styles.input,
                  inputAndroid: styles.input,
                  placeholder: {
                    color: colors.lineColor,
                  },
                }}
              />
            </View>

            <View style={{marginTop: 23}}>
              <Text style={styles.deliveryMode}>{constant.locationWhereYouAccepting}</Text>
              <TextInput
                style={styles.input}
                placeholder={constant.numberOfDays}
                placeholderTextColor={colors.lineColor}></TextInput>
            </View>
          </View>
          <View style={styles.bottomContainer}>
          <ASButton title={constant.continue} onPress={moveToNextScreen} customStyle={styles.btnContinue} />
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
  },
  scrollContent: {
    paddingBottom: '100%',
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
  bottomContainer: {
    position: 'absolute',
    bottom: 0,
    width: '100%',
    backgroundColor: colors.white,
    paddingHorizontal: 16,
    paddingVertical: 14,
  },
  btnContinue: {
    backgroundColor: colors.appColor,
    margin: 16,
    paddingVertical: 14,
    borderRadius: 50,
    paddingHorizontal: 16,
  },
  input: {
    flex: 1,
    borderWidth: 1,
    borderColor: colors.lineColor,
    borderRadius: 8,
    paddingHorizontal: 10,
    paddingVertical: 10,
    fontSize: 14,
    fontFamily: Fonts.regular,
    color: colors.textPrimary2,
    marginRight: 10,
    minHeight: 52,
    marginTop: 3,
  },
   deliveryMode: {
    fontSize: 15,
    color: colors.textPrimary2,
    fontFamily: Fonts.medium,
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
});

export default AdditionalInformationPackageScreen;
