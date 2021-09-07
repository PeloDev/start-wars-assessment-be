
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
    let searchTerm = name.replace(" ", "-").toLowerCase();
    console.log(searchTerm);
    const result = await cloudinary
        .search
        .expression(searchTerm)
        .max_results(1)
        .execute();//.then((result: any) => console.log(result));
    if (result.resources) {
        if (result.resources.secure_url)
            return result.resources.secure_url;
        if (result.resources[0])
            return result.resources[0].secure_url;
    }
    else return null;
}