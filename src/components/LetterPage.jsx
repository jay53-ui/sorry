"use client"

import { motion } from "framer-motion"

export default function LetterPage({ setCurrentPage }) {
  const handleContinue = () => {
    setCurrentPage("hug")
  }

  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-4 py-8 ">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0 }}
        className="max-w-2xl text-center space-y-8 divv"
      >
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0 }}
          className="text-2xl text-pink-300 mb-8 mt-10 md:mt-0"
        >
          I want to apologise for the way I spoke earlier and for my behaviour
        </motion.h2>




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
            className="text-xl text-pink-200 leading-relaxed mt-2"
          >
            I just want to say sorry for my words and my behaviour earlier. I realise I may have said things in a way that made things get worse between us and I honestly feel bad about it. I was upset at that time but I know that’s not an excuse My intention was never to create distance or create more problems between us. I also know that sometimes I become over-reactive and I overreacted  on that ‘Instagram restrict’  I genuinely regret that. Honestly I feel that if I hadn’t overreacted at that time maybe so many fights wouldn’t happened between us Yaar ab toh har ek word soch-samajh ke bolna padta h but phele kuch sochna he nii padta tha sab kuch freely bol skte the I think that’s what real dosti felt like and I honestly regret that I messed up that friendship I sincerely apologise if anything I said hurt you or affected you negatively✨
          </motion.p>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.3, delay: 0 }}
            className="text-pink-300 text-xl mt-6"
          >
            Can you please forgive me…?
          </motion.p>

        </motion.div>

        <motion.button
          onClick={handleContinue}
          className="mt-3 mb-10 md:mb-0 px-10 py-4 bg-gradient-to-r from-pink-500/25 to-purple-500/25 backdrop-blur-sm border border-pink-300/40 rounded-full text-pink-200 text-lg hover:from-pink-500/35 hover:to-purple-500/35 transition-all duration-300 shadow-lg shadow-pink-500/20"
          whileHover={{
            scale: 1.02,
            boxShadow: "0 0 25px rgba(236, 72, 153, 0.3)",
            y: -1,
          }}
          whileTap={{ scale: 0.98 }}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.5, delay: 0 }}
        >
          Continue
        </motion.button>
      </motion.div>
    </div>
  )
}
