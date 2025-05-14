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
} from 'react-native';
import {constant} from '../../utils/Constant';
import {Fonts} from '../../utils/Fonts';
import {ASButton} from '../../components/ASButton';
import {colors} from '../../utils/Colors';
import {useNavigation} from '@react-navigation/native';
import {RootStackNavigationProp} from '../../../App';
import RNPickerSelect from 'react-native-picker-select';

const AddDeliveryDetailScreen: React.FC = () => {
  const navigation =
    useNavigation<RootStackNavigationProp<'addDeliveryDetailsPackage'>>();
  const [rawDataDeliveryMode, setRawDataDeliveryMode] = useState<string | null>(
    null,
  );
  const [editedDataDeliveryMode, setEditedDataDeliveryMode] = useState<
    string | null
  >(null);

  const moveToNextScreen = () => {
    navigation.navigate('pricingDetailPackage');
  };
  return (
    <View style={styles.container}>
      <KeyboardAvoidingView
        style={{flex: 1}}
        behavior={Platform.OS === 'ios' ? 'padding' : undefined}>
        <ScrollView contentContainerStyle={styles.scrollContent}>
          <View style={styles.paddingView}>
            <Text style={styles.title}>{constant.deliveryDetails}</Text>
            <Text style={styles.subTitle}>{constant.descDelivery}</Text>
          </View>
          <View style={styles.paddingView}>
            <Text style={styles.rawData}>{constant.rawData}</Text>

            <View style={{marginTop: 5}}>
              <Text style={styles.deliveryMode}>{constant.deliveryMode}</Text>
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

            <View style={{marginTop: 10}}>
              <Text style={styles.deliveryMode}>{constant.deliveyTime}</Text>
              <TextInput
                style={styles.input}
                placeholder={constant.numberOfDays}
                placeholderTextColor={colors.lineColor}></TextInput>
            </View>
          </View>
          // Edited Data
          <View style={styles.paddingView}>
            <Text style={styles.rawData}>{constant.editedData}</Text>

            <View style={{marginTop: 5}}>
              <Text style={styles.deliveryMode}>{constant.deliveryMode}</Text>
              <RNPickerSelect
                onValueChange={value => setEditedDataDeliveryMode(value)}
                placeholder={{label: constant.selectMode, value: null}}
                value={editedDataDeliveryMode}
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

            <View style={{marginTop: 10}}>
              <Text style={styles.deliveryMode}>{constant.deliveyTime}</Text>
              <TextInput
                style={styles.input}
                placeholder={constant.numberOfDays}
                placeholderTextColor={colors.lineColor}></TextInput>
            </View>
          </View>
          <View style={styles.bottomContainer}>
            <ASButton
              title={constant.continue}
              customStyle={styles.continueButton}
              onPress={moveToNextScreen}
            />
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
  title: {
    fontFamily: Fonts.medium,
    fontSize: 16,
    color: colors.appColor,
    top: 10,
  },
  rawData: {
    fontFamily: Fonts.medium,
    fontSize: 16,
    color: colors.appColor,
    marginTop: 32,
  },
  subTitle: {
    fontFamily: Fonts.regular,
    fontSize: 14,
    color: colors.textPrimary2,
    top: 10,
  },
  paddingView: {
    marginHorizontal: 16,
  },
  scrollContent: {
    paddingBottom: '70%',
  },
  bottomContainer: {
    position: 'absolute',
    bottom: 0,
    width: '100%',
    backgroundColor: colors.white,
    paddingHorizontal: 16,
    paddingVertical: 14,
  },
  continueButton: {
    backgroundColor: colors.appColor,
    margin: 16,
    paddingVertical: 14,
    borderRadius: 50,
    paddingHorizontal: 16,
  },
  deliveryMode: {
    fontSize: 12,
    color: colors.textPrimary2,
    fontFamily: Fonts.medium,
  },
  placeholder: {
    fontSize: 12,
    color: colors.lineColor,
    fontFamily: Fonts.medium,
  },
  input: {
    borderWidth: 1,
    borderColor: colors.lineColor,
    borderRadius: 8,
    height: 45,
    color: colors.appColor,
    fontFamily: Fonts.medium,
    fontSize: 14,
    paddingHorizontal: 10,
    paddingVertical: Platform.OS === 'ios' ? 12 : 8,
    marginTop: 5,
  },
});

export default AddDeliveryDetailScreen;
