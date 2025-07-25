import React from 'react'
import Card2 from '../components/Card2';

function Section4() {
    const categories = [
        {
            image: "https://stackcart.in/cdn/shop/files/12-inch-lcd-writing-tablet-500x500.webp?v=1732029297",
            image2: "https://stackcart.in/cdn/shop/files/51t8yx1hzul-sl1032-500x500.webp?v=1732029303",
            title: "12 Inch LCD Writing Tablet Mobile",
            price: "₹ 1,199.00",
            originalPrice: "₹ 1,999.00",
            isOnSale: true,

        }, {
            image: "https://stackcart.in/cdn/shop/files/81dcbptrx0l-sl1470-1000x1000.webp?v=1732290526&width=720",
            image2: "https://stackcart.in/cdn/shop/files/51t8yx1hzul-sl1032-500x500.webp?v=1732029303",
            title: "128-Piece Drawing Kit for Kids",
            price: "₹899.00",
            originalPrice: "₹ 1,999.00",
            isOnSale: true,
        },
        {
            image: "https://stackcart.in/cdn/shop/files/71xxf6j5tnl-sl1500-1000x1000.webp?v=1735506472&width=720",
            image2: "https://stackcart.in/cdn/shop/files/71zfzxwxosl-sl1500-1000x1000.webp?v=1735506472&width=720",
            title: "2.4 GHz Cartoon Mini Watch Car Toy",
            price: "₹599.00",
            originalPrice: "₹ 799.00",
            isOnSale: true,
        },
        {
            image: "https://stackcart.in/cdn/shop/files/3-in-1-string-hockey-table-board-with-ludo-and-snakes-ladders-game-toy-best-gift-for-kids-500x500.webp?v=1735586196",
            image2: "https://stackcart.in/cdn/shop/files/3-in-1-string-hockey-table-board-with-ludo-and-snakes-ladders-game-toy-best-gift-for-kids-500x500_872cfcb6-1598-4a2e-aff9-3d37c4804304.webp?v=1735586201",
            title: "3-in-1 String Hockey Table Board",
            price: "₹499.00",
            originalPrice: "₹ 1,999.00",
            isOnSale: true,
        },
        {
            image: "https://stackcart.in/cdn/shop/files/71jgjctucfl-sl1500-1000x1000.webp?v=1732025234&width=720",
            image2: "https://stackcart.in/cdn/shop/files/71eonianhhl-sl1500-1000x1000.webp?v=1732025239&width=720",
            title: "128-Piece Drawing Kit for Kids",
            price: "₹1099.00",
            originalPrice: "₹ 1,999.00",
            isOnSale: true,
        },
        {
            image: "https://stackcart.in/cdn/shop/files/5-layer-ball-drop-and-roll-swirling-tower-500x500_b0d0672d-65fc-4d97-82de-83c0bf181a77.webp?v=1732723001",
            image2: "https://stackcart.in/cdn/shop/files/71eonianhhl-sl1500-1000x1000.webp?v=1732025239&width=720",
            title: "128-Piece Drawing Kit for Kids",
            price: "₹1099.00",
            originalPrice: "₹ 1,999.00",
            isOnSale: true,
        },


    ];
    return (
        <div className='bg-[#2a0a47]'>
            <div>
                <h3 className="font-[500] text-[1.9rem] sm:text-[2.3rem] text-white leading-[1.3] tracking-[0.057rem] break-words font-[DM Sans] text-center pt-[2rem] pb-[1rem] sm:pt-[3rem] sm:pb-[2rem]">
                    Top Picks for Kids Toys
                </h3>

                <div className='flex justify-center items-center cursor-pointer'>
                    {categories.map((categorie, index) => {
                        return (
                            <Card2 key={index} image={categorie.image} image2={categorie.image2} title={categorie.title} price={categorie.price} originalPrice={categorie.originalPrice} isOnSale={categorie.isOnSale} />
                        )
                    })}
                </div>
                <div className='text-gray-300 text-center py-7 underline cursor-pointer'>View All</div>
            </div>
        </div>
    )
}

export default Section4
