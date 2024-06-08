/* eslint-disable react-hooks/exhaustive-deps */
import React, {useState, useEffect} from 'react';
import {View, Image, TouchableOpacity} from 'react-native';
import styles from './dashboard.style';
import {useGetIPDetailsQuery, useGetIPQuery} from './dashboard.api';
import colors from '../../utils/colors';
import {
  Loader,
  IpTrackerSearchBar,
  IPDetails,
  ImageCarousel,
} from '../../components';
import {setIPData, setSelectedImage} from './dashboard.slice';
import {useAppDispatch} from '../../hooks/redux';
import {NavigationProp, useNavigation} from '@react-navigation/native';

const Dashboard = () => {
  const [inputIp, setInputIp] = useState('');
  const {data: ipData, refetch} = useGetIPDetailsQuery(inputIp);
  const {
    data: currentIPData,
    isLoading,
    refetch: refetchCurrentIP,
  } = useGetIPQuery();

  const dispatch = useAppDispatch();
  const navigation = useNavigation<NavigationProp<any>>();

  useEffect(() => {
    if (currentIPData) {
      dispatch(setIPData(currentIPData));
    }
  }, [ipData, dispatch]);

  useEffect(() => {
    if (ipData) {
      dispatch(setIPData(ipData));
    }
  }, [ipData, dispatch]);

  const [images] = useState([
    require('../../assets/images/g1.jpeg'),
    require('../../assets/images/g4.png'),
    require('../../assets/images/g3.png'),
  ]);

  const renderItem = ({item}: {item: any}) => (
    <TouchableOpacity onPress={() => handleImagePress(item)}>
      <Image source={item} style={styles.image} />
    </TouchableOpacity>
  );

  const handleIpChange = (ip: string) => {
    setInputIp(ip);
  };

  const handleImagePress = (image: string) => {
    dispatch(setSelectedImage(image));
    navigation.navigate('Details');
  };

  useEffect(() => {
    refetchCurrentIP();
  }, []);

  return (
    <View style={styles.container}>
      <IpTrackerSearchBar
        inputIp={inputIp}
        handleIpChange={handleIpChange}
        refetch={refetch}
      />
      <View style={styles.subContainer}>
        {isLoading ? (
          <Loader isLoading={isLoading} color={colors.white} />
        ) : (
          <IPDetails currentIPData={currentIPData} ipData={ipData} />
        )}
      </View>
      <ImageCarousel images={images} renderItem={renderItem} />
    </View>
  );
};

export default Dashboard;
