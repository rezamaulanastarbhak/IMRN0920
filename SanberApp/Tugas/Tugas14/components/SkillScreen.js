import React from 'react';
import Skill from './components/Skill.js'
import {
    StyleSheet,
    Text,
    View,
    FlatList,
    Image
} from 'react-native';
import skillData from './skillData.json'

export default function SkillScreen() {

    return (
        <View style={styles.container}>
            <Image source={require('../Tugas13/images/logo.png')} style={{ width: 180, height: 50, alignSelf: 'flex-end' }} />
            <View style={styles.userContainer}>
                <View style={{ flexDirection: 'column', paddingLeft: 10 }}>
                    <Text style={{ color: "#003366" }}>Hello</Text>
                    <Text style={{ color: "#003366" }}>Reza Maulana</Text>
                </View>
            </View>
            <Text style={{
                alignSelf: 'flex-start',
                color: "#003366",
                borderBottomWidth: 4,
                width: '90%',
                borderBottomColor: "#3EC6FF",
                marginLeft: 20,
                marginBottom: 10,
                fontSize: 36
            }}>SKILL</Text>
            <View style={styles.kategori}>
                <View style={styles.listKategori}>
                    <Text style={{ fontSize: 11, color: "#003366" }}>Library / Framework</Text>
                </View>
                <View style={styles.listKategori}>
                    <Text style={{ fontSize: 11, color: "#003366" }}>Bahasa Pemrograman</Text>
                </View>
                <View style={styles.listKategori}>
                    <Text style={{ fontSize: 11, color: "#003366" }}>Teknologi</Text>
                </View>
            </View>
            <FlatList
                data={skillData.items}
                renderItem={(skill) => <Skill skill={skill} />}
                keyExtractor={(item) => item.id}
            />
        </View>
    );
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
        alignItems: 'center',
        justifyContent: 'flex-start',
        display: 'flex',
    },
    userContainer: {
        alignSelf: "flex-start",
        flexDirection: 'row',
        paddingLeft: 20
    },
    kategori: {
        flexDirection: "row",
        marginBottom: 10
    },
    listKategori: {
        backgroundColor: "#B4E9FF",
        marginHorizontal: 5,
        padding: 5,
        borderRadius: 10
    }
});
