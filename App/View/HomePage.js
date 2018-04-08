import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  ListView,
  TouchableOpacity,
  RefreshControl,
  Text,
  View
} from 'react-native';

var dataList = ["a", "b", "c", "d","a", "b", "c", "d","a", "b", "c", "d","a", "b", "c", "d"];

export default class DayPort extends Component {
  constructor(props){
    super(props);
    var ds = new ListView.DataSource({
      rowHasChanged:(r1, r2) => r1 !== r2,
      sectionHeaderHasChanged:(s1, s2) => s1 !== s2
    })

    this.state = {
      dataSource:ds,
      statistics:{},
      refreshing:true
    }
  }

  componentDidMount(){
    this.getHomePageData();
  }

  async getHomePageData(){
    this.setState({statistics:dataList, refreshing:false});
  }

  _renderRow(rowData, sectionId, rowId){
    return(
      <TouchableOpacity>
        <View style={styles.listViewStyle}>
          <Text style={styles.titleName}>{rowData}</Text>
        </View>
      </TouchableOpacity>
    )
  }

  render() {
    return (
      <View style={{flex:1}}>
        <View style={styles.container}>
          <ListView 
            refreshControl={
              <RefreshControl
                refreshing={this.state.refreshing}
                tintColor={'#ff0000'}
                title={'下拉刷新'}
                onRefresh={() => this.getHomePageData()} />}
            dataSource={this.state.dataSource.cloneWithRowsAndSections(this.state.statistics)}
            renderRow={(rowData, sectionId, rowId) => this._renderRow(rowData, sectionId, rowId)}>
          </ListView>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop:20,
    backgroundColor: '#F5FCFF',
  },
  listViewStyle:{
    marginTop:20,
    height:350,
    marginLeft:20,
    marginRight:20,
    backgroundColor:'#5599FF',
    borderRadius:10,
    justifyContent:'center',
  },
  titleName:{
    textAlign:'center',
    fontSize:30,
    color:'#ffffff'
  }
});