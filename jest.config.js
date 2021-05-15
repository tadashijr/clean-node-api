module.export = {
    roots: ['<rootDir>/src/'],
    collectCoverageFrom: ['<rootDir>/src/**/*.ts'],
    coverageDirectory: 'coverage',
    testEnvironment:'node',
    transforms: {
        '.+\\.ts$': 'ts-jest'
    }
}