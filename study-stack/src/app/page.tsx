'use client';
import { Provider } from 'react-redux';
import { store } from '@/features/course/store';
import Hero from "@/components/marketing/Hero";

export default function Home() {
  return (
  <Provider store={store}>
    <Hero />
  </Provider> 
  );
}
