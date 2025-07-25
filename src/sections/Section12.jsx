import React from 'react'
import Card2 from '../components/Card2';

function Section12() {
    const categories = [
        {
            image: "https://stackcart.in/cdn/shop/files/71ikpxxwarl-sl1421-500x500.webp?v=1732290521&width=823",
            image2: "https://stackcart.in/cdn/shop/files/deluxe-art-set-box-drawing-kit-with-crayons-oil-pastels-colored-pencil-deluxe-gift-art-145pcs-1000x1000.webp?v=1732290999&width=823",
            title: "128-Piece Drawing Kit for Kids",
            price: "₹ 1,199.00",
            originalPrice: "₹ 1,999.00",
            isOnSale: true,

        }, {
            image: "https://stackcart.in/cdn/shop/files/51Tiny9JAQL._SL1500.jpg?v=1736781544&width=823",
            image2: "https://stackcart.in/cdn/shop/files/51YzzUxEPoL._SL1500.jpg?v=1736781561&width=823",
            title: "Abelestore Harry Potter Limited Edition",
            price: "₹899.00",
            originalPrice: "₹ 1,999.00",
            isOnSale: true,
        },
        {
            image: "https://stackcart.in/cdn/shop/files/5-layer-ball-drop-and-roll-swirling-tower-500x500.webp?v=1732722995&width=823",
            image2: "https://stackcart.in/cdn/shop/files/5-layer-ball-drop-and-roll-swirling-tower-500x500_b0d0672d-65fc-4d97-82de-83c0bf181a77.webp?v=1732723001&width=823",
            title: "5 Layer Ball Drop and Roll Swirling Tower",
            price: "₹599.00",
            originalPrice: "₹ 799.00",
            isOnSale: true,
        },
        {
            image: "https://stackcart.in/cdn/shop/files/Screenshot2024-11-16162903.png?v=1731754757&width=823",
            image2: "https://stackcart.in/products/acrylic-3d-illusion-night-lamp-illuminate-your-world-with-style",
            title: "Acrylic 3D Illusion Night Lamp ",
            price: "₹499.00",
            originalPrice: "₹ 1,999.00",
            isOnSale: true,
        },
        {
            image: "https://stackcart.in/cdn/shop/files/money-safe-atm-kids-piggy-savings-bank-with-fingerprint-sensor-with-electronic-lock-and-stickers-1000x1000.webp?v=1735579716&width=823",
            image2: "https://stackcart.in/cdn/shop/files/money-safe-kids-piggy-savings-bank-with-electronic-lock-1000x1000.webp?v=1735568760&width=823",
            title: "ATM Piggy Bank for Kids with Fingerprint Sensor",
            price: "₹1099.00",
            originalPrice: "₹ 1,999.00",
            isOnSale: true,
        },
        {
            image: "https://stackcart.in/cdn/shop/files/41Jr9HQZTcL.jpg?v=1736787908&width=823",
            image2: "https://stackcart.in/cdn/shop/files/4144epXAn6L.jpg?v=1736787914&width=823",
            title: "AP Kids Toys Dream Palace Doll House",
            price: "₹1099.00",
            originalPrice: "₹ 1,999.00",
            isOnSale: true,
        },


    ];
    return (
        <div className='bg-[#2a0a47]'>
            <div>
                <h3 className="font-[500] text-[1.9rem] sm:text-[2.3rem] text-white leading-[1.3] tracking-[0.057rem] break-words font-[DM Sans] text-center pt-[2rem] pb-[1rem] sm:pt-[3rem] sm:pb-[2rem] underline">
                   Best For Surprise Gifts
                </h3>

                <div className='flex justify-center items-center cursor-pointer'>
                    {categories.map((categorie, index) => {
                        return (
                            <Card2 className="bg-[#001128" key={index} image={categorie.image} image2={categorie.image2} title={categorie.title} price={categorie.price} originalPrice={categorie.originalPrice} isOnSale={categorie.isOnSale} />
                        )
                    })}
                </div>
                <div className='text-gray-300 text-center py-7 underline cursor-pointer'>View All</div>
            </div>
        </div>
    )
}

export default Section12
