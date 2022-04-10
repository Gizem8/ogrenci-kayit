import React, { Component} from 'react';
import { View } from 'react-native';
import { Provider } from 'react-redux';
import firebase from 'firebase';
import { createStore, applyMiddleware} from 'redux';
import ReduxThunk from 'redux-thunk';
import reducers from './reducers';
import Router from './Router';

class Main extends Component {
    componentDidMount () {
        firebase.initializeApp({
                apiKey: 'AIzaSyByHtXR9gQyikTsIwznKWUtSqp3q7uY9wU',
                authDomain: 'ogrencikayit-9e5fb.firebaseapp.com',
                projectId: 'ogrencikayit-9e5fb',
                storageBucket: 'ogrencikayit-9e5fb.appspot.com',
                messagingSenderId: '134963867630',
                appId: '1:134963867630:web:5c0d0d67c055f89037a8ff',
                measurementId: 'G-8JY5G4BC5H'
              });
            

    }
    render () {
        const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));
        return (
            <Provider store={ store }>
             <View style = {{flex:1}}>
                <Router/>
             </View>
             </Provider>
         );
    }
}

export default Main;