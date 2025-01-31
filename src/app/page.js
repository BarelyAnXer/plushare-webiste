"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight, CheckCircle, Download, Smartphone, Star, Users, Zap } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import imone from "./cover.png" 


export default function Home() {

  const [isScrolled, setIsScrolled] = useState(false)
  const [activeFeature, setActiveFeature] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll);
  }, [])

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveFeature((prev) => (prev + 1) % 3)
    }, 3000)
    return () => clearInterval(interval);
  }, [])

  return (
    <div className="flex flex-col min-h-screen">
      <header
        className={`fixed top-0 left-0 right-0 z-50 px-4 lg:px-6 h-16 flex items-center transition-all duration-300 ${
          isScrolled ? 'bg-white text-[#0062D9] shadow-md' : 'bg-transparent text-white'
        }`}>
        <Link className="flex items-center justify-center" href="#">
          <Smartphone className="h-6 w-6" />
          <span className="ml-2 font-bold text-xl">Plushare</span>
        </Link>
        <nav className="ml-auto flex gap-4 sm:gap-6">
          <Link
            className="text-sm font-medium hover:underline underline-offset-4"
            href="#">
            Features
          </Link>
          <Link
            className="text-sm font-medium hover:underline underline-offset-4"
            href="#">
            Pricing
          </Link>
          <Link
            className="text-sm font-medium hover:underline underline-offset-4"
            href="#">
            About
          </Link>
          <Link
            className="text-sm font-medium hover:underline underline-offset-4"
            href="#">
            Contact
          </Link>
        </nav>
      </header>
      <main className="flex-1">
        <section
          className="w-full min-h-screen flex items-center justify-center py-12 md:py-24 lg:py-32 xl:py-48 bg-[#0062D9] text-white relative overflow-hidden">
          <div className="absolute inset-0 overflow-hidden">
            <div
              className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[#FF4342] rounded-full blur-3xl opacity-20 animate-pulse"></div>
          </div>
          <div className="container px-4 md:px-6 relative z-10">
            <div
              className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <h1
                    className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                    Your Life, Simplified
                  </h1>
                  <p className="max-w-[600px] text-gray-200 md:text-xl">
                    Our app brings organization, productivity, and peace of mind to your daily routine. Download now and
                    transform your life.
                  </p>
                </div>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                <a
                  href="/plushare.apk" download
                  className="bg-[#FF4342] hover:bg-[#ff5a59] text-white inline-flex items-center justify-center group">
                  Download Now
                  <Download className="ml-2 h-4 w-4 transition-transform group-hover:translate-y-1" />
                </a>
                  {/* <Button
                    variant="outline"
                    className="text-white border-white hover:bg-white hover:text-[#0062D9] transition-colors duration-300">
                    Learn More
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button> */}
                </div>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8 }}
                className="mx-auto flex w-full max-w-[400px] items-center justify-center">
                <div className="relative w-full aspect-[1/2]">
                  <Image
                    alt="App Screenshot"
                    src={imone}
                    layout="fill"
                    objectFit="cover"
                    className="rounded-xl shadow-2xl" />
                  <div
                    className="absolute inset-0 bg-gradient-to-t from-[#0062D9] via-transparent to-transparent opacity-50 rounded-xl"></div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-white">
          <div className="container px-4 md:px-6">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-12 text-[#0062D9]">
              Key Features
            </motion.h2>
            <div className="grid gap-6 lg:grid-cols-3 lg:gap-12">
              {[
                { icon: CheckCircle, title: "Task Management", description: "Effortlessly organize your tasks and boost your productivity with our intuitive interface." },
                { icon: Star, title: "Goal Tracking", description: "Set, monitor, and achieve your goals with our powerful tracking tools and insights." },
                { icon: Zap, title: "Seamless Sync", description: "Access your data across all your devices with our real-time cloud synchronization." }
              ].map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.2 }}
                  className={`flex flex-col items-center space-y-4 text-center p-6 rounded-xl transition-all duration-300 ${
                    activeFeature === index ? 'bg-[#0062D9] text-white scale-105' : 'bg-gray-100'
                  }`}>
                  <feature.icon
                    className={`h-12 w-12 ${activeFeature === index ? 'text-[#FF4342]' : 'text-[#0062D9]'}`} />
                  <h3 className="text-xl font-bold">{feature.title}</h3>
                  <p className={activeFeature === index ? 'text-gray-200' : 'text-gray-500'}>{feature.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-100">
          <div className="container px-4 md:px-6">
            <div
              className="flex flex-col items-center justify-center space-y-4 text-center">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="space-y-2">
                <h2
                  className="text-3xl font-bold tracking-tighter sm:text-5xl text-[#0062D9]">
                  Download Our App Today
                </h2>
                <p
                  className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Join thousands of satisfied users and start your journey to a more organized life. Available on iOS
                  and Android.
                </p>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="flex flex-col gap-2 min-[400px]:flex-row justify-center">
                <Button
                  className="bg-[#0062D9] hover:bg-[#0056c0] text-white inline-flex items-center justify-center group">
                  App Store
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Button>
                <Button
                  variant="outline"
                  className="text-[#0062D9] border-[#0062D9] hover:bg-[#0062D9] hover:text-white transition-colors duration-300">
                  Google Play
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </motion.div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-[#0062D9] text-white">
          <div className="container px-4 md:px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="grid gap-6 lg:grid-cols-[2fr_1fr] items-center">
              <div className="space-y-4">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Join Our Community</h2>
                <p className="max-w-[600px] text-gray-200 md:text-xl">
                  Connect with like-minded individuals, share tips, and get the most out of your app experience.
                </p>
              </div>
              <div className="flex justify-center lg:justify-end">
                <motion.div
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  transition={{ duration: 0.8, type: "spring" }}
                  className="w-32 h-32 bg-white rounded-full flex items-center justify-center text-[#0062D9]">
                  <Users className="h-16 w-16" />
                </motion.div>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="mt-12 flex justify-center">
              <Button
                className="bg-white text-[#0062D9] hover:bg-gray-100 transition-colors duration-300">
                Join Now
              </Button>
            </motion.div>
          </div>
        </section>
      </main>
      <footer className="bg-gray-100 py-8 mt-12">
        <div className="container px-4 md:px-6">
          <div className="grid gap-8 lg:grid-cols-3">
            <div>
              <h3 className="text-lg font-semibold mb-4 text-[#0062D9]">About Us</h3>
              <p className="text-sm text-gray-500">
                We're dedicated to simplifying your life through innovative mobile solutions.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4 text-[#0062D9]">Quick Links</h3>
              <ul className="space-y-2 text-sm text-gray-500">
                <li><Link href="#" className="hover:text-[#0062D9]">Home</Link></li>
                <li><Link href="#" className="hover:text-[#0062D9]">Features</Link></li>
                <li><Link href="#" className="hover:text-[#0062D9]">Pricing</Link></li>
                <li><Link href="#" className="hover:text-[#0062D9]">Contact</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4 text-[#0062D9]">Follow Us</h3>
              <div className="flex space-x-4">
                <Link href="#" className="text-gray-500 hover:text-[#0062D9]">
                  <svg
                    className="h-6 w-6"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true">
                    <path
                      fillRule="evenodd"
                      d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
                      clipRule="evenodd" />
                  </svg>
                </Link>
                <Link href="#" className="text-gray-500 hover:text-[#0062D9]">
                  <svg
                    className="h-6 w-6"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true">
                    <path
                      d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                  </svg>
                </Link>
                <Link href="#" className="text-gray-500 hover:text-[#0062D9]">
                  <svg
                    className="h-6 w-6"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true">
                    <path
                      fillRule="evenodd"
                      d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
                      clipRule="evenodd" />
                  </svg>
                </Link>
              </div>
            </div>
          </div>
          <div
            className="mt-8 border-t pt-8 flex flex-col sm:flex-row justify-between items-center">
            <p className="text-xs text-gray-500">© 2024 AppShowcase Inc. All rights reserved.</p>
            <nav className="flex gap-4 sm:gap-6 mt-4 sm:mt-0">
              <Link className="text-xs text-gray-500 hover:text-[#0062D9]" href="#">
                Terms of Service
              </Link>
              <Link className="text-xs text-gray-500 hover:text-[#0062D9]" href="#">
                Privacy Policy
              </Link>
            </nav>
          </div>
        </div>
      </footer>
    </div>
  );
}
