const getCartTotal = state => {
    const itemsInCart = state.panierProduct.map((item, index) => {
            const quantity = state.counter[index]
            const itemDetail = item

            return {
                subtotal: itemDetail.prix * quantity,
            }
        })

    const total = itemsInCart.reduce((total, item) => total + item.subtotal)

    return { total }
}
export default getCartTotal