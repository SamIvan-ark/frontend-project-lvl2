const convertObjToStrNormalized = (obj) => {
    const json = JSON.stringify(obj, null, '  ');
    return json.replaceAll('"', '').replaceAll(',', '');
};

export default convertObjToStrNormalized;