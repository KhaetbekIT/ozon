const RenderCart = (goods = []) => {

    const cartWrapper = document.querySelector(".cart-wrapper")
    // @todo
    goods.length === 0 ? (
        cartWrapper.insertAdjacentHTML("beforeend", `
            <div id="cart-empty"> Ваша корзина пока пуста </div>
        `)
    ) : (
        goods.forEach(goodsItem => {
            cartWrapper.insertAdjacentHTML("beforeend", `
                <!-- КАРТОЧКА ТОВАРА -->
                    <div class="card" data-key="${goodsItem.id}">
                        ${goodsItem.sale ? (`<div class="card-sale">🔥Hot Sale🔥</div>`) : ("")}
                        <div class="card-img-wrapper">
                            <span class="card-img-top"
                                style="background-image: url('${goodsItem.img}')"></span>
                        </div>
                        <div class="card-body justify-content-between">
                            <div class="card-price">${goodsItem.price} ₽</div>
                            <h5 class="card-title">${goodsItem.title} </h5>
                            <button class="btn btn-primary">Удалить</button>
                        </div>
                    </div>
                <!-- END КАРТОЧКА ТОВАРА -->
            `)
        })
    )

}

export default RenderCart