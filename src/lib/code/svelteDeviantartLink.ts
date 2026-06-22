export default {
    loadImagesForGallery,
    loadImagesForGalleryByTag,
    loadImagesForDisplay,
    getImageIndex,
    getImageTagList,
    getTagStringConversion,
};

export interface TagSearchOption {
    tag: string,
    searchTerm: string,
}

export interface GalleryImage {
    title: string,
    description?: string,
    tags: Array<string>,
    visualLink: string,
    siteLink: string,
}

const ImageData: Array<GalleryImage> = [
    {
        title: "Autumn Serenity",
        description: "Embrace the gentle warmth of an autumn afternoon as the golden sunlight filters through vibrant maple leaves. A serene figure finds peace beneath the ancient boughs of a majestic tree, cradling a single leaf as if holding the very essence of the season. The soft, hazy mist rolling over the hills creates a dreamlike atmosphere, perfectly capturing the quiet beauty of nature in transition.",
        tags: ["example1", "fantasy", "nature", "woman", "AI"],
        visualLink: "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/6e40e221-0bde-4169-b2b5-05a3f3d9cfc3/dm3v6zq-d9e349b0-9e16-43e0-a99c-4ec9b1163384.jpg/v1/fill/w_1600,h_904,q_75,strp/autumn_serenity_by_ai_engyth3cat_dm3v6zq-fullview.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9OTA0IiwicGF0aCI6Ii9mLzZlNDBlMjIxLTBiZGUtNDE2OS1iMmI1LTA1YTNmM2Q5Y2ZjMy9kbTN2NnpxLWQ5ZTM0OWIwLTllMTYtNDNlMC1hOTljLTRlYzliMTE2MzM4NC5qcGciLCJ3aWR0aCI6Ijw9MTYwMCJ9XV0sImF1ZCI6WyJ1cm46c2VydmljZTppbWFnZS5vcGVyYXRpb25zIl19.ZbiyUoq--AI33aOk2PYkx5e8VoblGyhzsN-Nyij1zhU",
        siteLink: "",
    },
    {
        title: "European Adventure From The Bridge",
        // description: "",
        tags: ["example1", "nature", "building", "scene"],
        visualLink: "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/a776c3ae-3d84-4068-bd27-2260dc3c9127/djrotb7-c9c72a6d-11a4-43c3-93c7-b577e5604df2.png/v1/fill/w_1920,h_1080,q_80,strp/european_adventure_from_the_bridge_by_num1deluxe_djrotb7-fullview.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiIvZi9hNzc2YzNhZS0zZDg0LTQwNjgtYmQyNy0yMjYwZGMzYzkxMjcvZGpyb3RiNy1jOWM3MmE2ZC0xMWE0LTQzYzMtOTNjNy1iNTc3ZTU2MDRkZjIucG5nIiwiaGVpZ2h0IjoiPD0xMDgwIiwid2lkdGgiOiI8PTE5MjAifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6aW1hZ2Uud2F0ZXJtYXJrIl0sIndtayI6eyJwYXRoIjoiL3dtL2E3NzZjM2FlLTNkODQtNDA2OC1iZDI3LTIyNjBkYzNjOTEyNy9udW0xZGVsdXhlLTQucG5nIiwib3BhY2l0eSI6OTUsInByb3BvcnRpb25zIjowLjQ1LCJncmF2aXR5IjoiY2VudGVyIn19.vVyRZyVuvR7YLhfKnUDw_VoJzyqR8C6stCI38vqMVFE",
        siteLink: "",
    },
    {
        title: "ADAureliaFairy",
        description: "Aurelia, fairy of light... walking through the night, she received a flower from a fairy...",
        tags: ["example1", "fanart", "woman", "drawn"],
        visualLink: "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/3f24a390-1765-41ce-8cbf-03a7f5d8b986/dm44vxu-c0cae33f-9094-4c42-86c3-45d3bf0545e3.jpg/v1/fill/w_1280,h_1536,q_75,strp/adaureliafairy_by_darkaldo_dm44vxu-fullview.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9MTUzNiIsInBhdGgiOiIvZi8zZjI0YTM5MC0xNzY1LTQxY2UtOGNiZi0wM2E3ZjVkOGI5ODYvZG00NHZ4dS1jMGNhZTMzZi05MDk0LTRjNDItODZjMy00NWQzYmYwNTQ1ZTMuanBnIiwid2lkdGgiOiI8PTEyODAifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6aW1hZ2Uub3BlcmF0aW9ucyJdfQ.jBmDSgb7WZ0KHtTQ9RG2u8uB-IYvrA5xWuOFnMSKRTo",
        siteLink: "",
    },
    {
        title: "Dotpict goth cat drawing",
        description: "I won't join artfight",
        tags: ["example1", "digital art"],
        visualLink: "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/2eb39232-0807-4eba-a680-155c9727f981/dlw71dy-95dc9eae-4974-4776-8f29-f8b19c36f2ee.png/v1/fill/w_1280,h_1280,q_80,strp/dotpict_goth_cat_drawing_by_fakeartexe_dlw71dy-fullview.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9MTI4MCIsInBhdGgiOiIvZi8yZWIzOTIzMi0wODA3LTRlYmEtYTY4MC0xNTVjOTcyN2Y5ODEvZGx3NzFkeS05NWRjOWVhZS00OTc0LTQ3NzYtOGYyOS1mOGIxOWMzNmYyZWUucG5nIiwid2lkdGgiOiI8PTEyODAifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6aW1hZ2Uub3BlcmF0aW9ucyJdfQ.nIPMZmAPOE-_lrfbH7RUryN8_Wh5cLnb_IW8dQAgpr8",
        siteLink: "",
    },
    {
        title: "Ratty (2)",
        description: "Wild Rat portrait taken by the river in Bedford, UK last weekend",
        tags: ["example1", "nature", "photography", "has site link"],
        visualLink: "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/97328533-17af-4379-8160-0238c2ece542/dkje841-d0a5a71a-ca4e-4373-9fc2-2b3131bcc3ba.jpg/v1/fit/w_375,h_265,q_70,strp/ratty__2__by_mincingyoda_dkje841-375w.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9MTM1OSIsInBhdGgiOiIvZi85NzMyODUzMy0xN2FmLTQzNzktODE2MC0wMjM4YzJlY2U1NDIvZGtqZTg0MS1kMGE1YTcxYS1jYTRlLTQzNzMtOWZjMi0yYjMxMzFiY2MzYmEuanBnIiwid2lkdGgiOiI8PTE5MjAifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6aW1hZ2Uub3BlcmF0aW9ucyJdfQ.nISkFrLiRwbnaHy04rvP3VvJpGZ-Mcjr-6Jdq4phJiM",
        siteLink: "https://www.deviantart.com/mincingyoda/art/Ratty-2-1241899921",
    },
]

function loadImagesForGallery(): Array<GalleryImage> {
    return ImageData
    // return ImageJson as Array<any>;
}

function loadImagesForGalleryByTag(tagFilter: string) {
    return loadImagesForGallery().filter(img => img.tags.includes(tagFilter.toLocaleLowerCase() ));
}

function loadImagesForDisplay(imageIndex: number){
    return loadImagesForGallery()[imageIndex];
}

function getImageIndex(image: GalleryImage){
    let response = null;
    for(let i = 0; i < ImageData.length; i++ ){
        const entry = ImageData[i];
        if(entry.title == image.title && entry.description == image.description && entry.visualLink == image.visualLink){
            response = i;
            break;
        }
    }
    return response;
}

function getImageTagList(): Array<TagSearchOption>{
    const response: Array<TagSearchOption> = [];
    const gotCache: Array<String> = [];
    ImageData.forEach(entry => {
        entry.tags.forEach(tag => {
            if(!gotCache.includes(tag)){
                gotCache.push(tag);
                response.push({
                    tag: tag.replace(/\s/g, "_"),
                    searchTerm: tag,
                });
            }
        });
    });
    return response;
}

function getTagStringConversion(str: string){
    return getImageTagList().find(e => e.tag == str);
}
