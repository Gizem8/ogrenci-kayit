import _ from 'lodash';
import React, { Component } from 'react';
import { View, Text, FlatList } from 'react-native';
import { connect } from 'react-redux';
import { studentsListData } from '../actions';
import ListItem from './ListItem';

class StudentsList extends Component {
    componentDidMount() {
        this.props.studentsListData();
        }
         
         createDataSource ({ studentsArray }) {
             
         }
        renderRow({ item, index }) {
            return <ListItem ogrenci={item} />;
          }
          render() {
            return (
            <FlatList
            data={this.props.studentsArray}
            renderItem={this.renderRow}
            keyExtractor={(item, index) => index.toString()}
            />
             
            );
        }
}

const mapStateToProps = ({ studentDataResponse }) => {
    const studentsArray = _.map(studentDataResponse, (val, uid) => {
        return { ...val, uid}; // {isim: 'Ayşe', soyisim: 'asda', sube: 'asube', uid: 'kqer7bgd9'}
    });

    return { studentsArray };
};

export default connect(mapStateToProps, { studentsListData }) (StudentsList);