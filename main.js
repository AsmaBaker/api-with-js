import axios from 'axios';

//get catigory
async function getCatigory(){
    const response = await axios.get("https://dummyjson.com/products/categories?limit=7");
    const data = response.data;
    const result = data.map((cat)=>{
        return `
         <li class="text-[16px] pb-3 border-b-white"><a href="${cat.url}">${cat.name}</a></li>
    `
}).join(" ");
    document.querySelector("[data-catigory]").innerHTML=result; 
}
getCatigory()


//get products
async function getProducts(){
    const response = await axios.get("https://dummyjson.com/products");
    const data = response.data.products;
    const result = data.map((pro)=>{
        return `
          <div class=" bg-white shadow-md rounded-3xl p-10 flex flex-col gap-4">
          <img src="${pro.images}" class="w-100" alt="">
          <h4 class="text-[19px] text-main-color font-medium">${pro.title}</h4>
          <p class="text-[19px] text-[#4D6787] font-medium">${pro.price}</p>
          <button class="bg-main-color text-white w-full rounded-3xl py-3" type="button">Add to Cart</button>
        </div>
    `
}).join(" ");
    document.querySelector("[data-products]").innerHTML=result; 
}
getProducts();

