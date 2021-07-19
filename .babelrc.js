// module.exports = {
//   plugins: ["lodash"],
// };

module.exports = {
    plugins: [
        [
            'import',
            {
                libraryName: 'lodash',
                libraryDirectory: '',
                camel2DashComponentName: false, // default: true
            },
        ],
    ],
};
