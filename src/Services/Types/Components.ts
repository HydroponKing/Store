export type TProduct = {
availabilityStatus: string,
brand: string,
category:string,
description: string,
dimensions: TDimension,
discountPercentage: number,
id: number,
images: string[],
meta: Object { createdAt: "2024-05-23T08:56:21.618Z", updatedAt: "2024-05-23T08:56:21.618Z", barcode: "9164035109868", … },
minimumOrderQuantity: 24,
price: 9.99,
rating: 4.94,
returnPolicy: "30 days return policy",
reviews: Array(3) [ {…}, {…}, {…} ],
shippingInformation: "Ships in 1 month",
sku: "RCH45Q1A",
stock: 5,
tags: Array [ "beauty", "mascara" ],
thumbnail: "https://cdn.dummyjson.com/products/images/beauty/Essence%20Mascara%20Lash%20Princess/thumbnail.png",
title: "Essence Mascara Lash Princess",
warrantyInformation: "1 month warranty",
weight: 2,
}

type TDimension = {
    width : number
    height : number
    depth : number
}
  