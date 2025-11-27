md
# Anne Frank: Unveiled Legacy

A project dedicated to preserving and sharing the legacy of Anne Frank.

## Key Features & Benefits

*   **Comprehensive Biography:** Explore Anne Frank's life, from her early years to her tragic fate.
*   **Diary Excerpts:** Gain insights into her thoughts, feelings, and experiences through selected entries from her diary.
*   **Secret Annex Exploration:** Learn about the hidden annex where Anne and her family sought refuge during World War II.
*   **Resource Section:** Discover additional materials, including historical documents, photographs, and educational resources.
*   **Modern Web Technologies:** Built using JavaScript, TypeScript, and Node.js for a responsive and engaging user experience.

## Prerequisites & Dependencies

Before you begin, ensure you have the following installed:

*   **Node.js:** [https://nodejs.org/](https://nodejs.org/) (version >= 16 recommended)
*   **npm** (Node Package Manager):  Usually comes with Node.js installation.
*   **bun:** A fast all-in-one JavaScript runtime. [https://bun.sh/](https://bun.sh/)

## Installation & Setup Instructions

Follow these steps to get the project up and running:

1.  **Clone the repository:**

    ```bash
    git clone https://github.com/AloisioMagalhaes/anne-frank-unveiled-legacy.git
    cd anne-frank-unveiled-legacy
    ```

2.  **Install dependencies using bun:**

    ```bash
    bun install
    ```
    or

    **Install dependencies using npm:**

    ```bash
    npm install
    ```

3.  **Start the development server:**

    ```bash
    bun dev
    ```
    or

    ```bash
    npm run dev
    ```

4.  **Open your browser:**

    Navigate to `http://localhost:5173` (or the address provided by the development server).

## Project Structure

```
├── .gitignore              # Specifies intentionally untracked files that Git should ignore
├── README.md               # This file!
├── biography.html          # HTML file for Anne Frank's biography
├── bun.lockb               # Records the exact versions of dependencies for bun
├── components.json         # Configuration file for UI components
├── diary.html              # HTML file for Anne Frank's Diary
├── eslint.config.js        # Configuration file for ESLint (JavaScript linter)
├── index.html              # Main HTML entry point
├── package-lock.json       # Records the exact versions of dependencies (npm)
├── package.json            # Lists project dependencies and scripts
├── postcss.config.js       # Configuration file for PostCSS (CSS transformer)
└── public/                 # Contains static assets
│   ├── favicon.ico         # Favicon for the website
│   ├── placeholder.svg     # Placeholder image
│   ├── robots.txt          # Instructions for web crawlers
├── resources.html          # HTML file for resources
├── script.js               # Javascript file
├── secret-annex.html       # HTML file for Secret Annex
└── src/                    # Contains source files
    └── App.css             # CSS styles for the App component
```

## Configuration Options

This project leverages environment variables for configuration. Create a `.env` file in the root directory to override default settings (if needed).

*   Example:
    ```
    API_ENDPOINT=https://example.com/api
    ```

## Contributing Guidelines

We welcome contributions! If you'd like to contribute to this project, please follow these guidelines:

1.  Fork the repository.
2.  Create a new branch for your feature or bug fix.
3.  Make your changes and commit them with clear, concise messages.
4.  Submit a pull request to the `main` branch.

Please ensure your code adheres to the project's coding standards and includes appropriate tests.

## License Information

This project is open-source and available under the [MIT License](LICENSE) (if a license file is present, otherwise specify the license details here).
If you would like to contribute please reach out to the owner.

## Acknowledgments

*   Special thanks to [Lovable](https://lovable.dev) for providing the initial project scaffolding.
*   We acknowledge and appreciate the historical sources and materials used in this project.
