import type { Project } from '@/lib/types'

export const projects: Project[] = [
  {
    id: 'sentinel-detector',
    title: 'Sentinel Detector',
    categories: ['Mechanical','Electronics', 'Software'],
    description:
      'Co-founded team implementing AI-empowered thermography sensors for manufacturing, wastewater, and petroleum environments. Designed enclosure, created non-stochastic AI failure-detection algorithm aligned with UL & NFPA standards.',
    tags: ['AI/ML', 'Thermography', 'Hardware Design', 'Python', 'UL/NFPA'],
    imageSrc: '/images/projects/misc/oil-refining-orig.jpg',
    imageAlt: 'Sentinel Detector thermography sensor',
    featured: true,
  },
  {
    id: 'casafy-ai',
    title: 'casafy.ai',
    categories: ['Software'],
    description:
      'Co-founded real estate lead-gen company powered by computer vision. Trained CV systems in Python/OpenCV, built CNNs in PyTorch and JAX, and created value analysis structures minimizing API cost.',
    tags: ['Python', 'OpenCV', 'PyTorch', 'JAX', 'Computer Vision'],
    imageSrc: '/images/projects/misc/cv_house.png',
    imageAlt: 'Casafy.ai real estate AI platform',
    featured: true,
  },
  {
    id: 'grad-research',
    title: 'Graduate Research — AI/ML T&E',
    categories: ['Research', 'Software'],
    description:
      'Published DoD testing process for AI-enabled systems. Deployed CV systems in autonomous vehicles across multi-fidelity simulations. Programmed remote drone with computer vision for T&E. Coordinated with DoD on AI technology needs.',
    tags: ['DoD', 'Computer Vision', 'Simulation', 'Machine Learning', 'Python'],
    imageSrc: '/images/research/quad-stitched.jpg',
    imageAlt: 'Multi-fidelity testing framework for AI-enabled systems',
    featured: true,
  },
  {
    id: 'fsae-chassis',
    title: 'FSAE Chassis & FEA',
    categories: ['Mechanical'],
    description:
      'Anti-roll bar design for FSAE competition car including material selection from expected load response calculations (Siemens NX). Suspension upright FEA under acceleration case using spring substitution for brake structure (ANSYS Workbench).',
    tags: ['Siemens NX', 'ANSYS Workbench', 'FEA', 'Structural Analysis', 'FSAE'],
    imageSrc: '/images/projects/kart-chassis/fea-upright.png',
    imageAlt: 'FSAE go-kart chassis final design render',
    featured: false,
  },
  {
    id: 'gear-opti',
    title: 'Dual-Stage Planetary Gear Optimization',
    categories: ['Software', 'Mechanical'],
    description:
      'MATLAB program mapping Factor of Safety (FOS) for gear wear and bending at selected driving distances. Focused on sun gear in a two-stage in-hub planetary gearbox for endurance race scenarios.',
    tags: ['MATLAB', 'Mechanical Design', 'Optimization', 'FOS Analysis'],
    imageSrc: '/images/projects/gear-opti/fos-map.png',
    imageAlt: 'Factor of Safety map for gear optimization program',
    featured: false,
  },
  {
    id: 'kart-throttle',
    title: 'EPICS Throttle Control Program',
    categories: ['Electronics', 'Maker'],
    description:
      'Arduino program detailing motor mapping for user throttle control. Fully commented embedded systems program for precise motor actuation.',
    tags: ['Arduino', 'C++', 'Embedded Systems', 'Motor Control'],
    imageSrc: '/images/projects/misc/cart_control.jpg',
    imageAlt: 'EPICS throttle controller Arduino program',
    featured: false,
  },
  {
    id: 'snake-rattle',
    title: 'Toy Snake Rattle',
    categories: ['Maker', 'Mechanical'],
    description:
      'CAD assembly of a rattlesnake rattle designed for additive manufacturing. Joint linkage and mechanism restrictions specifically engineered for 3D printing constraints.',
    tags: ['PTC Creo', 'CAD', '3D Printing', 'Mechanism Design'],
    imageSrc: '/images/projects/misc/snake-rattle.gif',
    imageAlt: 'Animated toy snake rattle CAD assembly',
    featured: false,
  },
  {
    id: 'doorknob-sanitizer',
    title: 'Sophomore Design — Door Sanitizer',
    categories: ['Maker', 'Mechanical'],
    description:
      'Doorknob sanitization device that adheres to a door surface and releases cleaning aerosol when force is applied to the front panel. Designed in Siemens NX.',
    tags: ['Siemens NX', 'CAD', 'Product Design'],
    imageSrc: '/images/projects/kart-chassis/final-design-render.jpg',
    imageAlt: 'Door sanitizer device design render',
    featured: false,
  },
  {
    id: 'latch-assembly',
    title: 'Latch Assembly Animation',
    categories: ['Mechanical'],
    description:
      'Assembly animation completed for computer graphics course demonstrating component assembly sequence and mechanical relationships.',
    tags: ['CATIA V5', 'CAD', 'Animation'],
    imageSrc: '/images/projects/misc/latch-assembly.jpg',
    imageAlt: 'Latch assembly animation frame',
    featured: false,
  },
]
