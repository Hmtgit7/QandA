# Dynamic Question Form Builder

Live Demo: [Brain Clean Form Builder](https://brainclean.netlify.app/)

A React-based dynamic form builder that allows users to create custom questions with various answer types. Built with React and Tailwind CSS, this project demonstrates modern form handling and dynamic UI generation.

![Form Builder Screenshot](assets/image.png)

## Features

- **Dynamic Answer Types**:
  - Text Input
  - Text Area
  - Number Input
  - Dropdown Select
  - Radio Buttons
  - Checkboxes
  - Slider Input

- **Custom Options for Each Type**:
  - Placeholder text
  - Minimum and maximum values
  - Step values for number inputs
  - Row count for text areas
  - Dynamic option addition/removal

- **Real-time Preview**:
  - Instant visual feedback
  - Dynamic form field generation
  - Option management interface

- **User Interface**:
  - Clean and modern design
  - Responsive layout
  - Success notifications
  - Intuitive navigation

## Quick Start

1. Clone the repository:
```bash
git clone https://github.com/Hmtgit7/qanda
```

2. Install dependencies:
```bash
npm install
```

5. Run the development server:
```bash
npm run dev
```

## Project Structure

```
src/
├── App.jsx        # Main application component
└── Form.jsx       # Form builder component
```

## Dependencies

- React
- Tailwind CSS
- Lucide React (for icons)

## Component Features

### Form Builder
- Dynamic form field generation based on selected answer type
- Custom validation for each field type
- Real-time form state management
- Success notification system
- Clean and intuitive user interface

### Answer Types
Each answer type provides specific functionality:

1. **Text/TextArea**
   - Basic text input
   - Configurable rows for text areas

2. **Number/Slider**
   - Min/Max value constraints
   - Step value configuration
   - Numeric validation

3. **Select/Radio/Checkbox**
   - Dynamic option management
   - Add/Remove functionality
   - Custom placeholder text

## Contributing

1. Fork the repository
2. Create your feature branch
3. Commit your changes
4. Push to the branch
5. Open a Pull Request

## License

MIT License - feel free to use this project for your own purposes.

## Contact

For any queries or support, please create an issue in the repository.

---

Made with ❤️ by Hmtgit7