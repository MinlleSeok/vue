let product = 'Socks'

// Vue instance
let app = new Vue({
    el: '#app',
    data: {
        product: "Socks",
        image: './assets/vmSocks-green.jpg',
        altText: "A pair of socks",
        inStock: false,
        inventory: 5,
        details: ["80% cotton", "20% polyester", "Gender-neutral"],
        variants: [
            {
                variantId: 2234,
                variantColor: "green",
                variantImage: "./assets/vmSocks-green.jpg",
            },
            {
                variantId: 2235,
                variantColor: "blue",
                variantImage: "./assets/vmSocks-blue.jpg",
            }
        ],
        cart: 0,

    },
    methods: {
        addToCart() {
            this.cart += 1
        },
        updateProduct(variantImage) {
            this.image = variantImage
        }
    }
})