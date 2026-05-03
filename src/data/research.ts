import type { ResearchPaper } from '@/lib/types'

export const researchPapers: ResearchPaper[] = [
  {
    id: 'thesis',
    title: 'A Multi-Fidelity Approach to Testing and Evaluation of AI-Enabled Systems',
    venue: 'Purdue University School of Mechanical Engineering',
    year: 2024,
    authors: 'Robert et al.',
    abstract:
      'My final thesis delivered at Purdue University in August, 2024. This material is based upon work supported, in whole or in part, by the U.S. Department of Defense, Director, Operational Test and Evaluation (DOT&E) through the Office of the Assistant Secretary of Defense for Research and Engineering (ASD(R&E)) under Contract HQ003419D0003. The Systems Engineering Research Center (SERC) is a federally funded University-Affiliated Research Center managed by the Stevens Institute of Technology.',
    thumbnailSrc: '/images/research/seif_defense_photo.jpg',
    figshareUrl: 'https://hammer.purdue.edu/articles/thesis/A_Multi-Fidelity_Approach_to_Testing_and_Evaluation_of_AI-Enabled_Systems/26364277?file=47967100',
  }, 
  {
    id: 'multifidelity-tande-2024',
    title: 'A Multi-Fidelity Approach to Testing and Evaluation of AI-Enabled Systems',
    venue: 'ASME - IDETC',
    year: 2024,
    authors: 'Robert et al.',
    abstract:
      'As AI and ML technologies advance, the need for methods to test them also increases. This paper proposes a multi-fidelity approach for T&E of AI-enabled systems — a model space representation with dimensions along which different fidelities can be developed, and a method to integrate multiple fidelities for continuous testing. Illustrated using a visual perception system in an autonomous vehicle use case, where a simulation space across different fidelities is constructed to test how well the system meets listed requirements.',
    thumbnailSrc: '/images/research/quad-stitched.jpg',
    figshareUrl: 'https://www.researchgate.net/publication/385795285_A_Multi-Fidelity_Approach_to_Testing_and_Evaluation_of_AI-Enabled_Systems',
  },
  {
    id: 'towards-multifidelity-tande',
    title:
      'Towards Multi-Fidelity Test and Evaluation of Artificial Intelligence and Machine Learning-Based Systems',
    venue: 'ITEA Journal',
    year: 2024,
    authors: 'Robert et al.',
    abstract:
      'With the broad range of ML and AI-enabled systems being deployed across industries, there is a need for systematic ways to test these systems. This paper provides a perspective on what is needed to implement efficient and effective testing for an AI-enabled system, based on a literature review and walk-through of an illustrative computer vision example. Focused on the unique challenges of DoD acquisition programs where organizational separation between developers and testers requires testing across the entire acquisition lifecycle.',
    thumbnailSrc: '/images/research/itea-fig-3.png',
    figshareUrl: 'https://itea.org/journals/volume-45-1/towards-multi-fidelity-test-and-evaluation-of-artificial-intelligence-and-machine-learning-based-systems/',
  },
]
