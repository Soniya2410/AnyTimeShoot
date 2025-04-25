import React, { useLayoutEffect } from "react";
import {
  View,
  StyleSheet,
  FlatList,
  Text,
  Image,
  ScrollView
} from 'react-native';
import { BookingListItem } from "../booking/component/BookingListItem";
import { RouteProp, useRoute, useNavigation } from "@react-navigation/native";
import { colors } from "../utils/Colors";
import { StackNavigationProp } from '@react-navigation/stack';

type PackageListParams = {
  packageList: {
    title: string;
    data: any[];
  };
};
const PackageList: React.FC = () => {
  const route = useRoute<RouteProp<PackageListParams, 'packageList'>>();
  const navigation = useNavigation<StackNavigationProp<any>>();
  const { title, data } = route.params;

  console.log("recommended list", data);
  console.log("recommended list title", title);
  useLayoutEffect(() => {
    navigation.setOptions({
      title: title, 
    });
  }, [navigation, title]);

  const goToNextScreen = (item: any) => {
    console.log("item", item);
    navigation.navigate('packageDetail', {
      item: item,
    });
  }

  return(
      <View style={{marginHorizontal: 5, flex: 1, backgroundColor: colors.white,}}>
        <FlatList
          data={data}
          style={{marginTop: 10}}
          renderItem={({item}) => (
            <BookingListItem item={item} onPress={goToNextScreen} />
          )}
          keyExtractor={item => item.id}
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={{paddingHorizontal: 15}}
        />
        </View>
  )
}

export default PackageList;