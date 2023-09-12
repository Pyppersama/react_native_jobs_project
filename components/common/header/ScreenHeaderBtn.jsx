import React from 'react'
import { TouchableOpacity, Image } from 'react-native'

import styles from './screenheader.style'

const ScreenHeaderBtn = ({iconUrl, dimension, handlePress}) => {
  return (
    <TouchableOpacity 
      style={styles.btnContainer}
      onPress={handlePress}      //a.k.a onClick
    >
      <Image 
        source={iconUrl}    //instead of src we use source which is a prop passed from its parent comp in the home comp
        resizeMode='cover'
        style= {styles.btnImg(dimension)}
/>
    </TouchableOpacity>
  )
}

export default ScreenHeaderBtn