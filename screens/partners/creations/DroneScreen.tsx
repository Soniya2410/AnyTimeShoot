import React, {useState} from 'react';
import {
  Text,
  View,
  StyleSheet,
  ScrollView,
  TextInput,
  SafeAreaView,
  TouchableOpacity,
} from 'react-native';
import {constant} from '../../utils/Constant';
import {Fonts} from '../../utils/Fonts';
import {ASButton} from '../../components/ASButton';
import {colors} from '../../utils/Colors';
import {useNavigation} from '@react-navigation/native';
import {RootStackNavigationProp} from '../../../App';

const DroneScreen: React.FC = () => {
  const navigation =
    useNavigation<RootStackNavigationProp<'drone'>>();
  const [blockCount, setBlockCount] = useState(1);

  const handleAdd = () => setBlockCount(prev => prev + 1);
  const handleRemove = () => setBlockCount(prev => (prev > 1 ? prev - 1 : 1));

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContent}>
        <Text style={styles.title}>{constant.drone}</Text>
        <Text style={styles.subtitle}>{constant.droneDetail}</Text>

        {Array.from({length: blockCount}).map((_, index) => (
          <View key={index} style={styles.blockContainer}>
            <View style={styles.labelRow}>
              <Text style={styles.label1}>{constant.brandName}</Text>
              {index === 0 && (
                <View style={styles.qtyControl}>
                  <TouchableOpacity style={styles.qtyButton} onPress={handleRemove}>
                    <Text style={styles.qtyText}>−</Text>
                  </TouchableOpacity>
                  <Text style={styles.qtyValue}>{blockCount}</Text>
                  <TouchableOpacity style={styles.qtyButton} onPress={handleAdd}>
                    <Text style={styles.qtyText}>+</Text>
                  </TouchableOpacity>
                </View>
              )}
            </View>

            <TextInput
              placeholder={constant.enterModelOfCompany}
              placeholderTextColor={colors.textPrimary2}
              style={styles.input}
            />

            <Text style={styles.label2}>{constant.model}</Text>
            <TextInput
              placeholder={constant.enterModelOfCamera}
              placeholderTextColor={colors.textPrimary2}
              style={styles.input}
            />
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
  blockContainer: {
    marginBottom: 20,
  },
  labelRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  label1: {
    fontFamily: Fonts.medium,
    fontSize: 15,
    color: colors.textPrimary2,
  },
  label2: {
    fontFamily: Fonts.medium,
    fontSize: 15,
    color: colors.textPrimary2,
    marginTop: 10,
  },
  input: {
    height: 41,
    borderWidth: 1,
    borderColor: colors.borderColors,
    borderRadius: 10,
    paddingHorizontal: 8,
    marginTop: 4,
    color: colors.appColor,
    fontFamily: Fonts.medium,
    fontSize: 12,
  },
  qtyControl: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  qtyButton: {
    backgroundColor: colors.appColor,
    borderRadius: 10,
    marginHorizontal: 4,
    justifyContent:'center',
    alignItems:'center',
    width: 20,
    height: 20
  },
  qtyText: {
    color: colors.white,
    fontSize: 12,
    fontWeight: 'bold',
  },
  qtyValue: {
    fontSize: 14,
    width: 15,
    textAlign:'center',
    fontFamily: Fonts.medium,
    color: colors.appColor,
  },
  footer: {
    paddingBottom: 16,
    // backgroundColor: colors.white,
  },
});

export default DroneScreen;
