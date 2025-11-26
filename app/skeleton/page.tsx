"use client";

import { useState, useEffect } from "react";
import Navigation from "../components/Navigation";
import ProgressBar from "../components/ProgressBar";

interface SkeletonItem {
  id: string;
  progress: number;
  label: string;
}

export default function SkeletonPage() {
  const [items, setItems] = useState<SkeletonItem[]>([
    { id: "header", progress: 0, label: "Loading Header..." },
    { id: "content1", progress: 0, label: "Loading Content Block 1..." },
    { id: "content2", progress: 0, label: "Loading Content Block 2..." },
    { id: "content3", progress: 0, label: "Loading Content Block 3..." },
    { id: "sidebar", progress: 0, label: "Loading Sidebar..." },
    { id: "footer", progress: 0, label: "Loading Footer..." },
  ]);

  const [overallProgress, setOverallProgress] = useState(0);

  useEffect(() => {
    // Simulate progressive loading
    const intervals = items.map((item, index) => {
      const delay = index * 300; // Stagger the start of each item
      const duration = 2000 + Math.random() * 1000; // Random duration between 2-3 seconds
      
      return setTimeout(() => {
        let currentProgress = 0;
        const increment = 100 / (duration / 50); // Update every 50ms
        
        const progressInterval = setInterval(() => {
          currentProgress += increment;
          if (currentProgress >= 100) {
            currentProgress = 100;
            clearInterval(progressInterval);
          }
          
          setItems((prev) =>
            prev.map((i) =>
              i.id === item.id ? { ...i, progress: currentProgress } : i
            )
          );
        }, 50);
      }, delay);
    });

    return () => {
      intervals.forEach(clearTimeout);
    };
  }, []);

  // Calculate overall progress
  useEffect(() => {
    const total = items.reduce((sum, item) => sum + item.progress, 0);
    const average = total / items.length;
    setOverallProgress(average);
  }, [items]);

  const SkeletonCard = ({ progress, label }: { progress: number; label: string }) => {
    const isLoaded = progress >= 100;
    
    return (
      <div className="border border-gray-800 p-6 bg-[#0a0a0a]">
        <div className="mb-4">
          <ProgressBar value={progress} label={label} />
        </div>
        
        {isLoaded ? (
          <div className="space-y-3 animate-fadeIn">
            <div className="h-4 bg-gray-800 rounded w-3/4"></div>
            <div className="h-4 bg-gray-800 rounded w-full"></div>
            <div className="h-4 bg-gray-800 rounded w-5/6"></div>
            <div className="h-20 bg-gray-800 rounded w-full mt-4"></div>
          </div>
        ) : (
          <div className="space-y-3">
            <div className={`h-4 bg-gray-900 rounded ${progress > 0 ? 'w-3/4' : 'w-0'} transition-all duration-300`}></div>
            <div className={`h-4 bg-gray-900 rounded ${progress > 25 ? 'w-full' : 'w-0'} transition-all duration-300`}></div>
            <div className={`h-4 bg-gray-900 rounded ${progress > 50 ? 'w-5/6' : 'w-0'} transition-all duration-300`}></div>
            <div className={`h-20 bg-gray-900 rounded ${progress > 75 ? 'w-full' : 'w-0'} mt-4 transition-all duration-300`}></div>
          </div>
        )}
      </div>
    );
  };

  const SkeletonLine = ({ progress, width }: { progress: number; width: string }) => {
    return (
      <div className={`h-3 bg-gray-900 rounded ${progress > 0 ? width : 'w-0'} transition-all duration-500`}></div>
    );
  };

  return (
    <main className="min-h-screen bg-background text-white">
      <Navigation />
      <div className="container mx-auto px-4 py-8">
        <div className="mb-12">
          <h1 className="font-mono text-4xl mb-4">Progressive Skeleton Screen</h1>
          <p className="font-mono text-gray-400">
            Demonstrating progressive loading with skeleton placeholders
          </p>
        </div>

        {/* Overall Progress */}
        <div className="border border-gray-800 p-6 bg-[#0a0a0a] mb-8">
          <h2 className="font-mono text-xl mb-4 text-gray-300">Overall Loading Progress</h2>
          <ProgressBar value={overallProgress} label="System Loading" />
        </div>

        {/* Skeleton Cards */}
        <div className="space-y-6 mb-8">
          {items.map((item) => (
            <SkeletonCard key={item.id} progress={item.progress} label={item.label} />
          ))}
        </div>

        {/* Detailed Skeleton Example */}
        <div className="border border-gray-800 p-6 bg-[#0a0a0a] mb-8">
          <h2 className="font-mono text-xl mb-4 text-gray-300">Detailed Skeleton Example</h2>
          <div className="space-y-4">
            {/* Header skeleton */}
            <div>
              <ProgressBar value={items.find(i => i.id === "header")?.progress || 0} label="Header" showPercentage={false} />
              <div className="mt-3 space-y-2">
                <SkeletonLine progress={items.find(i => i.id === "header")?.progress || 0} width="w-1/3" />
                <SkeletonLine progress={items.find(i => i.id === "header")?.progress || 0} width="w-1/2" />
              </div>
            </div>

            {/* Content skeleton */}
            <div>
              <ProgressBar value={items.find(i => i.id === "content1")?.progress || 0} label="Content Section" showPercentage={false} />
              <div className="mt-3 space-y-2">
                <SkeletonLine progress={items.find(i => i.id === "content1")?.progress || 0} width="w-full" />
                <SkeletonLine progress={items.find(i => i.id === "content1")?.progress || 0} width="w-5/6" />
                <SkeletonLine progress={items.find(i => i.id === "content1")?.progress || 0} width="w-4/5" />
                <div className="grid grid-cols-3 gap-4 mt-4">
                  <div className={`h-24 bg-gray-900 rounded ${(items.find(i => i.id === "content1")?.progress || 0) > 50 ? 'w-full' : 'w-0'} transition-all duration-300`}></div>
                  <div className={`h-24 bg-gray-900 rounded ${(items.find(i => i.id === "content1")?.progress || 0) > 60 ? 'w-full' : 'w-0'} transition-all duration-300`}></div>
                  <div className={`h-24 bg-gray-900 rounded ${(items.find(i => i.id === "content1")?.progress || 0) > 70 ? 'w-full' : 'w-0'} transition-all duration-300`}></div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Reset Button */}
        <div className="flex justify-center mt-8">
          <button
            onClick={() => {
              setItems(items.map(item => ({ ...item, progress: 0 })));
              setOverallProgress(0);
              // Trigger reload after a brief delay
              setTimeout(() => {
                window.location.reload();
              }, 100);
            }}
            className="px-6 py-3 bg-black text-white border border-gray-800 font-mono text-sm uppercase tracking-wider hover:bg-gray-950 hover:border-gray-700 transition-colors"
          >
            Reset & Reload
          </button>
        </div>
      </div>
    </main>
  );
}



