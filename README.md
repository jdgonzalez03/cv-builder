# CV Builder

A modern, interactive CV/resume builder built with React and TypeScript. Create professional CVs with real-time preview and PDF export functionality.

## Features

- **Real-time Preview**: See your CV update as you type
- **PDF Export**: Download your CV as a PDF file
- **Modern UI**: Clean interface built with Tailwind CSS
- **TypeScript**: Full type safety for better development experience
- **State Management**: Redux Toolkit for efficient state handling

## Specifications

### Core Sections
- Personal Information
- Contact Details
- Professional Summary
- Work Experience
- Skills
- Education
- Languages

### Technical Stack
- **Frontend**: React 19.2.0 with TypeScript
- **Build Tool**: Vite 7.2.4
- **Styling**: Tailwind CSS 4.1.18
- **State Management**: Redux Toolkit 2.11.2
- **PDF Export**: html2pdf.js & html2canvas-pro


## Installation

1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   ```

## Usage

### Development
```bash
npm run dev
```

### Build
```bash
npm run build
```


## Configuration

The application uses environment variables for configuration:

- `VITE_CV_ID_ELEMENT`: The DOM element ID for PDF export

## Proposal

### Future Enhancements
- **Templates**: Multiple CV templates to choose from
- **Projects**: Add Projects section
- **Cloud Storage**: Save and load CVs from cloud storage
- **Dark Mode**: Toggle between light and dark themes
- **Editor Modes**: Toggle between editor modes (JSON or YAML)
- **Mobile App**: Native mobile applications
- **AI Integration**: AI-powered content suggestions


## License

This project is licensed under the MIT License.
