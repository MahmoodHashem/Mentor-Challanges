/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */



export default function Back({backs}) {


 
    return (
        <section className="bg-white w-full md:w-[40rem]  mx-auto p-7 py-10 my-3 rounded-2xl  text-center">
            <div className="flex flex-col sm:flex-row justify-center items-center ">
                <div className="sm:text-start text-center sm:border-r sm:border-b-0 border-b sm:w-full border-gray-300 sm:pr-4 sm:pb-0 py-4">

                    <h2 className="font-CommissionerBold text-3xl">${Intl.NumberFormat().format(89 * (backs.bombo + backs.black + backs.mahogany))} </h2>
                    <small className="font-CommissionerRegular text-base text-dark-gray " >of $100,000 backed</small>
                </div>
                <div className="sm:text-start text-center  sm:w-full sm:border-r sm:border-b-0 border-b border-gray-300 sm:pl-8 sm:pb-0 py-4">
                
                
                    <h2 className="font-CommissionerBold text-3xl">{Intl.NumberFormat().format(5007 -(backs.bombo + backs.black + backs.mahogany))}</h2>
                    <small className="font-CommissionerRegular text-base text-dark-gray " >total backers</small>
                </div>
                <div className="sm:text-start text-center  sm:w-full sm:pl-8 ">
                    <h2 className="font-CommissionerBold text-3xl">56 </h2>
                    <small className="font-CommissionerRegular text-base text-dark-gray " >days left</small>
                </div>
            </div>
            <div className="w-full h-3 mt-7 bg-gray-300 rounded-full">
                <div className="w-2/3 bg-dark-cyan h-full rounded-full "></div>
            </div>
        </section>
    )
}