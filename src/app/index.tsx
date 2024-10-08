import { useState } from "react";
import { View, Text, TextInput, Pressable,Image } from "react-native"

export default function Home() {
    const [user, setUser] = useState('');
    const handlePress = () => {
        console.log(`Nome: ${user}`)
      };
    return (
        <View className="flex p-6 mt-5">
            <View className="flex-1 mt-4">
                <View className="flex-1 items-center pb-4">
                <Image source={require('./assets/images/home_l.jpeg')} className="flex-1" 
                resizeMode="contain"  />
                </View>
                
                <View className="flex-1 items-center">
                    <Text className="text-4xl font-bold mb-3">Login</Text>
                    <Text className="text-sm text-gray-800">Entre para poder continuar!</Text>
                </View>
                <View className="flex-1 content-input ">
                    <TextInput placeholder="Usuario" 
                    className="border-b-2 border-gray-400 p-3 rounded mb-5 mt-2" 
                    value={user}
                    onChangeText={(text) => setUser(text)} />
                    <TextInput placeholder="Senha" 
                    className="border-b-2 border-gray-400 p-3 rounded mb-5 mt-2" />

                    <Pressable className="bg-blue-500 p-4 rounded-lg mt-5"
                    onPress={handlePress}>
                        <Text className="text-white text-center text-lg">Enviar</Text>
                    </Pressable>
                    <Pressable className="border-2 border-gray-500 p-4 rounded-lg mt-5">
                        <Text className="text-gray-500 text-center text-lg">Cadastro</Text>
                    </Pressable>
                </View>
            </View>
        </View>
    )
}