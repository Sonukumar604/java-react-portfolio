import React from 'react';
import { motion } from 'framer-motion';

const githubUsername = 'Sonukumar604';
const leetcodeUsername = 'YOUR_LEETCODE_USERNAME';
const leetcodeProfileUrl = `https://leetcode.com/u/${leetcodeUsername}/`;

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
        <p>GitHub contribution visibility plus LeetCode problem-solving practice.</p>
      </div>

      <div className="github-stats-grid">
        <motion.a
          className="github-stat-card"
          href={`https://github.com/${githubUsername}`}
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ y: -6, scale: 1.02 }}
          transition={{ duration: 0.25 }}
        >
          <img
            src={`https://github-readme-stats.vercel.app/api?username=${githubUsername}&show_icons=true&theme=transparent&hide_border=true&title_color=93c5fd&text_color=e2e8f0&icon_color=60a5fa`}
            alt="GitHub stats"
          />
        </motion.a>

        <motion.div
          className="github-stat-card"
          whileHover={{ y: -6, scale: 1.02 }}
          transition={{ duration: 0.25 }}
        >
          <img
            src={`https://github-readme-stats.vercel.app/api/top-langs/?username=${githubUsername}&layout=compact&theme=transparent&hide_border=true&title_color=93c5fd&text_color=e2e8f0`}
            alt="Top languages"
          />
        </motion.div>

        <motion.a
          className="github-stat-card"
          href={`https://github.com/${githubUsername}`}
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ y: -6, scale: 1.02 }}
          transition={{ duration: 0.25 }}
        >
          <img
            src={`https://streak-stats.demolab.com?user=${githubUsername}&theme=transparent&hide_border=true&date_format=M%20j%5B%2C%20Y%5D`}
            alt="GitHub streak"
          />
        </motion.a>

        <motion.a
          className="github-stat-card leetcode-activity-card"
          href={leetcodeProfileUrl}
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ y: -6, scale: 1.02 }}
          transition={{ duration: 0.25 }}
        >
          <div className="leetcode-card-header">
            <span>LeetCode</span>
            <strong>{leetcodeUsername === 'YOUR_LEETCODE_USERNAME' ? 'Username Needed' : leetcodeUsername}</strong>
          </div>
          <img
            src={`https://leetcard.jacoblin.cool/${leetcodeUsername}?theme=dark&font=Nunito&ext=heatmap`}
            alt="LeetCode activity"
          />
          <div className="leetcode-highlights">
            <span>DSA Practice</span>
            <span>Java Solutions</span>
            <span>Interview Prep</span>
          </div>
        </motion.a>
      </div>
    </motion.section>
  );
}

export default GitHubActivity;
