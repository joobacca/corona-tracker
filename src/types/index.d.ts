type GeoLocation = {
  latitude: number;
  longitude: number;
}

export type Order = 'asc' | 'desc';

export interface Encounter {
  name: string;
  location: GeoLocation;
  encounterDate: string;
}

export interface HeadCell {
  id: string;
  numeric: boolean; 
  label: string;
}