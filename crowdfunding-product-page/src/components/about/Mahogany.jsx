/* eslint-disable react/prop-types */
export default function Mahogany({openModal, backs}) {
    return (
        <section className={`p-8 border my-5 ${backs.mahogany === 0 ? "opacity-45" : "bg-opacity-100"} border-gray-300 rounded-md`}>
            <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center mb-5">
                <h3 className="text-[1.4rem] font-CommissionerBold 
                "> Mahogany Special Edition</h3>
                <h4 className="text-teal-500 font-CommissionerBold" >Pledge $200 or more</h4>
            </div>
            <p className="font-CommissionerRegular text-dark-gray text-lg" >
            You get two Special Edition Mahogany stands, a Backer T-Shirt, and a personal thank you. You’ll be added 
            to our Backer member list. Shipping is included.
            </p>
            <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center mt-5" >
                 <h4 className="font-CommissionerBold text-3xl"> {backs.mahogany} <small className="font-CommissionerRegular text-dark-gray text-sm" >left</small></h4> 
                { <button disabled={backs.mahogany === 0 ? true : false} onClick={()=> openModal('mahogany') } className={`font-CommissionerBold text-white w-48 sm:w-auto mt-4 sm:mt-0 py-3 px-8  ${backs.mahogany === 0 ?"bg-dark-gray" : "bg-moderate-cyan hover:bg-dark-cyan" } rounded-full`}>
               { backs.mahogany === 0 ? "Out of Stock" : "Select reward"}
                </button> }
            </div>
        </section>
    )
}