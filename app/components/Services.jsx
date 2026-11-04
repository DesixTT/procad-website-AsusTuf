"use client";

import { motion } from "framer-motion";
import { MapPin, Layers, Building2, Map, Compass, Zap } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useLanguage } from "./LanguageContext"; // Import the LanguageContext

export default function Services() {
  const { language } = useLanguage(); // Access the current language

  // Translations
  const translations = {
    ro: {
      title: "Serviciile Noastre",
      services: [
        {
          title: "Cadastru",
          icon: Layers,
          description:
            "Puneri în posesie și intabulări pentru terenuri agricole, forestiere și construcții. Dezmembrări imobile, planuri urbanistice zonale și unificări terenuri. Apartamentări și subapartamentări imobile/construcții. Scoaterea terenurilor din circuitul agricol, schimbări de folosință. Identificare și substituire numere cadastrale/topografice. Întocmirea Registrului spațiilor verzi și înscrierea imobilelor în sistemul cadastral.",
        },
        {
          title: "Topografie",
          icon: Layers,
          description:
            "Ridicări topografice pentru construcții civile, industriale, drumuri, căi ferate, poduri și viaducte. Ridicări pentru cariere, balastiere – curbe de nivel și calcul de volume. Ridicări topohidrografice pentru canale, lacuri, râuri, fluvii și terenuri forestiere. Ridicări pentru rețele edilitare. Trasare obiective și monitorizare deplasări orizontale/verticale în construcții.",
        },
        {
          title: "Mobile Mapping și GIS",
          icon: Layers,
          description:
            "Captură și analiză date spațiale cu tehnologie LiDAR. Organizare, vizualizare și integrare date GIS/CAD. Baze de date spațiale pentru rețele edilitare, electrice, cadastru. Corelarea și interpretarea datelor spațiale și textuale. Cartografie tematică: agricultură, mediu, geopolitică, rețele edilitare, statistici. Prelucrare imagini satelitare și realizare hărți de risc, turism, mediu. Planificare teritorială și reprezentări 3D obiecte/construcții. Extracție date vector din raster.",
        },
        {
          title: "Fotogrammetrie",
          icon: Layers,
          description:
            "Planificare și execuție zboruri fotogrammetrice. Creare ortofotoplanuri. Generare model digital al terenului. Calcule volumetrice.",
        },
        {
          title: "Arhitectură - Urbanism",
          icon: Layers,
          description:
            "Elaborare Planuri Urbanistice Generale (PUG), Zonale (PUZ) și de Detaliu (PUD). Întocmire documentații pentru avize și acorduri. Proiectare arhitectură civilă/industrială, documentații tehnice (PT, DTAC), studii de fezabilitate, relevee, devize. Consultanță tehnică în urbanism, arhitectură și amenajarea teritoriului.",
        },
        {
          title: "Arhivare",
          icon: Map,
          description:
            "Arhivarea documentelor asigură trasabilitatea, transparența și protecția informațiilor organizaționale, esențială pentru gestionarea eficientă a datelor.",
        },
        {
          title: "Proiectare",
          icon: Building2,
          description:
            "Servicii de proiectare pentru drumuri, infrastructură, rețele edilitare și construcții civile/industriale. Elaborare documentații tehnice, studii de fezabilitate și asistență tehnică în execuție. Optimizare soluții inginerești pentru proiecte eficiente și sustenabile.",
        },
        {
          title: "Evaluări",
          icon: Compass,
          description:
            "Servicii de reevaluare a bunurilor imobile aparținând domeniului public și privat, servicii de cadastru și evaluare pentru expropriere, precum și întocmirea documentației cadastrale și rapoartelor necesare transferului imobilelor pentru lucrări de utilitate publică.",
        }
      ],
    },
    en: {
      title: "Our Services",
      services: [
        {
          title: "Cadastre",
          icon: Layers,
          description:
            "Land registration, property documentation, urban zoning plans, and parcel unification. Apartment and sub-apartment divisions. Agricultural land decommissioning, land-use changes, and cadastral number identification.",
        },
        {
          title: "Topography",
          icon: Layers,
          description:
            "Topographic surveys for construction, roads, railways, bridges, and viaducts. Surveys for quarries and gravel pits – contour lines and volume calculations. Hydrographic surveys for canals, lakes, rivers, and forests. Utility network surveys and monitoring of construction deformations.",
        },
        {
          title: "Mobile Mapping & GIS",
          icon: Layers,
          description:
            "Spatial data capture and analysis with LiDAR technology. GIS/CAD data management and visualization. Spatial databases for utilities, electricity networks, and cadastral records. Thematic cartography for agriculture, environment, geopolitics, infrastructure, and statistical analysis. Satellite image processing and risk, tourism, and environmental maps.",
        },
        {
          title: "Photogrammetry",
          icon: Layers,
          description:
            "Planning and execution of photogrammetric flights. Creation of orthophoto maps. Digital terrain model generation. Volume calculations.",
        },
        {
          title: "Architecture & Urban Planning",
          icon: Layers,
          description:
            "Development of General Urban Plans (PUG), Zonal (PUZ), and Detailed Plans (PUD). Preparation of documentation for permits and approvals. Civil and industrial architectural design, technical documentation (PT, DTAC), feasibility studies, surveys, and cost estimates. Technical consultancy in urban planning, architecture, and land development.",
        },
        {
          title: "Archiving",
          icon: Map,
          description:
            "Document archiving ensures traceability, transparency, and protection of organizational information, essential for efficient data management.",
        },        
        {
          title: "Design & Engineering",
          icon: Building2,
          description:
            "Design services for roads, infrastructure, utility networks, and civil/industrial construction. Development of technical documentation, feasibility studies, and execution support. Optimization of engineering solutions for efficient and sustainable projects.",
        },
        {
          title: "Evaluations",
          icon: Compass,
          description:
            "Evaluation services for real estate assets belonging to public and private domains, cadastral services, and evaluation for expropriation, as well as the preparation of cadastral documentation and reports necessary for property transfer in public utility projects.",
        }
      ],
    },
  };

  const t = translations[language];

  return (
    <section
  id="services"
  className="w-screen min-h-screen py-12 md:py-24 lg:py-32 bg-cover bg-center bg-fixed bg-no-repeat relative transition-all duration-700 ease-in-out"
  style={{
    backgroundImage: `url(/images/Procad4.jpg)`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    width: "100vw",
    left:"50%",
    transform: "translateX(-50%)",
  }}
>

  

      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.8 }} className="w-full max-w-none text-center">
        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-12 gradient-text">{t.title}</h2>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {t.services.map((service, index) => (
            <motion.div key={service.title} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: index * 0.1 }}>
              <Card>
                <CardHeader>
                  <service.icon className="h-12 w-12 mb-4" />
                  <CardTitle>{service.title}</CardTitle>
                </CardHeader>
                <CardContent>{service.description}</CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
