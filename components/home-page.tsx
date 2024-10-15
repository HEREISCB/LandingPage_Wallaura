'use client'
import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import {
  Menu,
  X,
  Gift,
  Paintbrush,
  Star,
  Tag, 
  InstagramIcon
} from 'lucide-react'

import Image from 'next/image'



export default function HomePage() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.5 }
  }

  const staggerChildren = {
    animate: {
      transition: {
        staggerChildren: 0.1
      }
    }
  }

  return (
    
    <div className="bg-white">
    
      <nav className="lg:hidden">
        <div className="flex items-center justify-between p-4 bg-white shadow-md">
          <h1 className="text-2xl font-bold">Wall Aura</h1>
          <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
            {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, x: '-100%' }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: '-100%' }}
              transition={{ duration: 0.3 }}
              className="fixed inset-0 z-50 bg-white"
            >
              <div className="flex flex-col items-center justify-center h-full space-y-8">
                {['Home', 'Products', 'Customization', 'About Us'].map((link) => (
                  <motion.a
                    key={link}
                    href="#"
                    className="text-2xl font-semibold"
                    onClick={() => setMobileMenuOpen(false)}
                    whileHover={{ scale: 1.1 }}
                  >
                    {link}
                  </motion.a>
                ))}
                <motion.button onClick={() => setMobileMenuOpen(false)} className="mt-8 text-gray-600" whileHover={{ scale: 1.1 }}>
                  <X className="h-8 w-8" />
                </motion.button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

     
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute w-full h-full object-cover"
          src="https://videos.pexels.com/video-files/7578552/7578552-uhd_2560_1440_30fps.mp4"
        />
        <div className="absolute inset-0 bg-black bg-opacity-50" />
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="relative z-10 text-center text-white px-4"
        >
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4">Wall Aura</h1>
          <p className="text-lg sm:text-xl mb-8">Elevate Your Space with Exquisite Home Decor</p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-white text-black px-6 py-3 rounded-full font-semibold hover:bg-opacity-90 transition duration-300 text-sm sm:text-base"
          >
            Scroll to Explore  
          </motion.button>
        </motion.div>
      </section>


    <section className="py-12 px-4 md:px-8 lg:px-16"> 
  <h2 className="text-3xl font-bold mb-6 text-center">Our Products</h2>
  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
    <motion.div whileHover={{ scale: 1.05 }} className="bg-white rounded-lg shadow-md overflow-hidden">
      <Image src="https://i.ibb.co/3hvG6mh/Photoroom-20241015-153022.png" width={500} height={500} alt='asd' className='rounded-lg' />
        <div className="p-4">
        <h3 className="text-xl font-semibold mb-2">Wall Plates</h3>
        <p className="text-gray-600">Discover our beautiful wall plates.</p>
        <p className="text-gray-600">₹250 - ₹500/-</p> 
      </div>
    </motion.div>
    <motion.div whileHover={{ scale: 1.05 }} className="bg-white rounded-lg shadow-md overflow-hidden">
    <Image src="https://i.ibb.co/x8FXzhR/Photoroom-20241015-165850.png" width={500} height={500} alt='asd'
className="w-full h-48 object-cover rounded-lg  " />
      <div className="p-4">
        <h3 className="text-xl font-semibold mb-2">Fridge Magnets</h3>
        <p className="text-gray-600">Explore our unique fridge magnets.</p>
        <p className="text-gray-600">₹80 - ₹150/-</p> 
      </div>
    </motion.div>
    <motion.div whileHover={{ scale: 1.05 }} className="bg-white rounded-lg shadow-md overflow-hidden">
    <Image src="https://i.ibb.co/NxCK8gd/wall-aura-15-10-2024-0004.jpg" width={500} height={500} alt='asd' className='rounded-lg' />
      <div className="p-4">
        <h3 className="text-xl font-semibold mb-2">Dot Mandala Keychains</h3>
        <p className="text-gray-600">Check out our intricate dot mandala keychains.</p>
        <p className="text-gray-600">₹50 - ₹80/-</p> 
      </div>
    </motion.div>
    <motion.div whileHover={{ scale: 1.05 }} className="bg-white rounded-lg shadow-md overflow-hidden">
    <Image src="https://i.ibb.co/cgXkxzD/Photoroom-20241015-170757.png" width={500} height={500} alt='asd' className='rounded-lg' />
      <div className="p-4">
        <h3 className="text-xl font-semibold mb-2">Diwali Collection</h3>
        <p className="text-gray-600">Celebrate with our special Diwali collection.</p>
      </div>
    </motion.div>
  </div>
  </section>
      <section className="py-12 px-4 md:px-8 lg:px-16 bg-gray-50">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-md mx-auto bg-white rounded-lg shadow-md overflow-hidden"
        >
          <div className="p-6 text-center">
            <h3 className="text-2xl font-bold mb-4">Follow Us on Instagram</h3>
            <motion.div
              whileHover={{ rotate: 360 }}
              transition={{ duration: 0.5 }}
              className="mb-4"
            >
              {/* Use the InstagramIcon if available, else fallback to a custom SVG */}
              {InstagramIcon ? (
                <InstagramIcon className="w-12 h-12 mx-auto text-primary" />
              ) : (
                <svg
                  className="w-12 h-12 mx-auto text-primary"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path d="M7.75 2h8.5A5.75 5.75 0 0122 7.75v8.5A5.75 5.75 0 0116.25 22h-8.5A5.75 5.75 0 012 16.25v-8.5A5.75 5.75 0 017.75 2zm0 1.5A4.25 4.25 0 003.5 7.75v8.5A4.25 4.25 0 007.75 20.5h8.5a4.25 4.25 0 004.25-4.25v-8.5A4.25 4.25 0 0016.25 3.5h-8.5zm8.41 1.09a1 1 0 11-1.42 1.42 1 1 0 011.42-1.42zm-4.41 2.5a5.5 5.5 0 100 11 5.5 5.5 0 000-11zm0 1.5a4 4 0 110 8 4 4 0 010-8z" />
                </svg>
              )}
            </motion.div>
            <p className="text-gray-600">Scan the QR code below to follow us on Instagram for the latest updates and inspiration!</p>
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="rounded-lg flex items-center justify-center"
            >
              <Image src="https://i.ibb.co/KjJxdL4/Photoroom-20241015-171313.png" width={300} height={300} alt='asd' className='rounded-lg h-30 w-30' /> 
            </motion.div>
            <p className="text-sm text-gray-500">@WALL_ARUA</p>
          </div>
        </motion.div>
      </section>

      
      <section className="bg-gray-100 py-12 px-4 md:px-8 lg:px-16">
        <motion.h2 {...fadeInUp} className="text-3xl sm:text-4xl font-bold text-center mb-8">Why Choose Wall Aura</motion.h2>
        <motion.div variants={staggerChildren} initial="initial" animate="animate" className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          <motion.div variants={fadeInUp} className="text-center">
            <motion.div whileHover={{ scale: 1.1 }} transition={{ type: 'spring', stiffness: 300 }}>
              <Gift className="w-16 h-16 mx-auto mb-4 text-primary" />
            </motion.div>
            <h3 className="text-xl font-semibold mb-2">Perfect for Gifting</h3>
            <p className="text-gray-600">Ideal for special occasions like anniversaries and birthdays</p>
          </motion.div>
          <motion.div variants={fadeInUp} className="text-center">
            <motion.div whileHover={{ scale: 1.1 }} transition={{ type: 'spring', stiffness: 300 }}>
              <Paintbrush className="w-16 h-16 mx-auto mb-4 text-primary" />
            </motion.div>
            <h3 className="text-xl font-semibold mb-2">Fully Customizable</h3>
            <p className="text-gray-600">Every plate can be personalized to your liking</p>
          </motion.div>
          <motion.div variants={fadeInUp} className="text-center">
            <motion.div whileHover={{ scale: 1.1 }} transition={{ type: 'spring', stiffness: 300 }}>
              <Star className="w-16 h-16 mx-auto mb-4 text-primary" />
            </motion.div>
            <h3 className="text-xl font-semibold mb-2">Premium Quality</h3>
            <p className="text-gray-600">Keychains feature a resin shine for a luxurious look</p>
          </motion.div>
          <motion.div variants={fadeInUp} className="text-center">
            <motion.div whileHover={{ scale: 1.1 }} transition={{ type: 'spring', stiffness: 300 }}>
              <Tag className="w-16 h-16 mx-auto mb-4 text-primary" />
            </motion.div>
            <h3 className="text-xl font-semibold mb-2">Personal Touch</h3>
            <p className="text-gray-600">Add names to the back of keychains for a unique gift</p>
          </motion.div>
        </motion.div>
      </section>

     
      <section className="py-12 px-4 md:px-8 lg:px-16">
        <motion.div {...fadeInUp} className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-6">Our Story</h2>
          <p className="text-lg sm:text-xl text-gray-600 mb-8">
            Founded just 6 months ago, Wallaura has quickly become a go-to destination for unique and personalized home decor. 
            Our passion for creating beautiful, customizable pieces drives us to continuously innovate and delight our customers.
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-black text-white px-6 py-3 rounded-full font-semibold hover:bg-opacity-90 transition duration-300 text-sm sm:text-base"
          >
            Learn More About Us
          </motion.button>
        </motion.div>
      </section>

     
      <section className="bg-gray-900 text-white py-12 px-4 md:px-8 lg:px-16">
        <motion.div {...fadeInUp} className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-6">Create Your Perfect Piece</h2>
          <p className="text-lg sm:text-xl mb-8">
          Whether it&apos;s a custom wall plate, a personalized keychain, or a unique fridge magnet, 
          we&apos;re here to bring your vision to life.
          </p>
          <motion.button        
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-white text-black px-6 py-3 rounded-full font-semibold hover:bg-opacity-90 transition duration-300 text-sm sm:text-base"
          >        
            <a href="https://www.instagram.com/wall__aura/">
            Start Customizing
            </a>
          </motion.button>
        </motion.div>
      </section>
      <footer className="bg-gray-100 py-8 px-4 md:px-8 lg:px-16">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-2xl font-bold mb-4">Wallaura</h3>
            <p className="text-gray-600">Elevating spaces with exquisite home decor since 2023.</p>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="text-gray-600 space-y-2">
              {['Home', 'Products', 'Customization', 'About Us'].map((link) => (
                <li key={link}>
                  <a href="#" className="hover:text-gray-900 transition duration-300">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Us</h4>
            <p className="text-gray-600 mb-2">Email: info@wallaura.com</p>
            <p className="text-gray-600 mb-4">Phone: 8626055745</p>
            <div className="flex space-x-4">
              {/* Facebook Icon */}
              <motion.a href="#" className="text-gray-600 hover:text-gray-900" whileHover={{ scale: 1.2 }}>
                <span className="sr-only">Facebook</span>
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
                </svg>
              </motion.a>

              <motion.a href="https://www.instagram.com/wall__aura/" className="text-gray-600 hover:text-gray-900" whileHover={{ scale: 1.2 }}>
                <span className="sr-only">Instagram</span>
                {/* Use the InstagramIcon if available, else fallback to a custom SVG */}
                {InstagramIcon ? (
                  <InstagramIcon className="h-6 w-6" />
                ) : (
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd" />
                  </svg>
                )}
              </motion.a>
              <motion.a href="#" className="text-gray-600 hover:text-gray-900" whileHover={{ scale: 1.2 }}>
                <span className="sr-only">Twitter</span>
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                </svg>
              </motion.a>
            </div>
          </div>
        </div>
        <div className="mt-8 text-center text-gray-600">
          <p>© 2024 Wallaura. All rights reserved. All trademarks and copyrights are the property of their WallAura & CB-studio.</p>
        </div>
      </footer>
    </div>
  )
}
