import { useState } from "react";
import { View, Text, TextInput, Pressable,Image } from "react-native"
import { AntDesign }  from '@expo/vector-icons';
import { Link } from "expo-router"

import { InputText } from "@/components/input-text"

export default function Sigup() {
    const [user, setUser] = useState('');
    const [pass, setPass] = useState('');
    const handlePress = () => {
        console.log(`Nome: ${user}`)
      };
    return (
        <View className="flex p-6 mt-6">
            <View className="flex-col mt-12">                
                <View className="flex-col items-center">
                    <Text className="text-4xl font-bold mb-3">Sigup</Text>
                    <Text className="text-sm text-gray-800">Cadastre no nosso sistema!</Text>
                </View>
                <View className="flex-col content-input mb-2 mt-2">

                    <TextInput placeholder="Digite seu nome de usuário *" 
                    className="border-b-2 border-gray-400 p-3 rounded mb-5 mt-2" 
                    value={user}
                    onChangeText={(text) => setUser(text)} />

                    <TextInput placeholder="Digite seu email *" value={user} onChangeText={setUser}/>

                    <InputText placeholder="Senha *" value={pass} />

                    <InputText placeholder="Digite a senha novamente*" />
    

                    
                </View>
                <View className="flex-col">
                    <Pressable className="bg-blue-500 p-4 rounded-lg mt-5 mb-4"
                    onPress={handlePress}>
                        <Text className="text-white text-center text-lg">Cadastrar</Text>
                    </Pressable>
                    <Link href={`/login`} asChild>
                        <Text className="text-center text-blue-500">Already have an Accont?</Text>
                    </Link>
                    
                </View>
            </View>
        </View>
    )
}