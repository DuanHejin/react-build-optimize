module.exports = {
    // "extends": "umi",
    plugins: ['import', 'prettier'],
    rules: {
        indent: ['error', 4, { SwitchCase: 1 }],
        semi: ['error', 'always'],
        quotes: ['error', 'single', { allowTemplateLiterals: true }],
        'no-multiple-empty-lines': ['error', { max: 1 }],
        'no-multi-spaces': ['error', { ignoreEOLComments: true }],
        'prettier/prettier': [
            'error',
            {
                tabWidth: 4,
                singleQuote: true,
                trailingComma: 'all',
                bracketSpacing: true,
                jsxBracketSameLine: false,
                endOfLine: 'auto',
            },
        ],
        // "new-cap": [
        //     "error",
        //     {
        //         "properties": true
        //     }
        // ],
        // •  [必须] 关键字后添加空格、运算符前后添加空格
        'keyword-spacing': ['error', { before: true, after: true }],
        // int32Hint用于处理 | 运算符 如 a|b
        'space-infix-ops': ['error', { int32Hint: false }],
        //  • [必须] 解构变量前后添加空格，如：const { name, age } = persion
        'object-curly-spacing': ['error', 'always'],
        //  • [必须] 使用ES6模块规范引入和导出 须安装eslint-plugin-import 并在plugins配置中增加import
        // 不允许 amd 导入风格
        'import/no-amd': 2,
        // 不允许使用 require 动态导入
        'import/no-dynamic-require': 2,
        // 不允许 commonjs 风格
        'import/no-commonjs': 2,
        // •  [必须] 组件中return JSX时，如果是多行，必须使用小括号括起来
        'react/jsx-wrap-multilines': 2,
        // •  [必须] 组件是多行时，每个属性独占一行
        // •  [必须] 组件是多行时，闭合标签独占一行
        // •  [必须] 自闭标签，闭合标签前空一格
        'react/jsx-closing-bracket-location': 2,
    },
};
