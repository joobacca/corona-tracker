import { useState } from 'react';
import { GeoLocation } from 'src/types';

const handleErrorCode = (code: number): string => {
  switch (code) {
    case 1:
      return 'You must permit the browser to get your Geolocation before using this function.';
    case 2:
      return 'Your position was not retrievable. Please try again later.';
    case 3:
      return 'Timeout - please try again later.';
    default:
      return 'Unknown error occurred.';
  }
};

const useLocation = () => {
  const [currentLocation, setCurrentLocation] = useState<GeoLocation>({
    latitude: -1,
    longitude: -1,
  });
  const [error, setError] = useState<string>();

  const getLocation = () => {
    navigator.geolocation.getCurrentPosition(
      ({ coords: { latitude, longitude } }) => {
        setCurrentLocation({
          latitude,
          longitude,
        });
      },
      (err) => {
        setError(handleErrorCode(err.code));
      },
    );
  };

  return {
    currentLocation,
    error,
    getLocation,
  };
};

export default useLocation;
