// /* eslint-disable no-unused-vars */
// /* eslint-disable indent */

// import React, { Component } from 'react';
// import {
//   Modal,
//   Text,
//   TouchableHighlight,
//   StyleSheet,
//   View,
//   Image,
//   Alert
// } from 'react-native';

// class Tooltip extends Component {
//   state = {
//     modalVisible: false
//   };

//   setModalVisible(visible) {
//     this.setState({ modalVisible: visible });
//   }

//   render() {
//     console.log('Sup foo');

//     return (
//       <View style={styles.container}>
//         <View style={{ marginTop: 10 }}>
//           <View>
//             <Text>{this.props.text}</Text>
//             <Image source={this.props.image} />
//             <TouchableHighlight
//                 onPress={() => {
//                   this.setModalVisible(!this.state.modalVisible);
//                 }}
//               >
//                 <Text>Close</Text>
//               </TouchableHighlight>
//             </View>
//           </View>
//         </Modal>

//         <TouchableHighlight
//           onPress={() => {
//             this.setModalVisible(true);
//           }}
//         >
//           <Text>Pickup Savings</Text>
//         </TouchableHighlight>
//       </View>
//     );
//   }
// }

// export default Tooltip;

// const styles = StyleSheet.create({
//   tooltip: {
//     flex: 1,
//     position: 'absolute',
//     alignItems: 'center',
//     justifyContent: 'center',
//     height: 200,
//     width: '70%',
//     zIndex: 1,
//     backgroundColor: 'aqua'
//   }
// });
