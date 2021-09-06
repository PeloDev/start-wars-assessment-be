
const imageSearch = require('image-search-google');

interface ICSEImage {
    url: string;
    thumbnail: string;
    snippet: string;
    context: string;
}

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
    // client.search(name, options)
    //     .then((images: ICSEImage[]) => {
    //         console.log(images);
    //     })
    //     .catch((error: any) => console.log(error));
}