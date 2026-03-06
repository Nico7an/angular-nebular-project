# Angular Nebular Magazine Project

A modern magazine-style web application built with Angular 21 and the Nebular theme system.

## 🚀 Features

- **Angular 21+**: Leveraging the latest features including Standalone Components and Signals.
- **Nebular UI**: Full integration with `@nebular/theme` for a professional look and feel.
- **Dynamic Layout**: A magazine-style article view with headers, footers, and interactive components.
- **Shared State Management**: Global settings (Dark Mode, Sticky headers) managed via a centralized `SettingsService` using Angular Signals.
- **Interactive Sidebar**: A standalone configuration panel for real-time application adjustments.
- **Responsive Sticky Components**: Intelligent sticky behavior for headers, alerts, and informational cards that respect the page layout.

## 🛠️ Tech Stack

- **Framework**: Angular 21
- **UI Library**: Nebular (@nebular/theme)
- **Icons**: Nebular Eva Icons
- **Styling**: SCSS / CSS-in-JS (Angular Styles)
- **State**: Angular Signals

## 📦 Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/Nico7an/angular-nebular-project.git
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm start
   ```

4. Open your browser at `http://localhost:4200`

## 🏗️ Architecture

- **`src/app/core`**: Contains global services like `SettingsService`.
- **`src/app/home`**: Main magazine view with the article content and `ArticleInfoComponent`.
- **`src/app/sidenav`**: Standalone configuration sidebar.
- **`src/app/app.ts`**: Root component managing the global flex layout.

## 📄 License

This project is open-source and available under the MIT License.
