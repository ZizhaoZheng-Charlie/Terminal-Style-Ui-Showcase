interface BlogPostProps {
  date: string;
  title: string;
  isPopular?: boolean;
}

export default function BlogPost({ date, title, isPopular = false }: BlogPostProps) {
  return (
    <div className="border-l-2 border-gray-800 pl-4 py-3 hover:border-gray-700 transition-colors">
      <div className="flex items-start space-x-3">
        {isPopular && (
          <span className="font-mono text-xs text-gray-600">[X]</span>
        )}
        <div>
          <p className="font-mono text-sm text-gray-500 mb-1">{date}</p>
          <h3 className="font-mono text-base hover:text-gray-400 transition-colors cursor-pointer">
            {title}
          </h3>
        </div>
      </div>
    </div>
  );
}



