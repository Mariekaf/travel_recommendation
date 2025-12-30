export interface City {
    name: string;
    imageUrl: string;
    description: string;
}

export interface Country {
    id: number;
    name: string;
    cities: City[];
}

export interface Place {
    id: number;
    name: string;
    imageUrl: string;
    description: string;
}

export interface TravelData {
    countries: Country[];
    temples: Place[];
    beaches: Place[];
}
