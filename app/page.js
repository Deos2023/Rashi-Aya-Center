
"use client"
import Head from 'next/head';
import { AnimatePresence, motion } from 'framer-motion';
import { useState } from 'react';
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaChevronRight, FaUserNurse, FaHandHoldingHeart, FaHome, FaHospital, FaStar, FaWhatsapp } from 'react-icons/fa';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import ImageGallery from './components/Gallery';
import Image from 'next/image';
const galleryImages = [
  {
    src: "/1.jpeg",
    alt: "Nurse caring for elderly patient",
    caption: "Compassionate elder care services"
  },
  {
    src: "/2.jpeg",
    alt: "Nanny playing with child",
    caption: "Professional nanny services"
  },
  {
    src: "/3.jpeg",
    alt: "Nurse checking patients vitals",
    caption: "Medical care at home"
  },
  {
    src: "/4.jpeg",
    alt: "Caregiver assisting with meal",
    caption: "Daily living assistance"
  },
  {
    src: "/5.jpeg",
    alt: "Group of caregivers",
    caption: "Our trained professional team"
  }
];

const Home = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    const { name, email, phone, message } = formData;
    const whatsappMessage = `Name: ${name}%0AEmail: ${email}%0APhone: ${phone}%0AMessage: ${message}`;
    const whatsappUrl = `https://wa.me/918981918003?text=${whatsappMessage}`;
    
    window.open(whatsappUrl, '_blank');
    
    // Reset form
    setFormData({
      name: '',
      email: '',
      phone: '',
      message: ''
    });
  };
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  // Testimonials data
  const testimonials = [
    {
      id: 1,
      name: "Priya Sharma",
      role: "Daughter of Patient",
      content: "Rashi Aya Center provided excellent care for my elderly mother. The nurse was compassionate and professional.",
      rating: 5
    },
    {
      id: 2,
      name: "Rajiv Chatterjee",
      role: "Son of Patient",
      content: "Their services are reliable and the staff is well-trained. Highly recommended for elder care.",
      rating: 4
    },
    {
      id: 3,
      name: "Ananya Das",
      role: "Working Mother",
      content: "The nanny service helped me balance work and family. The caregivers are trustworthy and caring.",
      rating: 5
    },
  ];

  // Services data
  const services = [
    {
      id: 1,
      title: "Nursing Services",
      icon: <FaUserNurse className="text-4xl mb-4 text-blue-600" />,
      description: "Professional nursing care for patients at home with trained medical staff."
    },
    {
      id: 2,
      title: "Elder Care",
      icon: <FaHandHoldingHeart className="text-4xl mb-4 text-green-600" />,
      description: "Compassionate care for elderly individuals, ensuring their comfort and well-being."
    },
    {
      id: 3,
      title: "Nanny Services",
      icon: <FaHome className="text-4xl mb-4 text-purple-600" />,
      description: "Reliable and caring nannies for your children with thorough background checks."
    },
    {
      id: 4,
      title: "Patient Care",
      icon: <FaHospital className="text-4xl mb-4 text-red-600" />,
      description: "Specialized care for patients recovering from illness or surgery at home."
    }
  ];

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5
      }
    }
  };

  // Slider settings
  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    pauseOnHover: true
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Head>
        <title>Rashi Aya Center | Nursing & Care Services in Kolkata</title>
        <meta name="description" content="Professional nursing agency, nanny service, elder care and patient care service provider in Kolkata. Serving North 24 Parganas area." />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* Navigation */}
      <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        <motion.div 
          initial={{ x: -20, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="flex items-center"
        >
          <FaUserNurse className="text-2xl text-blue-600 mr-2" />
          <span className="text-xl font-bold text-gray-800">Rashi Aya Center</span>
        </motion.div>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-8">
          <a 
            href="#home" 
            className="text-gray-800 hover:text-blue-600 transition"
            onClick={closeMenu}
          >
            Home
          </a>
          <a 
            href="#about" 
            className="text-gray-800 hover:text-blue-600 transition"
            onClick={closeMenu}
          >
            About
          </a>
          <a 
            href="#services" 
            className="text-gray-800 hover:text-blue-600 transition"
            onClick={closeMenu}
          >
            Services
          </a>
          <a 
            href="#testimonials" 
            className="text-gray-800 hover:text-blue-600 transition"
            onClick={closeMenu}
          >
            Testimonials
          </a>
          <a 
            href="#contact" 
            className="text-gray-800 hover:text-blue-600 transition"
            onClick={closeMenu}
          >
            Contact
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button 
          onClick={toggleMenu}
          className="md:hidden text-gray-800 focus:outline-none"
          aria-label="Toggle menu"
          aria-expanded={isMenuOpen}
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {isMenuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-white px-4 pt-2 pb-4 space-y-3 border-t border-gray-200"
          >
            <a 
              href="#home" 
              className="block py-2 text-gray-800 hover:text-blue-600 transition"
              onClick={closeMenu}
            >
              Home
            </a>
            <a 
              href="#about" 
              className="block py-2 text-gray-800 hover:text-blue-600 transition"
              onClick={closeMenu}
            >
              About
            </a>
            <a 
              href="#services" 
              className="block py-2 text-gray-800 hover:text-blue-600 transition"
              onClick={closeMenu}
            >
              Services
            </a>
            <a 
              href="#testimonials" 
              className="block py-2 text-gray-800 hover:text-blue-600 transition"
              onClick={closeMenu}
            >
              Testimonials
            </a>
            <a 
              href="#contact" 
              className="block py-2 text-gray-800 hover:text-blue-600 transition"
              onClick={closeMenu}
            >
              Contact
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>

      {/* Hero Section */}
       <section id="home" className="relative bg-blue-700 text-white py-12 md:py-20">
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center">
        {/* Text Content - Left Side */}
        <motion.div 
          initial={{ x: -50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="md:w-1/2 mb-8 md:mb-0 order-2 md:order-1"
        >
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6">
            Professional Care Services in Kolkata
          </h1>
          <p className="text-lg sm:text-xl mb-6 sm:mb-8">
            Compassionate nursing, nanny, and elder care services for your loved ones.
          </p>
          <div className="flex flex-col sm:flex-row space-y-3 sm:space-y-0 sm:space-x-4">
            <a 
              href="#contact" 
              className="bg-white text-blue-700 px-4 sm:px-6 py-2 sm:py-3 rounded-lg font-medium hover:bg-gray-100 transition duration-300 flex items-center justify-center"
            >
              Contact Us <FaChevronRight className="ml-2" />
            </a>
            <a 
              href="tel:8981918003" 
              className="bg-transparent border-2 border-white px-4 sm:px-6 py-2 sm:py-3 rounded-lg font-medium hover:bg-white hover:text-blue-700 transition duration-300 flex items-center justify-center"
            >
              <FaPhone className="mr-2" /> 8981918003
            </a>
          </div>
        </motion.div>

        {/* Image - Right Side */}
        <motion.div 
          initial={{ x: 50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="w-full md:w-1/2 flex justify-center mb-8 md:mb-0 order-1 md:order-2"
        >
          <div className="relative w-full h-64 sm:h-80 md:h-96 lg:h-[28rem] rounded-lg overflow-hidden shadow-xl">
            <Image
              src="/2.jpeg"
              alt="Nurse caring for elderly"
              fill
              className="object-cover"
              sizes="(max-width: 640px) 90vw, (max-width: 768px) 80vw, (max-width: 1024px) 50vw, 40vw"
              priority
              quality={85}
            />
          </div>
        </motion.div>
      </div>
    </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl font-bold text-gray-800 mb-4">About Rashi Aya Center</h2>
            <div className="w-20 h-1 bg-blue-600 mx-auto mb-6"></div>
            <p className="text-gray-600 max-w-3xl mx-auto">
              Rashi Aya Center is a trusted nursing and care service provider located in Uttar Saptagram Bisharpara, Kolkata. 
              We are committed to delivering compassionate and professional care services to our clients.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ x: -50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h3 className="text-2xl font-semibold text-gray-800 mb-4">Our Mission</h3>
              <p className="text-gray-600 mb-6">
                To provide high-quality, personalized care services that enhance the quality of life for our clients and peace of mind for their families.
              </p>
              <h3 className="text-2xl font-semibold text-gray-800 mb-4">Our Vision</h3>
              <p className="text-gray-600">
                To be the most trusted and preferred care service provider in Kolkata and surrounding areas, known for our reliability, compassion, and professionalism.
              </p>
            </motion.div>
            <motion.div
              initial={{ x: 50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="bg-gray-100 p-8 rounded-lg shadow-md"
            >
              <h3 className="text-2xl font-semibold text-gray-800 mb-4">Why Choose Us?</h3>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <div className="bg-blue-100 p-2 rounded-full mr-4">
                    <FaUserNurse className="text-blue-600" />
                  </div>
                  <span className="text-gray-600">Trained and verified caregivers</span>
                </li>
                <li className="flex items-start">
                  <div className="bg-blue-100 p-2 rounded-full mr-4">
                    <FaHandHoldingHeart className="text-blue-600" />
                  </div>
                  <span className="text-gray-600">Compassionate and personalized care</span>
                </li>
                <li className="flex items-start">
                  <div className="bg-blue-100 p-2 rounded-full mr-4">
                    <FaHome className="text-blue-600" />
                  </div>
                  <span className="text-gray-600">Services available 24/7</span>
                </li>
                <li className="flex items-start">
                  <div className="bg-blue-100 p-2 rounded-full mr-4">
                    <FaHospital className="text-blue-600" />
                  </div>
                  <span className="text-gray-600">Affordable pricing options</span>
                </li>
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Our Services</h2>
            <div className="w-20 h-1 bg-blue-600 mx-auto mb-6"></div>
            <p className="text-gray-600 max-w-3xl mx-auto">
              We offer a comprehensive range of care services to meet your familys needs.
            </p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
          >
            {services.map((service) => (
              <motion.div
                key={service.id}
                variants={itemVariants}
                whileHover={{ y: -10 }}
                className="bg-white p-8 rounded-lg shadow-md text-center hover:shadow-lg transition duration-300"
              >
                {service.icon}
                <h3 className="text-xl font-semibold text-gray-800 mb-3">{service.title}</h3>
                <p className="text-gray-600">{service.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
<ImageGallery images={galleryImages} />
      {/* What We Offer Section */}
      <section className="py-20 bg-blue-700 text-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl font-bold mb-4">What We Offer</h2>
            <div className="w-20 h-1 bg-white mx-auto mb-6"></div>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="bg-blue-800 p-8 rounded-lg"
            >
              <h3 className="text-xl font-semibold mb-4">Nursing Agency</h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <FaChevronRight className="mt-1 mr-2 text-sm" />
                  <span>Post-operative care</span>
                </li>
                <li className="flex items-start">
                  <FaChevronRight className="mt-1 mr-2 text-sm" />
                  <span>Chronic disease management</span>
                </li>
                <li className="flex items-start">
                  <FaChevronRight className="mt-1 mr-2 text-sm" />
                  <span>Medication administration</span>
                </li>
                <li className="flex items-start">
                  <FaChevronRight className="mt-1 mr-2 text-sm" />
                  <span>Wound care</span>
                </li>
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="bg-blue-800 p-8 rounded-lg"
            >
              <h3 className="text-xl font-semibold mb-4">Nanny & Elder Care</h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <FaChevronRight className="mt-1 mr-2 text-sm" />
                  <span>Child care and supervision</span>
                </li>
                <li className="flex items-start">
                  <FaChevronRight className="mt-1 mr-2 text-sm" />
                  <span>Elderly companionship</span>
                </li>
                <li className="flex items-start">
                  <FaChevronRight className="mt-1 mr-2 text-sm" />
                  <span>Meal preparation</span>
                </li>
                <li className="flex items-start">
                  <FaChevronRight className="mt-1 mr-2 text-sm" />
                  <span>Personal hygiene assistance</span>
                </li>
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="bg-blue-800 p-8 rounded-lg"
            >
              <h3 className="text-xl font-semibold mb-4">Patient Care</h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <FaChevronRight className="mt-1 mr-2 text-sm" />
                  <span>24/7 patient monitoring</span>
                </li>
                <li className="flex items-start">
                  <FaChevronRight className="mt-1 mr-2 text-sm" />
                  <span>Mobility assistance</span>
                </li>
                <li className="flex items-start">
                  <FaChevronRight className="mt-1 mr-2 text-sm" />
                  <span>Physical therapy support</span>
                </li>
                <li className="flex items-start">
                  <FaChevronRight className="mt-1 mr-2 text-sm" />
                  <span>Hospital to home transition care</span>
                </li>
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl font-bold text-gray-800 mb-4">What Our Clients Say</h2>
            <div className="w-20 h-1 bg-blue-600 mx-auto mb-6"></div>
            <p className="text-gray-600 max-w-3xl mx-auto">
              Hear from families who have trusted us with their care needs.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto"
          >
            <Slider {...sliderSettings}>
              {testimonials.map((testimonial) => (
                <div key={testimonial.id} className="px-4">
                  <div className="bg-gray-50 p-8 rounded-lg shadow-sm">
                    <div className="flex mb-4">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <FaStar key={i} className="text-yellow-400" />
                      ))}
                    </div>
                    <p className="text-gray-600 italic mb-6">{testimonial.content}</p>
                    <div>
                      <p className="font-semibold text-gray-800">{testimonial.name}</p>
                      <p className="text-sm text-gray-500">{testimonial.role}</p>
                    </div>
                  </div>
                </div>
              ))}
            </Slider>
          </motion.div>
        </div>
      </section>

      {/* Animated Bar Section */}
      <section className="py-16 bg-gray-800 text-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="grid md:grid-cols-4 gap-8 text-center"
          >
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="p-6"
            >
              <div className="text-4xl font-bold mb-2">500+</div>
              <div className="text-gray-300">Clients Served</div>
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="p-6"
            >
              <div className="text-4xl font-bold mb-2">50+</div>
              <div className="text-gray-300">Trained Staff</div>
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="p-6"
            >
              <div className="text-4xl font-bold mb-2">24/7</div>
              <div className="text-gray-300">Service Availability</div>
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="p-6"
            >
              <div className="text-4xl font-bold mb-2">5+</div>
              <div className="text-gray-300">Years Experience</div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-0 bg-white">
        <div className="container mx-auto px-0">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="h-96 w-full"
          >
            
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3681.312415859592!2d88.4299305!3d22.679410999999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39f89f004201e3ed%3A0x671b7abd7b375a3c!2sRashi%20Aya%20Center!5e0!3m2!1sen!2sin!4v1751368436669!5m2!1sen!2sin" 
              width="100%" 
              height="100%" 
              style={{ border: 0 }} 
              allowFullScreen="" 
              loading="lazy"
              title="Rashi Aya Center Location"
            ></iframe>
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
          <section id="contact" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl font-bold text-gray-800 mb-4">Contact Us</h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto mb-6"></div>
          <p className="text-gray-600 max-w-3xl mx-auto">
            Reach out to us for inquiries or to schedule our services.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12">
          <motion.div
            initial={{ x: -50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="bg-white p-8 rounded-lg shadow-md"
          >
            <h3 className="text-2xl font-semibold text-gray-800 mb-6">Get In Touch</h3>
            
            <div className="space-y-6">
              <div className="flex items-start">
                <div className="bg-blue-100 p-3 rounded-full mr-4">
                  <FaMapMarkerAlt className="text-blue-600" />
                </div>
                <div>
                  <h4 className="font-medium text-gray-800">Address</h4>
                  <p className="text-gray-600">
                    Uttar Saptagram Bisharpara, Kolkata (Near Durga Mandir)<br />
                    North 24 Parganas, 700158
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="bg-blue-100 p-3 rounded-full mr-4">
                  <FaPhone className="text-blue-600" />
                </div>
                <div>
                  <h4 className="font-medium text-gray-800">Phone</h4>
                  <p className="text-gray-600">
                    <a href="tel:8981918003" className="hover:text-blue-600 transition">8981918003</a>
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="bg-blue-100 p-3 rounded-full mr-4">
                  <FaEnvelope className="text-blue-600" />
                </div>
                <div>
                  <h4 className="font-medium text-gray-800">Email</h4>
                  <p className="text-gray-600">
                    <a href="mailto:viswajitdey762@gmail.com" className="hover:text-blue-600 transition">viswajitdey762@gmail.com</a>
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ x: 50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="bg-white p-8 rounded-lg shadow-md"
          >
            <h3 className="text-2xl font-semibold text-gray-800 mb-6">Send Us a Message</h3>
            <form onSubmit={handleSubmit} className="space-y-4 text-neutral-800">
              <div>
                <label htmlFor="name" className="block text-gray-700 mb-2">Your Name</label>
                <input 
                  type="text" 
                  id="name" 
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                  placeholder="Enter your name"
                  required
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-gray-700 mb-2">Your Email</label>
                <input 
                  type="email" 
                  id="email" 
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                  placeholder="Enter your email"
                  required
                />
              </div>
              <div>
                <label htmlFor="phone" className="block text-gray-700 mb-2">Phone Number</label>
                <input 
                  type="tel" 
                  id="phone" 
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                  placeholder="Enter your phone number"
                  required
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-gray-700 mb-2">Your Message</label>
                <textarea 
                  id="message" 
                  name="message"
                  rows="4" 
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                  placeholder="Enter your message"
                  required
                ></textarea>
              </div>
              <button 
                type="submit" 
                className="bg-green-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-green-700 transition duration-300 w-full flex items-center justify-center"
              >
                <FaWhatsapp className="mr-2" /> Send via WhatsApp
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>


      {/* CTA Section */}
      <section className="py-16 bg-blue-700 text-white">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl font-bold mb-6">Ready to Get Started?</h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              Contact us today to discuss your care needs and how we can help.
            </p>
            <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
              <a 
                href="tel:8981918003" 
                className="bg-white text-blue-700 px-6 py-3 rounded-lg font-medium hover:bg-gray-100 transition duration-300 flex items-center justify-center"
              >
                <FaPhone className="mr-2" /> Call Now
              </a>
              <a 
                href="#contact" 
                className="bg-transparent border-2 border-white px-6 py-3 rounded-lg font-medium hover:bg-white hover:text-blue-700 transition duration-300 flex items-center justify-center"
              >
                Send Message
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4 flex items-center">
                <FaUserNurse className="mr-2" /> Rashi Aya Center
              </h3>
              <p className="text-gray-400">
                Providing compassionate and professional care services in Kolkata and surrounding areas.
              </p>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2">
                <li><a href="#home" className="text-gray-400 hover:text-white transition">Home</a></li>
                <li><a href="#about" className="text-gray-400 hover:text-white transition">About</a></li>
                <li><a href="#services" className="text-gray-400 hover:text-white transition">Services</a></li>
                <li><a href="#contact" className="text-gray-400 hover:text-white transition">Contact</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Services</h4>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-400 hover:text-white transition">Nursing Care</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition">Elder Care</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition">Nanny Services</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition">Patient Care</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Contact Info</h4>
              <ul className="space-y-2 text-gray-400">
                <li className="flex items-start">
                  <FaMapMarkerAlt className="mt-1 mr-2" />
                  <span>Uttar Saptagram Bisharpara, Kolkata, 700158</span>
                </li>
                <li className="flex items-start">
                  <FaPhone className="mt-1 mr-2" />
                  <a href="tel:8981918003" className="hover:text-white transition">8981918003</a>
                </li>
                <li className="flex items-start">
                  <FaEnvelope className="mt-1 mr-2" />
                  <a href="mailto:viswajitdey762@gmail.com" className="hover:text-white transition">viswajitdey762@gmail.com</a>
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; {new Date().getFullYear()} Rashi Aya Center. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Home;