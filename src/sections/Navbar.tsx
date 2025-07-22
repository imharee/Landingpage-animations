"use client";
import Menu from '../assets/images/icons/Menu';
import Logo from '../assets/images/icons/Logo';
import Button from '@/components/Button';
import { useState } from "react";
import { AnimatePresence, motion } from 'framer-motion';


const navLinks = [
    { label: "Home", href: "#" },
    { label: "Features", href: "#features" },
    { label: "Integrations", href: "#integrations" },
    { label: "FAQs", href: "#faqs" },
];

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
   
    return (
        <>
        
        <section className="py-4 lg:py-8 fixed w-full top-0 z-50">
            <div className="container max-w-5xl">
                <div className=' border border-white/15 rounded-[27px] md:rounded-full bg-neutral-950/70 backdrop-blur '>
                <div className="grid grid-cols-2 lg:grid-cols-3 p-2 px-4 md:pr-2 items-center">
                    <div>
                        <Logo className="h-9 md:h-auto w-auto ml-2" />
                    </div>
                    
                    <div className='lg:flex justify-center items-center hidden'>
                    <nav className='flex gap-6 font-medium'>
                        {navLinks.map((link)=>(
                            <a href={link.href} key={link.label}>
                            {link.label}
                            </a>
                        ))}
                    </nav>
                    </div>
                    <div className="flex justify-end gap-4">
                        <Menu isOpen={isOpen} setIsOpen={setIsOpen}  />

                   <Button variant="secondary" className='hidden md:inline-flex items-center'>Log In</Button>
                   <Button variant="primary" className='hidden md:inline-flex items-center'>Sign Up</Button>
                    </div>
                </div>

                <AnimatePresence>
                {isOpen &&(
            <motion.div 
            initial={{ height: 0 }}
             animate={{ height: "auto" }}
              exit={{ height: 0}}
              className='overflow-hidden'>
                <div className='flex flex-col items-center gap-4 py-4 '>
                {navLinks.map((link)=>(
                    <a href={link.href} key={link.label} 
                    className=''>{link.label}</a>
                ))}
                 <Button variant="secondary" className='size-24 text-sm w-auto'>Log In</Button>
                   <Button variant="primary" className='size-24 w-auto text-sm'>Sign Up</Button>
                   </div>
            </motion.div>
            )}
            </AnimatePresence>

                </div>
            </div>
           
        </section>
        
        <div className='pb-[86px] md:pb-[98px] lg:pb[130px]'></div>
        </>
    );
}