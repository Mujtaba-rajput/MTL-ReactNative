import React from 'react';
import {View, Text, TextInput, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';
import styles from './ipTrackerSearchBar.style';

interface IPTrackerSearchBarProps {
  inputIp: string;
  handleIpChange: (ip: string) => void;
  refetch: () => void;
}

const IpTrackerSearchBar = ({
  inputIp,
  handleIpChange,
  refetch,
}: IPTrackerSearchBarProps) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>IP Tracker</Text>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Search for any IP address"
          value={inputIp}
          onChangeText={handleIpChange}
          placeholderTextColor={'black'}
        />
        <TouchableOpacity style={styles.button} onPress={refetch}>
          <Icon name={'right'} size={18} color={'white'} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default IpTrackerSearchBar;
