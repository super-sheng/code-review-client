import React, { useState } from 'react';
import { createRoot } from 'react-dom/client';
import './App.css';
const Footer = () => (
  <footer>
    <p>代码审查 AI 助手 | 基于 Mastra 构建</p>
    <div className="footer-links">
      <button 
        className="footer-link" 
        onClick={() => console.log("关于")}
        style={{ background: 'none', border: 'none', cursor: 'pointer' }}
      >
        关于
      </button>
      <button 
        className="footer-link" 
        onClick={() => console.log("文档")}
        style={{ background: 'none', border: 'none', cursor: 'pointer' }}
      >
        文档
      </button>
      <button 
        className="footer-link" 
        onClick={() => console.log("GitHub")}
        style={{ background: 'none', border: 'none', cursor: 'pointer' }}
      >
        GitHub
      </button>
    </div>
  </footer>
);
const Header = () => (
  <header>
    <div className="logo">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M20.24 12.24a6 6 0 0 0-8.49-8.49L5 10.5V19h8.5z"></path>
        <line x1="16" y1="8" x2="2" y2="22"></line>
        <line x1="17.5" y1="15" x2="9" y2="15"></line>
      </svg>
      代码审查 AI 助手
    </div>
    <div className="settings-icon">
      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="3"></circle>
        <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"></path>
      </svg>
    </div>
  </header>
);
// 代码编辑器组件
const CodeEditor = ({ code, setCode, language, setLanguage, onReview, examples }) => {
  const handleExampleChange = (e) => {
    const selectedExample = e.target.value;
    if (selectedExample && examples[selectedExample]) {
      setCode(examples[selectedExample].code);
      setLanguage(examples[selectedExample].language);
    }
  };

  return (
    <div className="card">
      <div className="card-header">
        <h2 className="card-title">代码输入</h2>
        <div className="examples-dropdown">
          <select className="language-select" onChange={handleExampleChange}>
            <option value="">选择示例代码...</option>
            <option value="example1">简单的 JavaScript 函数</option>
            <option value="example2">带安全问题的 TypeScript 代码</option>
            <option value="example3">需优化的 React 组件</option>
          </select>
        </div>
      </div>
      <div className="card-body">
        <div className="action-bar">
          <select
            className="language-select"
            value={language}
            onChange={(e) => setLanguage(e.target.value)}
          >
            <option value="javascript">JavaScript</option>
            <option value="typescript">TypeScript</option>
            <option value="python">Python</option>
            <option value="java">Java</option>
            <option value="csharp">C#</option>
            <option value="php">PHP</option>
            <option value="go">Go</option>
            <option value="rust">Rust</option>
          </select>
          <button className="review-button" onClick={onReview}>
            开始审查
          </button>
        </div>
        <textarea
          className="code-editor"
          value={code}
          onChange={(e) => setCode(e.target.value)}
          placeholder="在此粘贴您的代码..."
        ></textarea>
      </div>
    </div>
  );
};

// 审查结果组件
const ReviewResults = ({ result, isLoading }) => {
  // 格式化审查结果
  const formatResult = (text) => {
    if (!text) return null;

    // 将 Markdown 格式转换为 HTML
    let formattedText = text
      .replace(/\n\n/g, '<br/><br/>')
      .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
      .replace(/`(.*?)`/g, '<code>$1</code>');

    // 处理代码块
    formattedText = formattedText.replace(/```(\w*)\n([\s\S]*?)```/g, 
      (match, language, code) => `<div class="code-block">${code}</div>`
    );

    return { __html: formattedText };
  };

  return (
    <div className="card">
      <div className="card-header">
        <h2 className="card-title">审查结果</h2>
      </div>
      <div className="card-body">
        <div className="review-results">
          {isLoading ? (
            <div className="loading">
              <div className="spinner"></div>
              <div>正在分析代码...</div>
            </div>
          ) : result ? (
            <div dangerouslySetInnerHTML={formatResult(result)} />
          ) : (
            <div className="empty-state">
              <p>输入代码并点击"开始审查"以获取 AI 分析结果</p>
              <p className="subtext">
                代码审查助手将分析您的代码并提供改进建议
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

const App = () => {
  const [code, setCode] = useState('');
  const [language, setLanguage] = useState('javascript');
  const [result, setResult] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  // 示例代码
  const codeExamples = {
    example1: {
      code: `function calculateTotal(items) {
  var total = 0;
  for (var i = 0; i < items.length; i++) {
    total += items[i].price;
  }
  console.log("Total:", total);
  return total;
}`,
      language: 'javascript'
    },
    example2: {
      code: `function processUserData(userData: any) {
  // 使用 var 声明变量
  var userId = userData.id;
  var userPassword = userData.password;
  
  // 硬编码 API 密钥
  const API_KEY = "sk_live_abcdef123456789";
  
  // 不安全的密码处理
  if (userPassword.length > 0) {
    // 使用 eval 处理用户输入
    eval("console.log('用户 ID: " + userId + "')");
    
    // 使用 innerHTML 插入内容 (XSS 风险)
    document.getElementById("user-info").innerHTML = "<div>" + userData.name + "</div>";
    
    // 使用 Math.random() 生成令牌
    const token = "token_" + Math.random().toString(36).substring(2);
    
    // 返回用户数据
    return { userId, token };
  }
}`,
      language: 'typescript'
    },
    example3: {
      code: `import React, { useState, useEffect } from 'react';

function UserList() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  
  useEffect(() => {
    setLoading(true);
    fetch('https://api.example.com/users')
      .then(response => response.json())
      .then(data => {
        setUsers(data);
        setLoading(false);
      })
      .catch(err => {
        setError(err);
        setLoading(false);
      });
  }, []);
  
  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;
  
  return (
    <div>
      <h1>Users</h1>
      <div className="users-container">
        {users.map(user => {
          return (
            <div key={user.id} className="user-card">
              <h3>{user.name}</h3>
              <p>{user.email}</p>
              <button onClick={() => console.log('User clicked:', user.id)}>
                View Details
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
}`,
      language: 'javascript'
    }
  };

  // 处理代码审查
  const handleReview = async () => {
    if (!code.trim()) {
      alert('请输入代码');
      return;
    }

    setIsLoading(true);
    setResult('');

    try {
      const requestData = {
        messages: [
          {
            role: "user",
            content: `请审查以下 ${language} 代码：\n\n${code}`
          }
        ],
        // 以下字段是可选的，根据您的需求添加
        // threadId: "某个线程ID",  // 如果需要将消息保存到特定线程
        // resourceId: "某个资源ID",  // 如果有特定资源标识
        // runId: "某个运行ID",  // 如果与特定运行相关联
      };
      // 替换为您的API端点
      const response = await fetch('https://my-mastra-app.max-capricorn1209.workers.dev/api/agents/codeReviewAgent/generate', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(requestData),
      });

      if (!response.ok) {
        throw new Error(`API请求失败: ${response.status}`);
      }

      const data = await response.json();
      setResult(data.text || data.content || data.result);

    } catch (error) {
      console.error('Error:', error);
      setResult(`请求失败: ${error.message}\n请检查API连接或稍后重试`);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="app">
      <Header />
      <main>
        <div className="container">
          <CodeEditor
            code={code}
            setCode={setCode}
            language={language}
            setLanguage={setLanguage}
            onReview={handleReview}
            examples={codeExamples}
          />
          <ReviewResults result={result} isLoading={isLoading} />
        </div>
      </main>
      <Footer />
    </div>
  );
};

// 渲染到DOM
const container = document.getElementById('root');
const root = createRoot(container);
root.render(<App />);

export default App;