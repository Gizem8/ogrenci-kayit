import React, {Component} from 'react';
import { TextInput, Alert, View }  from 'react-native';
import { connect } from 'react-redux';
import firebase from '@firebase/app';
import '@firebase/auth';
import { emailChanged, passwordChanged, loginUser } from '../actions';
import { Button, Card, CardSection, Spinner} from '../Ortak';


class LoginForm extends Component {
    state = {email: '', password: '', loading: false};
    clickLogin () {
    
        const { email, password } = this.props;
        this.props.loginUser({ email, password});
    }
    loginSucces () {
        console.log('Başarılı');
        this.setState ({ loading: false });
    }

    loginFail () {
        console.log('Hatalı');
        this.setState ({ loading: false });
        Alert.alert(
            'Mesaj',
            'Kullanıcı adı veya şifresi hatalı!',
            [
                { text: 'Tamam', onPress: () => null }
                
            ]
        );
    }

    renderButton () {
        if (!this.props.loading) {
            return <Button onPress = {this.clickLogin.bind(this)}> GİRİŞ</Button>;
        }
        return <Spinner size = "small" />;
        
    }

    render () {
        console.log('response email ' + this.props.email);
        console.log('response password ' + this.props.password);
        const { inputStyle } = styles;
        return (
            <View style = {{ flex: 1}}>
            <Card>
                <CardSection>
                    <TextInput
                    placeholder = "E-mail"
                    style ={inputStyle}
                    value= {this.props.email}
                    onChangeText = {email => this.props.emailChanged(email)}
                    />
                </CardSection>

                <CardSection>
                <TextInput
                    secureTextEntry
                    placeholder = "Şifre"
                    style ={inputStyle}
                    value= {this.props.password}
                    onChangeText = {password => this.props.passwordChanged(password)}
                    />
                </CardSection>

                <CardSection>
                    {this.renderButton ()}
                </CardSection>
            </Card>
            </View>
        );
    }
}

const styles = {
    
    inputStyle: {
        paddingRight: 5,
        paddingLeft: 5,
        fontSize: 18,
        flex: 1
    },
};
const mapStateToProps = ({ kimlikdogrulamaResponse }) => {
    const { email, password, loading } = kimlikdogrulamaResponse;
    return {
        email: 'giz@giz1.com',
        password: '123456',
        loading
    };
};

export default connect(mapStateToProps, { emailChanged,passwordChanged, loginUser }) (LoginForm);