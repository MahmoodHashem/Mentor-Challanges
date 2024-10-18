/* eslint-disable react/prop-types */

export default function Bamboo({openModal, backs}) {
    return (
        <section className={`p-8 ${backs.bombo === 0 ? "opacity-45" : 'opacity-100'} border my-5 border-gray-300 rounded-md`}>
            <div className="flex flex-col sm:flex-row sm:justify-between  sm:items-center mb-5">
                <h3 className="text-[1.4rem] font-CommissionerBold 
                ">Bamboo Stand</h3>
                <h4 className="text-teal-500 font-CommissionerBold" >Pledge $25 or more</h4>
            </div>
            <p className="font-CommissionerRegular text-dark-gray text-lg" >
                You get an ergonomic stand made of natural bamboo. You have helped us launch our promotional campaign, and
                you’ll be added to a special Backer member list.
            </p>
            <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center mt-5" >
                 <h4 className="font-CommissionerBold text-3xl">{backs.bombo} <small className="font-CommissionerRegular text-dark-gray text-sm" >left</small></h4> 
                { <button disabled={backs.bombo === 0}  onClick={()=> openModal('bombo')} className={`font-CommissionerBold text-white w-48 sm:w-auto mt-4 sm:mt-0 py-3 px-8 ${backs.bombo === 0 ? "bg-dark-gray" :"bg-moderate-cyan hover:bg-dark-cyan"}  rounded-full `}>
                    {backs.bombo === 0 ? "Out of Stock" : "Select Reward"}
                </button> }
            </div>
        </section>
    )
}