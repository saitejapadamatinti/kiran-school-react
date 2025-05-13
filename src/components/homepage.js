import { useState, useEffect } from "react";
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  Book,
  Users,
  Monitor,
  Camera,
  CheckCircle,
  Award,
  Calendar,
  Menu,
  X,
} from "lucide-react";

export default function SchoolWebsite() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [scrollY, setScrollY] = useState(0);

  // Fade-in animation effect on scroll
  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
      if (window.scrollY > 100) {
        setIsVisible(true);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Animation for elements as they come into view
  useEffect(() => {
    const animateElements = () => {
      const elementsToAnimate = document.querySelectorAll(".animate-on-scroll");

      elementsToAnimate.forEach((element) => {
        const elementPosition = element.getBoundingClientRect().top;
        const screenHeight = window.innerHeight;

        if (elementPosition < screenHeight * 0.85) {
          element.classList.add("animate-fade-in");
        }
      });
    };

    animateElements();
    window.addEventListener("scroll", animateElements);
    return () => window.removeEventListener("scroll", animateElements);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div className="font-sans">
      {/* Header */}
      <header className="bg-blue-900 text-white">
        <div className="container mx-auto px-4 py-3 flex justify-between items-center">
          <div className="flex items-center">
            <Phone size={18} className="mr-2" />
            <span className="mr-6 text-sm">6301993761</span>
            <MapPin size={18} className="mr-2" />
            <span className="text-sm">
              Opposite Busstop, Penchikalpet, Kagaznagar
            </span>
          </div>
          <div className="hidden md:flex items-center">
            <Mail size={18} className="mr-2" />
            <span className="text-sm">kiranmodernemschool@gmail.com</span>
          </div>
        </div>
      </header>

      {/* Navigation */}
      <nav
        className="bg-white shadow-md sticky top-0 z-10 transition-all duration-300"
        style={{
          boxShadow: scrollY > 50 ? "0 10px 15px rgba(0,0,0,0.1)" : "none",
        }}
      >
        <div className="container mx-auto px-4 py-4">
          <div className="flex justify-between items-center">
            <div className="flex items-center">
              <div className="flex items-center">
                <div className="w-10 h-10 bg-blue-900 rounded-full mr-2 flex items-center justify-center">
                  <Book size={20} className="text-yellow-500" />
                </div>
                <div>
                  <div className="text-2xl font-bold text-blue-900">
                    Kiran Modern
                  </div>
                  <div className="text-sm bg-yellow-500 text-white px-2 py-1 rounded">
                    E/M School
                  </div>
                </div>
              </div>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button onClick={toggleMenu} className="focus:outline-none">
                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex space-x-8">
              <a
                href="#"
                className="text-blue-900 font-medium hover:text-yellow-500 transition-colors duration-300"
              >
                Home
              </a>
              <a
                href="#about"
                className="text-blue-900 font-medium hover:text-yellow-500 transition-colors duration-300"
              >
                About
              </a>
              <a
                href="#facilities"
                className="text-blue-900 font-medium hover:text-yellow-500 transition-colors duration-300"
              >
                Facilities
              </a>
              <a
                href="#gallery"
                className="text-blue-900 font-medium hover:text-yellow-500 transition-colors duration-300"
              >
                Gallery
              </a>
              <a
                href="#contact"
                className="text-blue-900 font-medium hover:text-yellow-500 transition-colors duration-300"
              >
                Contact
              </a>
            </div>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className="md:hidden mt-4 space-y-3 animate-fade-in">
              <a
                href="#"
                className="block text-blue-900 font-medium hover:text-yellow-500 transition-colors duration-300"
              >
                Home
              </a>
              <a
                href="#about"
                className="block text-blue-900 font-medium hover:text-yellow-500 transition-colors duration-300"
              >
                About
              </a>
              <a
                href="#facilities"
                className="block text-blue-900 font-medium hover:text-yellow-500 transition-colors duration-300"
              >
                Facilities
              </a>
              <a
                href="#gallery"
                className="block text-blue-900 font-medium hover:text-yellow-500 transition-colors duration-300"
              >
                Gallery
              </a>
              <a
                href="#contact"
                className="block text-blue-900 font-medium hover:text-yellow-500 transition-colors duration-300"
              >
                Contact
              </a>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-blue-900 to-blue-800 text-white py-16 overflow-hidden">
        {/* Animated background elements */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0">
          <div className="absolute top-10 left-10 w-16 h-16 bg-yellow-500 rounded-full opacity-10 animate-pulse"></div>
          <div
            className="absolute top-40 right-20 w-20 h-20 bg-yellow-500 rounded-full opacity-10 animate-pulse"
            style={{ animationDelay: "1s" }}
          ></div>
          <div
            className="absolute bottom-20 left-1/4 w-24 h-24 bg-yellow-500 rounded-full opacity-10 animate-pulse"
            style={{ animationDelay: "1.5s" }}
          ></div>
        </div>

        <div className="container mx-auto px-4 flex flex-col md:flex-row items-center relative ">
          <div className="md:w-1/2 mb-8 md:mb-0 animate-on-scroll">
            <h1 className="text-4xl font-bold mb-4">
              Welcome to Kiran Modern E/M School
            </h1>
            <p className="text-xl mb-2">
              Providing quality education with well-experienced teachers
            </p>
            <p className="text-lg mb-6 italic text-yellow-300">
              "Quality Education for a Brighter Future"
            </p>
            <div className="flex space-x-4">
              <a
                href="#contact"
                className="bg-yellow-500 hover:bg-yellow-600 text-white font-bold py-2 px-6 rounded-full transition-all duration-300 transform hover:scale-105"
              >
                Contact Us
              </a>
              <a
                href="#about"
                className="bg-transparent border-2 border-white hover:bg-white hover:text-blue-800 text-white font-bold py-2 px-6 rounded-full transition-all duration-300"
              >
                Learn More
              </a>
            </div>
          </div>
          <div className="md:w-1/2 flex justify-center animate-on-scroll">
            <div className="bg-white rounded-lg p-1 shadow-lg transform transition-all duration-500 hover:rotate-1 hover:scale-105">
              <img
                src="https://images.unsplash.com/photo-1509062522246-3755977927d7?w=800&auto=format&fit=crop&q=60"
                alt="School Building"
                className="rounded w-full h-[400px] object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 animate-on-scroll">
            <h2 className="text-3xl font-bold text-blue-900 mb-2">
              About Our School
            </h2>
            <div className="w-24 h-1 bg-yellow-500 mx-auto"></div>
          </div>

          <div className="flex flex-col md:flex-row">
            <div className="md:w-1/2 mb-8 md:mb-0 animate-on-scroll">
              <div className="bg-white rounded-lg shadow-lg overflow-hidden transform transition-all duration-500 hover:scale-105">
                <img
                  src="https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?w=800&auto=format&fit=crop&q=60"
                  alt="Students in classroom"
                  className="w-full h-64 object-cover"
                />
              </div>
            </div>

            <div className="md:w-1/2 md:pl-8 animate-on-scroll">
              <h3 className="text-2xl font-bold text-blue-800 mb-4">
                Our Mission
              </h3>
              <p className="text-gray-700 mb-6">
                At Kiran Modern E/M School, we are committed to providing
                high-quality education that nurtures the intellectual, physical,
                and emotional growth of each student. Our dedicated team of
                experienced teachers strives to create a supportive and
                stimulating learning environment.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="flex items-start transform transition-all duration-300 hover:translate-x-2">
                  <CheckCircle
                    className="text-yellow-500 mr-2 mt-1 flex-shrink-0"
                    size={20}
                  />
                  <div>
                    <h4 className="font-bold">Quality Education</h4>
                    <p className="text-sm text-gray-600">
                      Comprehensive curriculum designed for holistic development
                    </p>
                  </div>
                </div>

                <div className="flex items-start transform transition-all duration-300 hover:translate-x-2">
                  <CheckCircle
                    className="text-yellow-500 mr-2 mt-1 flex-shrink-0"
                    size={20}
                  />
                  <div>
                    <h4 className="font-bold">Experienced Faculty</h4>
                    <p className="text-sm text-gray-600">
                      Well-qualified teachers with years of experience
                    </p>
                  </div>
                </div>

                <div className="flex items-start transform transition-all duration-300 hover:translate-x-2">
                  <CheckCircle
                    className="text-yellow-500 mr-2 mt-1 flex-shrink-0"
                    size={20}
                  />
                  <div>
                    <h4 className="font-bold">Modern Facilities</h4>
                    <p className="text-sm text-gray-600">
                      Digital classrooms and secure environment
                    </p>
                  </div>
                </div>

                <div className="flex items-start transform transition-all duration-300 hover:translate-x-2">
                  <CheckCircle
                    className="text-yellow-500 mr-2 mt-1 flex-shrink-0"
                    size={20}
                  />
                  <div>
                    <h4 className="font-bold">Safe Environment</h4>
                    <p className="text-sm text-gray-600">
                      CCTV surveillance and strict security measures
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Facilities Section */}
      <section
        id="facilities"
        className="py-16 bg-white relative overflow-hidden"
      >
        {/* Background decorative elements */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-yellow-500 rounded-full opacity-5"></div>
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-blue-900 rounded-full opacity-5"></div>

        <div className="container mx-auto px-4 relative z-0">
          <div className="text-center mb-12 animate-on-scroll">
            <h2 className="text-3xl font-bold text-blue-900 mb-2">
              Our Facilities
            </h2>
            <div className="w-24 h-1 bg-yellow-500 mx-auto"></div>
            <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
              We provide state-of-the-art facilities to ensure a conducive
              learning environment for all our students.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Digital Classes */}
            <div className="bg-gray-50 rounded-lg p-6 shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-2 animate-on-scroll">
              <div className="p-3 bg-blue-100 rounded-full w-16 h-16 flex items-center justify-center mb-4">
                <Monitor className="text-blue-600" size={32} />
              </div>
              <h3 className="text-xl font-bold text-blue-900 mb-2">
                Digital Classrooms
              </h3>
              <p className="text-gray-600">
                Modern digital classrooms equipped with interactive smart boards
                and multimedia learning tools to enhance the learning
                experience.
              </p>
            </div>

            {/* Experienced Teachers */}
            <div className="bg-gray-50 rounded-lg p-6 shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-2 animate-on-scroll">
              <div className="p-3 bg-blue-100 rounded-full w-16 h-16 flex items-center justify-center mb-4">
                <Users className="text-blue-600" size={32} />
              </div>
              <h3 className="text-xl font-bold text-blue-900 mb-2">
                Experienced Faculty
              </h3>
              <p className="text-gray-600">
                Our team of well-qualified and experienced teachers is dedicated
                to providing personalized attention to each student.
              </p>
            </div>

            {/* Security Cameras */}
            <div className="bg-gray-50 rounded-lg p-6 shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-2 animate-on-scroll">
              <div className="p-3 bg-blue-100 rounded-full w-16 h-16 flex items-center justify-center mb-4">
                <Camera className="text-blue-600" size={32} />
              </div>
              <h3 className="text-xl font-bold text-blue-900 mb-2">
                CCTV Surveillance
              </h3>
              <p className="text-gray-600">
                24/7 CCTV monitoring throughout the campus ensures the safety
                and security of all students and staff.
              </p>
            </div>

            {/* Library */}
            <div className="bg-gray-50 rounded-lg p-6 shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-2 animate-on-scroll">
              <div className="p-3 bg-blue-100 rounded-full w-16 h-16 flex items-center justify-center mb-4">
                <Book className="text-blue-600" size={32} />
              </div>
              <h3 className="text-xl font-bold text-blue-900 mb-2">
                Well-Stocked Library
              </h3>
              <p className="text-gray-600">
                Our library offers a wide range of books, reference materials,
                and digital resources to support research and learning.
              </p>
            </div>

            {/* Quality Education */}
            <div className="bg-gray-50 rounded-lg p-6 shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-2 animate-on-scroll">
              <div className="p-3 bg-blue-100 rounded-full w-16 h-16 flex items-center justify-center mb-4">
                <Award className="text-blue-600" size={32} />
              </div>
              <h3 className="text-xl font-bold text-blue-900 mb-2">
                Quality Education
              </h3>
              <p className="text-gray-600">
                Comprehensive curriculum designed to develop academic
                excellence, creativity, and critical thinking skills.
              </p>
            </div>

            {/* Co-curricular Activities */}
            <div className="bg-gray-50 rounded-lg p-6 shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-2 animate-on-scroll">
              <div className="p-3 bg-blue-100 rounded-full w-16 h-16 flex items-center justify-center mb-4">
                <Calendar className="text-blue-600" size={32} />
              </div>
              <h3 className="text-xl font-bold text-blue-900 mb-2">
                Co-curricular Activities
              </h3>
              <p className="text-gray-600">
                Regular sports, cultural events, and extracurricular activities
                to promote all-round development.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section id="gallery" className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 animate-on-scroll">
            <h2 className="text-3xl font-bold text-blue-900 mb-2">
              School Gallery
            </h2>
            <div className="w-24 h-1 bg-yellow-500 mx-auto"></div>
            <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
              Take a glimpse into our vibrant school life through these moments
              captured in our gallery.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Gallery Item 1 */}
            <div className="group relative overflow-hidden rounded-lg shadow-lg hover:shadow-2xl transition-all duration-500 animate-on-scroll">
              <img
                src="https://images.unsplash.com/photo-1509062522246-3755977927d7?w=800&auto=format&fit=crop&q=60"
                alt="Modern classroom"
                className="w-full h-64 object-cover transform group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-0 p-4 text-white">
                  <h3 className="text-lg font-bold">Modern Classroom</h3>
                  <p className="text-sm">
                    State-of-the-art learning environment
                  </p>
                </div>
              </div>
            </div>

            {/* Gallery Item 2 */}
            <div className="group relative overflow-hidden rounded-lg shadow-lg hover:shadow-2xl transition-all duration-500 animate-on-scroll">
              <img
                src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=800&auto=format&fit=crop&q=60"
                alt="Students studying"
                className="w-full h-80 object-cover transform group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-0 p-4 text-white">
                  <h3 className="text-lg font-bold">Focused Learning</h3>
                  <p className="text-sm">Students engaged in study sessions</p>
                </div>
              </div>
            </div>

            {/* Gallery Item 3 */}
            <div className="group relative overflow-hidden rounded-lg shadow-lg hover:shadow-2xl transition-all duration-500 animate-on-scroll">
              <img
                src="https://images.unsplash.com/photo-1577896851231-70ef18881754?w=800&auto=format&fit=crop&q=60"
                alt="Computer lab"
                className="w-full h-72 object-cover transform group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-0 p-4 text-white">
                  <h3 className="text-lg font-bold">Digital Learning</h3>
                  <p className="text-sm">Modern computer lab facilities</p>
                </div>
              </div>
            </div>

            {/* Gallery Item 4 */}
            <div className="group relative overflow-hidden rounded-lg shadow-lg hover:shadow-2xl transition-all duration-500 animate-on-scroll">
              <img
                src="https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?w=800&auto=format&fit=crop&q=60"
                alt="Science experiment"
                className="w-full h-64 object-cover transform group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-0 p-4 text-white">
                  <h3 className="text-lg font-bold">Science Lab</h3>
                  <p className="text-sm">Hands-on learning experience</p>
                </div>
              </div>
            </div>

            {/* Gallery Item 5 */}
            <div className="group relative overflow-hidden rounded-lg shadow-lg hover:shadow-2xl transition-all duration-500 animate-on-scroll">
              <img
                src="https://images.unsplash.com/photo-1546410531-bb4caa6b424d?w=800&auto=format&fit=crop&q=60"
                alt="Library"
                className="w-full h-80 object-cover transform group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-0 p-4 text-white">
                  <h3 className="text-lg font-bold">School Library</h3>
                  <p className="text-sm">
                    Well-equipped learning resource center
                  </p>
                </div>
              </div>
            </div>

            {/* Gallery Item 6 */}
            <div className="group relative overflow-hidden rounded-lg shadow-lg hover:shadow-2xl transition-all duration-500 animate-on-scroll">
              <img
                src="https://images.unsplash.com/photo-1511632765486-a01980e01a18?w=800&auto=format&fit=crop&q=60"
                alt="Sports activities"
                className="w-full h-72 object-cover transform group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-0 p-4 text-white">
                  <h3 className="text-lg font-bold">Sports Activities</h3>
                  <p className="text-sm">Physical education and sports</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 bg-blue-900 text-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 animate-on-scroll">
            <h2 className="text-3xl font-bold mb-2">What Parents Say</h2>
            <div className="w-24 h-1 bg-yellow-500 mx-auto"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-blue-800 p-6 rounded-lg shadow-lg transform transition-all duration-500 hover:scale-105 animate-on-scroll">
              <div className="h-1 w-12 bg-yellow-500 mb-4"></div>
              <p className="mb-4 text-gray-300 italic">
                "The teachers at Kiran Modern School are incredibly dedicated.
                My child has shown remarkable improvement in academics and
                confidence."
              </p>
              <div className="flex items-center">
                <div className="w-12 h-12 bg-yellow-500 rounded-full mr-4 flex items-center justify-center text-blue-900 font-bold">
                  PS
                </div>
                <div>
                  <h4 className="font-bold">Priya Sharma</h4>
                  <p className="text-sm text-gray-300">
                    Parent of Class 5 Student
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-blue-800 p-6 rounded-lg shadow-lg transform transition-all duration-500 hover:scale-105 animate-on-scroll">
              <div className="h-1 w-12 bg-yellow-500 mb-4"></div>
              <p className="mb-4 text-gray-300 italic">
                "The digital classroom initiative has made learning more
                interactive and enjoyable for my child. The school's focus on
                both academics and values is impressive."
              </p>
              <div className="flex items-center">
                <div className="w-12 h-12 bg-yellow-500 rounded-full mr-4 flex items-center justify-center text-blue-900 font-bold">
                  RK
                </div>
                <div>
                  <h4 className="font-bold">Rajesh Kumar</h4>
                  <p className="text-sm text-gray-300">
                    Parent of Class 3 Student
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-blue-800 p-6 rounded-lg shadow-lg transform transition-all duration-500 hover:scale-105 animate-on-scroll">
              <div className="h-1 w-12 bg-yellow-500 mb-4"></div>
              <p className="mb-4 text-gray-300 italic">
                "I appreciate the safe environment the school provides with CCTV
                surveillance. The teachers are very approachable and communicate
                regularly about my child's progress."
              </p>
              <div className="flex items-center">
                <div className="w-12 h-12 bg-yellow-500 rounded-full mr-4 flex items-center justify-center text-blue-900 font-bold">
                  SR
                </div>
                <div>
                  <h4 className="font-bold">Sunita Reddy</h4>
                  <p className="text-sm text-gray-300">
                    Parent of Class 7 Student
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-yellow-500 text-white relative overflow-hidden">
        {/* Background decorative elements */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-white rounded-full opacity-5"></div>
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-white rounded-full opacity-5"></div>

        <div className="container mx-auto px-4 text-center relative">
          <h2 className="text-3xl font-bold mb-6 animate-on-scroll">
            Ready to Join Kiran Modern E/M School?
          </h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto animate-on-scroll">
            Give your child the gift of quality education in a nurturing
            environment. Admissions for the new academic year are now open.
          </p>
          <a
            href="#contact"
            className="bg-blue-900 hover:bg-blue-800 text-white font-bold py-3 px-8 rounded-full text-lg inline-block transition-all duration-300 transform hover:scale-105 animate-on-scroll"
          >
            Contact Us Today
          </a>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-blue-900 mb-2">
              Contact Us
            </h2>
            <div className="w-24 h-1 bg-yellow-500 mx-auto"></div>
            <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
              Have questions? We're here to help. Reach out to us using the
              information below.
            </p>
          </div>

          <div className="flex flex-col md:flex-row">
            <div className="md:w-full mb-8 md:mb-0">
              <div className="bg-gray-50 p-8 rounded-lg shadow-md">
                <h3 className="text-2xl font-bold text-blue-800 mb-6">
                  Get In Touch
                </h3>

                <div className="flex items-start mb-6">
                  <Phone className="text-blue-600 mr-4 mt-1" size={20} />
                  <div>
                    <h4 className="font-bold">Phone</h4>
                    <p className="text-gray-600">6301993761</p>
                  </div>
                </div>

                <div className="flex items-start mb-6">
                  <Mail className="text-blue-600 mr-4 mt-1" size={20} />
                  <div>
                    <h4 className="font-bold">Email</h4>
                    <p className="text-gray-600">
                      kiranmodernemschool@gmail.com
                    </p>
                  </div>
                </div>

                <div className="flex items-start mb-6">
                  <MapPin className="text-blue-600 mr-4 mt-1" size={20} />
                  <div>
                    <h4 className="font-bold">Address</h4>
                    <p className="text-gray-600">
                      Opposite Busstop, Penchikalpet,
                      <br />
                      Kagaznagar, Komarambheem
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <Clock className="text-blue-600 mr-4 mt-1" size={20} />
                  <div>
                    <h4 className="font-bold">Office Hours</h4>
                    <p className="text-gray-600">
                      Monday - Saturday: 8:00 AM - 5:00 PM
                      <br />
                      Sunday: 10:00 - 2:00 (HOME)
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* <div className="md:w-1/2 md:pl-8">
              <form className="bg-white p-6 rounded-lg shadow-md">
                <div className="mb-4">
                  <label className="block text-gray-700 font-bold mb-2" htmlFor="name">
                    Full Name
                  </label>
                  <input
                    className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    id="name"
                    type="text"
                    placeholder="Your Name"
                  />
                </div>
                
                <div className="mb-4">
                  <label className="block text-gray-700 font-bold mb-2" htmlFor="email">
                    Email
                  </label>
                  <input
                    className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    id="email"
                    type="email"
                    placeholder="Your Email"
                  />
                </div>
                
                <div className="mb-4">
                  <label className="block text-gray-700 font-bold mb-2" htmlFor="phone">
                    Phone
                  </label>
                  <input
                    className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    id="phone"
                    type="tel"
                    placeholder="Your Phone Number"
                  />
                </div>
                
                <div className="mb-6">
                  <label className="block text-gray-700 font-bold mb-2" htmlFor="message">
                    Message
                  </label>
                  <textarea
                    className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    id="message"
                    placeholder="Your Message"
                    rows="4"
                  ></textarea>
                </div>
                
                <div className="flex items-center justify-center">
                  <button
                    className="bg-blue-800 hover:bg-blue-700 text-white font-bold py-2 px-6 rounded-full focus:outline-none focus:shadow-outline"
                    type="button"
                  >
                    Send Message
                  </button>
                </div>
              </form>
            </div> */}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-blue-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between">
            <div className="mb-6 md:mb-0">
              <h3 className="text-2xl font-bold mb-4">
                Kiran Modern E/M School
              </h3>
              <p className="text-gray-300 max-w-sm">
                Providing quality education since establishment. Our mission is
                to nurture young minds and prepare them for future challenges.
              </p>
            </div>

            <div className="mb-6 md:mb-0">
              <h4 className="text-lg font-bold mb-4">Quick Links</h4>
              <ul className="space-y-2">
                <li>
                  <a href="#" className="text-gray-300 hover:text-white">
                    Home
                  </a>
                </li>
                <li>
                  <a href="#about" className="text-gray-300 hover:text-white">
                    About Us
                  </a>
                </li>
                <li>
                  <a
                    href="#facilities"
                    className="text-gray-300 hover:text-white"
                  >
                    Facilities
                  </a>
                </li>
                <li>
                  <a href="#gallery" className="text-gray-300 hover:text-white">
                    Gallery
                  </a>
                </li>
                <li>
                  <a href="#contact" className="text-gray-300 hover:text-white">
                    Contact
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="text-lg font-bold mb-4">Contact Information</h4>
              <div className="space-y-3">
                <div className="flex items-start">
                  <MapPin size={18} className="mr-2 mt-1 flex-shrink-0" />
                  <span className="text-gray-300">
                    Opposite Busstop, Penchikalpet, Kagaznagar, Komarambheem
                  </span>
                </div>
                <div className="flex items-center">
                  <Phone size={18} className="mr-2 flex-shrink-0" />
                  <span className="text-gray-300">6301993761</span>
                </div>
                <div className="flex items-center">
                  <Mail size={18} className="mr-2 flex-shrink-0" />
                  <span className="text-gray-300">
                    kiranmodernemschool@gmail.com
                  </span>
                </div>
              </div>
            </div>
          </div>

          <div className="border-t border-blue-800 mt-8 pt-8 text-center">
            <p className="text-gray-400">
              &copy; {new Date().getFullYear()} Kiran Modern E/M School. All
              Rights Reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
