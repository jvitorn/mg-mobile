
import { View, Text } from "react-native";
import { FontAwesome } from "@expo/vector-icons";

export default function Feed() {
  return (
    <View className="flex p-9 mt-6">
      <View className="flex-row mb-5">
        <View className="w-1/2">
          <Text className="text-gray-400">Welcome, Admistrator</Text>
        </View>

        <View className="w-1/2 items-end">
          <FontAwesome name="user-md" size={24} color="black" />
        </View>
      </View>

      <View className="flex-col items-center ">
        <Text className="text-gray-500 text-4xl font-bold mb-5">
          Your informations
        </Text>
        <View className="card-ficha flex-row items-center p-5 rounded-2xl shadow">
            <View className="w-1/2">
                <FontAwesome name="file-archive-o" size={60} color="black" />
            </View>
            <View className="w-1/2">
                <Text> Arquivo do RPG</Text>
            </View>
            
            
        </View>
      </View>
    </View>
  );
}
