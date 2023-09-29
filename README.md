This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

# *GitFlow*
A GitFlow is a defined strategy for managing Git branches, commit standards and Merge request procedures.

Common GitFlow tends to identify two different types of branches:

- feature: for the development of a new feature
- hotfix/bugfix: for the fixing of a bug (or overall performance improvements)

The nature of the git branches convention that we adopt allows us to identify quickly:

- The developer
- Nature of the task
- Issue (or Task) id.
- And the overall goal of the branch (short description).

## *feature/#idTask-short-description*

Suppose that developer Sagar Jaglan, having Github username *imsagar, is in charge of developing the sign-up process assigned to him by the task with **id pheon-10*. The branch created will use the following name:
### “(feature/bug/update/....)/#pheon-10: Fixed 400 error response code in the signup process” 
Write a short note to describe the feature bug of the branch.

# *Branch Hierarchy*

Now that we have defined a naming convention, we should also identify the branches' hierarchy. We should identify at least two (or tree) branches:

- *Main:* contains code deployed and available online to final users
- *Testing (staging):* contains code deployed to the testing environment (pre-release)
- *Develop:* includes the latest version of the codebase available as starting point to the developer.

the flow of pull requests will be 
- feature -> dev -> testing -> master

# *Code quality checks*

Linters allow analysing of the overall quality code, indicating naming convention errors, duplicated code, and not-used imports (which overall may have a minimum impact on product performances).

## *Testing coverage analysis & minimum coverage policy*

Test your code, automate testing to avoid regression and know at any time:

- What is currently covered by automated testing or not
- Current coverage percentage.
- 
## Getting Started

First, run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Publish Branch
Before publishing the branch always use the following command :
```bash
npm run build
```
This will help you to identify all the production errors in advance and after correcting them you can publish the branch.
Then, create a pull request to feature branch -> dev branch and assign a reviewer.

## 
