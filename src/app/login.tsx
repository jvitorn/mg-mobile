import { useState } from "react";
import { View, Text, TextInput, Pressable, Image } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { Link,useRouter } from "expo-router";

export default function Login() {
    const router = useRouter();
  const [user, setUser] = useState("");
  const [pass, setPass] = useState("");
  const handlePress = () => {
    if (user == "adm" && pass == "123") {
        router.replace('/feed'); 
    }
  };
  return (
    <View className="flex p-6 mt-6">
      <View className="flex-col mt-4">
        <View className="flex-row icons">
          <Link href={`/`} asChild>
            <AntDesign name="leftcircleo" size={34} color="black" />
          </Link>
        </View>
        <View className="flex-col items-center pb-4">
          <Image
            source={require("./assets/images/home_removebg.png")}
            className="w-40 h-40"
            resizeMode="cover"
          />
        </View>

        <View className="flex-col items-center">
          <Text className="text-4xl font-bold mb-3">Login</Text>
          <Text className="text-sm text-gray-800">
            Entre para poder continuar!
          </Text>
        </View>
        <View className="flex-col content-input ">
          <TextInput
            placeholder="Usuario"
            className="border-b-2 border-gray-400 p-3 rounded mb-5 mt-2"
            value={user}
            onChangeText={(text) => setUser(text)}
          />
          <TextInput
            placeholder="Senha"
            className="border-b-2 border-gray-400 p-3 rounded mb-5 mt-2"
            value={pass}
            onChangeText={(text) => setPass(text)}
          />

          <Pressable
            className="bg-blue-500 p-4 rounded-lg mt-5"
            onPress={handlePress}
          >
            <Text className="text-white text-center text-lg">Enviar</Text>
          </Pressable>
          <Pressable className="border-2 border-gray-500 p-4 rounded-lg mt-5">
            <Link href={`/sigup`} asChild>
              <Text className="text-gray-500 text-center text-lg">
                Cadastro
              </Text>
            </Link>
          </Pressable>
        </View>
      </View>
    </View>
  );
}
