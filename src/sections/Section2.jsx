import React from 'react'
import Card1 from '../components/Card1'; 

function Section2() {
    const Categories = [
        {
            image : "https://stackcart.in/cdn/shop/files/home_decor.jpg?v=1731698981&width=400" , 
            title : "Home Decor"
        } , 
        {
            image : "https://stackcart.in/cdn/shop/files/Screenshot_2024-11-16_010933.png?v=1731699648&width=400" , 
            title : "Toy & Baby" , 
        } , 
        {
            image : "https://stackcart.in/cdn/shop/files/Screenshot_2024-11-16_014529.png?v=1731701755&width=400" , 
            title : "Gifts"
        } , 
        {
            image : "https://stackcart.in/cdn/shop/files/Screenshot_2024-11-16_014836.png?v=1731701941&width=400" , 
            title : "Gadgets"
        } , 
        {
            image : "https://stackcart.in/cdn/shop/files/Screenshot_2024-11-16_014017.png?v=1731701452&width=400" , 

            title : "Creative Item" ,
        } , 
        {
            image : "https://stackcart.in/cdn/shop/files/Screenshot_2024-11-16_013639.png?v=1731701231&width=400" , 
            title : "Cloths"
        }
    ] ; 

  return (
    <div>
        <div className='relative'>
             <strong className='block text-4xl text-blue-950 pl-[88px] font-sans fw pt-3 pb-9' >Top Categories</strong>
            <div className='flex justify-center gap-13 px-7 md:px-15 '>
               {Categories.map((categorie , index) => {
                   return (
                    <Card1  key={index} image={categorie.image} title={categorie.title} />
                   )
               })} 
            </div>

           <div className='block underline underline-offset-1 text-3xl text-blue-950 font-sans fw    text-center mt-11 mb-11 cursor-pointer hover:underline-offset-2'>Outstanding service | Exclusive pricing | Best Deal</div>
        </div>
      
    </div>
  )
}

export default Section2
