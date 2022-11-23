import React from 'react'
import { useRouter } from 'next/router'
const ListingPage = () => {
    const {
        query: { listing }
    } = useRouter()


    return(
        <div>
            <h1>{listing}</h1>
        </div>
    )
}

export default ListingPage