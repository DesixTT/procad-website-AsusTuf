"use client";

import { motion } from "framer-motion";
import { Facebook, Instagram, Linkedin, Mail, MapPin, Mountain, Phone } from "lucide-react";
import { Separator } from "@/components/ui/separator";
import Icon from '@/public/theodolite.png'
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="w-full bg-gray-50 border-t">
      <div className="container mx-auto px-4 md:px-6 py-12">
        <div className="flex flex-col lg:flex-row lg:justify-between items-start space-y-12 lg:space-y-0">
          {/* Logo and Social Section */}
          <div className="flex flex-col items-center lg:items-start space-y-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="flex items-center space-x-2"
            >
              {/* <Mountain className="h-8 w-8 text-primary" /> */}
              <Image src={Icon} alt="Procad Logo" width={40} height={40} />
              <span className="text-2xl font-bold tracking-tight text-gray-800">Procad</span>
            </motion.div>
            <p className="text-sm text-gray-500 text-center lg:text-left max-w-sm">
              Servicii profesionale de topografie și urbanism pentru proiectele dvs.
            </p>
          </div>

          {/* Contact Section */}
          <div className="flex flex-col items-center lg:items-start space-y-4">
            <h3 className="text-lg font-semibold text-gray-800">Contact Rapid</h3>
            <div className="space-y-2 text-sm text-gray-500">
              <div className="flex items-center gap-2">
                <MapPin className="h-4 w-4 text-primary" />
                <span>Str. Suceava, Nr. 13, Timișoara, Timiș</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="font-medium text-gray-600">Cod poștal:</span> 300 391
              </div>
              <div className="flex items-center gap-2">
                <Phone className="h-4 w-4 text-primary" />
                <span>(0256) 430 856, (0356) 437 098</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="h-4 w-4 text-primary" />
                <span>
                  <a
                    href="mailto:procadtm@gmail.com"
                    className="hover:text-primary transition-colors"
                  >
                    procadtm@gmail.com
                  </a>
                </span>
              </div>
              <div>
                <span className="font-medium text-gray-600">Orar:</span> Luni - Vineri: 9 - 17
              </div>
              <div>
                <span className="font-medium text-gray-600">Web:</span>{" "}
                <a
                  href="http://www.procad.ro"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-primary transition-colors"
                >
                  www.procad.ro
                </a>
              </div>
            </div>
          </div>

          {/* Map Section */}
          <div className="flex flex-col items-center lg:items-start space-y-4">
            <h3 className="text-lg font-semibold text-gray-800">Harta</h3>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2732.0620467609524!2d21.236871115883207!3d45.75465677910562!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4745676c5d2173f5%3A0x4dbf248945af741b!2sStrada%20Suceava%2013%2C%20Timi%C8%99oara%20300391!5e0!3m2!1sen!2sro!4v1634768300000!5m2!1sen!2sro"
              width="300"
              height="200"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
            ></iframe>
          </div>
        </div>

        {/* Bottom Section */}
        <Separator className="my-8" />
        <div className="flex flex-col lg:flex-row justify-between items-center text-center lg:text-left">
          <p className="text-sm text-gray-500">
            © {new Date().getFullYear()} Procad. Toate drepturile rezervate.
          </p>
          <p className="text-sm text-gray-500 mt-4 lg:mt-0">
            Designed with ❤️ in Romania
          </p>
        </div>
      </div>
    </footer>
  );
}
