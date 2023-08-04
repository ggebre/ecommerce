// import sanityClient from "@sanity/client";
// import imageUrlBuilder from "@sanity/image-url";


// export const client = sanityClient({
//     projectId: 't7l7pyhh',
//     dataset: 'production',
//     apiVersion: '2023-08-02',
//     useCdn: true,
//     token: process.env.NEXT_PUBLIC_SANITY_TOKEN
// })

// const builder = imageUrlBuilder(client)

// export const urlFor = (source) => builder.image(source);

import { createClient } from "next-sanity";
import imageUrlBuilder from '@sanity/image-url';

const config = {
    projectId: 't7l7pyhh',
    dataset: 'production',
    apiVersion: '2023-08-02',
    useCdn: false,
    token: process.env.NEXT_PUBLIC_SANITY_TOKEN
}


export const client = createClient(config);

const builder = imageUrlBuilder(client)

export const urlFor = (source) => {
    return builder
            .image(source)
            .url()
        };
