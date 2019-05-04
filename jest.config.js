module.exports = {
    verbose: true,
    transform: {
        '^.+\\.ts': 'ts-jest',
    },
    globals: {
        "ts-jest": {
            tsConfig: 'tsconfig.json',
        },
    },
    moduleFileExtensions: [
        'ts',
        'js',
    ],
}