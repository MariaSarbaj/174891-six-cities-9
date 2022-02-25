export type Review = {
  id: string,
  user: {
    id: string,
    src: string,
    name: string
  },
  rating: number
  text: string,
  date: string
}

export type Reviews = Review[]
