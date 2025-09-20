import React from "react";

const TaskListNumber = ({ data }) => {
  const cards = [
    {
      title: "New Tasks",
      count: data.taskCount.new,
      icon: "📝",
      gradient: "from-purple-500 to-purple-600",
      bgGlow: "bg-purple-500/10",
      shadowColor: "shadow-purple-500/20"
    },
    {
      title: "Completed",
      count: data.taskCount.completed,
      icon: "✅",
      gradient: "from-emerald-500 to-teal-600",
      bgGlow: "bg-emerald-500/10",
      shadowColor: "shadow-emerald-500/20"
    },
    {
      title: "In Progress",
      count: data.taskCount.active,
      icon: "⚡",
      gradient: "from-blue-500 to-indigo-600",
      bgGlow: "bg-blue-500/10",
      shadowColor: "shadow-blue-500/20"
    },
    {
      title: "Failed",
      count: data.taskCount.failed,
      icon: "❌",
      gradient: "from-orange-500 to-red-600",
      bgGlow: "bg-orange-500/10",
      shadowColor: "shadow-orange-500/20"
    }
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
      {cards.map((card, index) => (
        <div 
          key={index}
          className={`relative bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-6 transition-all duration-300 hover:bg-white/10 hover:scale-105 hover:${card.shadowColor} hover:shadow-xl group cursor-pointer`}
        >
          {/* Glow effect */}
          <div className={`absolute inset-0 ${card.bgGlow} rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-xl`}></div>
          
          <div className="relative z-10">
            {/* Icon and Count */}
            <div className="flex items-center justify-between mb-4">
              <div className={`w-12 h-12 bg-gradient-to-r ${card.gradient} rounded-xl flex items-center justify-center text-xl shadow-lg`}>
                {card.icon}
              </div>
              <div className="text-right">
                <div className="text-3xl font-bold text-white group-hover:scale-110 transition-transform duration-300">
                  {card.count}
                </div>
              </div>
            </div>
            
            {/* Title */}
            <h3 className="text-gray-300 font-medium text-sm group-hover:text-white transition-colors duration-300">
              {card.title}
            </h3>
            
            {/* Progress indicator */}
            <div className="mt-3 w-full bg-white/10 rounded-full h-1">
              <div 
                className={`h-1 bg-gradient-to-r ${card.gradient} rounded-full transition-all duration-500 group-hover:w-full`}
                style={{ width: `${Math.min((card.count / 5) * 100, 100)}%` }}
              />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default TaskListNumber;
