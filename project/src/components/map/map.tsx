import React, {useRef, useEffect} from 'react';
import leaflet from 'leaflet';
import 'leaflet/dist/leaflet.css';

import {UrlMarker} from '../../const';
import useMap from '../../hooks/useMap';
import {City} from '../../types/city';
import {Offers} from '../../types/offer';

type MapScreenProps = {
  city: City;
  offers: Offers,
  selectedOffer: string | null
}

function Map({city, offers, selectedOffer}: MapScreenProps):JSX.Element {
  const mapRef = useRef(null);
  const map = useMap(mapRef, city);

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
            lat: offer.lat,
            lng: offer.lng,
          }, {
            icon: (selectedOffer !== undefined && offer.OfferCard.title === selectedOffer ? currentCustomIcon : defaultCustomIcon),
          })
          .addTo(map);
      });
    }
  }, [map, offers, selectedOffer]);

  return (
    <section
      className="cities__map map"
      ref={mapRef}
    />
  );
}

export default Map;
