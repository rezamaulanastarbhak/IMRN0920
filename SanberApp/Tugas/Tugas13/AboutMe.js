import React from 'react'
import { 
    View, 
    Text, 
    Image, 
    ScrollView, 
    TextInput, 
    StyleSheet, 
    Button 
} from 'react-native'
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'

const AboutScreen = () => {
    return (
        <ScrollView>
            <View style={styles.container} >
                <Text style={styles.judul}>Tentang Saya</Text>
                <FontAwesome5 
                name={'user-circle'}
                size={200} solid
                color="#EFEFEF"
                style={styles.icon}/>
                <Text style={styles.nama}>Reza Maulana</Text>
                <Text style={styles.pekerjaan}>React Native Developer</Text>
                <View style={styles.kotak} >
                    <Text style={styles.juduldalam}>Portofolio</Text>
                    <View style={styles.kotakdalam} >
                        <View>
                            <FontAwesome5 name="gitlab" size={40} color="#3EC6FF" style={styles.icon} />
                            <Text style={styles.teks}>Data_Dummy</Text>
                        </View>
                        <View >
                            <FontAwesome5 name="github" size={40} color="#3EC6FF" style={styles.icon} />
                            <Text style={styles.teks}>Data_Dummy</Text>
                        </View>
                    </View>
                </View>

                <View style={styles.kotak} >
                    <Text style={styles.juduldalam}>Hubungi Saya</Text>
                    <View style={styles.bawahver} >
                        <View style={styles.bawahverhub}>
                            <View >
                                <FontAwesome5 name="facebook" size={40} color="#3EC6FF" style={styles.icon} />
                            </View>
                            <View style={{ justifyContent: 'center', marginLeft: 10}}>
                                <Text style={styles.teks}>Data_Dummy</Text>
                            </View>
                        </View>
                        <View style={styles.bawahverhub}>
                            <View >
                                <FontAwesome5 name="instagram" size={40} color="#3EC6FF" style={styles.icon} />
                            </View>
                            <View style={{ justifyContent: 'center', marginLeft: 10}} >
                                <Text style={styles.teks}>Data_Dummy</Text>
                            </View>
                        </View>
                        <View style={styles.bawahverhub}>
                            <View>
                                <FontAwesome5 name="twitter" size={40} color="#3EC6FF" style={styles.icon} />
                            </View>
                            <View style={{ justifyContent: 'center', marginLeft: 10}}>
                                <Text style={styles.teks}>Data_Dummy</Text>
                            </View>
                        </View>
                    </View>
                </View>
            </View>
        </ScrollView>
    );
}

export default AboutScreen

const styles = StyleSheet.create({
    container: {
        marginTop: 64,

    },
    judul: {
        fontSize: 36,
        fontWeight: "bold",
        color: "#003366",
        textAlign: "center"
    },
    icon: {
        textAlign: "center"
    },
    nama: {
        fontSize: 24,
        fontWeight: "bold",
        color: "#003366",
        textAlign: "center"
    },
    pekerjaan: {
        fontSize: 16,
        fontWeight: "bold",
        color: "#3EC6FF",
        textAlign: "center",
        marginBottom : 7
    },
    kotak: {
        borderRadius: 10,
        borderColor: 'blue',
        borderBottomColor: '#000',
        padding: 5,
        backgroundColor: '#EFEFEF',
        marginBottom : 9
    },
    kotakdalam: {
        borderTopWidth: 2,
        borderTopColor: '#003366',
        flexDirection: 'row',
        justifyContent: 'space-around',
    },
    bawahver: {
        borderTopWidth: 2,
        borderTopColor: '#003366',
        flexDirection: 'column',
        justifyContent: 'space-around',
    },
    bawahverhub: {
        height: 50,
        flexDirection: 'row',
        justifyContent: "center",
        marginBottom:2

    },
    juduldalam: {
        fontSize: 18,
        color: "#003366",
    },
    teks: {
        fontSize: 16,
        fontWeight: "bold",
        color: "#003366",
        textAlign: "center"
    },
    input: {
        height: 40,
        borderColor: 'gray',
        borderWidth: 1
    }

})
