# MPhil Education Portfolio

A professional, static portfolio website designed for a candidate pursuing an MPhil in Education with a focus on Early Childhood Development (ECD).

## Features

- **Responsive Design:** Looks great on mobile, tablet, and desktop devices.
- **Accessible:** Semantic HTML5, ARIA labels, and keyboard-navigable gallery.
- **Photo Gallery:** Simple JavaScript-based lightbox gallery for showcasing practical work.
- **Clean Architecture:** Vanilla HTML, CSS, and JS with no complex build tools required for Phase 1.

## File Structure

```text
portfolio/
│
├── index.html          # Main HTML entry point containing all sections
├── css/
│   └── styles.css      # Custom styling, CSS variables, and layout
├── js/
│   └── main.js         # Interactivity (mobile menu, gallery lightbox)
├── assets/
│   └── images/         # Directory for all images (profile, gallery)
└── README.md           # Instructions
```

## How to Run Locally

Since this is a static site scaffold, you don't need a complex server environment. You can use any lightweight local web server to run it.

### Option 1: Using VS Code Live Server (Recommended)
1. Open the `portfolio` folder in Visual Studio Code.
2. Install the **Live Server** extension by Ritwick Dey.
3. Right-click on `index.html` and select **"Open with Live Server"**.
4. The site will open in your default browser and auto-reload when you make changes.

### Option 2: Using Python
If you have Python installed, you can start a simple server from the command line:
1. Open your terminal (or PowerShell).
2. Navigate to the `portfolio` directory: `cd path/to/portfolio`
3. Run the following command:
   - For Python 3: `python -m http.server 8000`
4. Open your browser and go to `http://localhost:8000`.

### Option 3: Using Node.js (http-server)
If you have Node.js installed:
1. Run `npx http-server` in the `portfolio` directory.
2. Open your browser to the URL provided in the terminal.

## Adding Photos and Editing Content (Admin Panel)

We have included a completely local, user-friendly **Admin Panel** that runs directly in your browser without needing any backend software!

1. Open `admin.html` in a modern browser (like Google Chrome or Microsoft Edge).
2. Click the **"Connect to Portfolio Folder"** button.
3. Your browser will prompt you to select a folder. Select the `portfolio` folder itself.
4. Your browser will ask for permission to view and save files. Click "Save Changes" or "Allow".
5. The Admin Panel will appear! From here, you can:
   - Edit the text on your Hero section.
   - Upload new photos directly from your computer into the Gallery.
   - Delete existing photos.

All changes are saved instantly to `js/data.js` and `assets/images/`.

## Deployment Instructions

This static site can be easily deployed for free using services like GitHub Pages or Netlify.

### Deploying via Netlify (Easiest)
1. Go to [Netlify Drop](https://app.netlify.com/drop).
2. Drag and drop the entire `portfolio` folder onto the page.
3. Netlify will deploy the site and provide you with a live URL.

### Deploying via GitHub Pages
1. Initialize a Git repository in the `portfolio` folder: `git init`
2. Commit your files: `git add .` and `git commit -m "Initial commit"`
3. Create a new repository on GitHub and push your local repository to it.
4. In your GitHub repository settings, go to **Pages**.
5. Select the `main` branch as the source and click **Save**.
6. Your site will be published at `https://yourusername.github.io/your-repo-name/`.

## Phase 2 Enhancements (Future Ideas)
- Add a downloadable PDF version of your CV.
- Integrate a simple CMS (like Decap CMS) to manage gallery photos without editing JavaScript.
- Implement a functional contact form using a service like Formspree or Netlify Forms.
