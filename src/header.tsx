import { useState } from 'react';
import { FlatList, StyleSheet, Text, View } from 'react-native';

export default () => {
    return (
        <View style={styles.header}>
            <Text style={styles.title}>My Todos</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    header: {
        height: 80,
        paddingTop: 38,
        backgroundColor: 'coral'
    },
    title: {
        textAlign: 'center',
        color: '#fff',
        fontSize: 30,
        fontWeight: 'bold'
    }
  });