
import {
  StyleSheet,
  View,
  Image,
} from 'react-native';

const splashScreen = () => {
  return (
<View style={styles.splashScreenRootView}>
        <Image
          source={require('./assets/SPLASH1.png')}
          style={styles.image}
        />
    </View>
  )
}

export default splashScreen

const styles = StyleSheet.create({

    splashScreenRootView: {
      justifyContent: 'center',
      flex: 1,
      width: '100%',
      height: '100%',
      background:'red'
    },
    image:{ 
      width: '100%', 
      height: '90%',
      resizeMode: 'contain'
    }
  })
  