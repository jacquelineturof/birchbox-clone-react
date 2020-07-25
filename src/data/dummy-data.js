import Product from '../models/product'

const PRODUCTS = [
    new Product(
        'p1',
        'Blush',
        'blush.jpg',
        'Get the perfect shade of blush to make you glow',
        12.99,
        5
    ),
    new Product(
        'p2',
        'Eye Shadow Pallete',
        'eyeshadow.jpg',
        'Large pallete for infinite number of looks',
        39.00,
        4
    ),
    new Product(
        'p3',
        'Small Eye Shadow Pallete',
        'eyeshadow1.jpg',
        'Small pallete of pink shades',
        19.00,
        3
    ),
    new Product(
        'p4',
        'Clinque Lipstick',
        'lipstick.png',
        'Clinque perfect red lip shade',
        25.00,
        4
    ),
    new Product(
        'p5',
        'Brush Set',
        'brushset.jpg',
        'Brush set for perfect application',
        34.00,
        3
    )
]

/*
    Hash map of user lists for easy accessing, each list will be an array
    so we can iterate over it to build the UI. Each list contains product ids
*/
export const USER_LISTS = {
    favorites: [
        "p3",
        "p4"
    ]
}

export default PRODUCTS