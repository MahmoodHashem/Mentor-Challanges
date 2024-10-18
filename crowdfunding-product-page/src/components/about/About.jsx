/* eslint-disable no-unused-vars */

/* eslint-disable react/prop-types */
import Bamboo from "./Bambo";
import BlackEdition from "./BlackEdition";
import Mahogany from "./Mahogany";



export default function About({openModal, backs}) {

    return (
        <section className=" bg-white w-full md:w-[40rem]  mx-auto p-7 py-10 my-3 rounded-2xl " >
            <h3 className="font-CommissionerBold text-[1.3rem] mt-2 mb-6" >About this project</h3>
            <p className="font-CommissionerRegular text-dark-gray text-lg" >
                The Mastercraft Bamboo Monitor Riser is a sturdy and stylish platform that elevates your screen
                to a more comfortable viewing height. Placing your monitor at eye level has the potential to improve
                your posture and make you more comfortable while at work, helping you stay focused on the task at hand.

            </p>
            <p className="font-CommissionerRegular text-lg text-dark-gray my-2">  Featuring artisan craftsmanship, the simplicity of design creates extra desk space below your computer
                to allow notepads, pens, and USB sticks to be stored under the stand.
            </p>
            <Bamboo openModal={openModal} backs={backs} />
            <BlackEdition openModal={openModal} backs={backs} />
            <Mahogany openModal={openModal} backs={backs} />
        </section>
    )
}