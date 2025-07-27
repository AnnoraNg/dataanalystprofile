
import { skeleton } from '../../utils';

const AboutCard = ({ loading }: { loading: boolean }) => {
  const renderSkeleton = () => (
    <div className="space-y-2">
      {Array(3)
        .fill(null)
        .map((_, i) => (
          <div key={i}>
            {skeleton({ widthCls: 'w-10/12', heightCls: 'h-4', className: 'mb-2' })}
          </div>
        ))}
    </div>
  );

  return (
  <div className="col-span-1 lg:col-span-2">
    <div className="card bg-base-200 shadow-xl border border-base-300">
      <div className="card-body p-8">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-8">
          <div className="min-w-0 flex-1">
            <h3 className="text-base sm:text-lg font-bold text-base-content truncate">
              {loading
                ? skeleton({ widthCls: 'w-48', heightCls: 'h-8' })
                : 'About Me'}
            </h3>
          </div>
        </div>
        <div className="text-base-content text-sm leading-relaxed">
          {loading ? renderSkeleton() : (
            <>
              I'm a marketing and data analyst with experience in digital campaigns and analytics projects.
              I enjoy solving problems with data, turning user behavior into insights, and working across
              teams to drive meaningful outcomes. I'm especially drawn to roles that blend creativity, strategy,
              and data analysis. I enjoy bringing structure to messy problems and constantly learning from data, people, and patterns.
            </>
          )}
        </div>
      </div>
    </div>
  </div>

);
};
export default AboutCard;
