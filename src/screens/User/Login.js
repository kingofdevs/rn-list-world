import React, { Component } from 'react';
import { View, Text, TouchableOpacity, ScrollView } from 'react-native';
import styles from './loginStyles';

const MyList = [
  {
    title: 'LargeListExamples',
    items: [
      'HeightUnequalExample',
      'HeightEqualExample',
      'MessageExample',
      'ContactExample',
      'MenuListExample',
      'RefreshAndLoadingExample',
      'IntensiveSectionExample',
      'ChatExample',
      'FlatListExample',
      'StickyFormExample',
      'WaterfallListExample',
      'PictureExample'
    ]
  }, {
    title: 'Pagenation',
    items: [
      'AutoLoadRefresh',
      'LoadMore',
      'InfiniteScroll'
    ]
  },
  {
    title: 'react-native-fast-image',
    items: [
      'FastImageExample',
      'FastImageGrid',
      'DefaultImageGrid'
    ]
  },
  {
    title: 'react-native-draggable-flatlist',
    items: [
      'DraggableScreen',
    ]
  },
  {
    title: 'react-native-grid-list',
    items: [
      'GridListScreen',
      'GridSimple',
    ]
  },
  {
    title: 'react-native-super-grid',
    items: [
      'SectionGridScreen',
      'FlatGridScreen'
    ]
  },
  {
    title: 'react-native-orzhtml-listview',
    items: [
      'OrzhtmlScreen',
    ]
  },{
    title: 'react-native-ultimate-listview',
    items: [
      'UltimateListViewScreen',
    ]
  },
]

export default class Login extends Component {

  render() {

    return (
      <View style={styles.container}>
        <ScrollView>
          {
            MyList.map((item, index) =>
              <View key={index}>
                <Text style={styles.title}>{item.title}</Text>
                {item.items.map((k, ix) =>
                  <TouchableOpacity
                    key={ix}
                    style={styles.button}
                    onPress={() => this.props.navigation.navigate(k)}
                  >
                    <Text style={styles.buttonText}>{k}</Text>
                  </TouchableOpacity>)}
              </View>
            )
          }
        </ScrollView>
      </View>
    );
  }
}