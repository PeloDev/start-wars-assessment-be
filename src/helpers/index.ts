
const imageSearch = require('image-search-google');

interface ICSEImage {
    url: string;
    thumbnail: string;
    snippet: string;
    context: string;
}

// Google Custom Search Engine API
export const getCharacterImages = async (name: string) => {
    const client = new imageSearch('5280e298b73d7a0ae', 'AIzaSyAKyScVfoXSC-vkzKo_E5Kuigi6-1N_FXQ');
    const options = { page: 1 };
    const result = await client.search(name, options);
    if (result)
        if (result[0])
            if (result[0].url)
                return result as ICSEImage[];

    console.log(result);
    return [];
}

// Cloudinary
const cloudinary = require('cloudinary').v2;

cloudinary.config({
    cloud_name: 'dhrbbwjkf',
    api_key: '133572515934579',
    api_secret: 'AuctutecS27x7f2C764eedst6BU',
    secure: true
})

export const searchImagesByName = async (name: string) => {
    const result = await cloudinary
        .search
        .expression(name)
        .max_results(2)
        .execute();//.then((result: any) => console.log(result));
    if (result.secure_url)
        return result.secure_url;
    else return null;
}