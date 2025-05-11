import React from "react";
import { View, Text, FlatList, StyleSheet, Image } from 'react-native';
import { icons } from "../utils/Icons";
import { Fonts } from "../utils/Fonts";
import { Colors } from "react-native/Libraries/NewAppScreen";
import { colors } from "../utils/Colors";

const notifications = [
  { id: '1', message: 'New message from John', isRead: false, title: 'Booking', date: '20 May 2025' },
  { id: '2', message: 'Your order has shipped', isRead: true , title: 'Order', date: '22 May 2025'},
  { id: '3', message: 'Reminder: Meeting at 3 PM', isRead: false, title: 'Reminder', date: '21 May 2025' },
  { id: '4', message: 'Reminder: Meeting at 3 PM', isRead: false, title: 'Reminder', date: '21 May 2025' },
  { id: '5', message: 'Reminder: Meeting at 3 PM', isRead: true, title: 'Reminder', date: '21 May 2025' },
  { id: '6', message: 'Reminder: Meeting at 3 PM', isRead: false, title: 'Reminder', date: '21 May 2025' },
];

const NotificationScreen: React.FC = () => {

  const renderNotification = ({ item } : { item : any}) => {
    return (
      <View style={[styles.notificationItem, item.isRead ? styles.read : styles.unread]}>
        <View>
        <Image source={icons.bellIcon} style={[styles.icon, { tintColor : item.isRead ? 'gray' : 'red'}]}/>
        {/* <Icon name="bell" size={20} color={item.isRead ? 'gray' : 'red'} /> */}
        </View>
        <View>
        <Text style={[styles.titleText, item.isRead && styles.readText]}>{item.title}</Text>
        <Text style={[styles.notificationText, item.isRead && styles.readText]}>{item.message}</Text>
        <Text style={[styles.dateText, item.isRead && styles.readText]}>{item.date}</Text>
        </View>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      {/* <View style={styles.header}>
        <Icon name="bell" size={30} color="#000" />
        <Text style={styles.headerText}>Notifications</Text>
      </View> */}

      <FlatList
        data={notifications}
        renderItem={renderNotification}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    backgroundColor: '#f8f8f8',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  headerText: {
    fontSize: 24,
    marginLeft: 10,
    fontWeight: 'bold',
  },
  notificationItem: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 12,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
    backgroundColor: '#fff',
    borderRadius: 8,
    marginBottom: 10,
  },
  unread: {
    backgroundColor: '#fff', // Light red for unread notifications
  },
  read: {
    backgroundColor: '#e0e0e0', // Light gray for read notifications
  },
  notificationText: {
    marginLeft: 10,
    fontSize: 13,
    fontFamily: Fonts.medium,
    color: colors.subTitleColor
  },
  titleText: {
    marginLeft: 10,
    fontSize: 16,
    fontFamily: Fonts.medium,
    marginVertical: 3
  },
  dateText: {
    marginLeft: 10,
    fontSize: 10,
    fontFamily: Fonts.regular,
    color: colors.subTitleColor,
    marginVertical: 3
  },
  readText: {
    color: 'gray',

  },
  icon: {
    width: 25,
    height: 25,
  },
});

export default NotificationScreen;