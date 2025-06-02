import React, {useState} from 'react';
import {
  Text,
  View,
  StyleSheet,
  ScrollView,
  TextInput,
  KeyboardAvoidingView,
  Platform,
  SafeAreaView,
} from 'react-native';
import {constant} from '../../utils/Constant';
import {Fonts} from '../../utils/Fonts';
import {ASButton} from '../../components/ASButton';
import {colors} from '../../utils/Colors';
import {useNavigation} from '@react-navigation/native';
import {RootStackNavigationProp} from '../../../App';
import RNPickerSelect from 'react-native-picker-select';

const AddDeliveryDetailScreen: React.FC = () => {
  const [idTipsVisible, setIdTipsVisible] = useState(false);
  
  const navigation =
    useNavigation<RootStackNavigationProp<'addDeliveryDetailsPackage'>>();
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
    <SafeAreaView style={styles.container}>
       <KeyboardAvoidingView
          style={styles.flex}
          behavior={Platform.OS === 'ios' ? 'padding' : undefined}
          keyboardVerticalOffset={Platform.OS === 'ios' ? 100 : 0}
        >
          <ScrollView
            contentContainerStyle={styles.scrollContent}
            keyboardShouldPersistTaps="handled"
          >
          <View style={styles.paddingView}>
            <Text style={styles.title}>{constant.deliveryDetails}</Text>
            <Text style={styles.subTitle}>{constant.descDelivery}</Text>
          </View>
          <View style={styles.paddingView}>
            <Text style={styles.rawData}>{constant.rawData}</Text>
            <View style={{marginTop: 5}}>
              <Text style={styles.deliveryMode}>{constant.deliveryMode}</Text>
              <View style={{ zIndex: 10 }}>
              <RNPickerSelect
                onValueChange={value => setRawDataDeliveryMode(value)}
                value={rawDataDeliveryMode} 
                placeholder={{label: constant.selectMode, value: null}}
                items={[
                  {label: constant.offline, value: constant.offline},
                  {label: constant.cloudSharing, value: constant.cloudSharing},
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
                    <View style={{ 
                      borderTopWidth: 6, 
                      borderTopColor: colors.appColor,
                      borderRightWidth: 6, 
                      borderRightColor: 'transparent',
                      borderLeftWidth: 6, 
                      borderLeftColor: 'transparent', 
                      width: 0, height: 0 }}
                    />
                  );
                }}
              />
            </View>
            </View>
            <View style={{marginTop: 10}}>
              <Text style={styles.deliveryMode}>{constant.deliveyTime}</Text>
              <TextInput
                style={styles.input}
                placeholder={constant.numberOfDays}
                placeholderTextColor={colors.lineColor}></TextInput>
            </View>
          </View>
          {/* Edited Data */}
          <View style={styles.paddingView}>
            <Text style={styles.rawData}>{constant.editedData}</Text>
            <View style={{marginTop: 5}}>
              <Text style={styles.deliveryMode}>{constant.deliveryMode}</Text>
              <View style={{ zIndex: 10 }}>
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
                    <View style={{ 
                      borderTopWidth: 6, 
                      borderTopColor: colors.appColor,
                      borderRightWidth: 6, 
                      borderRightColor: 'transparent',
                      borderLeftWidth: 6, 
                      borderLeftColor: 'transparent', 
                      width: 0, height: 0 }}
                    />
                  );
                }}
              />
              </View>
            </View>

            <View style={{marginTop: 10}}>
              <Text style={styles.deliveryMode}>{constant.deliveyTime}</Text>
              <TextInput
                style={styles.input}
                placeholder={constant.numberOfDays}
                placeholderTextColor={colors.lineColor}></TextInput>
            </View>
          </View>
        </ScrollView>
        {/* </View> */}
        <View style={styles.bottomContainer}>
            <ASButton
              title={constant.continue}
              customStyle={styles.continueButton}
              onPress={moveToNextScreen}
            />
          </View>
      </KeyboardAvoidingView>
    </SafeAreaView>
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
    marginVertical: 10,
  },
  paddingView: {
    marginHorizontal: 16,
  },
 flex: {
  flex: 1,
},
scrollContent: {
  // paddingBottom: 50, 
},
bottomContainer: {
  padding: 16,
  backgroundColor: colors.white,
  borderTopWidth: 1,
  borderColor: '#eee',
},
  // bottomContainer: {
  //   position: 'absolute',
  //   bottom: 0,
  //   width: '100%',
  //   backgroundColor: colors.white,
  //   paddingHorizontal: 16,
  //   paddingVertical: 14,
  // },
  continueButton: {
    backgroundColor: colors.appColor,
    // margin: 16,
    paddingVertical: 14,
    borderRadius: 50,
    // marginHorizontal: 16,
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
  tipsToggle: {
    color: colors.appColor,
    marginTop: 8,
    fontFamily: Fonts.semiBold
  },
});

export default AddDeliveryDetailScreen;
