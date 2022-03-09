import React from 'react';
import {render, screen} from '@testing-library/react';
import App from './app';

const offers = [
  {
    OfferCard: {
      id: 'dfghdhjm',
      src: [
        'https://upload.wikimedia.org/wikipedia/commons/8/88/Dashen_Bank_40-Minch_branch.jpg',
        'https://upload.wikimedia.org/wikipedia/commons/8/88/Dashen_Bank_40-Minch_branch.jpg',
        'https://upload.wikimedia.org/wikipedia/commons/8/88/Dashen_Bank_40-Minch_branch.jpg',
        'https://upload.wikimedia.org/wikipedia/commons/8/88/Dashen_Bank_40-Minch_branch.jpg',
        'https://upload.wikimedia.org/wikipedia/commons/8/88/Dashen_Bank_40-Minch_branch.jpg',
        'https://upload.wikimedia.org/wikipedia/commons/8/88/Dashen_Bank_40-Minch_branch.jpg',
      ],
      mark: 'Premium',
      title: 'Beautiful luxurious studio at great location',
      features: {
        entire: 'Apartment',
        bedrooms: 3,
        adults: 4,
      },
      price: 120,
    },
    lat: 52.3909553943508,
    lng: 4.85309666406198,
    rating: 4.8,
    inside: [
      'Wi-Fi',
      'Washing machine',
      'Towels',
      'Heating',
      'Coffee machine',
      'Baby seat',
      'Kitchen',
      'Dishwasher',
      'Cabel TV',
      'Fridge',
    ],
    host: {
      src: 'https://upload.wikimedia.org/wikipedia/commons/a/af/20180405_FIFA_Women%27s_World_Cup_Qualification_AUT-SRB_Kristina_Inhof_850_6519.jpg',
      name: 'Kristina',
      status: 'Pro',
    },
    description: 'A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam. The building is green and from 18th century.',
  },
  {
    OfferCard: {
      id: 'hkkfyuliu',
      src: [
        'https://upload.wikimedia.org/wikipedia/commons/8/88/Dashen_Bank_40-Minch_branch.jpg',
        'https://upload.wikimedia.org/wikipedia/commons/8/88/Dashen_Bank_40-Minch_branch.jpg',
        'https://upload.wikimedia.org/wikipedia/commons/8/88/Dashen_Bank_40-Minch_branch.jpg',
        'https://upload.wikimedia.org/wikipedia/commons/8/88/Dashen_Bank_40-Minch_branch.jpg',
        'https://upload.wikimedia.org/wikipedia/commons/8/88/Dashen_Bank_40-Minch_branch.jpg',
        'https://upload.wikimedia.org/wikipedia/commons/8/88/Dashen_Bank_40-Minch_branch.jpg',
      ],
      mark: 'Premium',
      title: 'Beautiful luxurious studio at great location',
      features: {
        entire: 'Apartment',
        bedrooms: 3,
        adults: 4,
      },
      price: 120,
    },
    lat: 52.369553943508,
    lng: 4.85309666406198,
    rating: 4.8,
    inside: [
      'Wi-Fi',
      'Washing machine',
      'Towels',
      'Heating',
      'Coffee machine',
      'Baby seat',
      'Kitchen',
      'Dishwasher',
      'Cabel TV',
      'Fridge',
    ],
    host: {
      src: 'https://upload.wikimedia.org/wikipedia/commons/a/af/20180405_FIFA_Women%27s_World_Cup_Qualification_AUT-SRB_Kristina_Inhof_850_6519.jpg',
      name: 'Kristina',
      status: 'Pro',
    },
    description: 'A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam. The building is green and from 18th century.',
  },
  {
    OfferCard: {
      id: 'kfiyl',
      src: [
        'https://upload.wikimedia.org/wikipedia/commons/8/88/Dashen_Bank_40-Minch_branch.jpg',
        'https://upload.wikimedia.org/wikipedia/commons/8/88/Dashen_Bank_40-Minch_branch.jpg',
        'https://upload.wikimedia.org/wikipedia/commons/8/88/Dashen_Bank_40-Minch_branch.jpg',
        'https://upload.wikimedia.org/wikipedia/commons/8/88/Dashen_Bank_40-Minch_branch.jpg',
        'https://upload.wikimedia.org/wikipedia/commons/8/88/Dashen_Bank_40-Minch_branch.jpg',
        'https://upload.wikimedia.org/wikipedia/commons/8/88/Dashen_Bank_40-Minch_branch.jpg',
      ],
      mark: 'Premium',
      title: 'Beautiful luxurious studio at great location',
      features: {
        entire: 'Apartment',
        bedrooms: 3,
        adults: 4,
      },
      price: 120,
    },
    lat: 52.3909553943508,
    lng: 4.929309666406198,
    rating: 4.8,
    inside: [
      'Wi-Fi',
      'Washing machine',
      'Towels',
      'Heating',
      'Coffee machine',
      'Baby seat',
      'Kitchen',
      'Dishwasher',
      'Cabel TV',
      'Fridge',
    ],
    host: {
      src: 'https://upload.wikimedia.org/wikipedia/commons/a/af/20180405_FIFA_Women%27s_World_Cup_Qualification_AUT-SRB_Kristina_Inhof_850_6519.jpg',
      name: 'Kristina',
      status: 'Pro',
    },
    description: 'A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam. The building is green and from 18th century.',
  },
  {
    OfferCard: {
      id: 'kjghilv',
      src: [
        'https://upload.wikimedia.org/wikipedia/commons/8/88/Dashen_Bank_40-Minch_branch.jpg',
        'https://upload.wikimedia.org/wikipedia/commons/8/88/Dashen_Bank_40-Minch_branch.jpg',
        'https://upload.wikimedia.org/wikipedia/commons/8/88/Dashen_Bank_40-Minch_branch.jpg',
        'https://upload.wikimedia.org/wikipedia/commons/8/88/Dashen_Bank_40-Minch_branch.jpg',
        'https://upload.wikimedia.org/wikipedia/commons/8/88/Dashen_Bank_40-Minch_branch.jpg',
        'https://upload.wikimedia.org/wikipedia/commons/8/88/Dashen_Bank_40-Minch_branch.jpg',
      ],
      mark: 'Premium',
      title: 'Beautiful luxurious studio at great location',
      features: {
        entire: 'Apartment',
        bedrooms: 3,
        adults: 4,
      },
      price: 120,
    },
    lat: 52.3809553943508,
    lng: 4.939309666406198,
    rating: 4.8,
    inside: [
      'Wi-Fi',
      'Washing machine',
      'Towels',
      'Heating',
      'Coffee machine',
      'Baby seat',
      'Kitchen',
      'Dishwasher',
      'Cabel TV',
      'Fridge',
    ],
    host: {
      src: 'https://upload.wikimedia.org/wikipedia/commons/a/af/20180405_FIFA_Women%27s_World_Cup_Qualification_AUT-SRB_Kristina_Inhof_850_6519.jpg',
      name: 'Kristina',
      status: 'Pro',
    },
    description: 'A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam. The building is green and from 18th century.',
  },
];

const reviews = [
  {
    id: 'dtjdytjyk',
    user: {
      id: 'tjrhgitrh',
      src: 'https://upload.wikimedia.org/wikipedia/commons/a/af/20180405_FIFA_Women%27s_World_Cup_Qualification_AUT-SRB_Kristina_Inhof_850_6519.jpg',
      name: 'Max',
    },
    rating: 4.8,
    text: 'A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam. The building is green and from 18th century.',
    date: `${new Date()}`,
  },
  {
    id: 'yuliu',
    user: {
      id: 'tdykfil,',
      src: 'https://upload.wikimedia.org/wikipedia/commons/a/af/20180405_FIFA_Women%27s_World_Cup_Qualification_AUT-SRB_Kristina_Inhof_850_6519.jpg',
      name: 'Max',
    },
    rating: 4.8,
    text: 'A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam. The building is green and from 18th century.',
    date: `${new Date()}`,
  },
];

test('Renders app-component', () => {
  render(<App offersNumber={312} offers={offers} reviews={reviews} selectedOffer={null}/>);
  const textElement = screen.getByText(/312 places to stay in Amsterdam/i);
  expect(textElement).toBeInTheDocument();
});
