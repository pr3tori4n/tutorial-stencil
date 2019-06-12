import { Config } from '@stencil/core';
import { sass } from "@stencil/sass";

export const config: Config = {
  namespace: 'stencil',
  outputTargets: [
    {
      type: 'dist',
      esmLoaderPath: '../loader'
    },
    {
      type: 'docs-readme'
    },
    {
      type: 'www',
      serviceWorker: null // disable service workers
    }
  ],
  plugins:[
    sass({
      injectGlobalPaths: ['src/globalStyles/variables.scss']
    })
  ]
  testing: {
    browserHeadless: false,
    browserDevtools: true,
    browserArgs: [ '--remote-debugging-port=9222' ]
  }
};
