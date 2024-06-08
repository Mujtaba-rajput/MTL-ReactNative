import React from 'react';
import {Dimensions, View} from 'react-native';
import {LineChart} from 'react-native-chart-kit';
import styles from './customChart.style';
import colors from '../../utils/colors';

interface CustomChartProps {
  labels: string[];
  data: number[];
}

const CustomChart: React.FC<CustomChartProps> = ({labels, data}) => {
  return (
    <View>
      <LineChart
        data={{
          labels,
          datasets: [
            {
              data,
            },
          ],
        }}
        width={Dimensions.get('window').width - 16}
        height={220}
        yAxisLabel="$"
        yAxisSuffix=""
        chartConfig={{
          backgroundColor: colors.chartBackground,
          backgroundGradientFrom: colors.gradientMin,
          backgroundGradientTo: colors.gradientMax,
          decimalPlaces: 2,
          color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
          labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
          style: styles.custom,
          propsForDots: {
            r: '6',
            strokeWidth: '2',
            stroke: colors.stroke,
          },
        }}
        style={styles.container}
      />
    </View>
  );
};

export default CustomChart;
