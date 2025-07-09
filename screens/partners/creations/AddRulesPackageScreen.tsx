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

const rulesList = [
  {id: '1', rule: constant.rulesText1, isEditing: false, tempText: ''},
  {id: '2', rule: constant.rulesText2, isEditing: false, tempText: ''},
  {id: '3', rule: constant.rulesText3, isEditing: false, tempText: ''},
  {id: '4', rule: constant.rulesText4, isEditing: false, tempText: ''}
];

const AddRulesPackageScreen: React.FC = () => {
  const navigation =
    useNavigation<RootStackNavigationProp<'addRulesPackage'>>();
  const [rules, setRules] = useState(rulesList);

  const moveToNextScreen = () => {
    navigation.navigate('pricingDetailPackage');
  };

  const onEdit = (id: string) => {
    setRules(prev =>
      prev.map(item =>
        item.id === id ? {...item, isEditing: true, tempText: item.rule} : item,
      ),
    );
  };

  const onCancel = (id: string) => {
    setRules(prev =>
      prev.map(item =>
        item.id === id ? {...item, isEditing: false, tempText: ''} : item,
      ),
    );
  };

  const onSave = (id: string) => {
    setRules(prev =>
      prev.map(item =>
        item.id === id
          ? {...item, rule: item.tempText, isEditing: false, tempText: ''}
          : item,
      ),
    );
  };

  const onChangeTempText = (id: string, text: string) => {
    setRules(prev =>
      prev.map(item => (item.id === id ? {...item, tempText: text} : item)),
    );
  };

  const renderItem = ({item, index}: any) => (
    <View style={styles.ruleItem}>
      <View style={styles.numberView}>
        <Text style={styles.numbersText}>{index + 1}</Text>
      </View>

      {item.isEditing ? (
        <TextInput
          style={styles.input}
          value={item.tempText}
          onChangeText={text => onChangeTempText(item.id, text)}
          multiline
        />
      ) : (
        <Text style={styles.rulesText}>{item.rule}</Text>
      )}

      <View style={styles.iconContainer}>
        {item.isEditing ? (
          <>
            <TouchableOpacity
              style={styles.iconButton}
              onPress={() => onSave(item.id)}>
              <Image source={icons.nextArrowIcon} style={styles.image} />
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.iconButton}
              onPress={() => onCancel(item.id)}>
              <Image source={images.deleteIcon} style={styles.image} />
            </TouchableOpacity>
          </>
        ) : (
          <>
            <TouchableOpacity
              style={styles.iconButton}
              onPress={() => onEdit(item.id)}>
              <Image style={styles.image} source={images.editIcon} />
            </TouchableOpacity>
            <TouchableOpacity style={styles.iconButton}>
              <Image style={styles.image} source={images.deleteIcon} />
            </TouchableOpacity>
          </>
        )}
      </View>
    </View>
  );

  return (
    <SafeAreaView style={styles.container}>
      <KeyboardAvoidingView
        style={{flex: 1}}
        behavior={Platform.OS === 'ios' ? 'padding' : undefined}>
          <View style={styles.fullScreen}>
            <View style={{ marginHorizontal: 16}}>
          <Text style={styles.title}>{constant.addRules}</Text>
          <Text style={styles.subTitle}>{constant.addAnyExtra}</Text>
          <FlatList
            data={rules} 
            keyExtractor={item => item.id}
            renderItem={renderItem}
            contentContainerStyle={styles.listStyle}
          />
          </View>
         
            <ASButton
        title={constant.continue}
        // customStyle={styles.btnContinue}
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
  paddingView: {
    // height:'90%',
    marginHorizontal: 16
  },
  title: {
    fontFamily: Fonts.medium,
    fontSize: 16,
    color: colors.appColor,
    marginTop: 10
  },
  subTitle: {
    fontFamily: Fonts.regular,
    fontSize: 15,
    color: colors.textPrimary2,
    marginTop: 16,
  },
  listStyle: {
    marginTop: 64,
    // paddingHorizontal: 16,
  },
  ruleItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
  },
   fullScreen: {
    flex: 1,
    justifyContent: 'space-between',
    paddingBottom: 16,
  },
  numberView: {
    width: 25,
    height: 25,
    backgroundColor: colors.appLightColor,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 8,
  },
  numbersText: {
    fontSize: 12,
    fontFamily: Fonts.medium,
    color: colors.appColor,
  },
  rulesText: {
    flex: 1,
    fontSize: 14,
    fontFamily: Fonts.regular,
    color: colors.textPrimary2,
    marginRight: 10,
  },
  iconContainer: {
    flexDirection: 'row',
    gap: 8,
  },
  iconButton: {
    padding: 4,
  },
  image: {
    width: 16,
    height: 16,
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
  },
  clearText: {
    color: colors.appColor,
    fontSize: 12,
    fontFamily: Fonts.medium,
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
});

export default AddRulesPackageScreen;
