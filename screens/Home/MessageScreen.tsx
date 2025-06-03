import React, { useState, useRef, useEffect } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  TextInput,
  SafeAreaView,
  FlatList,
  KeyboardAvoidingView,
  Platform,
} from 'react-native';
import { images } from '../utils/Images';
import { constant } from '../utils/Constant';
import { colors } from '../utils/Colors';
import { Fonts } from '../utils/Fonts';
import { icons } from '../utils/Icons';
import { RootStackNavigationProp } from '../../App';
import { useNavigation } from '@react-navigation/native';

interface Message {
  id: string;
  text: string;
  isUser: boolean;
  timestamp: Date;
}

const MessageScreen: React.FC = () => {
  const navigation = useNavigation<RootStackNavigationProp<'login'>>();
  const [messages, setMessages] = useState<Message[]>([]);
  const [inputText, setInputText] = useState('');
  const flatListRef = useRef<FlatList>(null);

  const moveToNavigation = () => {
    // navigation.navigate('gearAndSoftware');
    navigation.navigate('bookingType');
  }

  // Load sample messages (in a real app, you'd fetch these from an API)
  useEffect(() => {
    const initialMessages: Message[] = [
      {
        id: '1',
        text: 'Hello! How can I help you today?',
        isUser: false,
        timestamp: new Date(Date.now() - 60000),
      },
      {
        id: '2',
        text: 'Welcome to our support chat!',
        isUser: false,
        timestamp: new Date(Date.now() - 300000),
      },
    ];
    setMessages(initialMessages);
  }, []);

  // Scroll to bottom when messages change
  useEffect(() => {
    if (messages.length > 0) {
      setTimeout(() => {
        flatListRef.current?.scrollToEnd({ animated: true });
      }, 100);
    }
  }, [messages]);

  const handleSend = () => {
    if (inputText.trim() === '') return;

    const newMessage: Message = {
      id: Date.now().toString(),
      text: inputText,
      isUser: true,
      timestamp: new Date(),
    };

    setMessages([...messages, newMessage]);
    setInputText('');

    // Simulate a reply after 1 second
    setTimeout(() => {
      const replyMessage: Message = {
        id: (Date.now() + 1).toString(),
        text: 'Thanks for your message! Our team will get back to you soon.',
        isUser: false,
        timestamp: new Date(),
      };
      setMessages(prev => [...prev, replyMessage]);
    }, 1000);
  };

  const renderMessage = ({ item }: { item: Message }) => {
    return (
      <View style={[
        styles.messageBubble,
        item.isUser ? styles.userBubble : styles.otherBubble
      ]}>
        <Text style={[
          styles.messageText,
          item.isUser ? styles.userText : styles.otherText
        ]}>
          {item.text}
        </Text>
        <Text style={[
          styles.timestamp,
          item.isUser ? styles.userTimestamp : styles.otherTimestamp
        ]}>
          {item.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
        </Text>
      </View>
    );
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        {/* Header */}
        <View style={styles.header}>
          <View style={styles.titleRow}>
            <View style={styles.statusIndicator} />
            <Text style={styles.title}>
              {constant.anyTime}
              <Text style={styles.highlight}>{constant.shoot}</Text>{' '}
              {constant.support}
            </Text>
          </View>
        </View>

        {/* Chat Messages */}
        {messages.length > 0 ? (
          <FlatList
            ref={flatListRef}
            data={messages}
            renderItem={renderMessage}
            keyExtractor={(item) => item.id}
            contentContainerStyle={styles.messagesContainer}
            showsVerticalScrollIndicator={false}
          />
        ) : (
          <View style={styles.emptyChat}>
            <Image 
              source={images.messageCenterImage} 
              style={styles.illustration}
              resizeMode="contain"
            />
            <Text style={styles.emptyChatText}>No messages yet</Text>
          </View>
        )}

        {/* Message Input */}
        <KeyboardAvoidingView
          behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
          keyboardVerticalOffset={Platform.OS === 'ios' ? 80 : 0}
        >
          <View style={styles.inputWrapper}>
            <TouchableOpacity style={styles.iconButton} onPress={moveToNavigation}>
              <Image 
                source={icons.addImageIcon} 
                style={styles.icon}
                resizeMode="contain"
              />
            </TouchableOpacity>
            
            <TextInput
              style={styles.input}
              placeholder={constant.typeMessageHere}
              placeholderTextColor={colors.textPrimary2}
              value={inputText}
              onChangeText={setInputText}
              onSubmitEditing={handleSend}
              returnKeyType="send"
            />
            
            <TouchableOpacity 
              style={styles.iconButton}
              onPress={handleSend}
              disabled={inputText.trim() === ''}
            >
              <Image 
                source={icons.sendIcon} 
                style={[
                  styles.icon,
                  inputText.trim() === '' && styles.disabledIcon
                ]}
                resizeMode="contain"
              />
            </TouchableOpacity>
          </View>
        </KeyboardAvoidingView>
      </View>
    </SafeAreaView>
  );
};

// Enhanced Styles
const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: colors.white,
  },
  container: {
    flex: 1,
    backgroundColor: colors.white,
  },
  header: {
    padding: 15,
    borderBottomWidth: 1,
    borderColor: colors.lineColor,
    justifyContent: 'center',
  },
  titleRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  statusIndicator: {
    width: 6,
    height: 6,
    backgroundColor: colors.appliedColor,
    borderRadius: 5,
    marginRight: 8,
  },
  title: {
    fontSize: 16,
    fontFamily: Fonts.regular,
    color: colors.textPrimary2,
  },
  highlight: {
    fontFamily: Fonts.medium,
    color: colors.appColor,
  },
  emptyChat: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  emptyChatText: {
    marginTop: 16,
    fontSize: 16,
    color: colors.textPrimary2,
    fontFamily: Fonts.regular,
  },
  illustration: {
    width: 200,
    height: 200,
  },
  messagesContainer: {
    paddingHorizontal: 16,
    paddingVertical: 8,
    flexGrow: 1,
  },
  messageBubble: {
    maxWidth: '80%',
    padding: 12,
    borderRadius: 16,
    marginVertical: 4,
  },
  userBubble: {
    alignSelf: 'flex-end',
    backgroundColor: colors.appColor,
    borderBottomRightRadius: 4,
  },
  otherBubble: {
    alignSelf: 'flex-start',
    backgroundColor: colors.inputBackground,
    borderBottomLeftRadius: 4,
  },
  messageText: {
    fontSize: 14,
    fontFamily: Fonts.regular,
  },
  userText: {
    color: colors.white,
  },
  otherText: {
    // color: colors.textPrimary,
  },
  timestamp: {
    fontSize: 10,
    marginTop: 4,
    textAlign: 'right',
  },
  userTimestamp: {
    color: colors.white,
  },
  otherTimestamp: {
    color: colors.textPrimary2,
  },
  inputWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    marginHorizontal: 10,
    marginBottom: 10,
    borderWidth: 1,
    borderColor: colors.lineColor,
    borderRadius: 25,
    backgroundColor: colors.white,
    paddingHorizontal: 10,
    height: 45,
  },
  input: {
    flex: 1,
    height: 40,
    fontSize: 14,
    paddingHorizontal: 10,
    fontFamily: Fonts.regular,
    color: colors.textPrimary2,
  },
  iconButton: {
    padding: 8,
  },
  icon: {
    width: 24,
    height: 24,
  },
  disabledIcon: {
    opacity: 0.3,
  },
});

export default MessageScreen;