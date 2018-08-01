
import React from 'react';
import PropTypes from 'prop-types';
import {Button, NavigatorIOS, Text, View, StyleSheet,ScrollView} from 'react-native';

export default class NavigatorIOSApp extends React.Component {
    render() {
        return (
            <NavigatorIOS
                initialRoute={{
                    component: MyScene,
                    title: '首页',
                    passProps: {index: 1},
                }}
                style={{flex: 1}}
            />
        );
    }
}

class MyScene extends React.Component {
    static propTypes = {
        route: PropTypes.shape({
            title: PropTypes.string.isRequired,
        }),
        navigator: PropTypes.object.isRequired,
    };

    constructor(props, context) {
        super(props, context);
        this._onForward = this._onForward.bind(this);
    }

    _onForward() {
        let nextIndex = ++this.props.index;
        this.props.navigator.push({
            component: MyScene,
            title: '第' + nextIndex + '页',
            passProps: {index: nextIndex},
        });
    }

    render() {
        return (
            <ScrollView>
                <View style={styles.container}>
                    <Text style={styles.welcome}>学习 React Native!</Text>
                    <Button title={"点击"} color={"red"} onPress={() => {
                        //  alert("你点击了我！");
                        this._onForward()

                    }}/>
                </View>
            </ScrollView>
        );
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
});