## 代码提交

```
git add .
git cz // 需要全局安装commitizen: npm i -g commitizen
git push origin 分支名
```

## git cz

- feat: 新增功能
- fix: Bug 修复缺陷
- build: 项目打包
- revert: 执行 git revert 之后的 revert 信息
- docs: 文档相关内容改动, 如添加注释
- style: 不会影响系统功能的代码格式相关改动, 如删除/添加空格
- ci: 构建工具或项目依赖的改动, 如 webpack/vite 配置
- chore: 其他修改

## .husky

**.husky文件夹为代码校验，代码提交验证文件夹，无特殊情况，勿动**

## .eslintrc.js

**.eslintrc.js为校验规则，无特殊情况，勿动**
