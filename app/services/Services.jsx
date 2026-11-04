import { useRouter } from "next/router";

const serviceContent = {
  "cadastral-surveys": {
    title: "Cadastral Surveys",
    content:
      "Cadastral Surveys provide precise property boundary measurements and documentation essential for legal and planning purposes. Our team ensures accurate and reliable results.",
  },
  "3d-terrain-modeling": {
    title: "3D Terrain Modeling",
    content:
      "Our 3D Terrain Modeling service offers advanced landscape modeling for accurate visualization and analysis, perfect for urban planning and large-scale development.",
  },
  "urban-planning": {
    title: "Urban Planning",
    content:
      "Urban Planning combines innovation and expertise to design sustainable development plans that meet modern infrastructure and zoning needs.",
  },
  "topographic-mapping": {
    title: "Topographic Mapping",
    content:
      "We deliver high-quality topographic mapping to help visualize land contours, elevations, and features, assisting in a wide range of applications.",
  },
  "gis-integration": {
    title: "GIS Integration",
    content:
      "Our GIS Integration services enable seamless geographic data integration into powerful information systems for enhanced decision-making.",
  },
  "land-development": {
    title: "Land Development",
    content:
      "Land Development services focus on strategic planning and execution for sustainable projects, maximizing value and efficiency.",
  },
};

export default function ServicePage() {
  const router = useRouter();
  const { service } = router.query;

  const currentService = serviceContent[service];

  if (!currentService) {
    return <div>Loading...</div>;
  }

  return (
    <div className="container px-4 py-12">
      <h1 className="text-4xl font-bold mb-6">{currentService.title}</h1>
      <p className="text-lg text-gray-700">{currentService.content}</p>
    </div>
  );
}
