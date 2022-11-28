export interface listingInterface {
    title: string,
    id: string,
    location: string,
    price: number,
    imageSrc: string,
    description: string,
    user: {
        image: string,
        name: string
    }
}