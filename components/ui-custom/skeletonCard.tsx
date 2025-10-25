 const SkeletonCard = () => {
  return(
    <div className="bg-white rounded-2xl overflow-hidden shadow-lg">
      <div className="animate-pulse">
        <div className="h-64 bg-linear-to-br from-slate-200 to-slate-300"></div>
        <div className="p-6 space-y-4">
          <div className="h-4 bg-slate-200 rounded w-1/4"></div>
          <div className="h-6 bg-slate-200 rounded w-3/4"></div>
          <div className="h-4 bg-slate-200 rounded w-full"></div>
          <div className="h-4 bg-slate-200 rounded w-2/3"></div>
          <div className="flex justify-between items-center pt-2">
            <div className="h-8 bg-slate-200 rounded w-20"></div>
            <div className="h-10 bg-slate-200 rounded-full w-24"></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SkeletonCard;