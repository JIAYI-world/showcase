export interface Demo {
  id: string
  title: string
  description: string
  tags: string[]
  coverImage: string
  githubUrl?: string
  demoUrl?: string
  demoPassword?: string
  videoUrl?: string
  features: string[]
  techStack: string[]
  role: string
}

// 本地开发用 '/'，部署到 GitHub Pages 用 '/showcase/'
const base = window.location.hostname === 'localhost' ? '/' : '/showcase/'

export const demos: Demo[] = [
  {
    id: 'code-review',
    title: 'LLM 代码审查数据生成系统',
    description: '基于 LLM 的代码审查数据自动生成系统。自动分析 Git 仓库历史提交，定位 Bug 引入提交（BIC），用 AI 生成专业代码审查报告，批量生产带标注的训练数据。',
    tags: ['LLM', 'SZZ算法', 'Python', '代码审查', '数据生成'],
    coverImage: `${base}demos/codereview_dataset.png`,
    githubUrl: 'https://github.com/JIAYI-world/paper',
    demoUrl: 'https://majorette-cinch-moonstone.ngrok-free.dev',
    demoPassword: 'demo2024',
    features: [
      'Bug 引入提交检测 - 自动定位哪个提交引入了 Bug（SZZ 算法）',
      'BIC 智能验证 - LLM 逐条验证 SZZ 结果，过滤误报（准确率 ~30%→~70%）',
      '代码审查生成 - 为确认的 BIC 自动生成专业审查报告（verdict + comments）',
      '全流程自动化 - 输入时间范围，自动跑完 6 个阶段',
      '实时进度展示 - Web 界面实时显示每个阶段的处理进度和结果',
    ],
    techStack: ['Python', 'LLM Agent', 'SZZ Algorithm', 'Git Analysis', 'MCP Server'],
    role: '独立开发',
  },
  {
    id: 'multi-agent-review',
    title: '多智能体代码审查系统',
    description: '基于 LangGraph 的 7 阶段 DAG 工作流，三个 AI 专家（缺陷、语义、安全）并行审查代码，独立验证器交叉验证，输出结构化审查报告。全链路可观测，误报率降低 20%+。',
    tags: ['LangGraph', '多智能体', '代码审查', 'Langfuse', '可观测'],
    coverImage: `${base}demos/langgraph_review.png`,
    videoUrl: `${base}demos/langfuse_codereview.mp4`,
    features: [
      '三路并行审查 - 缺陷/语义/安全三个维度同时审查，互不干扰',
      '独立验证（反驳式）- 每条发现由独立 Verifier 交叉验证，"考生不能给自己改卷"',
      '质量闭环 - 用户反馈→Bug 库自动更新，Prompt 改动→A/B 测试',
      '全链路可观测 - Langfuse 追踪每次审查的完整调用链，精确到每个 Agent',
      '冷启动方案 - 历史审查记录 + LLM 自动生成评估集',
      '量化效果 - 准确率 +10%，误报率 -20%+，拦截 400+ 中高风险缺陷',
    ],
    techStack: ['LangGraph', 'Langfuse', 'Multi-Agent', 'Python', 'LLM'],
    role: '独立开发',
  },
  {
    id: 'ai-meeting',
    title: 'AI 会议全流程管理工具',
    description: '覆盖"会前筹备 → 会后纪要"完整链路的 AI 会议管理工具。AI 做重复性工作，人聚焦决策本身。会前自动整理素材生成议程，会后一键提炼结构化纪要、决策台账和待办看板。',
    tags: ['React', 'AI', '会议管理', '生产力工具', 'GitHub Pages'],
    coverImage: `${base}demos/meeting.png`,
    demoUrl: 'https://jiayi-world.github.io/meeting/',
    features: [
      '会前素材管理 - 语料池自动摘要+标记相关度，告别手动复制粘贴',
      'AI 议程生成 - 从素材中提取议题，自动排时间线',
      '会后纪要提炼 - 速记+素材→AI 一键生成结构化纪要',
      '决策台账 + 待办看板 - 每条可溯源原始对话',
      '适用场景广 - 产品经理/项目经理/技术负责人/团队 Leader',
    ],
    techStack: ['React', 'TypeScript', 'Tailwind CSS', 'GitHub Pages'],
    role: '独立开发',
  },
]
