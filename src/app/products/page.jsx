"use client"

import Product from "@/components/Product"

export default function Products () {
    return (
        <div className="flex flex-col gap-4 m-6">
            <h2 className="text-2xl font-bold">Products</h2>
            <div className="flex relative flex-row gap-2 mt-10">
                <div className="filter w-3/20 sticky top-0 self-start flex flex-col gap-3 bg-gray-100 p-3 mt-2 rounded">
                    <h2 className="text-xl font-semibold">Category</h2>
                    <div className="ml-4">
                        <ul className="flex flex-col gap-4 text-sm text-gray-600">
                            <li className="cursor-pointer">All</li>
                            <li className="cursor-pointer">Smart Phones</li>
                            <li className="cursor-pointer">Camera</li>
                            <li className="cursor-pointer">Women's Fashion</li>
                            <li className="cursor-pointer">Men's Fashion</li>
                            <li className="cursor-pointer">Gaming</li>
                        </ul>
                    </div>
                </div>
                <div className="products-page flex flex-row justify-center items-center flex-wrap w-full">
                    <Product id={0} title={"Product"} imageName={"product.png"}/>
                    <Product id={1} title={"Product"} imageName={"product.png"}/>
                    <Product id={2} title={"Product"} imageName={"product.png"}/>
                    <Product id={3} title={"Product"} imageName={"product.png"}/>
                    <Product id={3} title={"Product"} imageName={"product.png"}/>
                </div>
            </div>
        </div>
    )
}