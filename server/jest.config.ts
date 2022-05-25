export default {
  clearMocks: true,
  collectCoverage: true,

  // collectCoverageFrom: [
  // "<rootDir>/src/**/*.ts",
  // "!<rootDir>/src/**",
  // "!<rootDir>/src/server.ts",
  // "!<rootDir>/src/prisma.ts",
  // "!<rootDir>/src/routes.ts",
  // ],

  coverageDirectory: 'coverage',
  coverageProvider: 'v8',
  globals: {
    'ts-jest': {
      tsconfig: {
        rootDir: '.'
      }
    }
  },

  moduleDirectories: ['src', 'node_modules'],

  roots: ['<rootDir>/src', '<rootDir>/tests'],

  testMatch: ['**/*.spec.ts'],

  transform: {
    '^.+\\.(t|j)sx?$': ['@swc/jest']
  },

  moduleNameMapper: {
    '@tests/(.*)': '<rootDir>/tests/$1',
    '@/(.*)': '<rootDir>/src/$1'
    // "@/adapters/(.*)": ["<rootDir>/src/adapters/$1"],
  }
}
