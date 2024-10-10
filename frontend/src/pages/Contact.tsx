import React from "react";
import Navbar from "../components/Navbar.tsx";
import HeroSection from "../components/HeroSection.tsx";
import FeatureSection from "../components/FeatureSection.tsx";
import CTASection from "../components/CTASection.tsx";

function Contact() {
    return (
        <>

            <div className="min-h-screen flex flex-col">
                <Navbar item={"Contact"}/>

                <main className="flex-grow">
                    <HeroSection/>
                    <FeatureSection/>
                    <CTASection/>
                </main>
            </div>
        </>
    );
}

export default Contact;