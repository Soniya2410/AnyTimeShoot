import { View } from "react-native"
import { ASInputField } from "../component/ASInputField"
import { useState } from "react"

const Step_2: React.FC = () => {
  const [myBussiness, setMyBussiness] = useState("");
  const [socialLink, setSocialLink] = useState("");
  const [portfolioLink, setPortfolioLink] = useState("")
  return(
    <View>
    <ASInputField 
      title = {"Google My Business"}
      placeholder = {"Add Link"}
      value={myBussiness}
      setValue={setMyBussiness}
    />
  
    <ASInputField
      title= {"Instagram/Facebook/Website Link"}
      placeholder = {"Add Linkß"}
      value={socialLink}
      setValue={setSocialLink}
      />

    <ASInputField
      title= {"Portfolio Link"}
      placeholder = {"Add Linkß"}
      value={portfolioLink}
      setValue={setPortfolioLink}
      />
    </View>
  )
}

export {Step_2}
