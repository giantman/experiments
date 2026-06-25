export interface CaseStudy {
  id: string
  title: string
  shortDescription: string
  description: string[]
  metadata: Record<string, string>
  tags: string[]
  year: number
}

export interface Experiment {
  id: string
  title: string
  shortDescription: string
  metadata: Record<string, string>
  tags: string[]
  year: number
}

export const caseStudies: CaseStudy[] = [
  {
    id: 'example-study',
    title: 'Test Project',
    shortDescription: 'A placeholder for your first case study. Replace with your real work.',
    description: [
      'Praesent bibendum a elit non efficitur. Etiam et velit vitae quam aliquet fermentum. Quisque sit amet nulla dictum, cursus erat a, tempus est. Sed laoreet, magna eget mattis tincidunt, felis tellus vestibulum augue, in lobortis mauris risus eu nunc. Vivamus sed condimentum leo.',
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut nisl metus, accumsan id eros id, vehicula tincidunt nisl. Nulla sit amet urna ut mi tempor euismod. Fusce elementum sapien eget elit sodales fringilla. Pellentesque et nulla vel velit malesuada fermentum vitae vitae justo.',
    ],
    metadata: {
      'Year': '2024',
      'Role': 'Design & Engineering',
      'Client': 'Studio',
    },
    tags: ['UX', 'Engineering'],
    year: 2024,
  },
]

export const experiments: Experiment[] = [
  {
    id: 'example-experiment',
    title: 'Example Experiment',
    shortDescription: 'A placeholder for your first visual experiment.',
    metadata: {
      'Type': 'WebGL',
      'Year': '2024',
    },
    tags: ['WebGL', 'Canvas'],
    year: 2024,
  },
]
