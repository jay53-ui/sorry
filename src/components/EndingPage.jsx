"use client"

import { motion } from "framer-motion"

export default function EndingPage({ setCurrentPage }) {
    const handleContinue = () => {
        setCurrentPage("hug")
    }

    return (
        <div className="min-h-screen flex flex-col items-center justify-center px-4 py-8">
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0 }}
                className="max-w-2xl text-center space-y-8"
            >


                <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1, ease: [0.25, 0.46, 0.45, 0.94] }}
                    className="mb-8 relative"
                >
                    {/* Cute aura around teddy */}
                    <div className="absolute inset-0 bg-gradient-to-r from-pink-400/25 to-red-400/25 rounded-full blur-2xl scale-50"></div>
                    <img
                        src="/gifs/thumbs-up-thumbs.gif"
                        alt="Teddy with open arms"
                        className=" mx-auto rounded-2xl relative z-10 gif2"
                    />


                </motion.div>


                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7, delay: 0 }}
                    className="space-y-6"
                >


                    <motion.p
                        initial={{ opacity: 0, y: 15 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1.1, delay: 0 }}
                        className="text-lg text-pink-200 leading-relaxed max-w-lg mx-auto"
                    >
                        <span className="lt">Thank you for listening to me and forgiving me , I honestly value it more than I can say✨</span>
                    </motion.p>

                    <motion.p
                        initial={{ opacity: 0, y: 15 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1.1, delay: 0 }}
                        className="text-lg text-pink-200 leading-relaxed max-w-lg mx-auto"
                    >
                        <span className="lt">Ab bas tumhare taunt ka wait hai 😅</span>
                    </motion.p>

                </motion.div>


            </motion.div>
        </div>
    )
}
