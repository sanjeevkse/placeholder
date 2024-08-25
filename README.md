# Placeholder Component

This is a React component that renders a placeholder image with customizable dimensions and text.

## Installation

To use this component in your React project, you can install it via npm:

```bash
npm install placeholder-component
```

## Usage

Import the `Placeholder` component and use it in your code:

```jsx
import React from "react";
import Placeholder from "placeholder-component";

const App = () => {
  return (
    <div>
      <h1>My App</h1>
      <Placeholder width={200} height={200} text="Custom Text" />
    </div>
  );
};

export default App;
```

## Props

The `Placeholder` component accepts the following props:

|

| Prop         | Type   | Description                                        | Default Value |
| ------------ | ------ | -------------------------------------------------- | ------------- |
| `width`      | number | The width of the placeholder image.                | 50            |
| `height`     | number | The height of the placeholder image.               | 50            |
| `text`       | string | The text to be displayed on the placeholder image. | Dimensions    |
| `background` | string | The background color of the placeholder image.     | "#ccc"        |
| `textColor`  | string | The color of the text on the placeholder image.    | "#666"        |

## Example

Here's an example of using the `Placeholder` component with custom dimensions and text:

```jsx
import React from "react";
import Placeholder from "./Placeholder";

const Example: React.FC = () => {
  return (
    <div>
      <Placeholder
        width={200}
        height={100}
        text="200x100"
        background="#f0f0f0"
        textColor="#000"
      />
      <Placeholder
        width={150}
        height={150}
        background="#e0e0e0"
        textColor="#ff0000"
      />
      <Placeholder
        width={300}
        height={200}
        text="Custom Text"
        background="#bada55"
        textColor="#ffffff"
      />
    </div>
  );
};

export default Example;
```
