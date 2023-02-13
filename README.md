# 项目搭建

## create-react-app react-ts-music --template typescript

## 全部文件扩展名为tsx, style扩展名为.ts

## 库集成

1. npm i @craco/craco@alpha

1.1 ts 配置修改

```json
 "baseUrl": ".",
    "paths": {
      "@/*": ["src/*"]
    }
```

```javascript
// craco.config.js
const path = require('path')
const resolvePath = (path) => path.resolve(__dirname, path)
module.exports = {
  webpack: {
    alias: {
      '@': resolvePath('src'),
      components: resolvePath('src/components')
    }
  }
}
```

2. 配置 editorconfig

```
# http://editorconfig.org
root = true
[*] # 表示所有文件适用
charset = utf-8 # 设置文件字符集为 utf-8
indent_style = space # 缩进风格（tab | space）
indent_size = 2 # 缩进大小
end_of_line = lf # 控制换行类型(lf | cr | crlf)
trim_trailing_whitespace = true # 去除行尾的任意空白字符
insert_final_newline = true # 始终在文件末尾插入一个新行

[*.md] # 表示仅 md 文件适用以下规则
max_line_length = off
trim_trailing_whitespace = false
```

3. 配置 prettier: npm i prettier -D

```js
# .prettierrc
{
  "useTabs": false,
  "tabWidth": 2,
  "printWidth": 80,
  "singleQuote": true,
  "trailingComma": "none",
  "semi": false
}
```

```gitignore
/dist/*
/build/*
.local
.output.js
/node_modules/**

**/*.svg
**/*.sh

/public/*

```

3. eslint npm i eslint -D
   3.1 npx eslint --init
   3.2 npm i eslint-plugin-prettier eslint-config-prettier -D

```
extends: [
  'eslint:recommended',
  'plugin:react/recommended',
  'plugin:@typescript-eslint/recommended',
  'plugin:prettier/recommended'
],
```

4. 目录结构划分
   mkdir assets base-ui utils components hooks router views store service

5. css 样式重置
5.1 npm i normalize.css

6. less 配置
6.1 npm i craco-less@2.1.0-alpha.0 -D

7. 路由配置
   npm i react-router-dom 

8. store 
  npm i @reduxjs/toolkit react-redux

9. axios
  npm i axios
10. styled
  npm i classnames styled-components
