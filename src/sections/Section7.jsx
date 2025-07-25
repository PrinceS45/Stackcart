import React from 'react'
import Card2 from '../components/Card2';

function Section7() {
    const categories = [
        {
            image: "https://stackcart.in/cdn/shop/files/astronaut-galaxy-projector-with-remote-control-360-adjustable-timer-kids-500x500.webp?v=1731941664&width=1346",
            image2: "https://stackcart.in/cdn/shop/files/astronaut-galaxy-projector-with-remote-control-360-adjustable-timer-kids-1000x1000.webp?v=1731941673&width=720",
            title: "Astronaut Galaxy Projector with Remote Control (360° Adjustable, Timer, Kids)",
            price: "₹ 1,199.00",
            originalPrice: "₹ 1,999.00",
            isOnSale: true,

        }, {
            image: "https://stackcart.in/cdn/shop/files/71ifx7e7vel-sl1500-1000x1000.webp?v=1732291402&width=720",
            image2: "https://stackcart.in/cdn/shop/files/615egkibn7l-sl1500-1000x1000.webp?v=1732291411&width=720",
            title: "Bot Robot Pioneer Colorful Lights",
            price: "₹899.00",
            originalPrice: "₹ 1,999.00",
            isOnSale: true,
        },
        {
            image: "https://stackcart.in/cdn/shop/files/71xxf6j5tnl-sl1500-1000x1000.webp?v=1735506472&width=72https://stackcart.in/cdn/shop/files/517Rby_YPOL._SL1200.jpg?v=1736782543&width=7200",
            image2: "https://https://stackcart.in/cdn/shop/files/71AdlLiYJdL._SL1500.jpg?v=1736782551&width=720.in/cdn/shop/files/71zfzxwxosl-sl1500-1000x1000.webp?v=1735506472&width=720",
            title: "DIVINE Mini Thermal Printer – Portable",
            price: "₹599.00",
            originalPrice: "₹ 799.00",
            isOnSale: true,
        },
        {
            image: "https://stackcart.in/cdn/shop/files/3-in-1-string-hockey-table-board-with-ludo-and-snakes-ladders-game-toy-best-gift-for-kids-500x500.webp?v=17355861https://stackcart.in/cdn/shop/files/61_kNM88yTL._SL1080.jpg?v=1736786561&width=72096",
            image2: "https://stackcart.in/cdn/shop/files/3-in-1-string-hockey-table-board-with-ludo-and-snakes-ladders-game-toy-best-gift-for-kids-500x500_872cfcb6-1598-4a2ehttps://stackcart.in/cdn/shop/files/71KSo3UnY7L._SL1500.jpg?v=1736786568&width=720-aff9-3d37c4804304.webp?v=1735586201",
            title: "Chiller Rechargeable Talking Cactus Toy",
            price: "₹499.00",
            originalPrice: "₹ 1,999.00",
            isOnSale: true,
        },
        {
            image: "https://stackcart.in/cdn/shop/files/41fq01nKq8L.jpg?v=1736780400&width=823",
            image2: "https://stackcart.in/cdn/shop/files/71eonianhhl-sl1500-1000x1000.webp?v=1732025239&width=https://stackcart.in/cdn/shop/files/61WiFaheOJL.jpg?v=1736780406&width=720",
            title: "BRAHMANI ENTERPRISE LED",
            price: "₹1099.00",
            originalPrice: "₹ 1,999.00",
            isOnSale: true,
        },
        {
            image: "https://stackcart.in/cdn/shop/files/61YiQkitHfL._SL1500.jpg?v=1736780883&width=720",
            image2: "https://stackcart.in/cdn/shop/files/61YiQkitHfL._SL1500.jpg?v=1736780883&width=720",
            title: "Daemon Bluetooth Cat Ear",
            price: "₹1099.00",
            originalPrice: "₹ 1,999.00",
            isOnSale: true,
        },


    ];
    return (
        <div className='bg-[#2a0a47]'>
            <div>
                <h3 className="font-[500] text-[1.9rem] sm:text-[2.3rem] text-white leading-[1.3] tracking-[0.057rem] break-words font-[DM Sans] text-center pt-[2rem] pb-[1rem] sm:pt-[3rem] sm:pb-[2rem]">
                    Best of Gadgets
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

export default Section7
