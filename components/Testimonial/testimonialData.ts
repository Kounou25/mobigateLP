import image1 from "@/public/images/user/myprofil.png";
import image2 from "@/public/images/user/myprofil.png";
import { Testimonial } from "@/types/testimonial";

export const testimonialData: Testimonial[] = [
  {
    id: 1,
    name: "David Kouma",
    designation: "Responsable IT @TechLogistics",
    image: image1,
    content:
      "Mobigate a complètement transformé notre façon de gérer notre parc mobile. Le suivi en temps réel et la gestion à distance nous ont permis de sécuriser nos appareils et d'optimiser nos ressources. C’est un outil indispensable pour toute entreprise avec une flotte mobile.",
  },
  {
    id: 2,
    name: "Amina Diallo",
    designation: "Directrice des Opérations @TransSahara",
    image: image2,
    content:
      "Grâce à Mobigate, nous avons réduit de moitié les incidents de perte d’appareils. Le suivi GPS et les alertes automatiques nous permettent de réagir rapidement. C’est un véritable game changer pour notre entreprise.",
  },
  {
    id: 3,
    name: "Jean-Pierre Ndao",
    designation: "Chef de Projet @EduConnect",
    image: image1,
    content:
      "Nous avons enfin trouvé une solution adaptée à la gestion de nos appareils mobiles dans plusieurs régions. Mobigate nous offre une vue complète sur l'utilisation des dispositifs et nous aide à mieux allouer nos ressources technologiques.",
  },
  {
    id: 4,
    name: "Fatou Diop",
    designation: "Responsable des Opérations @FleetSecure",
    image: image2,
    content:
      "La capacité de Mobigate à gérer les mises à jour à distance a fait une énorme différence pour notre équipe. Nous n’avons plus besoin d'intervenir manuellement sur chaque appareil, ce qui nous fait gagner un temps précieux.",
  },
];
