import { FlatList, StyleSheet, View } from "react-native";
import InstantBookingCard from "./InstantBookingsCard";

const InstantBooking = ({instantBooking} : {instantBooking : any}) => {
  const renderItem = ({ item } : {item : any}) => (
    <View style={styles.itemContainer}>
      <InstantBookingCard item={item} />
    </View>
  );
  return (
    <FlatList
      data={instantBooking}
      renderItem={renderItem}
      keyExtractor={(item) => item.id.toString()}
      numColumns={3} 
      contentContainerStyle={styles.container}
      showsVerticalScrollIndicator={false}
    />
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 10, 
  },
  itemContainer: {
    flex: 1, 
    margin: 5, 
  },
});
export default InstantBooking;