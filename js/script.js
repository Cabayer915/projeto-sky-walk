tenisJson.map((item, index ) => {
    //console.log(item)
    let tenisItem = document.querySelector('.models .tenis-item').cloneNode(true)
    //console.log(tenisItem)
    document.querySelector('.tenis-area').append(tenisItem)

    // preencher os dados de cada tenis
    tenisItem.querySelector('.tenis-item--img img').src = item.img
    tenisItem.querySelector('.tenis-item--price').innerHTML = `R$ ${item.price.toFixed(2)}`
    tenisItem.querySelector('.tenis-item--name').innerHTML = item.name
    tenisItem.querySelector('.tenis-item--desc').innerHTML = item.description

})
