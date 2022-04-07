import { useEffect, useState, MutableRefObject } from 'react';
import { Map, TileLayer } from 'leaflet';
import {Location} from '../types/offers';
import {TileLayerURL} from '../const';

function useMap(
  mapRef: MutableRefObject<HTMLElement | null>,
  city: Location): Map | null {

  const [map, setMap] = useState<Map | null>(null);

  useEffect(() => {
    if (mapRef.current) {
      if (!map) {
        const instance = new Map(mapRef.current,  {
          center: {
            lat: city.lat,
            lng: city.lng,
          },
          zoom: city.zoom,
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
        map.setView([city.lat, city.lng], city.zoom);
      }
    }
  }, [mapRef, map, city]);

  return map;
}

export default useMap;
