import React from "react"
import { Image, ScrollView, Text, TouchableOpacity, View, StyleSheet } from "react-native"
import { icons } from "../utils/Icons";
import { images } from "../utils/Images";
import { Fonts } from "../utils/Fonts";

export default function PackageDetails(){
  return (
    <ScrollView style={styles.container}>
      <View>
      {/* Shoot Info */}
      <View style={styles.shootInfo}>
        <View style={styles.infoBox}>
          <Image source={icons.timerIcon}  style={styles.icon}/>
          <Text style={styles.infoText}>25 hours</Text>
        </View>
        <View style={styles.infoBox}>
          <Image source={icons.locationAppColorIcon} style={styles.icon}/>
          <Text style={styles.infoText}>Your Location</Text>
        </View>
      </View>
      </View>

      {/* Includes in Package */}
      <Text style={styles.sectionTitle}>Includes in package</Text>
      <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.imageRow}>
        <View style={styles.card}>
          <Image source={images.details1} style={styles.cardImage} />
          <Text style={styles.cardText}>Raw Images{'\n'}1000</Text>
        </View>
        <View style={styles.card}>
          <Image source={images.details2} style={styles.cardImage} />
          <Text style={styles.cardText}>Edited Images{'\n'}250</Text>
        </View>
        <View style={styles.card}>
          <Image source={images.details3} style={styles.cardImage} />
          <Text style={styles.cardText}>Raw Videos{'\n'}2</Text>
        </View>
      </ScrollView>

      {/* Tabs (only showing Package Details for now) */}
      <View style={styles.tabs}>
        <TouchableOpacity style={styles.activeTab}>
          <Text style={styles.tabText}>Package Details</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.inactiveTab}>
          <Text style={styles.tabTextInactive}>Gears</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.inactiveTab}>
          <Text style={styles.tabTextInactive}>Review</Text>
        </TouchableOpacity>
      </View>

      {/* Package Description */}
      <Text style={styles.packageDescription}>
        Our Wedding Photography Package captures your special day with elegance and artistry. From candid moments to posed portraits, our professional photographers ensure every significant moment is beautifully documented.
      </Text>

      {/* Image Slider */}
      <Image
        source={images.stylishMan}
        style={styles.sliderImage}
        resizeMode="cover"
      />

      {/* Delivery Details */}
      <Text style={styles.sectionTitle}>Delivery Details</Text>
      <Text style={styles.subtitle}>When you will get deliverables</Text>

      {/* Delivery Table */}
      <View style={styles.deliveryTable}>
        <View style={styles.deliveryRow}>
          <Image source={icons.rawDataIcon} />
          <Text style={styles.deliveryText}>Raw Data - Offline - 20 days</Text>
        </View>
        <View style={styles.deliveryRow}>
          <Image source={icons.editRawDataIcon} />
          <Text style={styles.deliveryText}>Edited Data - Cloud sharing - 20 days</Text>
        </View>
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  shootInfo: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginVertical: 20,
  },
  infoBox: {
    alignItems: 'center',
    borderRadius: 10,
    borderWidth:1,
    borderColor: '#ccc',
  },
  infoText: {
    marginTop: 5,
    fontSize: 12,
    fontFamily : Fonts.regular
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#e53935',
    marginLeft: 20,
    marginTop: 20,
  },
  imageRow: {
    marginTop: 10,
    paddingHorizontal: 10,
  },
  card: {
    width: 120,
    marginRight: 15,
    alignItems: 'center',
  },
  cardImage: {
    width: 120,
    height: 150,
    borderRadius: 10,
  },
  cardText: {
    marginTop: 5,
    textAlign: 'center',
    fontSize: 14,
  },
  tabs: {
    flexDirection: 'row',
    marginVertical: 20,
    justifyContent: 'space-around',
  },
  activeTab: {
    backgroundColor: '#e53935',
    paddingVertical: 8,
    paddingHorizontal: 20,
    borderRadius: 20,
  },
  inactiveTab: {
    backgroundColor: '#eee',
    paddingVertical: 8,
    paddingHorizontal: 20,
    borderRadius: 20,
  },
  tabText: {
    color: '#fff',
    fontWeight: 'bold',
  },
  tabTextInactive: {
    color: '#333',
    fontWeight: 'bold',
  },
  packageDescription: {
    marginHorizontal: 20,
    fontSize: 16,
    lineHeight: 22,
    marginBottom: 20,
    color: '#555',
  },
  sliderImage: {
    width: '90%',
    height: 200,
    alignSelf: 'center',
    borderRadius: 10,
    marginBottom: 20,
  },
  subtitle: {
    marginLeft: 20,
    fontSize: 16,
    color: '#888',
  },
  deliveryTable: {
    margin: 20,
  },
  deliveryRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 10,
  },
  deliveryText: {
    marginLeft: 10,
    fontSize: 16,
  },
  icon: {
    width: 24,
    height: 24,
  }
});