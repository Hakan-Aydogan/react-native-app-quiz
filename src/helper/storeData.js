import AsyncStorage from "@react-native-community/async-storage";
import getData from "../helper/getData";
const _storeData = async (cat, value) => {
  try {
    await AsyncStorage.setItem(JSON.stringify(cat), JSON.stringify(value));
  } catch (error) {
    // Error saving data
  }
};

export default _storeData;
