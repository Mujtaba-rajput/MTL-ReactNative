import React, {useEffect, useState} from 'react';
import {View, Text} from 'react-native';
import {setMarketData, setError} from './marketData.slice';
import {useAppSelector, useAppDispatch} from '../../hooks/redux';
import moment from 'moment';
import styles from './marketData.style';
import {CustomChart, PriceDisplay} from '../../components';

const MarketData = () => {
  const dispatch = useAppDispatch();
  const price = useAppSelector(state => state.market.price);
  const error = useAppSelector(state => state.market.error);
  const [priceHistory, setPriceHistory] = useState<number[]>([]);
  const [unixTimeStamp, setUnixTimeStamp] = useState<string[]>([]);

  useEffect(() => {
    const socket = new WebSocket(
      'wss://stream.binance.com:443/ws/btcusdt@aggTrade',
    );

    socket.onopen = () => {
      socket.send(
        JSON.stringify({
          method: 'SUBSCRIBE',
          params: ['btcusdt@aggTrade'],
          id: 1,
        }),
      );
    };

    socket.onmessage = event => {
      const data = JSON.parse(event.data);
      const getPrice = parseFloat(data.p);
      const getUnixTime = moment.unix(data.T).utc().format('HH:mm');
      if (!isNaN(getPrice)) {
        dispatch(setMarketData(getPrice));
        setPriceHistory(prevHistory => [...prevHistory.slice(-5), getPrice]);
        setUnixTimeStamp(prevHistory => [
          ...prevHistory.slice(-5),
          getUnixTime,
        ]);
      }
    };

    socket.onerror = () => {
      dispatch(setError('WebSocket error'));
    };
    socket.onclose = () => {
      console.log('WebSocket connection closed');
    };
    return () => {
      socket.close();
    };
  }, [dispatch]);

  return (
    <View style={styles.container}>
      {error ? (
        <Text style={styles.error}>Error: {error}</Text>
      ) : (
        <>
          <PriceDisplay price={price} />
          {priceHistory?.length > 0 && (
            <CustomChart labels={unixTimeStamp} data={priceHistory} />
          )}
        </>
      )}
    </View>
  );
};

export default MarketData;
