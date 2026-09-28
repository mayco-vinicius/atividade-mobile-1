import { StyleSheet, TextInput, View } from 'react-native';

type TipoDados = {
    nome: string,
    setNome: (texto: string) => void
}

export function Usuario({ nome, setNome }: TipoDados) {

    return (
        <View style={styles.container}>
            <TextInput
            style={styles.input}
            placeholder='Seu Nome'
            onChangeText={setNome}
            value={nome}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        alignItems: 'center'
    },

    input: {
        height: 50,
        width: "50%",
        margin: 10,
        borderWidth: 1,
        padding: 15,
        fontSize: 15
    },
})