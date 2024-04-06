export function urlSplit(url) {
    const array = url.split('/')
    const slicedArray = array.slice(2)
    return slicedArray
}