import axios from 'axios';

/**
 * 代码审查 API 接口
 * 根据您的实际部署情况修改 BASE_URL
 */
const api = axios.create({
  // 如果前端和后端部署在同一域名下，可以使用相对路径
  // baseURL: '/api',
  
  // 如果部署在 Cloudflare Workers 上，使用 Workers URL
  baseURL: 'https://code-review-agent.your-username.workers.dev/api',
  
  headers: {
    'Content-Type': 'application/json',
  },
});

/**
 * 发送代码审查请求
 * @param {string} code - 要审查的代码
 * @param {string} language - 代码语言
 * @returns {Promise} - 返回审查结果
 */
export const reviewCode = async (code, language) => {
  try {
    const response = await api.post('/review', { code, language });
    return response.data;
  } catch (error) {
    console.error('API 请求失败:', error);
    throw error;
  }
};

export default api;