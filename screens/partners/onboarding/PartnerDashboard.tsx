import React from 'react';
import {
  SafeAreaView,
  FlatList,
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import { colors } from '../../utils/Colors';
import { Fonts } from '../../utils/Fonts';
import { useNavigation } from '@react-navigation/native';
import { ASButton } from '../../components/ASButton';

const dashboardStats = [
  {
    label: 'Total Bookings',
    value: '124',
    delta: '↑ 12% from last month',
    isPositive: true,
  },
  {
    label: 'Total Revenue',
    value: '$24,500',
    delta: '↑ 8% from last month',
    isPositive: true,
  },
  {
    label: 'Active Packages',
    value: '8',
    delta: '↑ 2 from last month',
    isPositive: true,
  },
  {
    label: 'Total Clients',
    value: '98',
    delta: '↑ 15% from last month',
    isPositive: true,
  },
  {
    label: 'Completed Sessions',
    value: '112',
    delta: '↑ 10% from last month',
    isPositive: true,
  },
  {
    label: 'Cancellations',
    value: '12',
    delta: '↓ 5% from last month',
    isPositive: false,
  },
];

const PartnerDashboard = () => {
  const navigation = useNavigation();

  const moveNextPage = () => {
    
  }

  const renderItem = ({ item }: any) => (
    <View style={styles.card}>
      <Text style={styles.cardLabel}>{item.label}</Text>
      <Text style={styles.cardValue}>{item.value}</Text>
      <Text
        style={[
          styles.cardDelta,
          { color: item.isPositive ? '#10B981' : '#EF4444' },
        ]}
      >
        {item.delta}
      </Text>
    </View>
  );

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.title}>Dashboard</Text>
        <Text style={styles.subtitle}>
          Overview of your photography business performance
        </Text>

        {/* Grid View */}
        <FlatList
          data={dashboardStats}
          renderItem={renderItem}
          numColumns={2}
          columnWrapperStyle={styles.row}
          contentContainerStyle={{ paddingBottom: 20}}
          keyExtractor={(item, index) => index.toString()}
        />
        <ASButton
          title='Add Package'
          onPress={moveNextPage}
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
  content: {
    padding: 16,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 12,
  },
  backText: {
    fontSize: 14,
    color: colors.textPrimary2,
    fontFamily: Fonts.medium,
  },
  headerTitle: {
    fontSize: 16,
    fontFamily: Fonts.semiBold,
    color: colors.textPrimary2,
  },
  helpButton: {
    fontSize: 14,
    fontFamily: Fonts.medium,
    color: colors.textPrimary2,
    paddingVertical: 4,
    paddingHorizontal: 10,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: colors.textPrimary2,
  },
  title: {
    fontSize: 20,
    fontFamily: Fonts.semiBold,
    color: colors.textPrimary2,
    marginBottom: 4,
  },
  subtitle: {
    fontSize: 14,
    fontFamily: Fonts.regular,
    color: colors.textPrimary2,
    marginBottom: 16,
  },
  row: {
    justifyContent: 'space-between',
  },
  card: {
    backgroundColor: '#F5F7FA90',
    flex: 1,
    padding: 16,
    borderRadius: 16,
    marginBottom: 16,
    marginHorizontal: 6,
    minWidth: '45%',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.06,
    shadowRadius: 6,
    elevation: 1,
    borderWidth: 1,
    borderColor: colors.appColor
  },
  cardLabel: {
    fontSize: 14,
    fontFamily: Fonts.semiBold,
    color: colors.textPrimary2,
    marginBottom: 6,
  },
  cardValue: {
    fontSize: 22,
    fontFamily: Fonts.semiBold,
    color: colors.appColor,
  },
  cardDelta: {
    fontSize: 12,
    fontFamily: Fonts.medium,
    marginTop: 8,
  },
});


export default PartnerDashboard;
