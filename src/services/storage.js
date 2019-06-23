import { AsyncStorage } from "react-native";

const nameKey = "@MARVIZ:";

export async function saveStorageData(key, data) {
  try {
    const value = await AsyncStorage.setItem(
      nameKey + key,
      JSON.stringify(data)
    );

    return `Valor cadastrado: ${value}`;
  } catch (error) {
    console.log("erro ao gravar dados : " + error);
  }
}
export async function getStorageData(key) {
  try {
    const value = await AsyncStorage.getItem(nameKey + key);

    if (value !== null) {
      const json = JSON.parse(value);
      return json;
    }
  } catch (error) {

    console.log("erro ao recuperar dados : " + error);
    return { error: error }
  }
}

export async function deleteStorageData(key) {
  const value = await AsyncStorage.getItem(nameKey + key);
  if (!!value && !!value.save) {
    return true;
  }

  try {
    await AsyncStorage.removeItem(nameKey + key);
  } catch (error) {
    console.log("erro ao deletar dados : " + error);
  }
}
