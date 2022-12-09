interface IBook {
  id: string;
  title: string;
  author: string;
  genreId: string;
  price: number;
  description: string;
  reviews: {
    user: string;
    review: string;
  }[];
}
