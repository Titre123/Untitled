import React from 'react';

function Button(props) {
  const buttonVariant = props.buttonVariant;
  const buttonStyle = {};

  switch (buttonVariant.hierarchy) {
    case 'Primary':
      buttonStyle.backgroundColor = 'bg-primary-600';
      buttonStyle.textColor = 'text-white';
      buttonStyle.borderColor = 'border-primary-600';
      buttonStyle.border = 'border';
      buttonStyle.borderRadius = 'rounded-lg';
      buttonStyle.padding = 'py-3 px-4';
      buttonStyle.hover = 'hover:bg-primary-700'
      break;
    case 'Secondary gray':
      buttonStyle.backgroundColor = 'bg-white';
      buttonStyle.textColor = 'text-gray-700';
      buttonStyle.borderColor = 'border-gray-300';
      buttonStyle.border = 'border';
      buttonStyle.borderRadius = 'rounded-lg';
      buttonStyle.padding = 'py-3 px-4';
      break;
    case 'Link color':
      buttonStyle.backgroundColor = 'bg-white';
      buttonStyle.textColor = 'text-primary-700';
      break;
    // Add more cases for other hierarchy options
    default:
      buttonStyle.backgroundColor = 'bg-gray-500';
      buttonStyle.textColor = 'text-black';
      buttonStyle.borderColor = 'border-gray-500';
  }

  switch (buttonVariant.state) {
    case 'disabled':
      buttonStyle.opacity = 'opacity-50';
      buttonStyle.cursor = 'cursor-not-allowed';
      break;
    // Add more cases for other state options
    default:
      // No additional styles for default state
  }

  switch (buttonVariant.icon) {
    case true:
      buttonStyle.gap = 'space-x-2';
      break;
    case false:
      buttonStyle.gap = 'space-x-0';
      break;
    // Add more cases for other icon options
    default:
      buttonStyle.gap = 'space-x-1'; // Default gap value
  }

  const buttonStyleString = Object.entries(buttonStyle)
    .map(([key, value]) => `${value}`)
    .join(' ');

  return (
    <button className='flex items-center space-x-1'>
      {props.buttonVariant.size === 'lg' && <button type={props.buttonVariant.state} className={`font-600 text-base ${buttonStyleString}`}>
        {props.value}
      </button>
      }
      {props.buttonVariant.size !== 'lg' && <button type={props.buttonVariant.state} className={`font-600 text-base w-full leading-7 desktop:text-md desktop:w-auto ${buttonStyleString}`}>
        {props.value}
      </button>}
      {props.buttonVariant.icon && props.icon}
    </button>
  );
}

export default Button;
