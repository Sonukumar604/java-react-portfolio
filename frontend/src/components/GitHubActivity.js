import React, { useEffect, useMemo, useState } from 'react';
import { motion } from 'framer-motion';
import { FaGithub } from 'react-icons/fa6';
import { SiLeetcode } from 'react-icons/si';

const githubUsername = 'Sonukumar604';
const leetcodeUsername = 'sonukumar_031';
const githubProfileUrl = `https://github.com/${githubUsername}`;
const leetcodeProfileUrl = `https://leetcode.com/u/${leetcodeUsername}/`;
const githubApiBase = `https://api.github.com/users/${githubUsername}`;
const leetcodeApiBase = `https://alfa-leetcode-api.onrender.com/${leetcodeUsername}`;

const fallbackGitHub = {
  repos: 12,
  stars: 9,
  followers: 1,
  recentCommits: 20,
  updatedAt: 'From screenshot fallback',
};

const fallbackLeetCode = {
  solved: 164,
  easySolved: 67,
  mediumSolved: 89,
  hardSolved: 8,
  ranking: 964687,
  submissions: 383,
  streak: 10,
  activeDays: 90,
  totalQuestions: 3943,
  updatedAt: 'From screenshot fallback',
};

const formatNumber = (value) => new Intl.NumberFormat('en-IN').format(value ?? 0);

const fetchJson = async (url, options) => {
  const response = await fetch(url, options);
  if (!response.ok) {
    throw new Error(`${response.status} ${response.statusText}`);
  }
  return response.json();
};

const countRecentPushCommits = (events) => {
  const thirtyDaysAgo = Date.now() - 30 * 24 * 60 * 60 * 1000;
  return events
    .filter((event) => event.type === 'PushEvent' && new Date(event.created_at).getTime() >= thirtyDaysAgo)
    .reduce((total, event) => total + (event.payload?.commits?.length || 0), 0);
};

function GitHubActivity() {
  const [githubData, setGithubData] = useState(fallbackGitHub);
  const [leetcodeData, setLeetcodeData] = useState(fallbackLeetCode);
  const [loading, setLoading] = useState(true);
  const [apiNote, setApiNote] = useState('');

  useEffect(() => {
    let isMounted = true;

    const loadActivity = async () => {
      setLoading(true);
      setApiNote('');

      const [githubResult, leetcodeResult] = await Promise.allSettled([
        Promise.all([
          fetchJson(githubApiBase, { headers: { Accept: 'application/vnd.github+json' } }),
          fetchJson(`${githubApiBase}/repos?per_page=100&sort=updated`, { headers: { Accept: 'application/vnd.github+json' } }),
          fetchJson(`${githubApiBase}/events/public?per_page=100`, { headers: { Accept: 'application/vnd.github+json' } }),
        ]),
        Promise.all([
          fetchJson(`${leetcodeApiBase}/solved`),
          fetchJson(leetcodeApiBase),
          fetchJson(`${leetcodeApiBase}/calendar`),
          fetchJson('https://alfa-leetcode-api.onrender.com/problems'),
        ]),
      ]);

      if (!isMounted) {
        return;
      }

      if (githubResult.status === 'fulfilled') {
        const [user, repos, events] = githubResult.value;
        const stars = repos.reduce((total, repo) => total + (repo.stargazers_count || 0), 0);
        setGithubData({
          repos: user.public_repos ?? repos.length,
          stars,
          followers: user.followers ?? 0,
          recentCommits: countRecentPushCommits(events),
          updatedAt: 'Live from GitHub API',
        });
      } else {
        setApiNote('GitHub live stats are temporarily using fallback values.');
      }

      if (leetcodeResult.status === 'fulfilled') {
        const [solved, profile, calendar, problems] = leetcodeResult.value;
        const allSubmissions = solved.totalSubmissionNum?.find((item) => item.difficulty === 'All');
        setLeetcodeData({
          solved: solved.solvedProblem ?? fallbackLeetCode.solved,
          easySolved: solved.easySolved ?? fallbackLeetCode.easySolved,
          mediumSolved: solved.mediumSolved ?? fallbackLeetCode.mediumSolved,
          hardSolved: solved.hardSolved ?? fallbackLeetCode.hardSolved,
          ranking: profile.ranking ?? fallbackLeetCode.ranking,
          submissions: allSubmissions?.submissions ?? fallbackLeetCode.submissions,
          streak: calendar.streak ?? fallbackLeetCode.streak,
          activeDays: calendar.totalActiveDays ?? fallbackLeetCode.activeDays,
          totalQuestions: problems.totalQuestions ?? fallbackLeetCode.totalQuestions,
          updatedAt: 'Live from LeetCode API',
        });
      } else {
        setApiNote((currentNote) => `${currentNote ? `${currentNote} ` : ''}LeetCode live stats are temporarily using fallback values.`);
      }

      setLoading(false);
    };

    loadActivity();

    return () => {
      isMounted = false;
    };
  }, []);

  const githubStats = useMemo(() => [
    { label: 'Recent Commits', value: githubData.recentCommits, detail: 'Last 30 days' },
    { label: 'Repositories', value: githubData.repos, detail: 'Public repos' },
    { label: 'Stars', value: githubData.stars, detail: 'Profile total' },
    { label: 'Followers', value: githubData.followers, detail: 'GitHub network' },
  ], [githubData]);

  const leetcodeStats = useMemo(() => [
    { label: 'Solved', value: leetcodeData.solved, detail: `of ${formatNumber(leetcodeData.totalQuestions)} problems` },
    { label: 'Rank', value: leetcodeData.ranking, detail: 'Global profile rank' },
    { label: 'Submissions', value: leetcodeData.submissions, detail: 'Accepted + attempts' },
    { label: 'Max Streak', value: leetcodeData.streak, detail: `${leetcodeData.activeDays} active days` },
  ], [leetcodeData]);

  const leetcodeBreakdown = useMemo(() => [
    { label: 'Easy', solved: leetcodeData.easySolved, total: leetcodeData.solved, className: 'easy' },
    { label: 'Medium', solved: leetcodeData.mediumSolved, total: leetcodeData.solved, className: 'medium' },
    { label: 'Hard', solved: leetcodeData.hardSolved, total: leetcodeData.solved, className: 'hard' },
  ], [leetcodeData]);

  return (
    <motion.section
      id="coding-activity"
      className="section glass-section"
      initial={{ opacity: 0, y: 36 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
    >
      <div className="section-header">
        <h2>Coding Activity</h2>
        <p>Official GitHub profile activity merged with LeetCode streaks and DSA progress.</p>
        <span className="activity-live-note">
          {loading ? 'Refreshing live stats...' : `Live data connected. ${apiNote}`}
        </span>
      </div>

      <div className="activity-dashboard">
        <motion.article
          className="activity-profile-card github-profile-card"
          whileHover={{ y: -6 }}
          transition={{ duration: 0.25 }}
        >
          <div className="activity-card-header">
            <div>
              <span className="activity-kicker">Official GitHub</span>
              <h3><FaGithub /> {githubUsername}</h3>
            </div>
            <a href={githubProfileUrl} target="_blank" rel="noopener noreferrer">View Profile</a>
          </div>

          <div className="activity-stats-grid">
            {githubStats.map((stat) => (
              <div key={stat.label} className="activity-stat">
                <strong>{loading ? '...' : formatNumber(stat.value)}</strong>
                <span>{stat.label}</span>
                <small>{stat.detail}</small>
              </div>
            ))}
          </div>

          <div className="activity-embed github-activity-embed">
            <img
              src={`https://github-readme-activity-graph.vercel.app/graph?username=${githubUsername}&theme=github-compact&hide_border=true&area=true&custom_title=Contribution%20Graph`}
              alt={`${githubUsername} GitHub contribution graph`}
            />
          </div>
        </motion.article>

        <motion.article
          className="activity-profile-card leetcode-profile-card"
          whileHover={{ y: -6 }}
          transition={{ duration: 0.25 }}
        >
          <div className="activity-card-header">
            <div>
              <span className="activity-kicker">LeetCode Streaks</span>
              <h3><SiLeetcode /> {leetcodeUsername}</h3>
            </div>
            <a href={leetcodeProfileUrl} target="_blank" rel="noopener noreferrer">View Profile</a>
          </div>

          <div className="activity-stats-grid">
            {leetcodeStats.map((stat) => (
              <div key={stat.label} className="activity-stat">
                <strong>{loading ? '...' : formatNumber(stat.value)}</strong>
                <span>{stat.label}</span>
                <small>{stat.detail}</small>
              </div>
            ))}
          </div>

          <div className="leetcode-progress-card">
            <div className="leetcode-progress-title">
              <strong>Problem Solving</strong>
              <span>50 Days Badge 2026</span>
            </div>
            {leetcodeBreakdown.map((item) => (
              <div key={item.label} className="leetcode-progress-row">
                <div>
                  <span>{item.label}</span>
                  <strong>{loading ? '...' : `${formatNumber(item.solved)} solved`}</strong>
                </div>
                <div className="leetcode-progress-track">
                  <span
                    className={`leetcode-progress-fill ${item.className}`}
                    style={{ width: `${Math.max((item.solved / Math.max(item.total, 1)) * 100, 3)}%` }}
                  />
                </div>
              </div>
            ))}
          </div>

          <div className="activity-embed leetcode-embed">
            <img
              src={`https://leetcard.jacoblin.cool/${leetcodeUsername}?theme=dark&font=Nunito&ext=heatmap`}
              alt={`${leetcodeUsername} LeetCode activity card`}
            />
          </div>
        </motion.article>
      </div>
    </motion.section>
  );
}

export default GitHubActivity;
