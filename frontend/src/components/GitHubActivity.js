import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub } from 'react-icons/fa6';
import { SiLeetcode } from 'react-icons/si';

const githubUsername = 'Sonukumar604';
const leetcodeUsername = 'sonukumar_031';
const githubProfileUrl = `https://github.com/${githubUsername}`;
const leetcodeProfileUrl = `https://leetcode.com/u/${leetcodeUsername}/`;

const githubStats = [
  { label: 'Contributions', value: '106', detail: 'Last year' },
  { label: 'Repositories', value: '12', detail: 'Public repos' },
  { label: 'Stars', value: '9', detail: 'Profile total' },
  { label: 'Longest Streak', value: '3', detail: 'Dec 15 - Dec 17' },
];

const leetcodeStats = [
  { label: 'Solved', value: '164', detail: 'of 3943 problems' },
  { label: 'Rank', value: '964,687', detail: 'Global profile rank' },
  { label: 'Submissions', value: '370', detail: 'Past one year' },
  { label: 'Max Streak', value: '10', detail: 'Current yearly view' },
];

const leetcodeBreakdown = [
  { label: 'Easy', solved: 67, total: 946, className: 'easy' },
  { label: 'Medium', solved: 89, total: 2061, className: 'medium' },
  { label: 'Hard', solved: 8, total: 936, className: 'hard' },
];

function GitHubActivity() {
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
                <strong>{stat.value}</strong>
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
                <strong>{stat.value}</strong>
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
                  <strong>{item.solved} / {item.total}</strong>
                </div>
                <div className="leetcode-progress-track">
                  <span
                    className={`leetcode-progress-fill ${item.className}`}
                    style={{ width: `${Math.max((item.solved / item.total) * 100, 3)}%` }}
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
