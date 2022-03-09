export type OfferCard = {
  id: string,
  src: string[],
  mark: string,
  title: string,
  features: {
    entire: string,
    bedrooms?: number,
    adults?: number,
  },
  price: number,
}

export type Offer = {
  OfferCard: OfferCard,
  lat: number,
  lng: number,
  rating: number,
  inside: string[],
  host: {
    src: string,
    name: string,
    status: string
  },
  description: string,
  isFavorite?: boolean
};

export type Offers = Offer[];
