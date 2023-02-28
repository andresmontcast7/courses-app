import {createApi, fetchBaseQuery}from '@reduxjs/toolkit/query/react'



export const apiThinkfic = createApi({
    reducerPath:"apiThinfic",
    baseQuery:fetchBaseQuery({baseUrl:"https://dummyjson.com/"}),
    endpoints:(builder) =>({
        getProduct:builder.query({
            query:()=>"products",

        })
    }),
});


export const {useGetProductQuery} = apiThinkfic