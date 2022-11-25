import React from 'react'
import { listingInterface } from '../../utils/interface'


const ListingPage = ({listing} : any) => {
    return(
        <div>
            <h1></h1>
        </div>
    )
}
export default ListingPage




export async function getStaticProps({ params  } : any) {
    const data = await fetch(`http://localhost:3000/api/listings/${params.listing}`)
    let listing = await data.json()
    return {
      props: { listing },
    };
  }
  export async function getStaticPaths() {
    const data = await fetch(`http://localhost:3000/api/mockdata`)
    let listings = await data.json()
    const paths = listings.map((listing : listingInterface) => {
      return {
        params: {
          listing: listing.id,
        },
      };
    });

    return {
      paths,
      fallback: false,
    };
  }