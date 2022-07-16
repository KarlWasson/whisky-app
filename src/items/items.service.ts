// src/items/items.service.ts

/**
 * Data Model Interfaces
 */

import { BaseItem, Item } from "./item.interface";
import { Items } from "./items.interface";
/**
 * In-Memory Store
 */
let items: Items = {
    1: {
        id: 1,
        name: "ON A SAW MILL' 10 YEAR OLD ISLAY BLENDED MALT",
        price: 11000,
        description: "This lot contains a 10 Year Old blend malt, bottled by Cut Your Wolf Loose.",
        image: "https://d3suvtcq00dftb.cloudfront.net/images/d26e8f783316966bfd8f63f556169c4d-zoom.jpg"
    },
    2: {
        id: 2,
        name: "ABERFELDY 12 YEAR OLD",
        price: 2500,
        description: "An award winning Eastern Highland malt that was almost unknown until it was bought by Bacardi in 1998.",
        image: "https://d3suvtcq00dftb.cloudfront.net/images/a1cdf28434bb6151baae0d8613490ca1-zoom.jpg"
    },
    3: {
        id: 3,
        name: "ABERLOUR 18 YEAR OLD",
        price: 11000,
        description: "Part of the core range, the 18 year old has been matured in a combination of sherry and bourbon casks.",
        image: "https://d3suvtcq00dftb.cloudfront.net/images/c0bab1b319d89db493e81a8caa334ca9-large@2x.jpg"
    }
};

/**
 * Service Methods
 */

export const findAll = async (): Promise<Item[]> => Object.values(items);
export const find = async(id: number): Promise<Item> => items[id]; 

// create new item

export const create = async (newItem: BaseItem): Promise<Item> => {
    const id = new Date().valueOf();

    items[id] = {
        id,
        ...newItem,
    };

    return items[id];
};

// update new item 

export const update = async (
    id: number,
    itemUpdate: BaseItem
): Promise<Item | null> => {
    const item = await find(id);

    if(!item){
        return null;
    }

    items[id] = { id, ...itemUpdate};

    return items[id];
}

// delete existing item
export const remove =async (id:number) => {
    const item = await find(id);

    if (!item){
        return null;
    }

    delete items[id];
}