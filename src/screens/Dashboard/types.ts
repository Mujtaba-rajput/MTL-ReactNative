export interface Connection {
  asn: number;
  domain: string;
  isp: string;
  org: string;
}

export interface Flag {
  emoji: string;
  emoji_unicode: string;
  img: string;
}

export interface Timezone {
  abbr: string;
  current_time: string;
  id: string;
  is_dst: boolean;
  offset: number;
  utc: string;
}

export interface IPResponse {
  borders: string;
  calling_code: string;
  capital: string;
  city: string;
  connection: Connection;
  continent: string;
  continent_code: string;
  country: string;
  country_code: string;
  flag: Flag;
  ip: string;
  is_eu: boolean;
  latitude: number;
  longitude: number;
  postal: string;
  region: string;
  region_code: string;
  success: boolean;
  timezone: Timezone;
  type: string;
}

export interface MarketData {
  p: string;
  q: string;
}
