// import { SanityClient } from "@sanity/client";
// import { SanityClient } from "next-sanity";
// import { ImageUrlBuilder } from "next-sanity-image";


// export const client = SanityClient({
//     projectId: 't7l7pyhh',
//     dataset: 'production',
//     apiVersion: '2023-08-02',
//     useCdn: true,
//     token: process.env.NEXT_PUBLIC_SANITY_TOKEN
// })

// const builder = ImageUrlBuilder(client)

// export const urlFor = (source) => builder.image(source);

import { createClient } from "next-sanity";

export const client = createClient({
        projectId: 't7l7pyhh',
        dataset: 'production',
        apiVersion: '2023-08-02',
        useCdn: false,
        token: process.env.NEXT_PUBLIC_SANITY_TOKEN
    });