import { View, Text, TextInput } from "react-native"

export default function Home() {
    return (
        <View className="grid grid-flow-col auto-cols-max p-6 mt-4">
            <View className="">
                <Text className="text-blue-400 text-center font-bold"> Ola Mg Mobile</Text>

                <View className="">
                    <Text className="">Bem Vindo</Text>
                    <Text className="">Bem Vindo</Text>
                    <Text className="">Bem Vindo</Text>
                    <Text className="">Bem Vindo</Text>
                    <Text className="">Bem Vindo</Text>
                    <TextInput></TextInput>
                </View>
            </View>

        </View>
    )
}