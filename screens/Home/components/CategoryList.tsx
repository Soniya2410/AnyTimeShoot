import React from 'react';
import { View, Text, FlatList } from 'react-native';
import { images } from '../../utils/Images';
import { icons } from '../../utils/Icons';
import { CategoryItem } from './CategoryItem';
import { useNavigation } from '@react-navigation/native';
import { RootStackNavigationProp } from '../../../App';

const CategoryList = () => {

const navigation = useNavigation<RootStackNavigationProp<'homeScreen'>>();
const categories = [
    {
      id: '1',
      title: 'Wedding',
      image: images.category1,
      des: 'Destination, luxury styling and all-inclusive photography and videography packages.'
    },
    {
      id: '2',
      title: 'Pre-wedding',
      image: images.category2,
       des: 'Romantic storybook sessions in scenic locales, personalized styling and cinematic video options.'
    },
    {
      id: '3',
      title: 'Maternity',
      image: images.category3,
       des: 'Elegant, glow-focused portraits with comfortable studio or outdoor settings and bespoke styling.'
    },
    {
      id: '4',
      title: 'New Born',
      image: images.category4,
       des: 'Soft-lit, heartwarming baby portraits with themed setups, safety-first handling and keepsake albums.'
    },
    {
      id: '6',
      title: 'Birthday',
      image: images.category5,
      des: 'Fun, vibrant party coverage with themed backdrops, candid shots and instant digital galleries.'
    },
    {
      id: '7',
      title: 'Events',
      image: images.category6,
      des: 'Corporate or social—with multi-camera setups, haldi, mehendi, anniversary, retirement, griha pravesh.'
    },
    {
      id: '8',
      title: 'Product',
      image: images.category7,
      des: 'High-impact product photography and videography with studio lighting, 360° spins, and white-background shots.'
    },
     {
      id: '9',
      title: 'Food',
      image: images.category8,
      des: 'Mouthwatering food styling and photography, overhead & close-up shots, plus recipe video snippets.'
    },
     {
      id: '10',
      title: 'Real Estate',
      image: images.category9,
      des: 'Property tours with wide-angle shots, drone shots and interactive 3D walkthroughs with or without model.'
    },
     {
      id: '11',
      title: 'Reels',
      image: images.category10,
      des: 'Trend-driven, dynamic short-form videos optimized for social platforms, complete with soundtracks and effects.'
    },
      {
      id: '12',
      title: 'Pet',
      image: images.category11,
      des: 'Playful pet portraits and action shots in studio or park settings, plus fun slow-mo and boomerang reels.'
    },
      {
      id: '13',
      title: 'Other',
      image: images.category12,
      des: 'Tailored shoots—fashion, travel, interior, headshot, portrait, personal branding, podcast and flexible packages.'
    },
  ];

  const recommended = [
      {
        id: '1',
        title: 'Wedding Xperts',
        description: 'Wedding Shoot:  5 Days',
        price: '2,00,000/-',
        offerPrice: '1,80,000/-',
        image: images.wedding,
        rating: 4.5,
        liked: false,
        offerText: 'Limited Offer'
      },
      {
        id: '2',
        title: 'Maternity Shoot',
        description: 'Wedding Shoot:  5 Days',
        price: '10,000/-',
        offerPrice: '8,000/-',
        image: images.baby1,
        rating: 4.7,
        liked: false,
        offerText: 'Limited Offer'
      },
      {
        id: '3',
        title: 'Pre-Wedding Shoot',
        description: 'Wedding Shoot:  5 Days',
        price: '1,00,000/-',
        offerPrice: '90,000/-',
        image: images.marragie1,
        rating: 4,
        liked: false,
        offerText: 'Limited Offer'
      },
    ];

  
  return(
    <View style={{ flex: 1}}>
      <FlatList
      style={{marginTop: 10}}
        data={categories}
        renderItem={({item}) => 
        <CategoryItem item={item} onPress={() => {navigation.navigate('packageList', {title: 'Package List', data: recommended})}}/>}
        />
    </View>
  )
}

export default CategoryList;