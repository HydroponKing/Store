export type TProduct = {
availabilityStatus: string,
brand: string,
category:string,
description: string,
dimensions: TDimension,
discountPercentage: number,
id: number,
images: string[],
meta: Tmeta,
minimumOrderQuantity: number,
price: number,
rating: number,
returnPolicy: string,
reviews: TReview[],
shippingInformation: string,
sku: string,
stock: number,
tags: string[],
thumbnail: string,
title: string,
warrantyInformation: string,
weight: 2,
}

type TDimension = {
    width : number,
    height : number,
    depth : number,
}

type Tmeta = {
    createdAt: string,
    updatedAt: string,
    barcode: string,
} 

type TReview = {
    rating: number,
    comment: string,
    date: string,
    reviewerName: string,
    reviewerEmail: string
}