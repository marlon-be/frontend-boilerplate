// postcss.config.js
module.exports = {
    parser: 'postcss-scss',
    plugins: [
        require('@csstools/postcss-sass'),
        require('postcss-custom-media'),
        require('postcss-easy-import')({
            prefix: "_"
        }),
        require('postcss-merge-rules'),
    ]
}
