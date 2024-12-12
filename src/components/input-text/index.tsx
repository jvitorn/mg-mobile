import { View, TextInput, TextInputProps } from "react-native"

type InputTextProps = TextInputProps & {
    placeholder: string;
    value?: string;
    onChangeText?: (text: string) => void;
}


function InputText({placeholder, value, onChangeText, ...rest}: InputTextProps) {
    return (
        <TextInput placeholder={placeholder}
        {...rest} 
        className="border-b-2 border-gray-400 p-3 rounded mb-5 mt-2" 
        value={value}
        onChangeText={onChangeText ? (text) => onChangeText(text) : undefined}
        />
    )
}

export { InputText } 