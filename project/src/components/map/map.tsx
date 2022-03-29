import React, {useRef, useEffect} from 'react';
import leaflet from 'leaflet';
import 'leaflet/dist/leaflet.css';

import {UrlMarker} from '../../const';
import useMap from '../../hooks/useMap';
import {City} from '../../types/offers';
import {Offers} from '../../types/offers';

type MapScreenProps = {
  city: City;
  offers: Offers,
  selectedOffer?: number | null,
  additionalClass?: string
}

function Map({city, offers, selectedOffer, additionalClass}: MapScreenProps):JSX.Element {
  const mapRef = useRef(null);
  const map = useMap(mapRef, city);

  const cls = ['map'];

  if (additionalClass) {
    cls.push(additionalClass);
  }

  const defaultCustomIcon = leaflet.icon({
    iconUrl: UrlMarker.Default,
    iconSize: [40, 40],
    iconAnchor: [20, 40],
  });

  const currentCustomIcon = leaflet.icon({
    iconUrl: UrlMarker.Current,
    iconSize: [40, 40],
    iconAnchor: [20, 40],
  });

  useEffect(() => {
    if (map) {
      offers.forEach((offer) => {
        leaflet
          .marker({
            lat: offer.location.lat,
            lng: offer.location.lng,
          }, {
            icon: (selectedOffer !== undefined && offer.id === selectedOffer ? currentCustomIcon : defaultCustomIcon),
          })
          .addTo(map);
      });
    }
  }, [map, offers, selectedOffer, defaultCustomIcon, currentCustomIcon]);

  return (
    <section
      className={cls.join(' ')}
      ref={mapRef}
    />
  );
}

export default Map;
