import AsyncStorage from "@react-native-community/async-storage";

const getData = async (cat) => {
  try {
    let value;
    await AsyncStorage.getItem(JSON.stringify(cat))
      .then((json) => (value = json))
      .catch((err) => console.error(err));
    if (value !== null) {
      console.log(value);
      return value;
    }
  } catch (error) {
    // Error retrieving data
    console.log(error);
  }
};

export default getData;
