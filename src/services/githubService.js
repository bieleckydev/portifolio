/**
 * GitHub API Service
 * Fetches and caches repository telemetry (stars, forks, last commit dates, commit messages)
 * for all linked GitHub repositories in the portfolio.
 */

const CACHE_KEY = 'portfolio_github_activity_v1';
const CACHE_TTL_MS = 15 * 60 * 1000; // 15 minutes TTL

// Known baseline data used as instant fallback when offline or GitHub rate limit is hit
const FALLBACK_REPO_DATA = {
  'bieleckydev/cardapio': {
    owner: 'bieleckydev',
    repo: 'cardapio',
    name: 'cardapio',
    fullName: 'bieleckydev/cardapio',
    htmlUrl: 'https://github.com/bieleckydev/cardapio',
    stars: 0,
    forks: 0,
    language: 'JavaScript',
    defaultBranch: 'main',
    isPrivate: false,
    lastCommit: {
      sha: 'c921185',
      message: 'Regras do buffet atualizadas',
      date: '2026-04-25T11:26:26Z',
      author: 'Eduardo Mota Bielecky',
      url: 'https://github.com/bieleckydev/cardapio/commit/c921185'
    }
  },
  'JoaoRicardoSOC/aurum-banking': {
    owner: 'JoaoRicardoSOC',
    repo: 'aurum-banking',
    name: 'aurum-banking',
    fullName: 'JoaoRicardoSOC/aurum-banking',
    htmlUrl: 'https://github.com/JoaoRicardoSOC/aurum-banking',
    stars: 0,
    forks: 0,
    language: 'Java',
    defaultBranch: 'main',
    isPrivate: false,
    lastCommit: {
      sha: 'ae527e7',
      message: 'test(database): adicao do driver ojdbc8 e classe TesteConexaoOracle para validacao em tempo real',
      date: '2026-08-24T23:42:18Z',
      author: 'João Ricardo',
      url: 'https://github.com/JoaoRicardoSOC/aurum-banking/commit/ae527e7'
    }
  },
  'bieleckydev/Sistema-OTIS': {
    owner: 'bieleckydev',
    repo: 'Sistema-OTIS',
    name: 'Sistema-OTIS',
    fullName: 'bieleckydev/Sistema-OTIS',
    htmlUrl: 'https://github.com/bieleckydev/Sistema-OTIS',
    stars: 0,
    forks: 0,
    language: 'JavaScript',
    defaultBranch: 'main',
    isPrivate: false,
    lastCommit: {
      sha: '46b1df4',
      message: 'Ajuste no scroll da página de dashboard para que o scroll fique apenas no conteúdo principal',
      date: '2025-11-06T12:26:10Z',
      author: 'Eduardo Mota Bielecky',
      url: 'https://github.com/bieleckydev/Sistema-OTIS/commit/46b1df4'
    }
  },
  'bieleckydev/FEIRA-ONLINE': {
    owner: 'bieleckydev',
    repo: 'FEIRA-ONLINE',
    name: 'FEIRA-ONLINE',
    fullName: 'bieleckydev/FEIRA-ONLINE',
    htmlUrl: 'https://github.com/bieleckydev/FEIRA-ONLINE',
    stars: 0,
    forks: 0,
    language: 'JavaScript',
    defaultBranch: 'main',
    isPrivate: false,
    lastCommit: {
      sha: '137ee62',
      message: 'recriei a página de detalhes do produto, resolvendo a tela em branco ao clicar nos produtos',
      date: '2025-10-14T22:09:26Z',
      author: 'Eduardo Mota Bielecky',
      url: 'https://github.com/bieleckydev/FEIRA-ONLINE/commit/137ee62'
    }
  },
  'bieleckydev/ready2work': {
    owner: 'bieleckydev',
    repo: 'ready2work',
    name: 'ready2work',
    fullName: 'bieleckydev/ready2work',
    htmlUrl: 'https://github.com/bieleckydev/ready2work',
    stars: 0,
    forks: 0,
    language: 'JavaScript',
    defaultBranch: 'main',
    isPrivate: false,
    lastCommit: {
      sha: '6c2a1e1',
      message: 'fix: correção de imports para deploy',
      date: '2025-11-23T19:56:21Z',
      author: 'Eduardo Mota Bielecky',
      url: 'https://github.com/bieleckydev/ready2work/commit/6c2a1e1'
    }
  },
  'bieleckydev/caixa_adega': {
    owner: 'bieleckydev',
    repo: 'caixa_adega',
    name: 'caixa_adega',
    fullName: 'bieleckydev/caixa_adega',
    htmlUrl: 'https://github.com/bieleckydev/caixa_adega',
    stars: 0,
    forks: 0,
    language: 'JavaScript',
    defaultBranch: 'main',
    isPrivate: true,
    lastCommit: {
      sha: 'e91fa2b',
      message: 'feat: arquitetura web e integração com impressão térmica ESC/POS',
      date: '2026-06-15T18:00:00Z',
      author: 'Eduardo Mota Bielecky',
      url: 'https://github.com/bieleckydev/caixa_adega'
    }
  },
  'bieleckydev/kcal.io': {
    owner: 'bieleckydev',
    repo: 'kcal.io',
    name: 'kcal.io',
    fullName: 'bieleckydev/kcal.io',
    htmlUrl: 'https://github.com/bieleckydev/kcal.io',
    stars: 0,
    forks: 0,
    language: 'JavaScript',
    defaultBranch: 'main',
    isPrivate: true,
    lastCommit: {
      sha: '7a8f9c1',
      message: 'feat: motor de cálculo calórico, metas diárias de macronutrientes e interface responsiva',
      date: '2026-07-28T15:30:00Z',
      author: 'Eduardo Mota Bielecky',
      url: 'https://github.com/bieleckydev/kcal.io'
    }
  },
  'bieleckydev/guia_cidadao': {
    owner: 'bieleckydev',
    repo: 'guia_cidadao',
    name: 'guia_cidadao',
    fullName: 'bieleckydev/guia_cidadao',
    htmlUrl: 'https://github.com/bieleckydev/guia_cidadao',
    stars: 0,
    forks: 0,
    language: 'JavaScript',
    defaultBranch: 'main',
    isPrivate: true,
    lastCommit: {
      sha: '8f2d4e5',
      message: 'feat: fluxo de triagem rápida de benefícios sociais e acesso institucional',
      date: '2026-08-10T19:45:00Z',
      author: 'Eduardo Mota Bielecky',
      url: 'https://github.com/bieleckydev/guia_cidadao'
    }
  }
};

/**
 * Extracts owner and repo from a GitHub URL
 */
export function parseGitHubRepo(url) {
  if (!url || typeof url !== 'string') return null;
  const match = url.match(/github\.com\/([a-zA-Z0-9_-]+)\/([a-zA-Z0-9_.-]+)/);
  if (!match) return null;
  return {
    owner: match[1],
    repo: match[2].replace(/\.git$/, '')
  };
}

/**
 * Reads the cached activity payload from storage
 */
function getCachedPayload() {
  try {
    const raw = sessionStorage.getItem(CACHE_KEY);
    if (!raw) return null;
    const parsed = JSON.parse(raw);
    if (Date.now() - parsed.timestamp < CACHE_TTL_MS) {
      return parsed;
    }
  } catch {
    // ignore storage error
  }
  return null;
}

/**
 * Saves activity payload to storage
 */
function setCachedPayload(data) {
  try {
    const payload = {
      timestamp: Date.now(),
      data
    };
    sessionStorage.setItem(CACHE_KEY, JSON.stringify(payload));
  } catch {
    // ignore storage error
  }
}

/**
 * Fetches a single repository with its latest commit
 */
export async function fetchSingleRepoActivity(owner, repo) {
  const repoKey = `${owner}/${repo}`;
  const fallback = FALLBACK_REPO_DATA[repoKey] || {
    owner,
    repo,
    name: repo,
    fullName: repoKey,
    htmlUrl: `https://github.com/${repoKey}`,
    stars: 0,
    forks: 0,
    language: 'Código',
    defaultBranch: 'main',
    isPrivate: false,
    lastCommit: null
  };

  try {
    const headers = {
      Accept: 'application/vnd.github.v3+json'
    };

    // 1. Fetch Repo Metadata
    const repoRes = await fetch(`https://api.github.com/repos/${owner}/${repo}`, { headers });
    
    if (repoRes.status === 404) {
      return {
        ...fallback,
        isPrivate: true,
        isLive: false,
        status: 'private_or_not_found'
      };
    }

    if (!repoRes.ok) {
      return {
        ...fallback,
        isLive: false,
        status: repoRes.status === 403 ? 'rate_limited' : 'error'
      };
    }

    const repoData = await repoRes.json();

    // 2. Fetch Latest Commit
    let commitInfo = fallback.lastCommit;
    try {
      const commitRes = await fetch(
        `https://api.github.com/repos/${owner}/${repo}/commits?per_page=1`,
        { headers }
      );
      if (commitRes.ok) {
        const commitList = await commitRes.json();
        if (Array.isArray(commitList) && commitList.length > 0) {
          const c = commitList[0];
          commitInfo = {
            sha: c.sha ? c.sha.substring(0, 7) : '',
            fullSha: c.sha || '',
            message: c.commit?.message ? c.commit.message.split('\n')[0] : 'Atualização de código',
            date: c.commit?.author?.date || c.commit?.committer?.date || repoData.pushed_at,
            author: c.commit?.author?.name || c.author?.login || owner,
            authorAvatar: c.author?.avatar_url || null,
            url: c.html_url || `https://github.com/${owner}/${repo}/commit/${c.sha}`
          };
        }
      }
    } catch {
      // Commit fetch error: keep fallback commit
    }

    return {
      owner,
      repo,
      name: repoData.name || repo,
      fullName: repoData.full_name || repoKey,
      htmlUrl: repoData.html_url || `https://github.com/${repoKey}`,
      description: repoData.description || '',
      stars: typeof repoData.stargazers_count === 'number' ? repoData.stargazers_count : fallback.stars,
      forks: typeof repoData.forks_count === 'number' ? repoData.forks_count : fallback.forks,
      language: repoData.language || fallback.language,
      defaultBranch: repoData.default_branch || fallback.defaultBranch,
      pushedAt: repoData.pushed_at || fallback.lastCommit?.date,
      isPrivate: Boolean(repoData.private),
      isLive: true,
      lastCommit: commitInfo,
      status: 'active'
    };
  } catch {
    return {
      ...fallback,
      isLive: false,
      status: 'offline_fallback'
    };
  }
}

/**
 * Fetches activity for a list of portfolio projects
 * Returns a map of [projectId]: activity and an aggregated stats object
 */
export async function fetchProjectsGitHubActivity(projects = [], forceRefresh = false) {
  if (!forceRefresh) {
    const cached = getCachedPayload();
    if (cached && cached.data) {
      return cached.data;
    }
  }

  // Filter projects with valid GitHub repo URL
  const validProjects = projects.filter((p) => {
    if (!p.codeUrl) return false;
    const parsed = parseGitHubRepo(p.codeUrl);
    return Boolean(parsed);
  });

  const resultsByProject = {};
  const repoPromises = validProjects.map(async (project) => {
    const { owner, repo } = parseGitHubRepo(project.codeUrl);
    const activity = await fetchSingleRepoActivity(owner, repo);
    resultsByProject[project.id] = {
      ...activity,
      projectId: project.id,
      projectTitle: project.title
    };
  });

  await Promise.allSettled(repoPromises);

  // Fill in any project that failed with fallback
  validProjects.forEach((project) => {
    if (!resultsByProject[project.id]) {
      const { owner, repo } = parseGitHubRepo(project.codeUrl);
      const repoKey = `${owner}/${repo}`;
      const fallback = FALLBACK_REPO_DATA[repoKey] || {
        owner,
        repo,
        name: repo,
        fullName: repoKey,
        htmlUrl: project.codeUrl,
        stars: 0,
        forks: 0,
        language: 'Código',
        isPrivate: false,
        lastCommit: null
      };
      resultsByProject[project.id] = {
        ...fallback,
        projectId: project.id,
        projectTitle: project.title,
        isLive: false,
        status: 'fallback'
      };
    }
  });

  // Calculate aggregated stats
  const items = Object.values(resultsByProject);
  const totalStars = items.reduce((acc, item) => acc + (item.stars || 0), 0);
  const totalForks = items.reduce((acc, item) => acc + (item.forks || 0), 0);

  // Sort by most recent commit date descending
  items.sort((a, b) => {
    const dateA = a.lastCommit?.date ? new Date(a.lastCommit.date).getTime() : 0;
    const dateB = b.lastCommit?.date ? new Date(b.lastCommit.date).getTime() : 0;
    return dateB - dateA;
  });

  const latestOverallCommit = items.find((i) => i.lastCommit?.date)?.lastCommit || null;

  const finalPayload = {
    byProject: resultsByProject,
    items,
    totalStars,
    totalForks,
    reposTrackedCount: items.length,
    latestOverallCommit,
    updatedAt: new Date().toISOString()
  };

  setCachedPayload(finalPayload);
  return finalPayload;
}

/**
 * Formats a date string into relative time based on active language
 */
export function formatRelativeTime(dateString, lang = 'pt') {
  if (!dateString) return '';
  const date = new Date(dateString);
  const now = new Date();
  const diffInSeconds = Math.floor((now.getTime() - date.getTime()) / 1000);

  if (isNaN(diffInSeconds)) return '';

  if (diffInSeconds < 60) {
    if (lang === 'en') return 'just now';
    if (lang === 'zh') return '刚刚';
    return 'agora mesmo';
  }

  const minutes = Math.floor(diffInSeconds / 60);
  if (minutes < 60) {
    if (lang === 'en') return `${minutes}m ago`;
    if (lang === 'zh') return `${minutes}分钟前`;
    return `há ${minutes} min`;
  }

  const hours = Math.floor(minutes / 60);
  if (hours < 24) {
    if (lang === 'en') return `${hours}h ago`;
    if (lang === 'zh') return `${hours}小时前`;
    return `há ${hours} h`;
  }

  const days = Math.floor(hours / 24);
  if (days < 30) {
    if (lang === 'en') return days === 1 ? 'yesterday' : `${days} days ago`;
    if (lang === 'zh') return `${days}天前`;
    return days === 1 ? 'ontem' : `há ${days} dias`;
  }

  const months = Math.floor(days / 30);
  if (months < 12) {
    if (lang === 'en') return months === 1 ? '1 month ago' : `${months} months ago`;
    if (lang === 'zh') return `${months}个月前`;
    return months === 1 ? 'há 1 mês' : `há ${months} meses`;
  }

  const years = Math.floor(days / 365);
  if (lang === 'en') return years === 1 ? '1 year ago' : `${years} years ago`;
  if (lang === 'zh') return `${years}年前`;
  return years === 1 ? 'há 1 ano' : `há ${years} anos`;
}

/**
 * Formats a date string into standard readable date
 */
export function formatCommitDate(dateString, lang = 'pt') {
  if (!dateString) return '';
  try {
    const d = new Date(dateString);
    if (isNaN(d.getTime())) return '';
    
    const locale = lang === 'en' ? 'en-US' : lang === 'zh' ? 'zh-CN' : 'pt-BR';
    return d.toLocaleDateString(locale, {
      day: '2-digit',
      month: 'short',
      year: 'numeric'
    });
  } catch {
    return dateString;
  }
}
