import {configureStore} from '@reduxjs/toolkit';
import {dashboardApi} from '../screens/Dashboard/dashboard.api';
import {dashboardReducer} from '../screens/Dashboard/dashboard.slice';
import {marketReducer} from '../screens/MarketData/marketData.slice';

export const store = configureStore({
  reducer: {
    [dashboardApi.reducerPath]: dashboardApi.reducer,
    dashboard: dashboardReducer,
    market: marketReducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: false,
      immutableCheck: false,
    }).concat([dashboardApi.middleware]),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
