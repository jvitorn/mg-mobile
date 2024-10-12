import { useState } from "react";
import { View, Text, TextInput, Pressable, Image } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { Link } from "expo-router"

export default function Home() {
  const [user, setUser] = useState("");
  const handlePress = () => {
    console.log(`Nome: ${user}`);
  };
  return (
    <View className="flex p-9 mt-6">
      <View className="flex-col mt-12">
        <View className="flex-col items-center pb-5">
          <Image
            source={require("./assets/images/home_removebg.png")}
            className="w-64 h-64"
            resizeMode="cover"
          />
        </View>
        <View className="flex-col items-center">
          <Text className="text-3xl font-bold mb-3">Gerencie suas fichas!</Text>
          <Text className="text-gray-500 text-center">
            Um applicativo para ajudar seu sistema para te ajudar no seu RPG
          </Text>
        </View>
        <View className="flex-col items-center mt-3">
          <Link href={`/login`} asChild>
            <Pressable
              className="bg-blue-500 p-5 rounded-lg mt-5 mb-4"
            >
              <Text className="text-white text-center text-lg font-bold">
                Let´s go!
              </Text>
            </Pressable>
          </Link>
        </View>
      </View>
    </View>
  );
}
