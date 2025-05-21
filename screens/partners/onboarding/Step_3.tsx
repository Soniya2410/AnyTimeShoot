import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native"
import { useState } from "react"
import DocumentPicker from 'react-native-document-picker';
import { images } from "../../utils/Images";
import { colors } from "../../utils/Colors";
import { Fonts } from "../../utils/Fonts";

const Step_3: React.FC = () => {
  const [profileTipsVisible, setProfileTipsVisible] = useState(false);
  const [idTipsVisible, setIdTipsVisible] = useState(false);

  const handleFilePick = async (label : any) => {
    try {
      const res = await DocumentPicker.pick({
        type: [DocumentPicker.types.images],
      });
      console.log(`${label} file selected:`, res);
    } catch (err) {
      if (DocumentPicker.isCancel(err)) {
        console.log('File selection cancelled');
      } else {
        console.error(err);
      }
    }
  };

  const renderUploadBox = (label : any, onTipsToggle : any, tipsVisible : boolean) => (
    <View style={styles.uploadContainer}>
      <Text style={styles.label}>{label} *</Text>
      <TouchableOpacity
        style={styles.uploadBox}
        onPress={() => handleFilePick(label)}
      >
        <Image source={images.uploadIcon} />
        <Text style={styles.uploadText}>
          Choose a file or drag & drop it here
        </Text>
        <Text style={styles.fileNote}>JPEG or PNG formats, up to 50MB</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={onTipsToggle}>
        <Text style={styles.tipsToggle}>Tips {tipsVisible ? '▲' : '▼'}</Text>
      </TouchableOpacity>

      {tipsVisible && (
        <View>
        <Text style={styles.tipsContent}>
          1. Face should be clearly visible
        </Text>
         <Text style={styles.tipsContent}>
          2. Profile photo with camera will be good
       </Text>
       <Text style={styles.tipsContent}>
          3. Use a headshot or a photo that includes your upper body
       </Text>
       <Text style={styles.tipsContent}>
          4. Preferably using natural light for the best clarity.
       </Text>
       </View>
      )}
    </View>
  );

  return(
    <View style={styles.container}>
      {renderUploadBox('Profile Picture', () => setProfileTipsVisible(!profileTipsVisible), profileTipsVisible)}
      {renderUploadBox('Government ID', () => setIdTipsVisible(!idTipsVisible), idTipsVisible)}
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    paddingVertical: 10,
  },
  uploadContainer: {
    marginBottom: 30,
  },
  label: {
    fontSize: 18,
    fontFamily: Fonts.medium,
    marginBottom: 10,
  },
  uploadBox: {
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 10,
    paddingVertical: 30,
    paddingHorizontal: 20,
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  uploadText: {
    fontSize: 16,
    color: colors.appColor,
    marginTop: 10,
    textAlign: 'center',
    fontFamily: Fonts.medium
  },
  fileNote: {
    fontSize: 12,
    fontFamily: Fonts.regular,
    marginTop: 4,
    color: colors.lineColor,
    textAlign: 'center',
  },
  tipsToggle: {
    color: colors.appColor,
    marginTop: 8,
    fontFamily: Fonts.semiBold
  },
  tipsContent: {
    color: '#555',
    fontFamily: Fonts.regular,
    fontSize: 13,
    marginTop: 4,
    paddingLeft: 10,
  },
})

export {Step_3}
