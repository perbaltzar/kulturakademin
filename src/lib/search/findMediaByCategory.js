const findMediaByCategory = (category, media) => {
    const items = media.filter(media => {
        return media.tags.includes(category);
    })

    return items;
}

export default findMediaByCategory;