# Reusable Button Component

A customizable, reusable button component for React applications, designed with flexibility and ease of use in mind. This button supports icons from lucide-react, Tailwind CSS for styling, and includes a built-in loading state with optional spinner and custom loading text. Perfect for creating consistent, modern UI buttons across your project.

## Features

- **Customizable Styling**: Use Tailwind CSS classes to style the button as needed.
- **Icon Support**: Add icons from lucide-react (required for icons).
- **Flexible Content**: Use text alone, icon alone, or both as the button label.
- **Loading State**: Display a loading spinner and custom loading text during async operations.
- **Size Variants**: Choose from small, medium, or large sizes.
- **Disabled State**: Built-in support for disabled buttons with visual feedback.
- **Responsive and Accessible**: Smooth transitions and proper disabled state handling.

## Installation

Install the button component and its dependency (lucide-react) via npm:

```bash
npm install sassy-button lucide-react
```

## Prerequisites

- **React**: Ensure you have React installed in your project.
- **Tailwind CSS**: This component relies on Tailwind CSS for styling. Make sure Tailwind is set up in your project. [Learn how to set up Tailwind CSS](https://tailwindcss.com/docs/installation).
- **lucide-react**: Required for icon support. Install it as shown above.

## Usage

Import the Button component and use it in your React application. Below are examples demonstrating different configurations.

### Basic Button with Text

```javascript
import { Button } from 'sassy-button';

function App() {
  return (
    <Button
      label="Click Me"
      onClick={() => alert('Button clicked!')}
      className="bg-blue-500 text-white hover:bg-blue-600"
    />
  );
}
```

### Button with Icon and Text

```javascript
import { Button } from 'sassy-button';
import { Star } from 'lucide-react';

function App() {
  return (
    <Button
      label="Favorite"
      icon={<Star size={16} />}
      onClick={() => alert('Added to favorites!')}
      className="bg-yellow-500 text-white hover:bg-yellow-600"
    />
  );
}
```

### Icon-Only Button

```javascript
import { Button } from 'sassy-button';
import { Trash } from 'lucide-react';

function App() {
  return (
    <Button
      icon={<Trash size={16} />}
      onClick={() => alert('Item deleted!')}
      className="bg-red-500 text-white hover:bg-red-600"
      size="small"
    />
  );
}
```

### Button with Loading State

```javascript
import { useState } from 'react';
import { Button } from 'sassy-button';
import { Send } from 'lucide-react';

function App() {
  const [isLoading, setIsLoading] = useState(false);

  const handleClick = () => {
    setIsLoading(true);
    setTimeout(() => setIsLoading(false), 2000); // Simulate API call
  };

  return (
    <Button
      label="Submit"
      icon={<Send size={16} />}
      loading={isLoading}
      loadingMessage="Submitting..."
      showSpinner={true}
      onClick={handleClick}
      className="bg-green-500 text-white hover:bg-green-600"
      loadingClassName="bg-green-700"
    />
  );
}
```

## Props

| **Prop**          | **Type**   | **Default**        | **Description**                                                             |
|-------------------|------------|--------------------|-----------------------------------------------------------------------------|
| `label`           | string     | undefined          | The text label for the button. Optional if using an icon-only button.      |
| `icon`            | ReactNode  | undefined          | An icon from lucide-react. Optional.                                       |
| `loading`         | boolean    | false              | Whether the button is in a loading state.                                  |
| `loadingMessage`  | string     | "Loading..."       | Text to display during the loading state.                                  |
| `showSpinner`     | boolean    | false              | Whether to show a spinner during the loading state.                        |
| `loaderIcon`      | ReactNode  | `<Loader size={16} />` | Custom loader icon for the loading state. Must be a lucide-react icon.     |
| `loadingClassName`| string     | ""                 | Tailwind classes to apply during the loading state.                        |
| `onClick`         | function   | undefined          | Click handler for the button. Ignored when loading or disabled.            |
| `size`            | `"small"`, `"medium"`, `"large"` | `"medium"` | Size of the button.                                                        |
| `disabled`        | boolean    | false              | Whether the button is disabled.                                            |
| `className`       | string     | ""                 | Additional Tailwind classes for custom styling.                            |

## Notes

- **Icons**: Only lucide-react icons are supported. Ensure you import the desired icon from lucide-react (e.g., `import { Star } from 'lucide-react'`).
- **Styling**: Use the `className` prop to apply Tailwind CSS classes for colors, borders, etc. The `loadingClassName` prop allows specific styling for the loading state.
- **Size Validation**: If an invalid size prop is provided, the component logs a warning and defaults to medium.
- **Accessibility**: The button includes proper disabled state handling and visual feedback (e.g., opacity and cursor changes).

## Example Project Setup

To use this button in a React project with Tailwind CSS and lucide-react:

1. **Set up Tailwind CSS**: Follow the Tailwind CSS installation guide to add Tailwind to your project.
2. **Install Dependencies**:
   ```bash
   npm install sassy-button lucide-react
   ```
3. **Use the Button**: Create a component and import the button as shown in the examples above.

## Contributing

Contributions are welcome! If you have suggestions, bug reports, or feature requests, please open an issue or submit a pull request on the GitHub repository.

## License

This project is licensed under the MIT License. See the LICENSE file for details.
