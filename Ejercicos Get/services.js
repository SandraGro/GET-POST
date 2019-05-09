exports.addId = (obj) => {
    var i = 0;
    obj.forEach(element =>{
        element.id = ++i;

    });

    obj.id = ++i;
    return obj;
}