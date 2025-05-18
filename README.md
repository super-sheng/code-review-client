# Code Review Client

这是一个使用React构建的代码审查客户端应用程序。

## 功能

- 代码审查仪表板
- 查看待处理和已完成的代码审查
- 查看代码审查详情
- 对代码审查添加评论

## 技术栈

- React
- React Router
- CSS

## 安装步骤

1. 克隆仓库
   ```
   git clone https://github.com/super-sheng/code-review-client.git
   cd code-review-client
   ```

2. 安装依赖
   ```
   npm install
   ```

3. 启动开发服务器
   ```
   npm start
   ```

应用将在开发模式下运行。
在浏览器中打开 [http://localhost:3000](http://localhost:3000) 查看应用。

## 构建生产版本

```
npm run build
```

这将在 `build` 文件夹中构建用于生产的应用程序。

## 项目结构

- `src/components/` - React组件
- `src/App.js` - 主应用组件
- `src/index.js` - 应用入口点

## 未来计划

- 添加用户认证
- 集成实时通知
- 添加代码差异查看器