"use client"; // Add this to indicate this component is client-side

import { useParams } from "next/navigation";
import Image from "next/image";
import Procad9 from "@/public/images/Procad9.jpg";
import Procad10 from "@/public/images/Procad10.jpg";
import Procad11 from "@/public/images/Procad11.jpg";
import Procad4 from "@/public/images/Procad4.jpg";
import evaluare from "@/public/images/evaluare.jpg";
import arhivare from "@/public/images/arhivare.jpg";
import eng2 from "@/public/images/eng2.jpg";
import Procad7 from "@/public/images/Procad7.jpg"; // Asigură-te că ai imaginea arhitectura.jpg în folder

const projectData = {
  "city-center-revitalization": {
    title: "LUCRARI",
    description: `
    <ul class="list-disc pl-8">
      <li>
        <strong>Lucrări de cadastru, evaluare şi consultanţă juridică pentru realizarea lucrărilor de expropriere pe tronsonul Lugoj - Deva:</strong>
        <p>Localităţile Făget (judeţul Timiş), Dobra (judeţul Hunedoara), Şoimuş (judeţul Hunedoara).</p>
        <p>Beneficiar: Compania Naţională de Autostrăzi şi Drumuri Naţionale din România.</p>
      </li>
      <li>
        <strong>Proiect CESAR - Completarea sprijinului financiar acordat de Uniunea Europeană pentru restructurarea agriculturii:</strong>
        <p>(Proiect finanţat de Banca Mondială) Servicii pentru "Înregistrarea sistematică a imobilelor din 19 Unitaţi Administrativ Teritoriale" - <strong>LOT 1:</strong> comuna Borod (judeţul Bihor), comuna Orţişoara (judeţul Timiş), comuna Ighiu (judeţul Alba).</p>
        <p>Beneficiar: Agenţia Naţională de Cadastru şi Publicitate Imobiliară Bucureşti.</p>
      </li>
      <li>
        <strong>Lucrări de cadastru, evaluare şi consultanţă juridică pentru expropriere pe DN79 Arad – Oradea:</strong>
        <p>Beneficiar: Astaldi S.P.A.</p>
      </li>
      <li>
        <strong>Întocmirea documentaţiilor de cadastru necesare ȋntabulării terenurilor aparţinȃnd domeniului public al statului:</strong>
        <p>Aflate ȋn administrarea M.T.I. şi concesionate către CNCF "CFR" S.A. pentru entităţi feroviare situate pe raza SCREIR Craiova:</p>
        <ul class="list-disc pl-8">
          <li>LOT 7: linia 201 Rm. Vȃlcea – Turnu Roşu</li>
          <li>LOT 8: linia 202 Filiaşi – Cărbuneşti – Tȃrgu Jiu</li>
          <li>LOT 9: linia 202 Tȃrgu Jiu – Livezeni</li>
        </ul>
        <p>Beneficiar: CNCF "CFR" S.A. S.C.R.E.I.R. Craiova.</p>
      </li>
      <li>
        <strong>Servicii de consultanţă şi asistenţă juridical pentru dobȃndirea dreptului de proprietate asupra imobilelor afectate:</strong>
        <p>Aferente obiectivului "Autostrada Lugoj – Deva" LOT 10 Făget, LOT 11 Dobra, LOT 15 Şoimuş.</p>
        <p>Beneficiar: C.N.A.D.N.R. Bucureşti.</p>
      </li>
      <li>
        <strong>Servicii de cadastru şi topografie pentru bunurile imobile din domeniul public şi privat al Municipiului Braşov:</strong>
        <p>Beneficiar: Primăria Municipiului Braşov.</p>
      </li>
    </ul>
    `,
    image: Procad9,
  },
  "eco-friendly-suburb-planning": {
    title: "LUCRARI TOPOGRAFIE",
    description: `
    <ul class="list-disc pl-8">
      <li>
        <strong>Ridicări topografice în intravilanul localităţii Cenad, judeţul Timiş – străzi pe o lungime de aproximativ 35 Km:</strong>
        <p>Beneficiar: Primăria Comunei Cenad</p>
      </li>
      <li>
        <strong>Ridicări topografice pentru proiectul "Reabilitare DN 57 Km 97+000 - Km 98+000, judeţul Caraş-Severin":</strong>
        <p>Beneficiar: Filiala CCCF Drumuri şi Poduri Timişoara S.A.</p>
      </li>
      <li>
        <strong>Ridicări topografice şi lucrări de trasare pentru obiectivul "Fundaţii piloni telescaun la Muntele Mic, judeţul Caraş Severin":</strong>
        <p>Beneficiar: S.C. Amniocen S.R.L. Timişoara</p>
      </li>
      <li>
        <strong>Ridicări topografice pentru lucrarea "Perimetru de exploatare balast pe râul Nera la Naidăş, judeţul Caraş Severin":</strong>
        <p>Beneficiar: S.C. M.C.F.D.P. Anina S.R.L.</p>
      </li>
      <li>
        <strong>Ridicări topografice în intravilanul localităţii Periam, judeţul Timiş – străzi pe o lungime de aproximativ 29 Km:</strong>
        <p>Beneficiar: Primăria Comunei Periam</p>
      </li>
      <li>
        <strong>Ridicări topografice şi lucrări de trasare pentru obiectivul "Pod pe DN 57 Km 173+596 peste canal de scurgere la Comorâşte, judeţul Caraş Severin":</strong>
        <p>Beneficiar: S.C. M.C.F.D.P. Anina S.R.L.</p>
      </li>
      <li>
        <strong>Ridicări topografice pentru lucrarea "Studiu de fezabilitate pentru valorificarea potenţialului turistic transfrontalier incluzând piste de cicloturism de-a lungul râului Bega în aval de Timişoara pe o lungime de 37 Km":</strong>
        <p>Beneficiar: Consiliul Judeţean Timiş</p>
      </li>
      <li>
        <strong>Ridicări topografice în intravilanul localităţii Saravale, judeţul Timiş – străzi pe o lungime de aproximativ 20 Km:</strong>
        <p>Beneficiar: Primăria Comunei Saravale</p>
      </li>
      <li>
        <strong>Studii topografice pentru obiectivele "Incintă Bega Tehnomet, Incintă Electotimiş":</strong>
        <p>Beneficiar: S.C. Bega Tehnomet Timişoara S.A.</p>
      </li>
      <li>
        <strong>Ridicări topografice pentru lucrarea "Studiu de Inundabilitate pentru albia majoră a râului Mureş – Zona Periam Port, judeţ Timiş":</strong>
        <p>Beneficiar: Universitatea "Politehnica" din Timişoara</p>
      </li>
      <li>
        <strong>Măsurători topografice respectiv calculul de volume pentru sorturi – Staţiile de betoane Europroducts:</strong>
        <p>Beneficiar: S.C. Europroducts S.R.L. Timişoara</p>
      </li>
      <li>
        <strong>Cadastru drumurilor publice – ridicare topografică pentru drumurile judeţene şi ȋnscrierea ȋn Cartea Funciară:</strong>
        <p>Beneficiar: Consiliul Judeţean ARAD</p>
      </li>
    </ul>
    `,
    image: Procad10,
  },
  "industrial-zone-mapping": {
    title: "LUCRARI PROIECTARE",
    description: `
    <ul class="list-disc pl-8">
      <li>
        <strong>PROIECTARE FAZA PROIECT TEHNIC, CAIETE DE SARCINI ŞI DETALII DE EXECUŢIE pentru obiectivul:</strong>
        <p>"Modernizare drum comunal DC 111 şi străzi în Comuna Pietroasa – satele Pietroasa, Poieni şi Crivina de Sus, Înfiinţare Centru After School, înfiinţare spaţii de recreere şi parcare şi achiziţie utilaje, echipamente şi mijloace de transport pentru asigurarea serviciilor publice pe baza şi pentru promovarea patrimoniului cultural imaterial din Comuna Pietroasa, judeţul Timiş."</p>
        <p>Beneficiar: Comuna Pietroasa, judeţul Timiş.</p>
      </li>
      <li>
        <strong>Modernizare străzi în localităţile Fizeş şi Berzovia:</strong>
        <p>Beneficiar: Comuna Berzovia, judeţul Caraş-Severin.</p>
      </li>
      <li>
        <strong>Îmbrăcăminte bituminoasă uşoară pe DJ 588 Gătaia - Şemlacu Mare:</strong>
        <p>Km 5+900 – 9+500, L=3,6 km.</p>
        <p>Beneficiar: Consiliul Judeţean Timiş.</p>
      </li>
      <li>
        <strong>Îmbrăcăminte bituminoasă uşoară pe DJ 684 Valea lui Liman-Luncanii de Jos:</strong>
        <p>Km 16+900 – 18+300, L=1,4 km.</p>
        <p>Beneficiar: Consiliul Judeţean Timiş.</p>
      </li>
      <li>
        <strong>Documentaţie de avizare a lucrărilor de intervenţie pentru "Modernizare DJ 687: Hunedoara – Boş – Groş – Cerbăl – Feregi – DJ 668":</strong>
        <p>KM 9+650-19+550.</p>
        <p>Beneficiar: Consiliul Judeţean Hunedoara.</p>
      </li>
      <li>
        <strong>Betonare 4.0 Km străzi în Satul Butin:</strong>
        <p>Beneficiar: Oraşul Gătaia, judeţ Timiş.</p>
      </li>
      <li>
        <strong>Modernizare DC 48 Romos-Orăştie:</strong>
        <p>Beneficiar: Primăria oraşului Orăştie, Comuna Romos.</p>
      </li>
      <li>
        <strong>Construirea infrastructurii agricole în comuna Gottlob, judeţul Timiş:</strong>
        <p>Beneficiar: Comuna Gottlob, judeţul Timiş.</p>
      </li>
      <li>
        <strong>Eliminarea traficului greu şi fluidizarea circulaţiei în intravilan:</strong>
        <p>Construirea variantei ocolitoare com. Periam judeţul Timiş.</p>
        <p>Beneficiar: Comuna Periam, judeţul Timiş.</p>
      </li>
      <li>
        <strong>Modernizare drumuri forestiere com. Buceş:</strong>
        <p>Beneficiar: Comuna Buceş, judeţul Hunedoara.</p>
      </li>
      <li>
        <strong>Studiu de fezabilitate pentru amenajare drumuri forestiere com. Romos:</strong>
        <p>Beneficiar: Comuna Romos, judeţul Hunedoara.</p>
      </li>
      <li>
        <strong>Reabilitare DJ709J KM34+300 – KM44+100:</strong>
        <p>Pecica – Turnu jud. ARAD.</p>
        <p>Beneficiar: Consiliul Judeţean ARAD.</p>
      </li>
      <li>
        <strong>Amenajare spaţiu depozit de arhivă – Staţia de transformare electrică 220/110 kV Timişoara:</strong>
        <p>Beneficiar: C.N.T.E.E. "Transelectrica" S.A. Bucureşti – Sucursala Transport Timişoara.</p>
      </li>
    </ul>
    `,
    image: Procad11,
  },
  "proiecte-arhivare": {
    title: "LUCRARI ARHIVARE",
    description: `
    <ul class="list-disc pl-8">
      <li>
        <strong>Arhivarea şi indexarea registrilor de carte funciară:</strong>
        <p>Îmbunătăţirea gestiunii şi accesului la informaţiile imobiliare.</p>
        <p>Beneficiar: Oficiul de Cadastru şi Publicitate Imobiliară Caraş-Severin.</p>
      </li>
      <li>
        <strong>Servicii de digitalizare şi organizare a documentaţiei cadastrale:</strong>
        <p>Proiect implementat pentru a eficientiza procesele de înregistrare şi accesare.</p>
        <p>Beneficiar: Oficiul de Cadastru şi Publicitate Imobiliară Hunedoara.</p>
      </li>
      <li>
        <strong>Scanare şi indexare arhive istorice:</strong>
        <p>Proiect pilot pentru modernizarea sistemelor de arhivare în judeţul Timiş.</p>
        <p>Beneficiar: Primăria Municipiului Timişoara.</p>
      </li>
      <li>
        <strong>Digitalizarea documentelor aferente domeniului public şi privat:</strong>
        <p>Beneficiar: Consiliul Judeţean Arad.</p>
      </li>
    </ul>
    `,
    image: Procad4,
    fullImage: true,
  },
  "arhivare-electronica": {
    title: "Arhivare electronica",
    description: `
    <ul class="list-disc pl-8 space-y-2">
      <li>
        <strong>Scanarea și digitalizarea documentelor tehnice:</strong>
        <p>Conversia în format digital a planurilor, schițelor, documentațiilor tehnice și a arhivelor istorice, pentru o stocare sigură și acces rapid.</p>
      </li>
      <li>
        <strong>Arhivarea și indexarea registrelor:</strong>
        <p>Servicii dedicate instituțiilor publice (ex. OCPI, primării) pentru arhivarea și indexarea registrelor de carte funciară, îmbunătățind gestiunea informațiilor imobiliare.</p>
      </li>
      <li>
        <strong>Managementul documentației cadastrale:</strong>
        <p>Organizarea arhivei fizice și electronice a documentelor rezultate din procesele de cadastru și urbanism, garantând integritatea bazei de date.</p>
      </li>
    </ul>
    `,
    image: arhivare,
    fullImage: true,
  },
  "proiectare": {
    title: "Proiectare",
    description: `
    <ul class="list-disc pl-8 space-y-2">
      <li>
        <strong>Proiectare tehnică și detalii de execuție (PT, CS, DDE):</strong>
        <p>Elaborarea documentațiilor complete pentru modernizarea drumurilor comunale, județene, străzilor și a infrastructurii agricole.</p>
      </li>
      <li>
        <strong>Studii de fezabilitate (SF) și DALI:</strong>
        <p>Întocmirea documentațiilor de avizare a lucrărilor de intervenție și a studiilor de fezabilitate pentru proiecte de dezvoltare locală și regională.</p>
      </li>
      <li>
        <strong>Servicii integrate de urbanism:</strong>
        <p>Asistență tehnică și proiectare de specialitate pentru planificarea urbană și amenajarea teritoriului, având la dispoziție un departament dedicat.</p>
      </li>
    </ul>
    `,
    image: eng2,
  },
  "evaluari": {
    title: "Evaluari",
    description: `
    <ul class="list-disc pl-8 space-y-2">
      <li>
        <strong>Evaluări imobiliare autorizate:</strong>
        <p>Servicii de evaluare a proprietăților imobiliare realizate de specialiști certificați (membri corporativi ANEVAR), asigurând rapoarte obiective și conforme cu standardele în vigoare.</p>
      </li>
      <li>
        <strong>Evaluări și consultanță pentru exproprieri:</strong>
        <p>Lucrări complexe de evaluare și asistență juridică necesare în procedurile de expropriere pentru cauze de utilitate publică (ex. construcția de autostrăzi și drumuri naționale).</p>
      </li>
      <li>
        <strong>Rapoarte pentru cadastru sistematic:</strong>
        <p>Asigurarea suportului de evaluare în cadrul proiectelor mari de înregistrare sistematică a imobilelor (ex. Programul Național de Cadastru).</p>
      </li>
    </ul>
    `,
    image: evaluare,
  },
  "arhitectura-urbanism": {
    title: "Arhitectură și Urbanism",
    description: `
    <ul class="list-disc pl-8 space-y-2">
      <li>
        <strong>Elaborare documentații de urbanism (PUG, PUZ, PUD):</strong>
        <p>Planificare urbană și amenajarea teritoriului pentru dezvoltări rezidențiale, comerciale și industriale, respectând normele tehnice și legislative locale.</p>
      </li>
      <li>
        <strong>Proiectare de arhitectură:</strong>
        <p>Servicii complete de proiectare pentru construcții civile, industriale și agricole, inclusiv întocmirea documentațiilor pentru obținerea avizelor și autorizațiilor de construire (DTAC, PT, DDE).</p>
      </li>
      <li>
        <strong>Consultanță și asistență tehnică:</strong>
        <p>Sprijin în procesul de reglementare urbanistică, optimizarea soluțiilor spațiale și asistență pe parcursul întregului proces de execuție a lucrărilor.</p>
      </li>
    </ul>
    `,
    image: Procad7,
  }
};

export default function ProjectPage() {
  const { projectSlug } = useParams();
  const project = projectData[projectSlug];

  if (!project) {
    return <div>Project not found</div>;
  }

  return (
    <div className="container mx-auto py-12">
      <h1 className="text-3xl font-bold mb-6">{project.title}</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div dangerouslySetInnerHTML={{ __html: project.description }} />
        <div
          className={`relative ${
            project.fullImage ? "h-auto w-full" : "h-[400px] w-auto"
          }`}
        >
          <Image
            src={project.image}
            alt={project.title}
            className={`rounded-lg shadow-lg object-${
              project.fullImage ? "contain" : "cover"
            }`}
            layout="responsive"
            width={project.fullImage ? 100 : 600}
            height={project.fullImage ? 100 : 400}
          />
        </div>
      </div>
    </div>
  );
}