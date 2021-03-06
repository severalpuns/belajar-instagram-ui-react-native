import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View
} from 'react-native';
import {Icon} from 'native-base'

class LikesTab extends Component {
    state = {  }
    static navigationOptions = {
        tabBarIcon: ({tintColor}) => (
            <Icon name="ios-heart" style={{color: tintColor}} />
        )
    }
    render() { 
        return (  
            <View style={styles.container}>
                <Text>LikesTab</Text>
            </View>
        );
    }
}
 
export default LikesTab;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
});