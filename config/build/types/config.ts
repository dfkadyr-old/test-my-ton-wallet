export type BuildMode = 'production' | 'development'

export interface BuildPaths {
  entry: string
  build: string
  html: string
  src: string
  icons: string
}

export interface BuildEnv {
  mode: BuildMode
  port: number
}

export enum Project {
  Storybook = 'storybook',
  Frontend = 'frontend',
  Jest = 'jest',
}

export interface BuildOptions {
  mode: BuildMode
  paths: BuildPaths
  isDev: boolean
  port: number
  project: Project
}
