import React, {useState} from 'react';
import Navbar from "../components/Navbar.tsx";
import {useNavigate} from "react-router-dom";

function HomePage() {

    const navigate = useNavigate();

    function handleClick(){
            navigate('/login')
    }

    return (
        <div className="bg-[#FF8FAB] min-h-screen font-sans relative overflow-hidden">

            {/* Curved background */}
            <div className="bg-ping-100 absolute top-0 left-0 w-full h-full">
                <svg viewBox="0 0 1000 1000" className="absolute top-0 left-0 w-full h-full" preserveAspectRatio="none">
                    <path fill="#FFD8EB" d="
                    M0 0
                    H1000
                    V800
                    C750 800, 500 1000, 250 900
                    C100 850, 0 700, 0 500
                    Z"
                    />
                </svg>
            </div>

            {/* Content */}
            <div className="relative z-10">
               <Navbar item="Home"/>

                <main className="container mx-auto mt-8 px-4 flex flex-col md:flex-row items-center">
                    <div className="w-full md:w-1/2 pr-0 md:pr-8 mb-8 md:mb-0">
                        <h1 className="text-[50px] md:text-[120px] font-normal leading-[132px] tracking-[-0.015em] text-left font-['Jacques_Francois_Shadow'] mb-4">
                            Rutuchakra
                        </h1>
                        <h2 className="text-2xl md:text-5xl font-thin mb-6">-where wellness begins</h2>
                        <p className="mb-8 text-lg">
                            Welcome to RutuChakra, your personalized companion for menstrual health and wellness. With
                            our intuitive cycle tracking, fertility insights, and holistic wellness tools, we empower
                            women of all ages to understand and embrace their bodies. Whether you're tracking your
                            period, planning for fertility, or simply wanting to stay in tune with your health,
                            RutuChakra offers you clarity, confidence, and support at every step of your journey. Join
                            us and take control of your wellness today!
                        </p>
                        <button
                            onClick={handleClick}
                            className="bg-[#FF007B] hover:bg-pink-600 text-white text-[19px] py-2 px-5 rounded transition duration-300">
                            Read More
                        </button>
                    </div>
                    <div className="w-full md:w-1/2 flex justify-center">
                        <img width={330}
                             src="https://s3-alpha-sig.figma.com/img/f0ef/8924/b25e237834adba7c86b7cdd6c9e12333?Expires=1729468800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=QldPQVxrYMpIeblA1PmUyMgEa6PJspxYXftIcx6KFHmV4UCwLX2M3oXX9r5OAiE29CRSnmRn-E-PdZgRPSpiOaA51HL~B1qLLzt6Qz6VR83mPfetoMYq2TEjmNshH5ljp5Xe2hluk8GfNxFmiY1GIXvjNtXl3mdz~phOWOTEVwqCxuxJF1gllADUBgZFWy2QX5jlUFWQZesNAxWtGwji8nqH8IG7BaiWNnaJrVNcRZfw3Rd4MtxPLu0Za0b0nQ2riwRV6xpuoPZamw3XPiR7QceLCMopq~f7-ycAPTFUfZr7KuTexShLAWD6klwW9TRfPdLxJ~Y51gOU8cBJEgjEtg__"
                             alt="RutuChakra Contact Interface" className="md:ml-56 md:my-10 max-w-full h-auto"/>
                    </div>
                </main>
            </div>
        </div>
    );
}

export default HomePage;