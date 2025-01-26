import styled from 'styled-components';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const StyledToast = styled(ToastContainer)`
  /* Base Container Styling */
  .Toastify__toast-container {
    padding: 16px;
    width: 320px;
    max-width: 90vw;
    z-index: 9999;
    position: fixed;
    right: 16px;
    top: 16px;
  }

  /* Toast Base Styling */
  .Toastify__toast {
    background: rgba(255, 255, 255, 0.5);
    backdrop-filter: blur(2px) saturate(200%);
    -webkit-backdrop-filter: blur(2px) saturate(200%);
    color: #1f2937;
    border-radius: 16px;
    padding: 16px;
    border: 1px solid rgba(209, 213, 219, 0.4);
    box-shadow:
      0 4px 6px -1px rgba(0, 0, 0, 0.1),
      0 2px 4px -1px rgba(0, 0, 0, 0.06),
      0 0 0 1px rgba(255, 255, 255, 0.2) inset;
    font-family: inherit;
    transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 0);
    transform: translateZ(0);
    will-change: transform, opacity;
    margin-bottom: 12px;
    overflow: hidden;
    position: relative;

    &:hover {
      transform: translateY(-4px);
      box-shadow:
        0 12px 16px -4px rgba(0, 0, 0, 0.15),
        0 4px 6px -2px rgba(0, 0, 0, 0.1),
        0 0 0 1px rgba(255, 255, 255, 0.3) inset;
    }

    /* Dark Mode Styling */
    @media (prefers-color-scheme: dark) {
      background: rgba(17, 25, 40, 0.45);
      backdrop-filter: blur(20px) saturate(200%);
      -webkit-backdrop-filter: blur(20px) saturate(200%);
      border-color: rgba(255, 255, 255, 0.1);
      color: #ffffff;
      box-shadow:
        0 4px 6px -1px rgba(0, 0, 0, 0.2),
        0 2px 4px -1px rgba(0, 0, 0, 0.1),
        0 0 0 1px rgba(255, 255, 255, 0.05) inset;
    }
  }

  /* RTL Support */
  .Toastify__toast--rtl {
    direction: rtl;
    text-align: right;
  }

  /* Toast Icon Styling */
  .Toastify__toast-icon {
    margin-inline-end: 12px;
    display: flex;
    align-items: center;
    opacity: 0.8;
    transition: opacity 0.3s ease;

    svg {
      width: 24px;
      height: 24px;
    }
  }

  /* Themed Toasts */
  .Toastify__toast-theme--dark {
    background: rgba(17, 25, 40, 0.75);
    color: #ffffff;
  }

  /* Colored Toast Variants */
  .Toastify__toast-theme--colored {
    &.Toastify__toast--info { 
      background: rgba(59, 130, 246, 0.9);
      color: white;
    }
    &.Toastify__toast--success { 
      background: rgba(16, 185, 129, 0.9);
      color: white;
    }
    &.Toastify__toast--warning { 
      background: rgba(245, 158, 11, 0.9);
      color: white;
    }
    &.Toastify__toast--error { 
      background: rgba(239, 68, 68, 0.9);
      color: white;
    }
  }

  /* Progress Bar Styling */
  .Toastify__progress-bar {
    background: linear-gradient(
      to right,
      rgba(16, 185, 129, 0.7),
      rgba(5, 150, 105, 0.9)
    );
    height: 4px;
    border-radius: 0 0 16px 16px;
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    transition: all 0.3s ease;

    &--rtl {
      direction: rtl;
    }
  }

  /* Close Button Styling */
  .Toastify__close-button {
    color: currentColor;
    opacity: 0.6;
    padding: 4px;
    position: absolute;
    top: 8px;
    right: 8px;
    transition: all 0.2s ease;
    background: transparent;
    border: none;
    border-radius: 50%;

    &:hover {
      opacity: 1;
      transform: scale(1.1);
      background: rgba(0,0,0,0.1);
    }

    > svg {
      width: 16px;
      height: 16px;
    }
  }

  /* Additional Animations */
  .Toastify__toast--enter {
    animation: slide-in 0.5s cubic-bezier(0.68, -0.55, 0.265, 1.55);
  }

  .Toastify__toast--exit {
    animation: slide-out 0.5s cubic-bezier(0.68, -0.55, 0.265, 1.55);
  }

  @keyframes slide-in {
    0% {
      opacity: 0;
      transform: translateX(100%);
    }
    100% {
      opacity: 1;
      transform: translateX(0);
    }
  }

  @keyframes slide-out {
    0% {
      opacity: 1;
      transform: translateX(0);
    }
    100% {
      opacity: 0;
      transform: translateX(100%);
    }
  }

  /* Responsive Adjustments */
  @media (max-width: 480px) {
    .Toastify__toast-container {
      width: calc(100% - 32px);
      right: 16px;
      left: 16px;
    }
  }
`;

export default StyledToast;