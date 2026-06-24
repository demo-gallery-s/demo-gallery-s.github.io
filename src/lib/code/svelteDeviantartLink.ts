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
    siteLink?: string,
    creationYear?: number,
    isCollectionThumbnail?: boolean,
    isPortrait?: boolean,
}

// const ImageData: Array<GalleryImage> = [
//     {
//         title: "Autumn Serenity",
//         description: "Embrace the gentle warmth of an autumn afternoon as the golden sunlight filters through vibrant maple leaves. A serene figure finds peace beneath the ancient boughs of a majestic tree, cradling a single leaf as if holding the very essence of the season. The soft, hazy mist rolling over the hills creates a dreamlike atmosphere, perfectly capturing the quiet beauty of nature in transition.",
//         tags: ["example1", "fantasy", "nature", "woman", "AI"],
//         visualLink: "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/6e40e221-0bde-4169-b2b5-05a3f3d9cfc3/dm3v6zq-d9e349b0-9e16-43e0-a99c-4ec9b1163384.jpg/v1/fill/w_1600,h_904,q_75,strp/autumn_serenity_by_ai_engyth3cat_dm3v6zq-fullview.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9OTA0IiwicGF0aCI6Ii9mLzZlNDBlMjIxLTBiZGUtNDE2OS1iMmI1LTA1YTNmM2Q5Y2ZjMy9kbTN2NnpxLWQ5ZTM0OWIwLTllMTYtNDNlMC1hOTljLTRlYzliMTE2MzM4NC5qcGciLCJ3aWR0aCI6Ijw9MTYwMCJ9XV0sImF1ZCI6WyJ1cm46c2VydmljZTppbWFnZS5vcGVyYXRpb25zIl19.ZbiyUoq--AI33aOk2PYkx5e8VoblGyhzsN-Nyij1zhU",
//         siteLink: "",
//     },
//     {
//         title: "European Adventure From The Bridge",
//         // description: "Example Description",
//         tags: ["example1", "nature", "building", "scene"],
//         visualLink: "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/a776c3ae-3d84-4068-bd27-2260dc3c9127/djrotb7-c9c72a6d-11a4-43c3-93c7-b577e5604df2.png/v1/fill/w_1920,h_1080,q_80,strp/european_adventure_from_the_bridge_by_num1deluxe_djrotb7-fullview.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiIvZi9hNzc2YzNhZS0zZDg0LTQwNjgtYmQyNy0yMjYwZGMzYzkxMjcvZGpyb3RiNy1jOWM3MmE2ZC0xMWE0LTQzYzMtOTNjNy1iNTc3ZTU2MDRkZjIucG5nIiwiaGVpZ2h0IjoiPD0xMDgwIiwid2lkdGgiOiI8PTE5MjAifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6aW1hZ2Uud2F0ZXJtYXJrIl0sIndtayI6eyJwYXRoIjoiL3dtL2E3NzZjM2FlLTNkODQtNDA2OC1iZDI3LTIyNjBkYzNjOTEyNy9udW0xZGVsdXhlLTQucG5nIiwib3BhY2l0eSI6OTUsInByb3BvcnRpb25zIjowLjQ1LCJncmF2aXR5IjoiY2VudGVyIn19.vVyRZyVuvR7YLhfKnUDw_VoJzyqR8C6stCI38vqMVFE",
//         siteLink: "",
//     },
//     {
//         title: "ADAureliaFairy",
//         description: "Aurelia, fairy of light... walking through the night, she received a flower from a fairy...",
//         tags: ["example1", "fanart", "woman", "drawn"],
//         visualLink: "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/3f24a390-1765-41ce-8cbf-03a7f5d8b986/dm44vxu-c0cae33f-9094-4c42-86c3-45d3bf0545e3.jpg/v1/fill/w_1280,h_1536,q_75,strp/adaureliafairy_by_darkaldo_dm44vxu-fullview.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9MTUzNiIsInBhdGgiOiIvZi8zZjI0YTM5MC0xNzY1LTQxY2UtOGNiZi0wM2E3ZjVkOGI5ODYvZG00NHZ4dS1jMGNhZTMzZi05MDk0LTRjNDItODZjMy00NWQzYmYwNTQ1ZTMuanBnIiwid2lkdGgiOiI8PTEyODAifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6aW1hZ2Uub3BlcmF0aW9ucyJdfQ.jBmDSgb7WZ0KHtTQ9RG2u8uB-IYvrA5xWuOFnMSKRTo",
//         siteLink: "",
//     },
//     {
//         title: "Dotpict goth cat drawing",
//         description: "I won't join artfight",
//         tags: ["example1", "digital art"],
//         visualLink: "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/2eb39232-0807-4eba-a680-155c9727f981/dlw71dy-95dc9eae-4974-4776-8f29-f8b19c36f2ee.png/v1/fill/w_1280,h_1280,q_80,strp/dotpict_goth_cat_drawing_by_fakeartexe_dlw71dy-fullview.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9MTI4MCIsInBhdGgiOiIvZi8yZWIzOTIzMi0wODA3LTRlYmEtYTY4MC0xNTVjOTcyN2Y5ODEvZGx3NzFkeS05NWRjOWVhZS00OTc0LTQ3NzYtOGYyOS1mOGIxOWMzNmYyZWUucG5nIiwid2lkdGgiOiI8PTEyODAifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6aW1hZ2Uub3BlcmF0aW9ucyJdfQ.nIPMZmAPOE-_lrfbH7RUryN8_Wh5cLnb_IW8dQAgpr8",
//         siteLink: "",
//     },
//     {
//         title: "Ratty (2)",
//         description: "Wild Rat portrait taken by the river in Bedford, UK last weekend",
//         tags: ["example1", "nature", "photography", "has site link"],
//         visualLink: "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/97328533-17af-4379-8160-0238c2ece542/dkje841-d0a5a71a-ca4e-4373-9fc2-2b3131bcc3ba.jpg/v1/fit/w_375,h_265,q_70,strp/ratty__2__by_mincingyoda_dkje841-375w.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9MTM1OSIsInBhdGgiOiIvZi85NzMyODUzMy0xN2FmLTQzNzktODE2MC0wMjM4YzJlY2U1NDIvZGtqZTg0MS1kMGE1YTcxYS1jYTRlLTQzNzMtOWZjMi0yYjMxMzFiY2MzYmEuanBnIiwid2lkdGgiOiI8PTE5MjAifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6aW1hZ2Uub3BlcmF0aW9ucyJdfQ.nISkFrLiRwbnaHy04rvP3VvJpGZ-Mcjr-6Jdq4phJiM",
//         siteLink: "https://www.deviantart.com/mincingyoda/art/Ratty-2-1241899921",
//     },
// ];

const ImageData: Array<GalleryImage> = [
    {
        title: "Example Title",
        description: "Example Description",
        tags: ["people"],
        visualLink: "https://cdn.myportfolio.com/d36a199a-c685-4b51-ad01-cf442d6ba6d9/04d71ead-86a1-46d3-8f9f-93f09061407e_rw_1920.jpg?h=49b85d092f98fb4768a4a1e0ae7fbee0",
        siteLink: "",
    },
    {
        title: "Example Title",
        description: "Example Description",
        tags: ["people"],
        visualLink: "https://cdn.myportfolio.com/d36a199a-c685-4b51-ad01-cf442d6ba6d9/bf32e4bb-104c-443f-9fd4-266fab72f36c_rw_1920.jpg?h=8fde10d26178d83333cdf3ca016d3e49",
        siteLink: "",
    },
    {
        title: "Example Title",
        description: "Example Description",
        tags: ["people"],
        visualLink: "https://cdn.myportfolio.com/d36a199a-c685-4b51-ad01-cf442d6ba6d9/e60b20f6-dc52-440a-9cfa-f4e996cca1e7_rw_1920.jpg?h=d7159558eae3d729eb086b99aba4199a",
        siteLink: "",
    },
    {
        title: "Example Title",
        description: "Example Description",
        tags: ["people"],
        visualLink: "https://cdn.myportfolio.com/d36a199a-c685-4b51-ad01-cf442d6ba6d9/e7376b43-aaa5-48e6-952b-d6c782bc43a9_rw_1920.jpg?h=2c47fd1e73bebdd08e677a6c362d6020",
        siteLink: "",
    },
    {
        title: "Example Title",
        description: "Example Description",
        tags: ["people"],
        visualLink: "https://cdn.myportfolio.com/d36a199a-c685-4b51-ad01-cf442d6ba6d9/d0551185-0a80-45b3-a7e8-bf924ce229a7_rw_1920.jpg?h=0d773a621e335980e6990371c1b57651",
        siteLink: "",
    },
    {
        title: "Example Title",
        description: "Example Description",
        tags: ["people"],
        visualLink: "https://cdn.myportfolio.com/d36a199a-c685-4b51-ad01-cf442d6ba6d9/b00ca67a-8f34-4f50-88f0-c259f15425b1_rw_1920.jpg?h=64f3c18aa8eed08de4dab5adf0e11514",
        siteLink: "",
    },
    {
        title: "Example Title",
        description: "Example Description",
        tags: ["people"],
        visualLink: "https://cdn.myportfolio.com/d36a199a-c685-4b51-ad01-cf442d6ba6d9/2a3f496e-ad3f-47b2-bfe2-e43c221540f3_rw_3840.jpg?h=4d82c456cbd48d4ebe935efcc6fa7558",
        siteLink: "",
    },
    {
        title: "Example Title",
        description: "Example Description",
        tags: ["people"],
        visualLink: "https://cdn.myportfolio.com/d36a199a-c685-4b51-ad01-cf442d6ba6d9/4403e3d4-9598-4912-a8d1-874684e2bf78_rw_3840.jpg?h=642435eeaff1dd49fc5c50bf530a24d6",
        siteLink: "",
    },
    {
        title: "Example Title",
        description: "Example Description",
        tags: ["people"],
        visualLink: "https://cdn.myportfolio.com/d36a199a-c685-4b51-ad01-cf442d6ba6d9/1d353c9b-2185-45d5-bef2-9318d46bbd50_rw_3840.jpg?h=a4f56f4863fd6281a733dc3567ea7ca1",
        siteLink: "",
    },
    {
        title: "Example Title",
        description: "Example Description",
        tags: ["people"],
        visualLink: "https://cdn.myportfolio.com/d36a199a-c685-4b51-ad01-cf442d6ba6d9/012e3d63-b935-4ba9-8914-cfd7f81ca95d_rw_1920.jpg?h=f201caa85a45bb03699a8b649acd9a29",
        siteLink: "",
    },
    ///
    {
        title: "Example Title",
        description: "Example Description",
        tags: ["neon"],
        visualLink: "https://cdn.myportfolio.com/d36a199a-c685-4b51-ad01-cf442d6ba6d9/4153464e-9380-4bfb-9989-b3c643ab08cd_rw_1920.jpg?h=ebdcea362818510a1cff699fe97ea539",
        siteLink: "",
    },
    {
        title: "Example Title",
        description: "Example Description",
        tags: ["neon"],
        visualLink: "https://cdn.myportfolio.com/d36a199a-c685-4b51-ad01-cf442d6ba6d9/5b4ba70d-1d1f-435a-8cbe-5bd69b3599ed_rw_1920.jpg?h=ef842182012ff448954aeaacf7feea2d",
        siteLink: "",
    },
    {
        title: "Example Title",
        description: "Example Description",
        tags: ["neon"],
        visualLink: "https://cdn.myportfolio.com/d36a199a-c685-4b51-ad01-cf442d6ba6d9/80f5054c-61cf-4889-85f8-dff513570fdc_rw_1920.jpg?h=5c89ee41cb4a1682d5bcc0083447e91a",
        siteLink: "",
    },
    {
        title: "Example Title",
        description: "Example Description",
        tags: ["neon"],
        visualLink: "https://cdn.myportfolio.com/d36a199a-c685-4b51-ad01-cf442d6ba6d9/2947dad2-f6b0-4a57-9cf9-c018286929f0_rw_1920.jpg?h=4273855d4b63f823e0d67a2e54d51501",
        siteLink: "",
    },
    {
        title: "Example Title",
        description: "Example Description",
        tags: ["neon"],
        visualLink: "https://cdn.myportfolio.com/d36a199a-c685-4b51-ad01-cf442d6ba6d9/b95698b7-7155-4570-baa2-4978c0bdecc0_rw_1920.jpg?h=9db75174f2745bd8e79086c5e0ea1b48",
        siteLink: "",
    },
    {
        title: "Example Title",
        description: "Example Description",
        tags: ["neon"],
        visualLink: "https://cdn.myportfolio.com/d36a199a-c685-4b51-ad01-cf442d6ba6d9/e54983f4-e226-4f62-8978-03cb2e57ca2a_rw_1920.jpg?h=c7009762614a56c333d033f415f13239",
        siteLink: "",
    },
    {
        title: "Example Title",
        description: "Example Description",
        tags: ["neon"],
        visualLink: "https://cdn.myportfolio.com/d36a199a-c685-4b51-ad01-cf442d6ba6d9/a21a4618-b118-451f-ab99-2fdf6fe37fba_rw_1920.jpg?h=38d9d0ea7a1270bab112f08182555515",
        siteLink: "",
    },
    ///
    {
        title: "Example Title",
        description: "Example Description",
        tags: ["commissions"],
        visualLink: "https://cdn.myportfolio.com/d36a199a-c685-4b51-ad01-cf442d6ba6d9/65b501c7-4908-4ed9-a8f5-48a95d2f139d_rw_1920.jpg?h=2650379a6e78b852c9a9f8b6c5563c35",
        siteLink: "",
    },
    {
        title: "Example Title",
        description: "Example Description",
        tags: ["commissions"],
        visualLink: "https://cdn.myportfolio.com/d36a199a-c685-4b51-ad01-cf442d6ba6d9/f1c9df80-560c-4b2f-9d1e-cbc687c1c39f_rw_1920.jpg?h=1a53c01e393f5a2952223b718a64491d",
        siteLink: "",
    },
    ///
    {
        title: "Example Title",
        description: "Example Description",
        tags: ["Freya Kotchakorn Art Course"],
        visualLink: "https://cdn.myportfolio.com/d36a199a-c685-4b51-ad01-cf442d6ba6d9/c487cac0-510c-4dc2-8bc6-742492eca51e_rw_1920.jpg?h=e2d6724b1f60089d02c3074c2cc67efd",
        siteLink: "",
    },
    {
        title: "Example Title",
        description: "Example Description",
        tags: ["Freya Kotchakorn Art Course"],
        visualLink: "https://cdn.myportfolio.com/d36a199a-c685-4b51-ad01-cf442d6ba6d9/ff4ebd85-4fec-4ba9-9b8b-c720dbbc7d9d_rw_1920.jpg?h=d0ff8ced5e636dc05cfd0829c07f2f59",
        siteLink: "",
    },
    {
        title: "Example Title",
        description: "Example Description",
        tags: ["Freya Kotchakorn Art Course"],
        visualLink: "https://cdn.myportfolio.com/d36a199a-c685-4b51-ad01-cf442d6ba6d9/834866b4-04c0-47dc-8445-4067eff2e9ef_rw_1920.jpg?h=a8e974fa9af4988cb28ae1a4063bd90f",
        siteLink: "",
    },
    {
        title: "Example Title",
        description: "Example Description",
        tags: ["Freya Kotchakorn Art Course"],
        visualLink: "https://cdn.myportfolio.com/d36a199a-c685-4b51-ad01-cf442d6ba6d9/2c4ba662-11df-4dfc-b2b7-b0ea5e1d2d79_rw_1920.jpg?h=2de45d41852e2bd02febeb193ae78fea",
        siteLink: "",
    },
    ///
    {
        title: "Example Title",
        description: "Example Description",
        tags: ["animals"],
        visualLink: "https://cdn.myportfolio.com/d36a199a-c685-4b51-ad01-cf442d6ba6d9/d252a96a-6490-4b09-9873-a043b8eee009_rw_1920.jpg?h=68bcd570146e8ea63af4f6ab84f6adc2",
        siteLink: "",
    },
    {
        title: "Example Title",
        description: "Example Description",
        tags: ["animals"],
        visualLink: "https://cdn.myportfolio.com/d36a199a-c685-4b51-ad01-cf442d6ba6d9/ae948cba-4812-46d1-b7a0-3c07f2806755_rw_1920.jpg?h=cabdaec989fdcc83247f408274679ee6",
        siteLink: "",
    },
    {
        title: "Example Title",
        description: "Example Description",
        tags: ["animals"],
        visualLink: "https://cdn.myportfolio.com/d36a199a-c685-4b51-ad01-cf442d6ba6d9/59585389-5e10-47cc-9c8f-5a722bd3281a_rw_1920.jpg?h=1d054ff756ebe455c1874e01be7db0d8",
        siteLink: "",
    },
    {
        title: "Example Title",
        description: "Example Description",
        tags: ["animals"],
        visualLink: "https://cdn.myportfolio.com/d36a199a-c685-4b51-ad01-cf442d6ba6d9/75c31d94-f502-402a-bfee-2c1b1557b440_rw_1920.jpg?h=2b420289c69db4d590098f4a2a3379de",
        siteLink: "",
    },
    {
        title: "Example Title",
        description: "Example Description",
        tags: ["animals"],
        visualLink: "https://cdn.myportfolio.com/d36a199a-c685-4b51-ad01-cf442d6ba6d9/02006c39-8dbc-48fe-a703-a4793da64df0_rw_3840.jpg?h=1c02df93a3b6d1269e81da5f0c1f1948",
        siteLink: "",
    },
    ///
    {
        title: "Example Title",
        description: "Example Description",
        tags: ["scenes"],
        visualLink: "https://cdn.myportfolio.com/d36a199a-c685-4b51-ad01-cf442d6ba6d9/b5f2f608-0fe5-4238-a76b-102847af205c_rw_1920.jpg?h=50d36f355d78d7509917b165435d61eb",
        siteLink: "",
    },
    ///
    {
        title: "Example Title",
        description: "Example Description",
        tags: ["doodles"],
        visualLink: "https://cdn.myportfolio.com/d36a199a-c685-4b51-ad01-cf442d6ba6d9/de292da5-9ead-4119-9c0f-850ff6a2474c_rw_1920.jpg?h=bb9b78997c8fcb38b887efd332cda8b9",
        siteLink: "",
    },
    ///
    {
        title: "Example Title",
        description: "Example Description",
        tags: ["art styles"],
        visualLink: "https://cdn.myportfolio.com/d36a199a-c685-4b51-ad01-cf442d6ba6d9/a80fe7a7-4c68-47bf-86cd-c7da7b00aa60_rw_1920.jpg?h=8e08670a039e9ca6f95c166b2da9dc2a",
        siteLink: "",
    },
];

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
