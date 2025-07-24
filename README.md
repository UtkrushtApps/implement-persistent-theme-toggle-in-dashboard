# Task Overview

You are working on a React-based team productivity dashboard where managers can oversee each user's task completion status. The goal is to deliver a responsive, accessible team status dashboard that allows users to filter by task completion.

# Guidance

- Simulate task fetching with a static array rather than a live endpoint.
- Split your implementation into focused functional components using React hooks.
- Ensure progress bars are accessible with appropriate ARIA labeling.
- Use memoization to optimize expensive calculations and reduce unnecessary re-renders.
- The filtering must immediately and efficiently reflect in the UI.

# Objectives

- Build a dashboard showing each team member's completion percentage via an accessible progress bar.
- Implement and wire up filter controls to view all, completed, or incomplete tasks.
- Simulate data fetch, calculate per-user stats, and render user progress bars containing accurate, accessible labels.
- Ensure instant UI updates and minimal re-rendering.
- Organize code into maintainable, logical React components.

# How to Verify

- Confirm the dashboard displays each user and their completion rate visually.
- Switch filters and verify that progress bars and data update correctly in real time.
- Check that each progress bar is accessible, using ARIA labels for screen readers.
- Review component structure for clear separation of concerns and maintainability.
- Observe that state changes do not trigger unnecessary re-renders.
