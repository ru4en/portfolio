# Ruben's Portfolio

This is the source code for my portfolio website hosted at [rubenlopes.uk](https://rubenlopes.uk).

## About This Site

### Tech Stack
This site was built using **React**, with a lot of the styling done using **Tailwind CSS**. Everything – including the blog – is statically generated and hosted on **GitHub Pages**.

### Features
- **Blog Generator**: The blog generator reads markdown files from the `public/blogs` folder and generates the corresponding blog pages.
- **Terminal Component**: A custom terminal emulator on the homepage with a few commands you can run for fun. It’s a bit of a gimmick, but I thought it was a cool addition!
- **Background Component**: Generates a random icon and places it at a 45-degree angle on the page. These icons are selected from **Font Awesome**, **Devicons**, or **Material Icons**.
- **Automated Workflow**: This repo includes a GitHub Actions workflow that not only builds and deploys the site but also generates my CV from a LaTeX file and deploys it. I’m pretty happy with how it turned out – just need to remember to update it once in a while.

### Reflection
While this site may be a bit over-engineered for a personal portfolio, it has been an incredible helpful for me at learning React and TypeScript. I hope you enjoy browsing the site and find something useful here. I’ll try to keep the blog updated with new stuff I learn and do.

---

## How to Run Locally
1. Clone the repository:
   ```bash
   git clone git@github.com:ru4en/portfolio.git
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the development server:
   ```bash
   npm run dev
   ```
4. Open your browser and navigate to `http://localhost:3000`.

---

## License

This project is licensed under the [MIT License](LICENSE).