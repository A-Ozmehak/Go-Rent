// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import { listingInterface } from '../../utils/interface'



export const placeholderListing : listingInterface[] = [
    {
        "title": "Mysig lokal för fest",
        "id": "1",
        "location": "Kärra - Göteborg",
        "price": 1200,
        "owner": "test",
        "imageSrc": "https://images.ctfassets.net/pg6xj64qk0kh/2r4QaBLvhQFH1mPGljSdR9/39b737d93854060282f6b4a9b9893202/camden-paces-apartments-buckhead-ga-terraces-living-room-with-den_1.jpg"
    },
    {
        "title": "Mysig lokal för fest",
        "id": "2",
        "location": "Kärra - Göteborg",
        "price": 1200,
        "owner": "test",
        "imageSrc": "https://images.ctfassets.net/pg6xj64qk0kh/2r4QaBLvhQFH1mPGljSdR9/39b737d93854060282f6b4a9b9893202/camden-paces-apartments-buckhead-ga-terraces-living-room-with-den_1.jpg"
    },
    {
        "title": "Mysig lokal för fest",
        "id": "3",
        "location": "Kärra - Göteborg",
        "price": 1200,
        "owner": "test",
        "imageSrc": "https://images.ctfassets.net/pg6xj64qk0kh/2r4QaBLvhQFH1mPGljSdR9/39b737d93854060282f6b4a9b9893202/camden-paces-apartments-buckhead-ga-terraces-living-room-with-den_1.jpg"
    },
    {
        "title": "Mysig lokal för fest",
        "id": "4",
        "location": "Kärra - Göteborg",
        "price": 1200,
        "owner": "test",
        "imageSrc": "https://images.ctfassets.net/pg6xj64qk0kh/2r4QaBLvhQFH1mPGljSdR9/39b737d93854060282f6b4a9b9893202/camden-paces-apartments-buckhead-ga-terraces-living-room-with-den_1.jpg"
    },
    {
        "title": "Mysig lokal för fest",
        "id": "5",
        "location": "Kärra - Göteborg",
        "price": 1200,
        "owner": "test",
        "imageSrc": "https://images.ctfassets.net/pg6xj64qk0kh/2r4QaBLvhQFH1mPGljSdR9/39b737d93854060282f6b4a9b9893202/camden-paces-apartments-buckhead-ga-terraces-living-room-with-den_1.jpg"
    },
]



export default function mockDatahandler(
  req: NextApiRequest,
  res: NextApiResponse<listingInterface[]>
) {
  res.status(200).json(placeholderListing)
}
