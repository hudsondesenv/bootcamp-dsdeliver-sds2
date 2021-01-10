export type Product = {
    id: number;
    name: string;
    prince: number;
    description: string;
    imageUrl: string;
}

export type OrderLocationData = {
    latitude: number;
    longitude: number;
    address: string;
}

type ProductId = {
    id: number;
}

export type OrderPayload = {
    products: ProductId[];
} & OrderLocationData;

