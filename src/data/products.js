import designImage from '../assets/site-image/producet-three.jpeg'
import installKitImage from '../assets/site-image/producet-two.jpeg'
import siteAssessmentImage from '../assets/site-image/sect2-image.jpeg'
import maintenanceGuideImage from '../assets/site-image/set-three.jpeg'
import interiorLayoutImage from '../assets/site-image/sect-fur-image.jpeg'

export const products = [
  {
    id: 'design-the-scheme',
    title: 'Design The Scheme',
    description:
      'Professional architectural design scheme service, tailored to your project needs and site requirements.',
    price: 10,
    image: designImage,
    popularity: 92,
    dateAdded: '2024-01-15',
  },
  {
    id: 'installation-instructions',
    title: 'Flat Pack Container House Installation Instructions',
    description:
      'Step-by-step installation instructions and materials list to help you set up your flat pack container house correctly.',
    price: 10,
    image: installKitImage,
    popularity: 78,
    dateAdded: '2024-03-20',
  },
  {
    id: 'site-assessment-planning',
    title: 'Site Assessment & Planning Service',
    description:
      'A detailed evaluation of your land and site conditions to confirm feasibility before your container home project begins.',
    price: 10,
    image: siteAssessmentImage,
    popularity: 65,
    dateAdded: '2024-05-08',
  },
  {
    id: 'maintenance-guide',
    title: 'Container Home Maintenance Guide',
    description:
      'A digital guide covering routine upkeep, seasonal checks, and long-term care to keep your container home in top condition.',
    price: 10,
    image: maintenanceGuideImage,
    popularity: 54,
    dateAdded: '2024-06-22',
  },
  {
    id: 'custom-interior-layout',
    title: 'Custom Interior Layout Package',
    description:
      'Tailored interior layout options and space-planning guidance designed around how you actually want to live in your container home.',
    price: 10,
    image: interiorLayoutImage,
    popularity: 71,
    dateAdded: '2024-04-11',
  },
]
