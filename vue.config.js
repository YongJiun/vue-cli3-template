console.log(process.env.BASE_URL);

var production_public_path = '/',
    production_api_path = '/api/',
    production_output_dir = 'dist',

    domain_demo = process.env.BASE_URL,
    domain_demo_api = 'http://projects.salute-interactive.com/wincafe/',
    production_output_dir = 'demo',

    domain_dev = '/',
    domain_dev_api = 'http://projects.salute-interactive.com/wincafe/';

var mode = process.env.VUE_APP_MODE,
    path = mode == 'production' ? production_public_path : mode == 'demo' ? domain_demo : domain_dev,
    dir = mode == 'production' ? 'dist' : 'demo';

module.exports = {
    devServer: {
      host: '0.0.0.0',
      https: true,
    },

    publicPath: path,

    outputDir: dir
  }