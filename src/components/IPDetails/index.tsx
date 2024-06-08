import React from 'react';
import {View, Text} from 'react-native';
import styles from './ipDetails.style';

interface IPDetailsInterface {
  ip?: string;
  connection?: {
    isp?: string;
  };
  timezone?: {
    utc?: string;
  };
  city?: string;
}

interface IPDetailsProps {
  currentIPData?: IPDetailsInterface;
  ipData?: IPDetailsInterface;
}

const IPDetails = ({currentIPData, ipData}: IPDetailsProps) => {
  return (
    <>
      <View style={styles.row}>
        {currentIPData && (
          <>
            <View style={styles.fieldsWrapper}>
              <Text style={styles.text}>Current IP Address</Text>
              <Text style={styles.text}>{currentIPData?.ip}</Text>
            </View>
            <View style={styles.fieldsWrapper}>
              <Text style={styles.text}>Current ISP</Text>
              <Text style={styles.text}>{currentIPData?.connection?.isp}</Text>
            </View>
          </>
        )}
      </View>
      <View style={styles.row}>
        <View style={styles.fieldsWrapper}>
          <Text style={styles.text}>IP Address</Text>
          <Text style={styles.text}>{ipData?.ip}</Text>
        </View>
        <View style={styles.fieldsWrapper}>
          <Text style={styles.text}>Timezone</Text>
          <Text style={styles.text}>{ipData?.timezone?.utc}</Text>
        </View>
      </View>
      <View style={styles.row}>
        <View style={styles.fieldsWrapper}>
          <Text style={styles.text}>ISP</Text>
          <Text style={styles.text}>{ipData?.connection?.isp}</Text>
        </View>
        <View style={styles.fieldsWrapper}>
          <Text style={styles.text}>City</Text>
          <Text style={styles.text}>{ipData?.city}</Text>
        </View>
      </View>
    </>
  );
};

export default IPDetails;
