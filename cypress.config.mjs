import { defineConfig } from 'cypress'
import cypressSplit from 'cypress-split'
import { configureVisualRegression } from 'cypress-visual-regression/dist/plugin.js'


export default defineConfig({
	projectId: 'hx9gqy',
	viewportWidth: 1280,
	viewportHeight: 900,
	screenshotsFolder: './cypress/snapshots/actual',
	trashAssetsBeforeRuns: true,
	env: {
		failSilently: false,
		type: 'actual',
		SNAPSHOT_BASE_DIRECTORY: './cypress/snapshots/base',
		SNAPSHOT_DIFF_DIRECTORY: './cypress/snapshots/diff',
	},
	e2e: {
		env: {
			visualRegressionType: 'regression',
		},
		setupNodeEvents(on, config) {
			cypressSplit(on, config)
			configureVisualRegression(on)

			return config
		},

		baseUrl: 'http://localhost:8081/index.php/',
		specPattern: 'cypress/e2e/**/*.{js,jsx,ts,tsx}',
	},
	component: {
		devServer: {
			framework: "vue",
			bundler: "vite",
		},
	},
	retries: {
		runMode: 2,
		// do not retry in `cypress open`
		openMode: 0,
	},
	'numTestsKeptInMemory': 5,
})
