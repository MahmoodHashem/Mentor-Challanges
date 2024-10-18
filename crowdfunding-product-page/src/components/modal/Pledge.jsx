
/* eslint-disable react/prop-types */

import { useState } from "react";


export default function Pledge({handleType, pledgeType, backs, handleBacks, closeModal}) {


    const [inputs, setInput] = useState({
            noPledge:0,
            bombo:0, 
            black:0, 
            mahogany:0
    })

    function handleInput(){
        const {name, value} = event.target; 
        setInput(prev =>{
            return {
                ...prev,
                [name]: value
            }
        })

    }

    function handleSubmit(type){
        event.preventDefault();
         handleBacks(type)
         setInput({
            noPledge:0,
            bombo:0, 
            black:0, 
            mahogany:0
    })
        closeModal()
    }
  

    return (
        <div className="flex flex-col gap-6">
            <div className={`border ${pledgeType === "no-pledge" ?"border-moderate-cyan" : "border-gray-300"} rounded-lg `} >
                <div className="p-5">
                    <div className=" flex ">
                        <label htmlFor="no-pledge" className="radio-label flex items-center gap-5 text-base cursor-pointer hover:text-moderate-cyan  font-CommissionerBold">
                            <input
                                type="radio"
                                id="no-pledge"
                                name="back"
                                checked={pledgeType === "no-pledge"}
                                value={"no-pledge"}
                                onChange={handleType}
                                className="appearance-none absolute"
                            />
                            <div className="custom-radio w-5 h-5 border-4 border-white outline outline-dark-gray outline-1  rounded-full"></div>
                            Pledge with no reward
                        </label>
                    </div>
                    <p className="sm:pl-10 pt-3" >Choose to support us without a reward if you simply believe in our project. As a backer,
                        you will be signed up to receive product updates via email</p>
                </div>
                <hr />
                <form onSubmit={handleSubmit} className={`p-6 ${pledgeType === 'no-pledge' ? "flex" : "hidden"} flex-col sm:flex-row gap-3 items-center `}>
                    <label className=" font-CommissionerRegular text-dark-gray text-base" htmlFor="no-pledge">Enter Your pledge</label>
                    <span className="sm:ml-auto" >
                        <span className="font-CommissionerBold  text-gray-400 relative left-6 mr-auto" >$</span>
                        <input
                         type="number"
                          id="no-pledge"
                          name="noPledge"
                          value={0} 
                          max={0} min={0}
                            className="border rounded-full p-3 px-7 max-w-32 focus:border-dark-cyan focus:outline-none focus:border-2 "
                        />
                    </span>
                    <button className="font-CommissionerRegular  max-w-32 p-3 px-7 rounded-full bg-dark-cyan text-white text-lg ">Continue</button>
                </form>
            </div>
            <div className={`border relative ${pledgeType ==="bombo" ? "border-moderate-cyan" : "border-gray-300"} ${backs.bombo === 0 ? 'opacity-45' : 'opacity-100'} rounded-lg `}>
                <div className="p-5 " >
                    <div className=" flex  w-full">
                        <label htmlFor="bombo" className="radio-label flex  items-center gap-5 text-base cursor-pointer w-full font-CommissionerBold">
                           <input
                          disabled={backs.bombo === 0} 
                                type="radio"
                                id="bombo"
                                name="back"
                                value={"bombo"}
                                
                                checked={pledgeType === "bombo"}
                                onChange={handleType}
                                className="appearance-none absolute"
                            />
                            <div className="custom-radio w-5 h-5 border-4 border-white outline outline-dark-gray outline-1  rounded-full "></div>
                            <div className="flex flex-wrap justify-between gap-5 w-full" ><span className="hover:text-moderate-cyan " >Bamboo Stand</span> <span className="text-moderate-cyan mr-auto">Pledge $25 or more</span>   <span className={`text-3xl sm:text-base absolute ${pledgeType ==="bombo" ? "bottom-52" : "bottom-4"} left-4 sm:static`}>{backs.bombo} <small className="font-CommissionerRegular text-dark-gray text-sm" >left</small></span> </div>
                        </label>
                    </div>
                    <p className="sm:pl-10 pb-10 sm:pb-0 pt-3" >You get an ergonomic stand made of natural bamboo. You have helped us launch our promotional campaign, and
                        you’ll be added to a special Backer member list.</p>
                </div>
                <hr />
                <form onSubmit={()=> handleSubmit("bombo")} className={`p-6 ${pledgeType === 'bombo' ? "flex" : "hidden"} flex-col sm:flex-row gap-3 items-center `}>
                    <label className=" font-CommissionerRegular text-dark-gray text-base" htmlFor="bombo-pledge">Enter Your pledge</label>
                    <span className="sm:ml-auto" >
                        <span className="font-CommissionerBold  text-gray-400 relative left-6 mr-auto" >$</span>
                        <input 
                        type="number" 
                        id="bombo-pledge" 
                        name="bombo"
                        value={inputs.bombo}
                        placeholder="0.00" 
                        onChange={handleInput}
                        required min={25}
                            className="border rounded-full p-3 px-7 max-w-32 focus:border-dark-cyan focus:outline-none focus:border-2 "
                        />
                    </span>
                   {<button disabled={backs.bombo === 0} className={`font-CommissionerRegular  max-w-32 p-3 px-7 rounded-full ${backs.bombo === 0 ? "bg-dark-gray" : "bg-dark-cyan"} text-white text-lg `}>Continue</button>}
                </form>
            </div>

            <div className={`border relative ${pledgeType === 'black' ? "border-moderate-cyan" : "border-gray-300" }  ${backs.black === 0 ? 'opacity-45' : 'opacity-100'}  rounded-lg `}>
                <div className="p-5 " >
                    <div className=" flex w-full">
                        <label htmlFor="black" className="radio-label flex items-center gap-5 text-base cursor-pointer w-full font-CommissionerBold">
                            <input
                            disabled={backs.black=== 0} 
                                type="radio"
                                id="black"
                                name="back"
                                value={"black"}

                                checked={pledgeType === "black"}
                                onChange={handleType}
                                className="appearance-none absolute"
                            />
                            <div className="custom-radio w-5 h-5 border-4 border-white outline outline-dark-gray outline-1  rounded-full "></div>
                            <div className="flex flex-wrap justify-between gap-5 w-full" ><span className="hover:text-moderate-cyan " >Black Edition Stand</span> <span className="text-moderate-cyan mr-auto"> Pledge $75 or more</span>   <span className={`text-3xl sm:text-base absolute ${pledgeType === 'black' ?"bottom-52": "bottom-4"} left-4 sm:static`}>{backs.black}<small className="font-CommissionerRegular text-dark-gray text-sm" >left</small></span> </div>
                        </label>
                    </div>
                    <p className="sm:pl-10 pb-10 sm:pb-0 pt-3" >You get a Black Special Edition computer stand and a personal thank you. You’ll be added to our Backer
                        member list. Shipping is included.</p>
                </div>
                <hr />
                <form onSubmit={()=> handleSubmit('black')} className={`p-6 ${pledgeType === 'black' ? 'flex' : "hidden"} flex-col sm:flex-row gap-3 items-center`}>
                    <label className=" font-CommissionerRegular text-dark-gray text-base" htmlFor="black-pledge">Enter Your pledge</label>
                    <span className="sm:ml-auto" >
                        <span className="font-CommissionerBold  text-gray-400 relative left-6 mr-auto" >$</span>
                        <input autoFocus 
                        type="number" 
                        id="black-pledge" 
                        name="black"
                        placeholder="0.00" 
                        value={inputs.black}
                        onChange={handleInput}
                        required min={75}
                            className="border rounded-full p-3 px-7 max-w-32 focus:border-dark-cyan focus:outline-none focus:border-2 "
                        />
                    </span>
                    <button disabled={backs.black === 0} className={`font-CommissionerRegular  max-w-32 p-3 px-7 rounded-full ${backs.black === 0 ? "bg-dark-gray" :"bg-dark-cyan"} text-white text-lg`}>Continue</button>
                </form>
            </div>

            <div className={`border relative ${pledgeType ===  "mahogany" ?"border-moderate-cyan" : "border-gray-300" }  ${backs.mahogany === 0 ? 'opacity-45' : 'opacity-100'} border-gray-300 rounded-lg `}>
                <div className="p-5 " >
                    <div className=" flex w-full">
                        <label htmlFor="mahogany" className="radio-label flex items-center gap-5 text-base cursor-pointer w-full font-CommissionerBold">
                            <input
                            disabled={backs.mahogany === 0} 
                                type="radio"
                                id="mahogany"
                                name="back"
                                value={"mahogany"}
                                checked={pledgeType === "mahogany"}
                                onChange={handleType}
                                className="appearance-none absolute"
                            />
                            <div className="custom-radio w-5 h-5 border-4 border-white outline outline-dark-gray outline-1  rounded-full "></div>
                            <div className="flex flex-wrap justify-between gap-5 w-full" ><span className="hover:text-moderate-cyan " >Mahogany Special Edition</span> <span className="text-moderate-cyan mr-auto"> Pledge $200 or more</span>   <span className={`text-3xl sm:text-base absolute ${pledgeType ===  "mahogany" ? "bottom-52" : "bottom-4" } left-4 sm:static`}>{backs.mahogany}  <small className="font-CommissionerRegular text-dark-gray text-sm" >left</small></span> </div>
                        </label>
                    </div>
                    <p className="sm:pl-10 pb-10 sm:pb-0 pt-3" >You get two Special Edition Mahogany stands, a Backer T-Shirt, and a personal thank you. You’ll be added
                        to our Backer member list. Shipping is included..</p>
                </div>
                <hr />
                <form onSubmit={()=> handleSubmit('mahogany')} className={`p-6 ${pledgeType === 'mahogany' ? "flex" : "hidden"} flex-col sm:flex-row gap-3 items-center`}>
                    <label className=" font-CommissionerRegular text-dark-gray text-base" htmlFor="mahogany">Enter Your pledge</label>
                    <span className="sm:ml-auto" >
                        <span className="font-CommissionerBold  text-gray-400 relative left-6 mr-auto" >$</span>
                        <input 
                        type="number" 
                        id="mahogany" 
                        name="mahogany"
                        value={inputs.mahogany}
                        onChange={handleInput}
                        placeholder="0.00" 
                        required min={200}
                            className="border rounded-full p-3 px-7 max-w-32 focus:border-dark-cyan focus:outline-none focus:border-2 "
                        />
                    </span>
                    <button disabled={backs.mahogany === 0} className="font-CommissionerRegular  max-w-32 p-3 px-7 rounded-full bg-dark-cyan text-white text-lg ">Continue</button>
                </form>
            </div>
        </div>
    )
}