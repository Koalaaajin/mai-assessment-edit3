/**
 * @vitest-environment jsdom
 */

import React from 'react';
import { render, screen } from '@testing-library/react';
import { test, expect, vi } from 'vitest';

vi.mock('react-chartjs-2', () => ({ Bar: () => null }));
vi.mock('file-saver', () => ({ saveAs: vi.fn() }));
vi.mock('papaparse', () => ({ unparse: vi.fn() }));
vi.mock('chart.js', () => ({
  Chart: { register: vi.fn() },
  CategoryScale: {},
  LinearScale: {},
  BarElement: {},
  Title: {},
  Tooltip: {},
  Legend: {},
}));

import MAIForm from '../src/MAIForm.jsx';

test('renders the first question', () => {
  render(<MAIForm />);
  expect(screen.getByText(/I ask myself periodically if I am meeting my goals./i)).toBeTruthy();
});
