import type { ResearchPaper } from '@/lib/types'

export const researchPapers: ResearchPaper[] = [
  {
    id: 'multifidelity-tande-2024',
    title: 'A Multi-Fidelity Approach to Testing and Evaluation of AI-Enabled Systems',
    venue: 'Purdue University Graduate School / AIRC',
    year: 2024,
    authors: 'Robert Seif et al.',
    abstract:
      'As AI and ML technologies advance, the need for methods to test them also increases. This paper proposes a multi-fidelity approach for T&E of AI-enabled systems — a model space representation with dimensions along which different fidelities can be developed, and a method to integrate multiple fidelities for continuous testing. Illustrated using a visual perception system in an autonomous vehicle use case, where a simulation space across different fidelities is constructed to test how well the system meets listed requirements.',
    thumbnailSrc: '/images/research/airc-multifidelity-tande-july-2024.jpg',
    figshareUrl: 'https://purdue.figshare.com',
  },
  {
    id: 'towards-multifidelity-tande',
    title:
      'Towards Multi-Fidelity Test and Evaluation of Artificial Intelligence and Machine Learning-Based Systems',
    venue: 'ITEA Journal',
    year: 2024,
    authors: 'Robert Seif et al.',
    abstract:
      'With the broad range of ML and AI-enabled systems being deployed across industries, there is a need for systematic ways to test these systems. This paper provides a perspective on what is needed to implement efficient and effective testing for an AI-enabled system, based on a literature review and walk-through of an illustrative computer vision example. Focused on the unique challenges of DoD acquisition programs where organizational separation between developers and testers requires testing across the entire acquisition lifecycle.',
    thumbnailSrc: '/images/research/itea-fig-3.png',
  },
]
