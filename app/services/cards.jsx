"use client";

import { motion } from "framer-motion";
import {
  MapPin,
  Layers,
  Building2,
  Map,
  Compass,
  Zap,
} from "lucide-react";
import Link from "next/link";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function CardsPage() {
  const services = [
    {
      title: "Cadastral Surveys",
      icon: MapPin,
      description:
        "Precise property boundary measurements and documentation for legal and planning purposes.",
      link: "/service/cadastral-surveys", // Dynamic route
    },
    {
      title: "3D Terrain Modeling",
      icon: Layers,
      description:
        "Advanced 3D modeling of landscapes for accurate visualization and analysis.",
      link: "/service/3d-terrain-modeling", // Dynamic route
    },
    {
      title: "Urban Planning",
      icon: Building2,
      description:
        "Comprehensive urban development plans and zoning strategies for sustainable city growth.",
      link: "/service/urban-planning", // Dynamic route
    },
    {
      title: "Topographic Mapping",
      icon: Map,
      description:
        "Detailed mapping of land contours, elevations, and features for various applications.",
      link: "/service/topographic-mapping", // Dynamic route
    },
    {
      title: "GIS Integration",
      icon: Compass,
      description:
        "Seamless integration of geographic data into powerful information systems.",
      link: "/service/gis-integration", // Dynamic route
    },
    {
      title: "Land Development",
      icon: Zap,
      description:
        "Strategic planning and execution of land development projects.",
      link: "/service/land-development", // Dynamic route
    },
  ];

  return (
    <div className="container py-12">
      <h1 className="text-3xl font-bold text-center mb-12">Our Services</h1>
      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {services.map((service, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <Link href={service.link}>
              <Card className="relative group cursor-pointer hover:shadow-lg">
                <CardHeader>
                  <service.icon className="h-12 w-12 mb-4 text-primary" />
                  <CardTitle className="text-xl font-semibold">
                    {service.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted">{service.description}</p>
                </CardContent>
              </Card>
            </Link>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
