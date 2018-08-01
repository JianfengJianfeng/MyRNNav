//组件导入区
import React from 'react';
import { StyleSheet, Text, Button, View } from 'react-native';

//核心代码区
export default class Second extends React.Component {

    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.welcome}>学习 React Native!</Text>
                <Text style={styles.instructions}>我是第二页</Text>
                <Button title={"点击"} color={"red"} onPress={() => {
                    alert("我是谁，我在哪？")
                }}/>
            </View>
        )
    }
}
//组件样式区
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
    },
    instructions: {
        textAlign: 'center',
        color: '#333333',
        marginBottom: 5,
    },
});