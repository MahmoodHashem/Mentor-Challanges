/* eslint-disable react/prop-types */
import Pledge from "./Pledge";
import cross from '../../assets/images/icon-close-modal.svg'

import { useRef, useEffect, useState } from 'react';

export default function BackModal({ openModal, closeModal, selected, backs, handleBacks }) {


    const ref = useRef();
    const [pledgeType, setPledgeType] = useState('');
   
    function handleType() {
        const value = event.target.value;
        setPledgeType(value)

    }

    useEffect(() => {
        setPledgeType(selected)

    }, [selected])

    useEffect(() => {
        if (openModal) {
            ref.current?.showModal();

            const pledgeElement = document.getElementById(selected);
            if (pledgeElement) {
                pledgeElement.scrollIntoView({ behavior: "smooth", block: "start" });
            }
        } else {
            ref.current?.close();
           
           
            setPledgeType("")
        }

    }, [openModal, selected]);

    return (
        <dialog ref={ref}
            onCancel={closeModal} className={`modal  ${openModal ? 'flex' : 'hidden'} flex-col items-start top-0 left-2/4 -translate-x-2/4  bg-white p-5 sm:w-[40rem] w-10/12 h-3/4  overflow-x-auto rounded-lg`}  >
            <img src={cross} onClick={closeModal} className="self-end" alt="cross icon" />
            <h1 className="font-CommissionerBold mb-3 text-2xl" >Back this project</h1>
            <p className="text-dark-gray mb-4" >Want to support us in bringing Mastercraft Bamboo Monitor Riser out in the world?</p>
            <Pledge backs={backs} handleBacks={handleBacks} handleType={handleType} pledgeType={pledgeType} closeModal={closeModal} />
        </dialog>
    )
}