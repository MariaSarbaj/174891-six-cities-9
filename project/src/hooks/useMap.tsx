import { useEffect, useState, MutableRefObject } from 'react';
import { Map, TileLayer } from 'leaflet';
import {City} from '../types/offers';
import {TileLayerURL} from '../const';

function useMap(
  mapRef: MutableRefObject<HTMLElement | null>,
  city: City): Map | null {

  const [map, setMap] = useState<Map | null>(null);

  useEffect(() => {
    if (mapRef.current !== null) {
      if (map === null) {
        const instance = new Map(mapRef.current,  {
          center: {
            lat: city.location.lat,
            lng: city.location.lng,
          },
          zoom: city.location.zoom,
        });

        const layer = new TileLayer(
          TileLayerURL,
          {
            attribution:
              '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>',
          },
        );

        instance.addLayer(layer);

        setMap(instance);
      } else {
        map.setView([city.location.lat, city.location.lng], city.location.zoom);
      }
    }
  }, [mapRef, map, city]);

  return map;
}

export default useMap;
