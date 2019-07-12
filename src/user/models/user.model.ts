interface Name {
  title: string;
  first: string;
  last: string;
}

interface Location {
  street: string;
  city: string;
  state: string;
  postcode: string;
}

interface Picture {
  large: string;
  medium: string;
  thumbnail: string;
}

export interface GetUserModel {
  gender: string;
  name: Name;
  location: Location;
  email: string;
  phone: string;
  cell: string;
  picture: Picture;
  nat: string;
}
