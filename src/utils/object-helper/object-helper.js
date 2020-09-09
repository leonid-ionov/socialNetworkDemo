export const updateObjectInArray = (items,itemID,objPropName,newObjectProp) => {
    return items.map(i => {
        if (i[objPropName] === itemID) {
            return {...i, ...newObjectProp}
        }
        return i
    })
}