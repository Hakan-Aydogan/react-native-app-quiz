import AsyncStorage from '@react-native-community/async-storage';
import getData from '../helper/getData';
const removeData = async cat => {
  try {
    const x = cat;
    await AsyncStorage.removeItem(cat);
  } catch (e) {
    // saving error
    console.log(e);
  }
};

export default removeData;
