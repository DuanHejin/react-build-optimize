/*
 * @Description: xx模块
 * @Company: zhoupudata
 * @Author: duanhejin
 * @Date: 2021-05-20 14:53:52
 * @LastEditors: duanhejin
 * @LastEditTime: 2021-07-19 17:02:39
 */
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
        [
            'module-resolver',
            {
                root: ['.'],
                alias: {
                    '@/*': ['src/*'],
                    '@routes/*': ['src/routes/*'],
                    '@views/*': ['src/views/*'],
                    '@utils/*': ['src/utils/*'],
                    '@components/*': ['src/components/*'],
                    '@assets/*': ['src/assets/*'],
                },
            },
        ],
    ],
};
