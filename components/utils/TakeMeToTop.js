"use client"

import { ArrowUp } from "lucide-react"
import { useEffect, useState } from "react"

const TakeMeToTop = () => {
    const [show, setShow] = useState(false)

    useEffect(() => {
        const onScroll = () => {
            setShow(window.scrollY > 300); // show after 300px
        }

        window.addEventListener("scroll", onScroll);
        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    }

    if (!show) return null;

    return (
        <div
            onClick={scrollToTop}
            className="bg-[#8d69c9] p-3 fixed bottom-5 right-5 text-white rounded-lg cursor-pointer shadow-lg hover:bg-[#7a59b8] transition"
        >
            <ArrowUp size={25} />
        </div>
    )
}

export default TakeMeToTop
