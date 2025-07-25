import React from 'react'
import Card2 from '../components/Card2';

function Section9() {
    const categories = [
        {
            image: "https://stackcart.in/cdn/shop/files/61VhAOuuAEL._SL1500.jpg?v=1733063128&width=720",
            image2: "https://stackcart.in/cdn/shop/files/71KnwPfRE3L._SL1500.jpg?v=1733063121&width=720",
            title: "Bulldog Statue Storage",
            price: "₹ 1,199.00",
            originalPrice: "₹ 1,999.00",
            isOnSale: true,

        }, {
            image: "https://stackcart.in/cdn/shop/files/71nEfu1CvYL._SL1500.jpg?v=1733072535&width=720",
            image2: "https://stackcart.in/cdn/shop/files/71mBAYE60ZL._SL1500.jpg?v=1733072542&width=720",
            title: "Cute Dog Pen Stand Showpiece",
            price: "₹899.00",
            originalPrice: "₹ 1,999.00",
            isOnSale: true,
        },
        {
            image: "https://stackcart.in/cdn/shop/files/51MsRhDxF4L._SL1024.jpg?v=1733068845&width=720",
            image2: "https://stackcart.in/cdn/shop/files/71nIGM9XQOL._SL1500.jpg?v=1733065989&width=720",
            title: "Cool Dog Showpiece with Plate",
            price: "₹599.00",
            originalPrice: "₹ 799.00",
            isOnSale: true,
        },
        {
            image: "https://stackcart.in/cdn/shop/files/Screenshot2024-11-16171841.png?v=1731757734&width=823",
            image2: "https://stackcart.in/cdn/shop/files/3-in-1-string-hockey-table-board-with-ludo-and-snakes-ladders-game-toy-best-gift-for-kids-500x500_872cfcb6-1598-4a2ehttps://stackcart.in/cdn/shop/files/71KSo3UnY7L._SL1500.jpg?v=1736786568&width=720-aff9-3d37c4804304.webp?v=1735586201",
            title: "Badrinath temple wood temple gift decoration",
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
            image: "https://stackcart.in/cdn/shop/files/81UnFsLdaQL._SL1500.jpg?v=1732833853&width=823",
            image2: "https://stackcart.in/cdn/shop/files/61YiQkitHfL._SL1500.jpg?v=1736780883&width=720",
            title: "Bull Dog Showpiece",
            price: "₹1099.00",
            originalPrice: "₹ 1,999.00",
            isOnSale: true,
        },


    ];
    return (
        <div className='bg-[#001128]'>
            <div>
                <h3 className="font-[500] text-[1.9rem] sm:text-[2.3rem] text-white leading-[1.3] tracking-[0.057rem] break-words font-[DM Sans] text-center pt-[2rem] pb-[1rem] sm:pt-[3rem] sm:pb-[2rem] underline">
                   Best of Home decor
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

export default Section9
