import React, {useState} from "react";
import {useNavigate} from "react-router-dom";

interface NavbarProps {
  item: string;
}

const Navbar: React.FC<NavbarProps> = ({ item }) => {
    const [activeTab, setActiveTab] = useState(item);
    const navItems = ['Home', 'Cycle Tracker', 'Features', 'Contact', 'About Us'];
    const navigate = useNavigate();

    function handleClick(item) {
        setActiveTab(item);
        if(item === 'Home'){
            navigate('/');
        } else if (item === 'Cycle Tracker') {
            navigate('/cycle');
        } else if (item === 'Features') {
            navigate('/features');
        }else if(item === 'Contact'){
            navigate('/contact');
        }else{
            navigate('/about');
        }
    }

    return (
  <nav className="p-4 flex justify-between items-center">
                    <div className="flex items-center md:ml-52">
                        <img
                            src="https://s3-alpha-sig.figma.com/img/8172/f40d/8a1119d51246a04b12f70cc1e501ff33?Expires=1729468800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=S73Q4Wwsm9KJituvMri3HFHyj88kQyHQURvhW43pv~3KMXbau90oWeNvv4go9mVdrRrIPZNr2eRyenhN3T8PABJ7xf5Ow9VnSBQMrS21Mdm9K8fcKvCUUchcWWm2zGFohFYCkfWmodKoOdKFVMONxnc1zpu7lRHxkM~QAqJIA9x9UlW9SVqLQcFPRh9tm-g6AadU458q4k9JBnnjdC8U3IJAGkw6YJuZos78qn0Girr6vRPqkW1~Yfom090Xxe5AXl0p7yMCjyn4IKZcdrUzC3at-xNq7krv~-n1ST0~IQhA~DBxVRMFOLq18u5R~2Q2WzroHQ5~vTrpFrIftoP7OQ__"
                            alt="Rutuchakra Logo" className="w-[70px] h-[70px] rounded-full mr-5"/>
                        <span className="text-xl font-bold text-gray-800">ऋतुचक्र</span>
                    </div>
                    <div className="bg-[#FF8FAB] mr-48 rounded-full p-1 hidden md:block">
                        {navItems.map((item) => (
                            <button
                                key={item}
                                className={`px-7 py-2 rounded-full transition-colors text-lg ${
                                    activeTab === item ? 'bg-[#B9375E] text-white' : 'text-gray-700 hover:bg-[#FFE5EF]'
                                }`}
                                onClick={() => {handleClick(item)}}
                            >
                                {item}
                            </button>
                        ))}
                    </div>
                </nav>
)};

export default Navbar;
